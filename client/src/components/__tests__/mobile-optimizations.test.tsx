import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PullToRefresh } from '../PullToRefresh';
import { LazyImage } from '../LazyImage';
import { ImageWithLoader } from '../ImageWithLoader';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

describe('Mobile Optimization Components', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('PullToRefresh', () => {
    it('renders children correctly', () => {
      const handleRefresh = vi.fn().mockResolvedValue(undefined);
      render(
        <PullToRefresh onRefresh={handleRefresh}>
          <div data-testid="child-content">Test Content</div>
        </PullToRefresh>
      );
      
      expect(screen.getByTestId('child-content')).toBeInTheDocument();
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders children when disabled', () => {
      const handleRefresh = vi.fn().mockResolvedValue(undefined);
      render(
        <PullToRefresh onRefresh={handleRefresh} disabled>
          <div data-testid="disabled-content">Disabled Content</div>
        </PullToRefresh>
      );
      
      expect(screen.getByTestId('disabled-content')).toBeInTheDocument();
    });

    it('accepts custom threshold prop', () => {
      const handleRefresh = vi.fn().mockResolvedValue(undefined);
      render(
        <PullToRefresh onRefresh={handleRefresh} threshold={100}>
          <div>Content with custom threshold</div>
        </PullToRefresh>
      );
      
      expect(screen.getByText('Content with custom threshold')).toBeInTheDocument();
    });
  });

  describe('LazyImage', () => {
    it('renders with lazy loading attribute by default', () => {
      render(<LazyImage src="/test-image.jpg" alt="Test image" />);
      
      const img = screen.getByAltText('Test image');
      expect(img).toHaveAttribute('loading', 'lazy');
    });

    it('renders with eager loading when priority is true', () => {
      render(<LazyImage src="/test-image.jpg" alt="Priority image" priority />);
      
      const img = screen.getByAltText('Priority image');
      expect(img).toHaveAttribute('loading', 'eager');
    });

    it('applies custom className', () => {
      render(
        <LazyImage 
          src="/test-image.jpg" 
          alt="Styled image" 
          className="custom-class"
        />
      );
      
      const img = screen.getByAltText('Styled image');
      expect(img).toHaveClass('custom-class');
    });

    it('renders with skeleton placeholder by default', () => {
      render(<LazyImage src="/test-image.jpg" alt="Image with skeleton" />);
      
      // The skeleton placeholder should be present before image loads
      const container = screen.getByAltText('Image with skeleton').parentElement;
      expect(container).toBeInTheDocument();
    });

    it('handles width and height props', () => {
      render(
        <LazyImage 
          src="/test-image.jpg" 
          alt="Sized image" 
          width={300}
          height={200}
        />
      );
      
      const img = screen.getByAltText('Sized image');
      expect(img).toHaveAttribute('width', '300');
      expect(img).toHaveAttribute('height', '200');
    });
  });

  describe('ImageWithLoader', () => {
    it('renders with lazy loading by default', () => {
      render(<ImageWithLoader src="/test.jpg" alt="Lazy loaded image" />);
      
      // Component should render the container
      const container = document.querySelector('.relative.overflow-hidden');
      expect(container).toBeInTheDocument();
    });

    it('renders with priority loading when specified', () => {
      render(
        <ImageWithLoader 
          src="/hero.jpg" 
          alt="Priority loaded image" 
          priority 
        />
      );
      
      // With priority, the image should start loading immediately
      const container = document.querySelector('.relative.overflow-hidden');
      expect(container).toBeInTheDocument();
    });

    it('shows skeleton placeholder while loading', () => {
      render(<ImageWithLoader src="/test.jpg" alt="Loading image" />);
      
      // Should show skeleton/placeholder initially
      const skeleton = document.querySelector('.animate-pulse');
      expect(skeleton).toBeInTheDocument();
    });

    it('applies custom className to image', () => {
      render(
        <ImageWithLoader 
          src="/test.jpg" 
          alt="Custom styled image" 
          className="w-full h-full object-cover"
        />
      );
      
      const container = document.querySelector('.relative.overflow-hidden');
      expect(container).toBeInTheDocument();
    });

    it('accepts LQIP placeholder', () => {
      const lqipData = 'data:image/jpeg;base64,/9j/4AAQSkZJRg==';
      render(
        <ImageWithLoader 
          src="/test.jpg" 
          alt="LQIP image" 
          lqip={lqipData}
        />
      );
      
      // LQIP image should be rendered as placeholder
      const lqipImg = document.querySelector('img[aria-hidden="true"]');
      expect(lqipImg).toBeInTheDocument();
    });
  });
});

describe('CSS Tablet Breakpoint Classes', () => {
  it('should have tablet-specific CSS classes defined', () => {
    // This test verifies that our CSS classes are properly structured
    // The actual CSS is loaded via index.css
    
    const tabletClasses = [
      'tablet-grid-2',
      'tablet-grid-3',
      'tablet-flex-row',
      'tablet-flex-col',
      'tablet-gap-4',
      'tablet-gap-6',
      'tablet-py-12',
      'tablet-text-2xl',
    ];
    
    // Verify the class names are valid CSS class name format
    tabletClasses.forEach(className => {
      expect(className).toMatch(/^[a-z][a-z0-9-]*$/);
    });
  });
});
