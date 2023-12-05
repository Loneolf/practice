export {}

// boolean
const x:boolean = true;
const y:boolean = false;

// string
const a:string = 'hello';
const b:string = `${a} world`;

const s1:String = 'hello'; // 正确
const s2:String = new String('hello'); // 正确

const s3:string = 'hello'; // 正确
const s4:string = new String('hello'); // 报错
// 大写类型同时包含字面量和包装对象类型，小写类型只包含字面量，故大写类型不能赋值给小写类型，Boolean和Number同理
// 通常小写的字面量类型足够项目使用，无需再使用包装对象类型

// number
const c:number = 123;
const d:number = 3.14;
const e:Number = 0xffff;

// object & Object
const f:object = { foo: 123 };
const h:object = [1, 2, 3];
const i:object = (n:number) => n + 1;
// object类型包含对象，数组，函数，不包含原始类型的值
// Object是JS中的广义对象，所有可转化为对象的值都是Object，包含了几乎所有的值，除了undefind 和 null这两个不能转化为对象的类型
let obj:Object;
obj = true;
obj = 'hi';
obj = 1;
obj = { foo: 123 };
obj = [1, 2];
obj = (a:number) => a + 1;



// undefind & null
// noImplicitAny和strictNullChecks 开启这两个选项，undefined 和 null不能互相赋值，
// 关闭会被类型推断为any, 可以相互赋值
let j:undefined = undefined;
j = null
const k:null = null;
// undefind和null即为类型也为值

// 值类型
let m: 'hello'
m = 'hello'; // 正确
m = 'world'; // 报错
// 值类型只能赋值对应的值，const声明的非对象变量，默认都是值类型，对象因为属性可变，不会被推断为值类型


// 联合类型，多个类型组成的新类型 使用'|'或，
let n:string | number;
n = 123; // 正确
n = 'abc'; // 正

let name:string|null;
name = 'John';
name = null;
// 一个变量如果有多个类型，如果需要使用某个类型的方法，可以先进行类型缩小
function printId( id:number|string ) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// 交叉类型，多个类型组合成一个类型，用&标识

let o:number & string // 类型推断为never，不存在number和string的类型
// 交叉类型可用于对象的合成，和为对象添加新属性

let p: { foo: string } & { bar: string };
p = {  foo: 'hello', bar: 'world' };

type q = { foo: number };
type l = q & { bar: number }; // l为交叉类型，在q的基础上添加属性bar


// type 定义类型的别名, 块级作用域
type Age = number
let age: Age = 18

// typeof 运算符
// 在JS中typeof为一元运算符，返回类型string|number|bigint|boolean|symbol|undefined|object|function
let foo = typeof 'foo'
// 在TS中，typeof两种作用，一元运算符和TS类型，类型运算编译后会被删除
const r = { x: 0 };
type T0 = typeof a;   // { x: number }
type T1 = typeof r.x; // number

// 参数只能是标识符不能是运算表达式
type T = typeof Date(); // 报错


// 数组，成员类型相同，数量不固定，可以为空数组
let arr: number[] = [1,2,3,65,45,5]
let arr2:(number|string)[] = [345,56,7,78,8, '2']; // 成员可以是number，可以是string
// 数组的泛型写法
let arr3:Array<number> = [1, 2, 3];
let arr4:Array<number|string>;
// TS允许使用方括号读取数组成员类型
type Names = string[];
type Name = Names[0]; // string Number[0]返回类型为string
type Name2 = Names[number]; // string 索引值都是number 

// 数组的类型推断
const arr5 = []; // 推断为 any[]
arr5.push(123); // 推断类型为 number[]
arr5.push('abc'); // 推断类型为 (string|number)[]
// 当数组为空时，数组的类型推断会根据赋值自动更新，
// 初始化不为空数组，类型推断不会自动更新
const arr6 = [123];
arr6.push('abc'); // 报错
// 只读数组 const断言， 无法增删改，没有数组的增删改属性
const arr7:readonly number[] = [0, 1];
arr7[1] = 2; // 报错
arr7.push(3); // 报错
delete arr7[0]; // 报错
// 泛型只读写法
const a1:ReadonlyArray<number> = [0, 1];
const a2:Readonly<number[]> = [0, 1];
// const 断言只读
const arr8 = [0, 1] as const;
// 二维数组使用 T[][]表示
let multi:number[][] = [[1,2,3], [23,24,25]];

// 元组，成员类型可以自由设置的数组，元组必须有类型声明，否则会被推断为数组
const mArr:[string, string, boolean] = ['a', 'b', true]; // 每个类型都单独写，限制数量
let mArr2:[number, number?] = [1];  // 可选成员元组
// 不限长度的元组
type t1 = [string, number, ...boolean[]];
type t2 = [string, ...boolean[], number];
type t3 = [...boolean[], string, number];
// 只读元组
type t4 = readonly [number, string]
type t5 = Readonly<[number, string]>

// Symbol 值通过Symbol()函数生成。在 TypeScript 里面，Symbol 的类型使用symbol表示
let sy1:symbol = Symbol();
let sy2:symbol = Symbol();
sy1 === sy2 // false, symbol值都不相等


// Enum 枚举，TS新增的数据类型，可看作是一类值的集合，既是类型，也是值
enum Color {
    Red,     // 0
    Green,   // 1
    Blue     // 2
}
// 如果不指定值，默认从0开始赋值，编译后生成属性和值正反赋值的对象，所以枚举值可以通过成员值获得成员名
// var Color;
// (function (Color) {
//     Color[Color["Red"] = 0] = "Red";
//     Color[Color["Green"] = 1] = "Green";
//     Color[Color["Blue"] = 2] = "Blue"; // 2
// })(Color || (Color = {}));

