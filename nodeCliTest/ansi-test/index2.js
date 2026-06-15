// 把终端光标挪到左上角、清空下方屏幕


import readline from 'node:readline';

// process.stdout.rows：获取当前终端可视区域总行数（终端窗口高度）
// 预留两行空间，避免内容被顶没了
const repeatCount = process.stdout.rows - 2;

// repeatCount>0就生成repeatCount个空字符串（换行），否则空字符串
const blank = repeatCount > 0 ? ''.repeat(repeatCount) : '';
// 输出换行 旧内容被换行顶到终端可视区域外面
console.log(blank);

// 光标移动到标准输出(终端)：x=0列、y=0行（终端左上角）
// 从光标开始，清空光标下方所有终端内容
readline.cursorTo(process.stdout, 0, 0);
readline.clearScreenDown(process.stdout);