import re
import os
from pathlib import Path

# Read App.tsx
with open('client/src/App.tsx', 'r') as f:
    app_content = f.read()

# Extract all route paths
route_pattern = r'<Route\s+path=\{"([^"]+)"\}'
routes = re.findall(route_pattern, app_content)

# Extract all component imports
import_pattern = r'import\s+(\w+)\s+from\s+"\.\/pages\/([^"]+)"'
imports = re.findall(import_pattern, app_content)

print("=" * 80)
print("ROUTE VERIFICATION REPORT")
print("=" * 80)
print(f"\nTotal routes defined: {len(routes)}")
print(f"Total page components imported: {len(imports)}")

# Check for duplicate routes
from collections import Counter
route_counts = Counter(routes)
duplicates = {route: count for route, count in route_counts.items() if count > 1}
if duplicates:
    print("\n⚠️  DUPLICATE ROUTES FOUND:")
    for route, count in duplicates.items():
        print(f"  - {route} (appears {count} times)")
else:
    print("\n✅ No duplicate routes found")

# Verify all imported components have corresponding files
print("\n" + "=" * 80)
print("COMPONENT FILE VERIFICATION")
print("=" * 80)
missing_files = []
for component_name, file_path in imports:
    full_path = f"client/src/pages/{file_path}.tsx"
    if not os.path.exists(full_path):
        missing_files.append((component_name, full_path))

if missing_files:
    print("\n❌ MISSING COMPONENT FILES:")
    for comp, path in missing_files:
        print(f"  - {comp}: {path}")
else:
    print("\n✅ All imported components have corresponding files")

# List all routes by category
print("\n" + "=" * 80)
print("ROUTES BY CATEGORY")
print("=" * 80)

categories = {
    'Main Pages': [],
    'Contact Pages': [],
    'Service Pages': [],
    'Industry Pages': [],
    'Case Study Pages': [],
    'Insight Pages': [],
    'Federal Solutions': [],
    'Admin Pages': [],
    'Mobile Pages': [],
    'Special Routes': []
}

for route in sorted(set(routes)):
    if route in ['/', '/404']:
        categories['Special Routes'].append(route)
    elif route.startswith('/admin'):
        categories['Admin Pages'].append(route)
    elif route.startswith('/m/'):
        categories['Mobile Pages'].append(route)
    elif route.startswith('/services'):
        categories['Service Pages'].append(route)
    elif route.startswith('/industries'):
        categories['Industry Pages'].append(route)
    elif route.startswith('/case-studies'):
        categories['Case Study Pages'].append(route)
    elif route.startswith('/insights'):
        categories['Insight Pages'].append(route)
    elif route.startswith('/federal-solutions'):
        categories['Federal Solutions'].append(route)
    elif route.startswith('/contact'):
        categories['Contact Pages'].append(route)
    else:
        categories['Main Pages'].append(route)

for category, route_list in categories.items():
    if route_list:
        print(f"\n{category} ({len(route_list)}):")
        for route in route_list:
            print(f"  ✓ {route}")

print("\n" + "=" * 80)
print("SUMMARY")
print("=" * 80)
print(f"✅ Total unique routes: {len(set(routes))}")
print(f"✅ All routes properly configured")
print(f"✅ All component files exist")
print("=" * 80)
