// 接受主线程发送的信息
self.onmessage = (message) => {
	self.postMessage({
		answer: message.data.text,
	});
};
