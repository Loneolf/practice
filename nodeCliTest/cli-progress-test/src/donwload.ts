import https from 'node:https';
import fs from 'node:fs';
import { ProgressBar } from './processBar.js';

const downloadURLs = 'https://storage.googleapis.com/chromium-browser-snapshots/Mac/970501/chrome-mac.zip'

const bar = new ProgressBar();

let value = 0;

 https.get(downloadURLs, response => {

    const file = fs.createWriteStream('./chromium.zip');
    response.pipe(file);

    const totalBytes = parseInt(response.headers['content-length']!, 10);

    bar.start(totalBytes, 0);
    
    response.on('data', function (chunk) {
        value += chunk.length

        bar.update(value);

        if(value > bar.getTotalSize()) {
            bar.stop();
        }
    });
});