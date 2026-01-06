import os
import re

# Define responsive class replacements for common patterns
# These preserve existing styles while adding mobile-first responsive classes

replacements = [
    # Hero sections - improve mobile padding and text sizing
    (r'py-24 md:py-32', 'py-12 sm:py-16 md:py-24 lg:py-32'),
    (r'py-20 md:py-28', 'py-10 sm:py-14 md:py-20 lg:py-28'),
    (r'py-20 md:py-24', 'py-10 sm:py-14 md:py-20 lg:py-24'),
    (r'py-16 md:py-24', 'py-10 sm:py-12 md:py-16 lg:py-24'),
    (r'py-16 md:py-20', 'py-10 sm:py-12 md:py-16 lg:py-20'),
    
    # Text sizing improvements
    (r'text-4xl md:text-5xl lg:text-6xl', 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl'),
    (r'text-3xl md:text-4xl lg:text-5xl', 'text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl'),
    (r'text-3xl md:text-4xl', 'text-xl xs:text-2xl sm:text-3xl md:text-4xl'),
    (r'text-2xl md:text-3xl', 'text-lg xs:text-xl sm:text-2xl md:text-3xl'),
    (r'text-xl md:text-2xl', 'text-base xs:text-lg sm:text-xl md:text-2xl'),
    
    # Grid improvements
    (r'grid md:grid-cols-2 gap-6 lg:gap-8', 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8'),
    (r'grid md:grid-cols-2 lg:grid-cols-4 gap-6', 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6'),
    (r'grid md:grid-cols-2 lg:grid-cols-3 gap-6', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6'),
    (r'grid md:grid-cols-3 gap-6', 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6'),
    
    # Margin bottom improvements
    (r'mb-16(?![0-9])', 'mb-8 sm:mb-12 md:mb-16'),
    (r'mb-12(?![0-9])', 'mb-6 sm:mb-8 md:mb-12'),
    (r'mb-8(?![0-9])', 'mb-4 sm:mb-6 md:mb-8'),
    
    # Padding improvements
    (r'(?<![a-z:])p-8(?![0-9])', 'p-4 sm:p-6 md:p-8'),
    (r'(?<![a-z:])p-6(?![0-9])', 'p-3 sm:p-4 md:p-6'),
    
    # Card content padding
    (r'CardContent className="p-8"', 'CardContent className="p-4 sm:p-6 md:p-8"'),
    (r'CardContent className="p-6"', 'CardContent className="p-3 sm:p-4 md:p-6"'),
    
    # Flex gap improvements
    (r'flex flex-wrap gap-4(?![0-9])', 'flex flex-wrap gap-2 sm:gap-3 md:gap-4'),
    (r'gap-6 lg:gap-8', 'gap-3 sm:gap-4 md:gap-6 lg:gap-8'),
]

# Files to process
pages_dir = '/home/ubuntu/nexdyne-website/client/src/pages'

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content)
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

# Process all tsx files
processed = []
for root, dirs, files in os.walk(pages_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            if process_file(filepath):
                processed.append(filepath)

print(f"Processed {len(processed)} files:")
for f in processed:
    print(f"  - {f}")
