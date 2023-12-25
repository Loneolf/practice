// 函数的类型声明，和JS相比增加了参数类型和返回值类型，:void标识没有任何返回
function hello(txt: string): void {
	console.log("hello " + txt);
}

// 不添加:void也会类型推断返回值为void
function hello2(txt: string) {
	console.log("hello " + txt);
}

// 变量函数赋值写法
// 写法一
const hello3 = function (txt: string) {
	console.log("hello " + txt);
};
// 写法二, 类型和参数名必须放在括号中,没有参数名txt 会推断string为any类型
const hello4: (txt: string) => void = function (txt) {
	console.log("hello " + txt);
};

// type同样可以为函数类型定义别名
type MyFunc = (txt:string) => void;
const hello5:MyFunc = function (txt) {
  console.log('hello ' + txt);
}

// 函数参数可以少写，允许参数不足，不能多写，
let myFunc: (a:number, b:number) => number;
myFunc = (a:number) => a; // 正确
myFunc(4) // 调用的时候需要传两个参数，一个会报错
myFunc = (a:number, b:number, c:number ) => a + b + c; // 报错

// 函数也可以用typeof 提取类型， myAdd和add类型相同，可以用typeof 提取add的函数类型
function add( x:number, y:number ) {
    return x + y;
}
const myAdd:typeof add = function (x, y) {
    return x + y;
}

// 函数类型的对象写法，当函数本身存在属性时，可以使用该写法，使用较少
// {
//     (参数列表): 返回值
// }
let add2:{
    (x:number, y:number):number,
    version: string
};
function addf (x: number, y: number) {
    return x + y;
};
addf.version = '5.0'
add2 = addf

// Function 类型， 
// Function就是函数类型，可表示任何函数，接收任意参数，没个参数都是any类型，返回值也是any，无任何约束，不建议使用
function doSomething(f:Function) {
    return f(1, 2, 3);
}

// 箭头函数
// 箭头函数就是普通函数的简化写法，和普通函数类似
const repeat = ( str:string, times:number ):string => str.repeat(times);

// 箭头函数参数，void写在箭头后面
function greet( fn:(a:string) => void ):void {
    fn('world');
}
// 带有返回类型的箭头函数
type Person1 = { name: string };
const people = ['alice', 'bob', 'jan'].map(
  (name):Person1 => ({ name })
);

// 可选参数， 可以省略的参数， 可选参数只能放在参数列表中必选参数的后面
function f2(x?:number) { // x的类型等同于 number | undefined
    // ...
}
f2(); // OK
f2(10); // OK
f2(undefined) // OK 

// 参数默认值，与JS一致，不传入参数时取默认值，
// 有参数默认值可以省略不传，也可以省略类型声明，可以通过默认值进行类型推断
// 可选参数与默认值不能同时使用
function createPoint( x:number = 0, y:number = 0 ):[number, number] {
    return [x, y];
}
createPoint() // [0, 0]

// 参数解构
type ABC = { a:number; b:number; c:number };
function sum({ a, b, c }:ABC) {
  console.log(a + b + c);
}

// rest 参数，
// 函数剩余的所有参数，可以是数组或者元组
// rest 参数为数组
function multiply(n:number, ...m:number[]) {
    return m.map((x) => n * x);
  }
// rest 参数为元组, 可选参数后面加个?
function f3(...args:[boolean, number?]) {
    // ...
}
// rest 参数解构
function repeat2(...[str, times]:[string, number] ):string {
    return str.repeat(times);
}
// 等同于如下
function repeat3( str: string, times: number ):string {
    return str.repeat(times);
}

// 只读参数， 较少用
function arraySum( arr:readonly number[] ) {
    // ...
    arr[0] = 0; // 报错
}

// void 类型 没有返回值的函数，
// 因为函数没有返回值默认是undefined，所以，void返回undefined可以
function f4():void {
    console.log('hello');
}
function f5():void {
    return undefined; // 正确
}
function f6():void {
    return null; // 严格模式下错误，非严格模式下可以返回null(strictNullChecks)
}
// 函数运行错误抛出异常，可以将返回值写成void
function throwErr():void {
    throw new Error('something wrong');
}

// never 不会出现的值
// 函数出现异常或者陷入死循环，无法返回正常的值，返回值类型就是never
function fail(msg:string):never {
    throw new Error(msg);
}
// 返回错误并不是never
function failReturn():Error { 
    return new Error("Something failed");
}
const sing = function():never {
    while (true) {
        console.log('sing');
    }
};
// 函数仅在某些条件下抛出异常，返回值可以省略never
function sometimesThrow():number {
    if (Math.random() > 0.5) {
        return 100;
    }
    throw new Error('Something went wrong');
  }
const result = sometimesThrow();
// nerve是TS的底层类型，所有类型都包含nerve

// 高阶函数
// 函数的返回值是函数，那么前一个函数就是高阶函数
(someValue: number) => (multiplier: number) => someValue * multiplier;
// 类似的高阶组件也是相同概念，接受一个组件，返回一个组件

// 函数重载
// 函数可以接受不同类型或不同个数的参数，并根据参数的不同执行不同的函数行为，称之为函数重载
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}

const d1 = makeDate(12345678) // 正常
const d2 = makeDate(5, 6, 7) // 正常
const d3 = makeDate(5, 9) // 报错
// 如上，mackData函数，只能接受一个或者三个参数，不能接受两个参数，只能执行重载的的函数类型

// 函数重载参数可以使用字符串或者数组，但是不能使用可能存在的参数，因为TS只能使用一个函数解析重载
function len(s: string): number
function len(arr: any[]): number
function len(x: any) {
  return x.length
}
len('hello') // OK
len([1, 2, 3]) // OK 
len(Math.random() > 0.5 ? 'hello' : [4, 5, 6]) // 错误

// 重载是比较复杂的类型声明，如果可以，应优先使用联合类型替代函数重载，除非多个参数、或者某个参数与返回值存在对应关系
// 如下可以使用联合类型实现上面的重载
// function len(x: any[] | string) {
//     return x.length
// }

// 构造函数
// 构造函数使用new关键字，类的本质也是构造函数
class Animal {
    numLegs:number = 4;
}
type AnimalConstructor = new () => Animal; // AnimalConstructor:构造函数
function create(c:AnimalConstructor):Animal {
    return new c();
}
const aa = create(Animal);

// 既可以是构造函数，也可以是普通函数的对象写法
type F = {
    new (s:string): object;
    (n?:number): number;
}