import os
import json

# Path to the directory containing the images
image_dir = 'ducks/'

# Load the metadata from the metadata.json file
with open('metadata.json', 'r') as file:
    metadata = json.load(file)

# Update the metadata with image paths
for i in range(len(metadata)):
    image_filename = f"{i + 1}.png"
    image_path = os.path.join(image_dir, image_filename)

    # Add the image path to the metadata for each inscription
    metadata[i]['image_path'] = image_path

# Write the updated metadata back to the metadata.json file
with open('metadata.json', 'w') as file:
    json.dump(metadata, file, indent=4)

print("Image paths added to the metadata successfully!")
