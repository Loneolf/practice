import https from 'node:https';
import fs from 'node:fs';
import { Bar } from 'cli-progress';

const downloadURLs = 'https://storage.googleapis.com/chromium-browser-snapshots/Mac/970501/chrome-mac.zip'

const bar = new Bar({
    format: '进度：{bar} | {percentage}% || {value}/{total} || 速度: {speed}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});

let value = 0;

 https.get(downloadURLs, response => {

    const file = fs.createWriteStream('./chromium.zip');
    response.pipe(file);

    const totalBytes = parseInt(response.headers['content-length']!, 10);

    bar.start(totalBytes, 0, {
        speed: "0"
    });
    
    response.on('data', function (chunk) {
        value += chunk.length

        bar.update(value);
        bar.update(value, {
            speed: (value / 1024 / 1024).toFixed(2) +  "Mb/s"
        });

        if(value > bar.getTotal()) {
            bar.stop();
        }
    });
});