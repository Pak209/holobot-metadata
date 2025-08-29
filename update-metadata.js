const fs = require('fs');

// Image URL mapping with GitHub Pages URLs
const IMAGE_MAPPING = {
  "ACE": "https://pak209.github.io/holobot-metadata/images/ace.png",
  "KUMA": "https://pak209.github.io/holobot-metadata/images/kuma.png", 
  "SHADOW": "https://pak209.github.io/holobot-metadata/images/shadow.png",
  "ERA": "https://pak209.github.io/holobot-metadata/images/era.png",
  "HARE": "https://pak209.github.io/holobot-metadata/images/hare.png",
  "TORA": "https://pak209.github.io/holobot-metadata/images/tora.png",
  "WAKE": "https://pak209.github.io/holobot-metadata/images/wake.png",
  "GAMA": "https://pak209.github.io/holobot-metadata/images/gama.png",
  "KEN": "https://pak209.github.io/holobot-metadata/images/ken.png",
  "KURAI": "https://pak209.github.io/holobot-metadata/images/kurai.png",
  "TSUIN": "https://pak209.github.io/holobot-metadata/images/tsuin.png",
  "WOLF": "https://pak209.github.io/holobot-metadata/images/wolf.png"
};

// Update all metadata files
for (let i = 1; i <= 12; i++) {
  const filename = `${i}.json`;
  
  try {
    // Read existing metadata
    const metadata = JSON.parse(fs.readFileSync(filename, 'utf8'));
    
    // Find the model name from attributes
    const modelAttribute = metadata.attributes.find(attr => attr.trait_type === "Model");
    const modelName = modelAttribute?.value;
    
    if (modelName && IMAGE_MAPPING[modelName]) {
      // Update image URL
      metadata.image = IMAGE_MAPPING[modelName];
      
      // Write updated metadata
      fs.writeFileSync(filename, JSON.stringify(metadata, null, 2));
      console.log(`✅ Updated ${filename} - ${modelName} with new image URL`);
    } else {
      console.log(`❌ Could not find image mapping for ${filename} - ${modelName}`);
    }
  } catch (error) {
    console.error(`Error updating ${filename}:`, error.message);
  }
}

console.log("\n🎉 Metadata update complete!");
console.log("All image URLs now point to GitHub Pages hosted images.");
