const fs = require('fs');
const path = require('path');

function findMp3Files(dir) {
    let mp3Files = [];
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            // 如果是文件夹，则递归调用
            mp3Files = mp3Files.concat(findMp3Files(filePath));
        } else if (path.extname(file) === '.mp3') {
            // 如果是 mp3 文件，则记录名称和路径
            mp3Files.push({ name: file, path: filePath });
        }
    });
    return mp3Files;
}

const folderPath = './myMusic'; // 替换为实际的文件夹路径
const mp3List = findMp3Files(folderPath);

fs.writeFileSync('data.json', JSON.stringify(mp3List, null, 2));
