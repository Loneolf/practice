class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

// console.log(greeter(user)) // Hello, Jane User
// 定义数组，元素类型接[]  泛型:Array<元素类型>
let list0: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// 元组 Tuple
let x: [String, number];
x = ["2", 0];
x[0].substr(0);
// x[3] = 4 无法越界
// console.log(x) // [ '2', 0 ]
// 可通过数组方法对数组操作，但是不能直接赋值 例如：x[5] = 3
x.push(3);
// console.log(x) // [ '2', 0, 3 ]

// 枚举，为一组数值赋予名字, 枚举等号后面不能是对象，之能是字符串或者数字
enum Color {
  Red = "red",
  Green = 2,
  Blue = "blur",
  Yellow = "yellow",
}
let c: Color = Color.Red;
// console.log('aaa', c) // aaa red
// 通过枚举值映射相应的名字，只能通过数值找到，字符串无法找到
let d: string = Color[2];
let f: string = Color["blur"];
// console.log('aaa', d, f) // aaa Green undefined

// Any 任意类型
let notSure: any = 3;
notSure = "sasa";
notSure = { aaaa: "aaaa" };
notSure = [];
notSure.push("aaa", "bbb");

// void 无任何类型，函数无返回值时，返回值为void，void类型的变量只能赋值undefined和null
// 函数参数中默认函数可以写成：defaultF :() => void
let a1: void = undefined;
let a2: void = null;
// let a3: void = 3 // Type 'number' is not assignable to type 'void'

// Null 和 undefined是所有类型的子类型

let a4: String = undefined;
let a5: Number = null;

// never，不存在值类型，无任何子类包括any

// Object, 非原始类型

// 类型断言，类型断言后，TS会假设你已经进行了必要的检查
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
// console.log('aaa', strLength) // aaa 16

// ?: 代表可有参数
function testF(myObj: { a: string; b?: number }) {
  let { a, b = 111 } = myObj;
  console.log(a, b);
}
// testF({ a: "aaa" }); // aaa 111

// 接口：为类型命名、自己的代码、第三方代码等定义契约
// 官方示例：
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// 接口LabelledValue代表有一个label属性且类型为字符串的对象，接口只关注外形，而不关注label值为多少，传入对象是否还有其它属性，
// 代表传入printLabel2的参数必须满足接口要去才被允许，
interface LabelledValue {
  label: string;
  color?: number; // ?: 代表可选属性，对对象可能存在的属性进行预定义，也可以捕获引用了不存在的属性时的错误
  readonly x?: number; // 只读属性，只在初始化过程中复制，之后不可更改
  [propName: string]: any; // 额外的属性检查, 当参数不是引用而是参数对象时，多余的属性可以兼容不报错
}
function printLabel2(labelledObj: LabelledValue): {label: string, color: number} {
    let res = {label: labelledObj.label, color: labelledObj?.color??2323}
    console.log('aaa0', labelledObj.label);
    return res
}
let myObj2 = { size: 10, label: "aa", colour: 3 }; // 不会经过额外属性检查
// printLabel2(myObj2) // 使用引用传参，多余的size无问题，未报错
// printLabel2({ size:10, label: "aa", colour: 3 }) // 多余的不属于接口LabelledValue的属性会报错, 但如果有

let a6: LabelledValue = {label: 'a6', x: 3} // a6.x 不可更改
// a6.x = 5 // Cannot assign to 'x' because it is a read-only property.

// ReadonlyArray<T> 只读数组，数组创建后便不可更改

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(sor: string, sub: string) {
  let result = sor.search(sub);
  return result > -1;
}
let mySearch2: SearchFunc = function(sor, sub) {
  let result = sor.search(sub);
  return result > -1;
}
// console.log(mySearch('asdfas', 'f')) // true

// 可索引类型
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray = ['qinghao', 'xiaotong']
// console.log(myArray[1])

interface ifObj {
    [key: string]: object;
}
let myObj3: ifObj = {key1:{'key1-1': 'key1-1'}, key2:[1,2]}
let a7:object = myObj3['key1']
// console.log(a7)

interface ArrObj {
    [index: number]: object;
}
interface ARROBJ {

}
let arrobj: ArrObj = [{id: 1}, {id: 2}, {id: 3}]
let a8:object = arrobj[2]
// console.log(a8)

// 接口继承
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// 混合接口
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
    (): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) { console.log('a', start) };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let conunter = getCounter();
conunter(10);
conunter.reset();
conunter.interval = 5.0;
// console.log('aaa2333', conunter)

// 函数参数
function buildName(firstName: string, ...restOfName: any[]) : void{
    console.log(firstName, restOfName)
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie", {});


interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);