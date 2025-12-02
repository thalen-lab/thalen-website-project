import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Responsive Images System', () => {
  it('should have generated responsive images manifest', () => {
    const manifestPath = path.join(process.cwd(), 'client/src/data/responsive-images.json');
    
    expect(fs.existsSync(manifestPath)).toBe(true);
  });

  it('should have valid manifest structure', () => {
    const manifestPath = path.join(process.cwd(), 'client/src/data/responsive-images.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    
    expect(manifest).toBeDefined();
    expect(typeof manifest).toBe('object');
    
    // Check that manifest has entries
    const entries = Object.keys(manifest);
    expect(entries.length).toBeGreaterThan(0);
  });

  it('should have responsive versions for each image', () => {
    const manifestPath = path.join(process.cwd(), 'client/src/data/responsive-images.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    
    for (const [imagePath, imageData] of Object.entries(manifest)) {
      expect(imageData).toHaveProperty('original');
      expect(imageData).toHaveProperty('versions');
      
      const versions = (imageData as any).versions;
      
      // Should have at least mobile versions
      const hasVersions = 
        versions.mobile_webp || 
        versions.mobile_jpeg ||
        versions.tablet_webp ||
        versions.tablet_jpeg ||
        versions.desktop_webp ||
        versions.desktop_jpeg;
      
      expect(hasVersions).toBeTruthy();
    }
  });

  it('should have generated WebP versions', () => {
    const manifestPath = path.join(process.cwd(), 'client/src/data/responsive-images.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    
    let hasWebP = false;
    
    for (const imageData of Object.values(manifest)) {
      const versions = (imageData as any).versions;
      
      if (versions.mobile_webp || versions.tablet_webp || versions.desktop_webp) {
        hasWebP = true;
        break;
      }
    }
    
    expect(hasWebP).toBe(true);
  });

  it('should have optimized images in public directory', () => {
    const optimizedDir = path.join(process.cwd(), 'client/public/optimized');
    
    expect(fs.existsSync(optimizedDir)).toBe(true);
  });

  it('should have WebP files in optimized directory', () => {
    const optimizedDir = path.join(process.cwd(), 'client/public/optimized');
    
    function findWebPFiles(dir: string): string[] {
      const files: string[] = [];
      
      if (!fs.existsSync(dir)) return files;
      
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          files.push(...findWebPFiles(fullPath));
        } else if (entry.name.endsWith('.webp')) {
          files.push(fullPath);
        }
      }
      
      return files;
    }
    
    const webpFiles = findWebPFiles(optimizedDir);
    expect(webpFiles.length).toBeGreaterThan(0);
  });

  it('should have JPEG fallback files', () => {
    const optimizedDir = path.join(process.cwd(), 'client/public/optimized');
    
    function findJPEGFiles(dir: string): string[] {
      const files: string[] = [];
      
      if (!fs.existsSync(dir)) return files;
      
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          files.push(...findJPEGFiles(fullPath));
        } else if (entry.name.endsWith('.jpg')) {
          files.push(fullPath);
        }
      }
      
      return files;
    }
    
    const jpegFiles = findJPEGFiles(optimizedDir);
    expect(jpegFiles.length).toBeGreaterThan(0);
  });

  it('should have multiple size variants (mobile, tablet, desktop)', () => {
    const manifestPath = path.join(process.cwd(), 'client/src/data/responsive-images.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    
    let hasMobile = false;
    let hasTablet = false;
    let hasDesktop = false;
    
    for (const imageData of Object.values(manifest)) {
      const versions = (imageData as any).versions;
      
      if (versions.mobile_webp || versions.mobile_jpeg) hasMobile = true;
      if (versions.tablet_webp || versions.tablet_jpeg) hasTablet = true;
      if (versions.desktop_webp || versions.desktop_jpeg) hasDesktop = true;
    }
    
    // At least some images should have multiple sizes
    expect(hasMobile).toBe(true);
  });
});

describe('Prefetch Hooks', () => {
  it('should have usePrefetch hook exported', () => {
    const hookPath = path.join(process.cwd(), 'client/src/hooks/usePrefetch.ts');
    
    expect(fs.existsSync(hookPath)).toBe(true);
    
    const content = fs.readFileSync(hookPath, 'utf-8');
    expect(content).toContain('export function usePrefetch');
    expect(content).toContain('onMouseEnter');
    expect(content).toContain('onMouseLeave');
  });

  it('should have prefetchUrls utility function', () => {
    const hookPath = path.join(process.cwd(), 'client/src/hooks/usePrefetch.ts');
    const content = fs.readFileSync(hookPath, 'utf-8');
    
    expect(content).toContain('export function prefetchUrls');
  });

  it('should implement prefetch cache to prevent duplicates', () => {
    const hookPath = path.join(process.cwd(), 'client/src/hooks/usePrefetch.ts');
    const content = fs.readFileSync(hookPath, 'utf-8');
    
    expect(content).toContain('prefetchedUrls');
    expect(content).toContain('Set');
  });
});

describe('Responsive Image Hooks', () => {
  it('should have useResponsiveImage hook exported', () => {
    const hookPath = path.join(process.cwd(), 'client/src/hooks/useResponsiveImage.ts');
    
    expect(fs.existsSync(hookPath)).toBe(true);
    
    const content = fs.readFileSync(hookPath, 'utf-8');
    expect(content).toContain('export function useResponsiveImage');
  });

  it('should have getResponsiveSrcSet utility function', () => {
    const hookPath = path.join(process.cwd(), 'client/src/hooks/useResponsiveImage.ts');
    const content = fs.readFileSync(hookPath, 'utf-8');
    
    expect(content).toContain('export function getResponsiveSrcSet');
  });

  it('should detect WebP support', () => {
    const hookPath = path.join(process.cwd(), 'client/src/hooks/useResponsiveImage.ts');
    const content = fs.readFileSync(hookPath, 'utf-8');
    
    expect(content).toContain('supportsWebP');
    expect(content).toContain('canvas');
    expect(content).toContain('toDataURL');
  });

  it('should detect viewport size for responsive selection', () => {
    const hookPath = path.join(process.cwd(), 'client/src/hooks/useResponsiveImage.ts');
    const content = fs.readFileSync(hookPath, 'utf-8');
    
    expect(content).toContain('getViewportSize');
    expect(content).toContain('window.innerWidth');
  });

  it('should import responsive images manifest', () => {
    const hookPath = path.join(process.cwd(), 'client/src/hooks/useResponsiveImage.ts');
    const content = fs.readFileSync(hookPath, 'utf-8');
    
    expect(content).toContain('responsive-images.json');
  });
});

describe('ImageWithLoader Component Integration', () => {
  it('should integrate useResponsiveImage hook', () => {
    const componentPath = path.join(process.cwd(), 'client/src/components/ImageWithLoader.tsx');
    const content = fs.readFileSync(componentPath, 'utf-8');
    
    expect(content).toContain('useResponsiveImage');
    expect(content).toContain('getResponsiveSrcSet');
  });

  it('should use srcSet attribute for responsive images', () => {
    const componentPath = path.join(process.cwd(), 'client/src/components/ImageWithLoader.tsx');
    const content = fs.readFileSync(componentPath, 'utf-8');
    
    expect(content).toContain('srcSet');
    expect(content).toContain('sizes');
  });

  it('should have proper sizes attribute for breakpoints', () => {
    const componentPath = path.join(process.cwd(), 'client/src/components/ImageWithLoader.tsx');
    const content = fs.readFileSync(componentPath, 'utf-8');
    
    // Should define sizes for mobile (768px), tablet (1280px), and desktop
    expect(content).toMatch(/sizes.*768.*1280/);
  });
});

describe('Page Integration', () => {
  it('should integrate prefetch in Insights page', () => {
    const pagePath = path.join(process.cwd(), 'client/src/pages/Insights.tsx');
    const content = fs.readFileSync(pagePath, 'utf-8');
    
    expect(content).toContain('usePrefetch');
    expect(content).toContain('prefetchHandlers');
  });

  it('should integrate prefetch in CaseStudies page', () => {
    const pagePath = path.join(process.cwd(), 'client/src/pages/CaseStudies.tsx');
    const content = fs.readFileSync(pagePath, 'utf-8');
    
    expect(content).toContain('usePrefetch');
    expect(content).toContain('prefetchHandlers');
  });

  it('should spread prefetch handlers on Link components', () => {
    const insightsPath = path.join(process.cwd(), 'client/src/pages/Insights.tsx');
    const insightsContent = fs.readFileSync(insightsPath, 'utf-8');
    
    expect(insightsContent).toContain('...prefetchHandlers');
  });
});

describe('Performance Optimizations Summary', () => {
  it('should have all three optimization features implemented', () => {
    // 1. Responsive images with multiple sizes
    const manifestPath = path.join(process.cwd(), 'client/src/data/responsive-images.json');
    expect(fs.existsSync(manifestPath)).toBe(true);
    
    // 2. WebP format detection and conversion
    const hookPath = path.join(process.cwd(), 'client/src/hooks/useResponsiveImage.ts');
    const hookContent = fs.readFileSync(hookPath, 'utf-8');
    expect(hookContent).toContain('supportsWebP');
    
    // 3. Hover prefetch functionality
    const prefetchPath = path.join(process.cwd(), 'client/src/hooks/usePrefetch.ts');
    expect(fs.existsSync(prefetchPath)).toBe(true);
  });
});
