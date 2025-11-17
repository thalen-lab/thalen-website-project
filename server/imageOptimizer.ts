import sharp from 'sharp';

export interface ImageVariant {
  size: 'thumbnail' | 'medium' | 'large' | 'original';
  width: number;
  height?: number;
  buffer: Buffer;
  format: 'webp' | 'jpeg';
}

export interface OptimizedImages {
  thumbnail: Buffer;
  medium: Buffer;
  large: Buffer;
  original: Buffer;
}

// Image size configurations
const IMAGE_SIZES = {
  thumbnail: { width: 300, height: 300 },
  medium: { width: 800, height: 800 },
  large: { width: 1920, height: 1920 },
};

/**
 * Optimize and resize an image into multiple variants
 * @param imageBuffer - Original image buffer
 * @param options - Optimization options
 * @returns Object containing all image variants
 */
export async function optimizeImage(
  imageBuffer: Buffer,
  options: {
    quality?: number;
    format?: 'webp' | 'jpeg';
  } = {}
): Promise<OptimizedImages> {
  const { quality = 85, format = 'webp' } = options;

  // Process original image (compress but keep original dimensions)
  const originalImage = sharp(imageBuffer);
  const metadata = await originalImage.metadata();
  
  const original = await originalImage
    .toFormat(format, { quality })
    .toBuffer();

  // Generate thumbnail (300x300, cover fit)
  const thumbnail = await sharp(imageBuffer)
    .resize(IMAGE_SIZES.thumbnail.width, IMAGE_SIZES.thumbnail.height, {
      fit: 'cover',
      position: 'center',
    })
    .toFormat(format, { quality })
    .toBuffer();

  // Generate medium size (800x800, inside fit to preserve aspect ratio)
  const medium = await sharp(imageBuffer)
    .resize(IMAGE_SIZES.medium.width, IMAGE_SIZES.medium.height, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .toFormat(format, { quality })
    .toBuffer();

  // Generate large size (1920x1920, inside fit to preserve aspect ratio)
  const large = await sharp(imageBuffer)
    .resize(IMAGE_SIZES.large.width, IMAGE_SIZES.large.height, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .toFormat(format, { quality })
    .toBuffer();

  return {
    thumbnail,
    medium,
    large,
    original,
  };
}

/**
 * Get the file extension for the optimized format
 */
export function getOptimizedExtension(format: 'webp' | 'jpeg' = 'webp'): string {
  return format === 'webp' ? '.webp' : '.jpg';
}

/**
 * Generate variant filenames from original filename
 */
export function generateVariantFilenames(
  originalFilename: string,
  format: 'webp' | 'jpeg' = 'webp'
): Record<keyof OptimizedImages, string> {
  const ext = getOptimizedExtension(format);
  const nameWithoutExt = originalFilename.replace(/\.[^/.]+$/, '');
  const timestamp = Date.now();

  return {
    thumbnail: `${nameWithoutExt}-thumb-${timestamp}${ext}`,
    medium: `${nameWithoutExt}-medium-${timestamp}${ext}`,
    large: `${nameWithoutExt}-large-${timestamp}${ext}`,
    original: `${nameWithoutExt}-original-${timestamp}${ext}`,
  };
}
