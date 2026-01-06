#!/usr/bin/env python3
"""
Resize federal agency logos to uniform dimensions for the scrolling cards.
All logos will be resized to 120x120 pixels with proper aspect ratio preservation
and centered on a transparent background.
"""

from PIL import Image
import os

# Target size for all logos
TARGET_SIZE = 120

# Input and output directories
INPUT_DIR = "/home/ubuntu/nexdyne-website/client/public/images/federal-logos"
OUTPUT_DIR = "/home/ubuntu/nexdyne-website/client/public/images/federal-logos"

# Logo files to process (including new DoD, DHS, VA)
logos = [
    "hhs-logo.png",
    "doe-logo.png",
    "gsa-logo.png",
    "treasury-logo.png",
    "doj-logo.png",
    "nih-logo.png",
    "dod-logo.png",
    "dhs-logo.jpg",
    "va-logo.jpg"
]

def resize_and_center_logo(input_path, output_path, target_size):
    """
    Resize logo while preserving aspect ratio and center on transparent background.
    """
    # Open the image
    img = Image.open(input_path)
    
    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Calculate the scaling factor to fit within target size
    width, height = img.size
    scale = min(target_size / width, target_size / height)
    
    # Calculate new dimensions
    new_width = int(width * scale)
    new_height = int(height * scale)
    
    # Resize the image with high-quality resampling
    img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # Create a new transparent image of target size
    result = Image.new('RGBA', (target_size, target_size), (0, 0, 0, 0))
    
    # Calculate position to center the resized image
    x = (target_size - new_width) // 2
    y = (target_size - new_height) // 2
    
    # Paste the resized image onto the center
    result.paste(img_resized, (x, y), img_resized)
    
    # Save as PNG (to preserve transparency)
    output_png = output_path.rsplit('.', 1)[0] + '.png'
    result.save(output_png, 'PNG', optimize=True)
    
    print(f"Processed: {os.path.basename(input_path)} -> {os.path.basename(output_png)} ({new_width}x{new_height} centered in {target_size}x{target_size})")
    
    return output_png

def main():
    print(f"Resizing logos to {TARGET_SIZE}x{TARGET_SIZE} pixels...")
    print("-" * 60)
    
    for logo in logos:
        input_path = os.path.join(INPUT_DIR, logo)
        output_path = os.path.join(OUTPUT_DIR, logo)
        
        if os.path.exists(input_path):
            resize_and_center_logo(input_path, output_path, TARGET_SIZE)
        else:
            print(f"Warning: {logo} not found")
    
    print("-" * 60)
    print("Done! All logos resized to uniform dimensions.")

if __name__ == "__main__":
    main()
