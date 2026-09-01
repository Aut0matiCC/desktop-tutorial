const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\Manthan\\.gemini\\antigravity-ide\\brain\\a9646f08-a3e1-4666-ad95-2a5a6392d983';
const publicImgDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicImgDir)) {
  fs.mkdirSync(publicImgDir, { recursive: true });
}

const imageMap = {
  'service_highway_dpr_1787985090528.jpg': 'service-highway-dpr.webp',
  'service_survey_geomatics_1787985114211.jpg': 'service-survey-geomatics.webp',
  'service_hydraulic_structures_1787985141663.jpg': 'service-hydraulic-structures.webp',
  'service_pmc_supervision_1787985176322.jpg': 'service-pmc.webp',
  'service_tpi_inspection_1787985206306.jpg': 'service-tpi.webp',
  'service_traffic_pavement_1787985240990.jpg': 'service-traffic-pavement.webp',
  'sector_roads_buildings_1787985281659.jpg': 'sector-roads-buildings.webp',
  'sector_irrigation_dept_1787985323355.jpg': 'sector-irrigation.webp',
  'sector_municipalities_1787985344649.jpg': 'sector-municipalities.webp',
  'sector_panchayat_roads_1787985366985.jpg': 'sector-panchayat.webp',
  'about_leadership_visual_1787985395339.jpg': 'about-leadership.webp'
};

async function convertAll() {
  for (const [srcFile, destFile] of Object.entries(imageMap)) {
    const srcPath = path.join(brainDir, srcFile);
    const destPath = path.join(publicImgDir, destFile);
    
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .webp({ quality: 85, effort: 4 })
        .toFile(destPath);
      console.log(`Converted: ${srcFile} -> ${destFile}`);
    } else {
      console.error(`Source not found: ${srcPath}`);
    }
  }
  console.log('All images converted to .webp successfully!');
}

convertAll().catch(console.error);
