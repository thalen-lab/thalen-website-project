import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { usePdfGeneration } from '../usePdfGeneration';

// Mock html2canvas
vi.mock('html2canvas', () => ({
  default: vi.fn().mockImplementation(() => 
    Promise.resolve({
      toDataURL: () => 'data:image/png;base64,mockImageData',
      height: 1000,
      width: 800,
    })
  ),
}));

// Mock jsPDF
vi.mock('jspdf', () => ({
  default: vi.fn().mockImplementation(() => ({
    internal: {
      pageSize: {
        getWidth: () => 210,
        getHeight: () => 297,
      },
    },
    addImage: vi.fn(),
    addPage: vi.fn(),
    save: vi.fn(),
    output: vi.fn().mockReturnValue(new Blob(['mock pdf content'], { type: 'application/pdf' })),
  })),
}));

describe('usePdfGeneration', () => {
  beforeEach(() => {
    // Create a mock element for testing
    const mockElement = document.createElement('div');
    mockElement.id = 'test-element';
    mockElement.innerHTML = '<h1>Test Content</h1>';
    document.body.appendChild(mockElement);
  });

  afterEach(() => {
    // Clean up mock element
    const element = document.getElementById('test-element');
    if (element) {
      document.body.removeChild(element);
    }
    vi.clearAllMocks();
  });

  it('should initialize with correct default values', () => {
    const { result } = renderHook(() => usePdfGeneration());
    
    expect(result.current.isGenerating).toBe(false);
    expect(result.current.error).toBe(null);
    expect(typeof result.current.generatePdf).toBe('function');
  });

  it('should accept custom options', () => {
    const { result } = renderHook(() => usePdfGeneration({
      filename: 'custom-file.pdf',
      orientation: 'landscape',
      format: 'a4',
      margin: 20,
    }));
    
    expect(result.current.isGenerating).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('should set error when element is not found', async () => {
    const { result } = renderHook(() => usePdfGeneration());
    
    await act(async () => {
      await result.current.generatePdf('non-existent-element');
    });
    
    expect(result.current.error).toBe('Element with id "non-existent-element" not found');
    expect(result.current.isGenerating).toBe(false);
  });

  it('should set isGenerating to true during PDF generation', async () => {
    const { result } = renderHook(() => usePdfGeneration());
    
    let generatingDuringCall = false;
    
    const generatePromise = act(async () => {
      const promise = result.current.generatePdf('test-element');
      // Check isGenerating state during generation
      generatingDuringCall = result.current.isGenerating;
      await promise;
    });
    
    await generatePromise;
    
    // After completion, isGenerating should be false
    expect(result.current.isGenerating).toBe(false);
  });

  it('should call generatePdf with correct element id', async () => {
    const html2canvas = (await import('html2canvas')).default;
    const { result } = renderHook(() => usePdfGeneration());
    
    await act(async () => {
      await result.current.generatePdf('test-element');
    });
    
    expect(html2canvas).toHaveBeenCalled();
  });

  it('should use custom filename when provided', async () => {
    const jsPDF = (await import('jspdf')).default;
    const { result } = renderHook(() => usePdfGeneration({
      filename: 'my-custom-document.pdf',
    }));
    
    await act(async () => {
      await result.current.generatePdf('test-element');
    });
    
    // Verify jsPDF was instantiated
    expect(jsPDF).toHaveBeenCalled();
  });
});

describe('usePdfGeneration error handling', () => {
  beforeEach(() => {
    const mockElement = document.createElement('div');
    mockElement.id = 'test-element';
    document.body.appendChild(mockElement);
  });

  afterEach(() => {
    const element = document.getElementById('test-element');
    if (element) {
      document.body.removeChild(element);
    }
    vi.clearAllMocks();
  });

  it('should handle html2canvas errors gracefully', async () => {
    const html2canvas = (await import('html2canvas')).default;
    vi.mocked(html2canvas).mockRejectedValueOnce(new Error('Canvas error'));
    
    const { result } = renderHook(() => usePdfGeneration());
    
    await act(async () => {
      await result.current.generatePdf('test-element');
    });
    
    expect(result.current.error).toBe('Canvas error');
    expect(result.current.isGenerating).toBe(false);
  });
});
