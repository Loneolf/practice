import { Stack } from "./stack.js";

// 数字进制转换
function isValidBracket(str) {
    if (str.length % 2 !== 0 || str.length === 0) {
        return false
    }
    let stack = new Stack()
    var map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0, len = str.length; i < len; i++) {
        switch (str[i]) {
            case '(':
            case '[':
            case '{':
                stack.push(str[i])
                break;
            case ')':
            case ']':
            case '}':
            if (stack.isEmpty() || map[stack.pop()] !== str[i]) {
                return false
            }
            break;
            default:
                break;
        }        
    }
    return stack.isEmpty()
}

console.log(isValidBracket("()"))
console.log(isValidBracket("()[]{}"))
console.log(isValidBracket("(]"))
console.log(isValidBracket("([])"))

