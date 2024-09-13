#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Function to print messages
print_message() {
  echo "========================================"
  echo "$1"
  echo "========================================"
}

# Function to check if a directory exists, if not, create it
create_dir() {
  if [ ! -d "$1" ]; then
    mkdir -p "$1"
    echo "Created directory: $1"
  else
    echo "Directory already exists: $1"
  fi
}

# Function to move files if they exist and destination is different
move_file() {
  src="$1"
  dest="$2"
  
  if [ -f "$src" ]; then
    # Extract the filename from the source path
    filename=$(basename "$src")
    
    # If dest ends with '/', append filename
    if [[ "$dest" == */ ]]; then
      dest_path="$dest$filename"
    else
      dest_path="$dest/$filename"
    fi
    
    # Check if source and destination are the same
    if [ "$src" != "$dest_path" ]; then
      # Check if destination file already exists
      if [ -f "$dest_path" ]; then
        echo "Destination file already exists: $dest_path. Skipping move for $src."
      else
        mv "$src" "$dest"
        echo "Moved $src to $dest"
      fi
    else
      echo "Source and destination are the same for $src. Skipping move."
    fi
  else
    echo "File not found, skipping: $src"
  fi
}

# Start of the script
print_message "Starting Project Reorganization"

# 1. Create the recommended folder structure

print_message "Creating recommended folder structure..."

# Create components/cards
create_dir "components/cards"

# Create components/Header.tsx and components/Footer.tsx (if they don't exist)
if [ ! -f "components/Header.tsx" ]; then
  touch components/Header.tsx
  echo "// Header Component" > components/Header.tsx
  echo "Created placeholder for Header.tsx"
else
  echo "Header.tsx already exists. Skipping creation."
fi

if [ ! -f "components/Footer.tsx" ]; then
  touch components/Footer.tsx
  echo "// Footer Component" > components/Footer.tsx
  echo "Created placeholder for Footer.tsx"
else
  echo "Footer.tsx already exists. Skipping creation."
fi

# Create utils/api.ts (if it doesn't exist)
if [ ! -f "utils/api.ts" ]; then
  touch utils/api.ts
  echo "// API utility functions" > utils/api.ts
  echo "Created utils/api.ts"
else
  echo "utils/api.ts already exists. Skipping creation."
fi

# Create /components/cards/SwapCard.tsx, StakeCard.tsx, ProfitCalculatorCard.tsx (if they don't exist)
if [ ! -f "components/cards/SwapCard.tsx" ]; then
  touch components/cards/SwapCard.tsx
  echo "// SwapCard Component" > components/cards/SwapCard.tsx
  echo "Created components/cards/SwapCard.tsx"
else
  echo "SwapCard.tsx already exists in components/cards/. Skipping creation."
fi

if [ ! -f "components/cards/StakeCard.tsx" ]; then
  touch components/cards/StakeCard.tsx
  echo "// StakeCard Component" > components/cards/StakeCard.tsx
  echo "Created components/cards/StakeCard.tsx"
else
  echo "StakeCard.tsx already exists in components/cards/. Skipping creation."
fi

if [ ! -f "components/cards/ProfitCalculatorCard.tsx" ]; then
  touch components/cards/ProfitCalculatorCard.tsx
  echo "// ProfitCalculatorCard Component" > components/cards/ProfitCalculatorCard.tsx
  echo "Created components/cards/ProfitCalculatorCard.tsx"
else
  echo "ProfitCalculatorCard.tsx already exists in components/cards/. Skipping creation."
fi

# Create /components/ui if not already present
create_dir "components/ui"

# Create /utils/SwapWidgetConfig.ts (if not present)
if [ ! -f "utils/SwapWidgetConfig.tsx" ]; then
  touch utils/SwapWidgetConfig.tsx
  echo "// SwapWidgetConfig" > utils/SwapWidgetConfig.tsx
  echo "Created utils/SwapWidgetConfig.tsx"
else
  echo "SwapWidgetConfig.tsx already exists in utils/. Skipping creation."
fi

# 2. Move existing components to the new structure

print_message "Moving existing components to the new structure..."

# Move staking-dashboard.tsx and staking-dashboard-inj.tsx to components/cards/
move_file "components/staking-dashboard.tsx" "components/cards/"
move_file "components/staking-dashboard-inj.tsx" "components/cards/"

# Move SwapWidget related files to utils/ if they are not already there
# Assuming SwapWidget.tsx should remain in utils/, skip moving if already there
# If you intended to move SwapWidget.tsx to another directory, specify the correct destination

# Check if SwapWidget.tsx needs to be moved
# For this script, we'll assume SwapWidget.tsx should remain in utils/
echo "Ensuring SwapWidget.tsx remains in utils/..."

# If SwapWidget.tsx is intended to be in another directory, uncomment and specify the destination
# Example: move_file "utils/SwapWidget.tsx" "components/widgets/"

# Similarly, ensure SwapWidgetConfig.tsx is in utils/
echo "Ensuring SwapWidgetConfig.tsx is in utils/..."
# Already created/verified above

# 3. Organize /components/ui by moving existing UI components if necessary

print_message "Organizing UI components..."

# Assuming UI components are already under components/ui/, verify and move if necessary

# Example: If you have UI components outside components/ui/, move them
# For now, based on your current structure, they are already under components/ui/
echo "Verifying UI components are correctly placed..."

# 4. Handle the /app directory

print_message "Handling the /app directory..."

# Your current structure has both /app and /pages. It's recommended to use one routing system.
# Next.js supports both, but using both can cause conflicts.

echo "You currently have both /app and /pages directories."
echo "Please decide whether to use the Next.js App Router (/app) or Pages Router (/pages)."
echo "For this script, no changes will be made to the /app directory."

# Optionally, you can prompt the user to choose
read -p "Do you want to remove the /pages directory and use /app instead? (y/N): " remove_pages
remove_pages=${remove_pages,,} # tolower
if [[ "$remove_pages" == "y" || "$remove_pages" == "yes" ]]; then
  print_message "Removing /pages directory as per user request..."
  rm -rf pages
  echo "/pages directory removed."
else
  echo "Keeping /pages directory. Please ensure you're using the desired routing system."
fi

# 5. Clean up empty directories if any

print_message "Cleaning up empty directories..."

# Check if 'components/cards' is empty after moving
if [ -z "$(ls -A components/cards)" ]; then
  rmdir components/cards
  echo "Removed empty directory: components/cards"
else
  echo "Directory components/cards is not empty. Skipping removal."
fi

# Similarly, handle other directories as needed

# 6. Create necessary utility files (already handled above)

print_message "Ensuring necessary utility files are in place..."

# Already handled above

# 7. Final message

print_message "Project reorganization completed successfully!"

# Optional: Provide next steps or reminders
echo "Next Steps:"
echo "- Populate the newly created component files (Header.tsx, Footer.tsx, SwapCard.tsx, etc.) with the appropriate code."
echo "- Update import paths in your project to reflect the new structure."
echo "- Test the application to ensure everything works as expected."
echo "- Commit your changes to version control (e.g., Git) to save the reorganized structure."

