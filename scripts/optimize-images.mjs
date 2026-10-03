/**
 * Image Optimization Script
 * Converts JFIF/JPG images to optimized WebP format using sharp.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, '..', 'src', 'assets');

// Images to convert (source filename -> output filename)
const imagesToConvert = [
  { src: 'bgimg01.jfif', out: 'bgimg01.webp', quality: 75, width: 1920 },
  { src: 'bgimg02.jfif', out: 'bgimg02.webp', quality: 75, width: 1920 },
  { src: 'Gemini_Generated_Image_6psifc6psifc6psi.jfif', out: 'gemini_generated.webp', quality: 75, width: 1920 },
  { src: 'devices_mockup.jpg', out: 'devices_mockup.webp', quality: 80, width: 1200 },
  { src: 'trial_banner.jpg', out: 'trial_banner.webp', quality: 80, width: 1200 },
  { src: 'freetrial_banner.jpg', out: 'freetrial_banner.webp', quality: 80, width: 1200 },
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const img of imagesToConvert) {
    const srcPath = path.join(assetsDir, img.src);
    const outPath = path.join(assetsDir, img.out);

    if (!fs.existsSync(srcPath)) {
      console.log(`   ⏭️  Skipping ${img.src} (not found)`);
      continue;
    }

    const originalSize = fs.statSync(srcPath).size;

    await sharp(srcPath)
      .resize({ width: img.width, withoutEnlargement: true })
      .webp({ quality: img.quality, effort: 6 })
      .toFile(outPath);

    const optimizedSize = fs.statSync(outPath).size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    totalOriginal += originalSize;
    totalOptimized += optimizedSize;

    console.log(`   ✅ ${img.src}`);
    console.log(`      ${(originalSize / 1024).toFixed(0)} KB → ${(optimizedSize / 1024).toFixed(0)} KB  (${savings}% smaller)`);
    console.log(`      → ${img.out}\n`);
  }

  console.log('━'.repeat(50));
  console.log(`\n📊 Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}% reduction)\n`);
  console.log('✨ Done! Now update src/assets/asset.js to import .webp files.\n');
}

optimizeImages().catch(console.error);
