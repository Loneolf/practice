export { }
// 泛型
// 简介，当函数返回值类型与参数类型相关，不用具体类型和any表示，我们可以使用泛型generics来实现
// 泛型就是类型参数, 返回值类型与参数类型相关,或者不需要表明具体类型,但是内部使用相同类型的参数
function getFirst<T>(arr: T[]): T {
    return arr[0];
}
// 上面案例<T>就是类型参数，参数放在尖括号里面， T 可以随意取值，一般是用Type的简写T
// 上面参数就是类型T的数组，返回类型为T，调用时可以自己指定类型，也可以让TS自己进行类型推断
getFirst<number>([1, 2, 3])
getFirst([1, 2, 3])

// 类型推断失灵时就需要手动指定入参类型
function comb<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}
comb([1, 2], ['a', 'b']) // 报错
comb<number | string>([1, 2], ['a', 'b']) // 正确

// 多个类型参数
function map<T, U>(
    arr: T[],
    f: (arg: T) => U
): U[] {
    return arr.map(f);
}
map<string, number>(
    ['1', '2', '3'],
    (n) => parseInt(n)
); // 返回 [1, 2, 3]

// 泛型可以理解成类型逻辑，需要类型参数表达，使输入类型和输出类型可以建立对应关系


// 泛型的写法
// 泛型主要用在函数、接口、类和别名


// 函数泛型写法
// 正常function定义的泛型函数
function id<T>(arg: T): T {
    return arg;
}
// 变量定义的泛型函数
let myId: <T>(arg: T) => T = id;
let myId2: { <T>(arg: T): T } = id;

// 接口泛型写法
interface Box<Type> {
    contents: Type;
}
let box: Box<string> = {
    contents: 'asdfas'
}

interface Comparator<T> {
    compareTo(value: T): number;
}
class Rectangle implements Comparator<Rectangle> {
    compareTo(value: Rectangle): number {
        // ...
        return 34
    }
}

// 函数接口泛型写法，不指定具体的函数
interface Fn {
    <Type>(arg: Type): Type;
}
function id2<Type>(arg: Type): Type {
    return arg;
}
let myId3: Fn = id2;

// 类的泛型写法
// 泛型类的类型参数在类名后面
class Pair<NumType> {
    value!: NumType;
    add!: (x: NumType, y: NumType) => NumType;

    // 需要注意的是泛型类是类的实例，不包括静态属性和静态方法
    static data: NumType;  // 报错
}
// 继承时要给出具体的类型，所以写成any
class B extends Pair<any> {
}
let foo = new Pair<number>();
foo.value = 0;
foo.add = function (x, y) {
    return x + y;
};

// 类型别名的泛型写法
type Nullable<T> = T | undefined | null;

type Container<T> = { value: T };
const a: Container<number> = { value: 0 };
const b: Container<string> = { value: 'b' };
// 树形结构泛型
type Tree<T> = {
    value: T;
    left: Tree<T> | null;
    right: Tree<T> | null;
};

// 类型参数默认值
// 类型参数可以设置默认自，当没有给出类型参数的值会用默认值
function getFirst2<T = string>(arr: T[]): T {
    return arr[0];
}
getFirst2([1, 2, 3]) // 正确，有具体类型时会覆盖默认类型

class Generic<T = string> {
    list: T[] = []
    add(t: T) {
        this.list.push(t)
    }
}
//   实例化是没有给出具体的类型，会按照默认类型判断
const g = new Generic();
g.add(4) // 报错
g.add('hello') // 正确

// 多个类型参数时，有默认值的类型参数需要放在后面，有默认值代表可选参数
// <T = boolean, U> // 错误
// <T, U = boolean> // 正确


// 数组的泛型表示
// TS内部，Array是一个泛型接口，类型基本如下
interface Array<Type> {
    length: number;
    pop(): Type | undefined;
    push(...items: Type[]): number;
    // ...
}
// 像是Array<T>,Array<number>,Array<string>都是泛型写法，number[], string[]是其简写形式
// 只读数组的泛型写法为ReadonlyArray<T>
function doStuff(values: ReadonlyArray<string>) {
    values.push('hello!');  // 报错
}
// TS内部结构的Map，Set，Promise都是泛型接口Map<K, V>、Set<T>和Promise<T>


// 类型参数的约束
// 类型参数可以使用extends进行条件约束
// <TypeParameter extends ConstraintType>
function comp<T extends { length: number }>(a: T, b: T) {
    if (a.length >= b.length) {
        return a;
    }
    return b;
}
comp([1, 2], [1, 2, 3]) // 正确
comp('ab', 'abc') // 正确
comp(1, 2) // 报错
// 类型参数可以同时设置约束条件和默认值
type Fn2<A extends string, B extends string = 'world'> =  [A, B];
type Result = Fn2<'hello'> // ["hello", "world"]


// 类型参数的使用注意点
// 1、尽量少用泛型，泛型会加大代码复杂性，难读难写，如无必要，不用泛型
// 2、类型参数越少越好
// 3、类型参数至少出现两次，如果只出现一次，很可能不是必要的









