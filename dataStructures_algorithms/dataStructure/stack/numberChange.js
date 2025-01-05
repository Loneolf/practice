import { Stack } from "./stack.js";

// 数字进制转换
function numberChange(number, base) {
    let stack = new Stack()
    while(number > 0) {
        stack.push(number % base)
        // 向下取整是因为小数点部分就是取余数的部分
        number = Math.floor(number / base)
    }
    let result = ''
    while(!stack.isEmpty()) {
        result += stack.pop()
    }
    return result
}

console.log(numberChange(100345, 7))