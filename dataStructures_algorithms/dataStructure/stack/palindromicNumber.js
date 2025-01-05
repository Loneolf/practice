import { Stack } from "./stack.js";

// 判断是否是回文数字

function isPalindromicNumber(number) {
    let stack = new Stack()
    number = `${number}`
    for(let i = 0; i < number.length; i++) {
        stack.push(number[i])
    }
    let result = ''
    while (!stack.isEmpty()) {
        result += stack.pop()
    }
    return result === number
}

console.log(isPalindromicNumber(12321))
console.log(isPalindromicNumber(12345))