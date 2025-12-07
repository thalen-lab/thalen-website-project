#!/usr/bin/env python3
"""
Generate responsive images in multiple sizes and formats (WebP, AVIF, JPEG)
for optimal performance across different devices and browsers.

This script:
1. Scans all images in client/public/
2. Generates 3 sizes: mobile (640w), tablet (1024w), desktop (1920w)
3. Converts to WebP and AVIF formats with quality optimization
4. Creates a manifest JSON file mapping original paths to responsive versions
5. Preserves original images as fallback

Usage:
    python3 generate_responsive_images.py
"""

import os
import json
from pathlib import Path
from PIL import Image
# AVIF support (optional - requires pillow-avif-plugin)
try:
    import pillow_avif
    AVIF_SUPPORTED = True
except ImportError:
    AVIF_SUPPORTED = False
    print("⚠️  pillow-avif-plugin not installed. AVIF generation will be skipped.")
    print("   Install with: pip install pillow-avif-plugin\n")

# Configuration
PUBLIC_DIR = Path("client/public")
OUTPUT_DIR = PUBLIC_DIR / "optimized"
MANIFEST_PATH = Path("client/src/data/responsive-images.json")

# Responsive breakpoints (width in pixels)
SIZES = {
    "mobile": 640,
    "tablet": 1024,
    "desktop": 1920
}

# Quality settings for each format
QUALITY = {
    "webp": 85,
    "avif": 75,  # AVIF can use lower quality for same visual result
    "jpeg": 85
}

# Image extensions to process
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

def should_process_image(path: Path) -> bool:
    """Check if image should be processed."""
    # Skip if already in optimized directory
    if "optimized" in str(path):
        return False
    
    # Only process supported image formats
    if path.suffix.lower() not in IMAGE_EXTENSIONS:
        return False
    
    # Skip very small images (likely icons/logos)
    try:
        with Image.open(path) as img:
            width, height = img.size
            if width < 400 or height < 300:
                return False
    except Exception:
        return False
    
    return True

def generate_responsive_versions(image_path: Path, output_base: Path) -> dict:
    """Generate responsive versions of an image in multiple formats."""
    versions = {}
    
    try:
        with Image.open(image_path) as img:
            # Convert RGBA to RGB for JPEG/AVIF compatibility
            if img.mode in ("RGBA", "LA", "P"):
                background = Image.new("RGB", img.size, (255, 255, 255))
                if img.mode == "P":
                    img = img.convert("RGBA")
                background.paste(img, mask=img.split()[-1] if img.mode in ("RGBA", "LA") else None)
                img = background
            
            original_width, original_height = img.size
            aspect_ratio = original_height / original_width
            
            # Generate each size
            for size_name, target_width in SIZES.items():
                # Skip if original is smaller than target
                if original_width <= target_width:
                    continue
                
                target_height = int(target_width * aspect_ratio)
                resized = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
                
                # Generate WebP
                webp_path = output_base / f"{size_name}.webp"
                webp_path.parent.mkdir(parents=True, exist_ok=True)
                resized.save(webp_path, "WEBP", quality=QUALITY["webp"], method=6)
                versions[f"{size_name}_webp"] = str(webp_path.relative_to(PUBLIC_DIR))
                
                # Generate AVIF (if supported)
                if AVIF_SUPPORTED:
                    avif_path = output_base / f"{size_name}.avif"
                    try:
                        resized.save(avif_path, "AVIF", quality=QUALITY["avif"], speed=4)
                        versions[f"{size_name}_avif"] = str(avif_path.relative_to(PUBLIC_DIR))
                    except Exception as e:
                        print(f"  Warning: Could not generate AVIF for {size_name}: {e}")
                
                # Generate JPEG fallback
                jpeg_path = output_base / f"{size_name}.jpg"
                resized.save(jpeg_path, "JPEG", quality=QUALITY["jpeg"], optimize=True)
                versions[f"{size_name}_jpeg"] = str(jpeg_path.relative_to(PUBLIC_DIR))
                
                # Calculate file sizes
                webp_size = webp_path.stat().st_size / 1024
                jpeg_size = jpeg_path.stat().st_size / 1024
                savings = ((jpeg_size - webp_size) / jpeg_size) * 100
                
                print(f"  {size_name}: WebP {webp_size:.1f}KB vs JPEG {jpeg_size:.1f}KB ({savings:.1f}% smaller)")
    
    except Exception as e:
        print(f"  Error processing {image_path}: {e}")
        return {}
    
    return versions

def main():
    """Main function to generate responsive images."""
    print("🖼️  Generating responsive images in multiple formats...\n")
    
    # Create output directory
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # Find all images
    image_files = []
    for ext in IMAGE_EXTENSIONS:
        image_files.extend(PUBLIC_DIR.rglob(f"*{ext}"))
    
    # Filter images that should be processed
    images_to_process = [img for img in image_files if should_process_image(img)]
    
    print(f"Found {len(images_to_process)} images to process\n")
    
    # Generate responsive versions
    manifest = {}
    
    for i, image_path in enumerate(images_to_process, 1):
        relative_path = str(image_path.relative_to(PUBLIC_DIR))
        print(f"[{i}/{len(images_to_process)}] Processing: {relative_path}")
        
        # Create output directory structure
        output_base = OUTPUT_DIR / image_path.relative_to(PUBLIC_DIR).parent / image_path.stem
        
        # Generate versions
        versions = generate_responsive_versions(image_path, output_base)
        
        if versions:
            manifest[f"/{relative_path}"] = {
                "original": f"/{relative_path}",
                "versions": versions
            }
    
    # Save manifest
    MANIFEST_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(MANIFEST_PATH, "w") as f:
        json.dump(manifest, f, indent=2)
    
    print(f"\n✅ Generated responsive images for {len(manifest)} images")
    print(f"📄 Manifest saved to: {MANIFEST_PATH}")
    print(f"\n💡 Usage: Import useResponsiveImage hook to automatically serve optimal image format and size")

if __name__ == "__main__":
    main()
