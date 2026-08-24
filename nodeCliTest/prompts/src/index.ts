import readline from 'node:readline';

// emitKeypressEvents 可以让输入流处理键盘事件
readline.emitKeypressEvents(process.stdin);
 
// stdin.setRawMode(true) 是禁用掉内置的一些键盘事件处理，比如 ctrl + c 退出进程
process.stdin.setRawMode(true);
 
process.stdin.on('keypress', (str, key) => {
 
    console.log('aaa', str, key)
    if (key.sequence === '\x03') {
        process.exit(0);
    }
});