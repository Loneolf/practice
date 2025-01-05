// import { Stack } from "../dataStructure/ts/stack.ts";
import { Stack } from "../dataStructure/stack/stack-map.ts";

let stack: Stack = new Stack()

// beforeAll(() => {
//     console.log('beforeAll')
//     stack = new Stack()
// });

test('push', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.size()).toBe(3)
});

test('pop', () => {
    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(undefined)
});

test('peek', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.peek()).toBe(3)
    stack.clear()
    expect(stack.peek()).toBe(undefined)
});

test('isEmpty', () => {
    stack.clear()
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
});

test('clear', () => {
    stack.clear()
    expect(stack.size()).toBe(0)
});

test('size', () => {
    stack.push(1)
    expect(stack.size()).toBe(1)
});