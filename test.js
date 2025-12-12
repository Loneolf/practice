const fs = require('fs').promises;
const path = require('path');
const { createWriteStream } = require('fs');

/**
 * 递归遍历目录，收集所有.css文件路径
 * @param {string} dir - 要遍历的目录
 * @param {Array} result - 存储结果的数组
 */
async function findCssFiles(dir, result) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // 递归处理子目录
        await findCssFiles(fullPath, result);
      } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.css') {
        // 只收集.css文件
        result.push(fullPath);
      }
    }
  } catch (err) {
    console.error(`处理目录 ${dir} 时出错:`, err.message);
  }
}

/**
 * 主函数：查找CSS文件并保存结果
 * @param {string} targetDir - 目标文件夹路径
 * @param {string} outputFile - 输出JSON文件路径
 */
async function main(targetDir, outputFile) {
    console.log('aaa', targetDir, outputFile);
  const startTime = Date.now();
  const cssFiles = [];
  
  try {
    // 验证目标目录是否存在
    await fs.access(targetDir);
    
    // 开始查找CSS文件
    console.log(`开始在 ${targetDir} 中查找CSS文件...`);
    await findCssFiles(targetDir, cssFiles);
    
    // 写入结果到JSON文件
    console.log(`找到 ${cssFiles.length} 个CSS文件，正在写入结果...`);
    
    // 使用流式写入处理大量数据
    const writeStream = createWriteStream(outputFile);
    writeStream.write(JSON.stringify({
      count: cssFiles.length,
      files: cssFiles,
      timestamp: new Date().toISOString()
    }, null, 2));
    writeStream.end();
    
    const endTime = Date.now();
    console.log(`完成！耗时 ${(endTime - startTime) / 1000} 秒`);
    console.log(`结果已保存到 ${outputFile}`);
    
  } catch (err) {
    console.error('执行出错:', err.message);
    process.exit(1);
  }
}

// 配置参数 - 可以根据需要修改
const targetDirectory = './protoJSTest'; // 目标文件夹路径
const outputJsonFile = './css_files.json';      // 输出JSON文件路径

// 执行主函数
main(targetDirectory, outputJsonFile);
