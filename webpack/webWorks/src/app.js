const worker = new Worker(new URL("./work.js", import.meta.url));

post("hello world");

function post(text) {
	worker.postMessage({ text });
}

worker.onmessage = (message) => {
	console.log(message.data.answer);
	worker.terminate();
};

worker.onerror = (err) => {
    worker.terminate();
	console.log(err.filename, err.lineno, err.message); // 发生错误的文件名、行号、错误内容
}
;
setTimeout(() => {
    post("hello world agin");
}, 2000);
