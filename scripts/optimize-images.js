import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync, statSync, unlinkSync, renameSync } from 'fs';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to check if file exists
async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const QUALITY = 80;
const MAX_WIDTH = 1920;

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const outputPath = filePath.replace(/(\.\w+)$/, (_, ext) => `-optimized${ext}`);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Only resize if width is larger than MAX_WIDTH
    const resizeOptions = metadata.width > MAX_WIDTH ? { width: MAX_WIDTH } : {};

    await image
      .resize(resizeOptions)
      .toFormat(ext.replace('.', ''), { quality: QUALITY })
      .toFile(outputPath);

    const originalStats = await fs.stat(filePath);
    const optimizedStats = await fs.stat(outputPath);
    const originalSize = originalStats.size;
    const optimizedSize = optimizedStats.size;
    const savings = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(2);

    console.log(`✅ Optimized: ${path.basename(filePath)}`);
    console.log(
      `   ${(originalSize / 1024).toFixed(2)} KB → ${(optimizedSize / 1024).toFixed(2)} KB (${savings}% savings)`
    );

    // Replace original with optimized version
    await fs.unlink(filePath);
    await fs.rename(outputPath, filePath);

    return { success: true, savings: parseFloat(savings) };
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
    // Clean up failed output file if it exists
    if (await fileExists(outputPath)) {
      await fs.unlink(outputPath);
    }
    return { success: false, error };
  }
}

async function processDirectory(directory) {
  const files = await fs.readdir(directory);
  let totalSavings = 0;
  let processedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      const result = await processDirectory(fullPath);
      totalSavings += result.totalSavings;
      processedCount += result.processedCount;
      skippedCount += result.skippedCount;
      errorCount += result.errorCount;
    } else if (IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())) {
      console.log(`\nProcessing: ${fullPath}`);
      const result = await optimizeImage(fullPath);

      if (result.success) {
        totalSavings += result.savings;
        processedCount++;
      } else if (result.error) {
        errorCount++;
      } else {
        skippedCount++;
      }
    } else {
      skippedCount++;
    }
  }

  return {
    totalSavings: processedCount > 0 ? totalSavings / processedCount : 0,
    processedCount,
    skippedCount,
    errorCount,
  };
}

// Start processing from the public directory
const publicDir = path.join(__dirname, '..', 'client', 'public');

async function main() {
  try {
    await fs.access(publicDir);
    console.log(`🚀 Starting image optimization in: ${publicDir}\n`);

    const { totalSavings, processedCount, skippedCount, errorCount } =
      await processDirectory(publicDir);

    console.log('\n✨ Optimization Complete!');
    console.log(`✅ Processed: ${processedCount} images`);
    console.log(`⏩ Skipped: ${skippedCount} images`);
    console.log(`❌ Errors: ${errorCount} images`);
    console.log(`💾 Average space saved: ${totalSavings.toFixed(2)}%`);
  } catch (error) {
    console.error(`Error: Directory not found or inaccessible: ${publicDir}`, error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});
