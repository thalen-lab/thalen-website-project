#!/usr/bin/env python3
"""
Batch CSS Fix Script for NexDyne Website
Fixes hero sections, background colors, and gradient overlays across all pages
"""

import os
import re
import glob

# Define the project path
PROJECT_PATH = "/home/ubuntu/nexdyne-website/client/src"

# CSS fixes to apply
CSS_FIXES = [
    # Fix 1: Replace slate-950 with navy blue in section backgrounds
    (r'bg-slate-950', 'bg-[#0A2540]'),
    (r'from-slate-950', 'from-[#0A2540]'),
    (r'via-slate-950', 'via-[#0A2540]'),
    (r'to-slate-950', 'to-[#0A2540]'),
    (r'via-slate-900', 'via-[#0A2540]'),
    
    # Fix 2: Ensure proper navy gradient overlays (don't break existing good ones)
    # These are more targeted replacements
    
    # Fix 3: Replace any remaining oklch navy that's too dark
    (r'oklch\(0\.18_0\.06_250\)', '#0A2540'),
    (r'oklch\(0\.15_0\.05_250\)', '#0A2540'),
    
    # Fix 4: Ensure text visibility - white text on dark backgrounds
    # (These are pattern-specific and handled separately)
]

# Files to process
FILE_PATTERNS = [
    f"{PROJECT_PATH}/pages/**/*.tsx",
    f"{PROJECT_PATH}/components/**/*.tsx",
]

def fix_file(filepath):
    """Apply CSS fixes to a single file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes_made = []
        
        for pattern, replacement in CSS_FIXES:
            if re.search(pattern, content):
                content = re.sub(pattern, replacement, content)
                changes_made.append(f"  - {pattern} -> {replacement}")
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, changes_made
        
        return False, []
    except Exception as e:
        return False, [f"Error: {str(e)}"]

def main():
    print("=" * 60)
    print("NexDyne CSS Fix Script")
    print("=" * 60)
    
    all_files = []
    for pattern in FILE_PATTERNS:
        all_files.extend(glob.glob(pattern, recursive=True))
    
    print(f"\nFound {len(all_files)} files to process")
    
    fixed_files = []
    for filepath in all_files:
        fixed, changes = fix_file(filepath)
        if fixed:
            fixed_files.append((filepath, changes))
            print(f"\n✓ Fixed: {filepath.replace(PROJECT_PATH, '')}")
            for change in changes:
                print(change)
    
    print("\n" + "=" * 60)
    print(f"Summary: Fixed {len(fixed_files)} files")
    print("=" * 60)
    
    return len(fixed_files)

if __name__ == "__main__":
    main()
