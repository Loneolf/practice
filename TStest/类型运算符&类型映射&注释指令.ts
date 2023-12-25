export { }
// TS 类型运算符
// 我们可以使用TS提供的各种类型运算符，对已有的类型进行计算，得到新类型

// keyof
// keyof单目运算符，用于提取对象的属性名，拼装成联合类型
type MyObj = {
    foo: number,
    bar: string,
};
type Keys = keyof MyObj; // 'foo'|'bar'

interface T {
    0: boolean;
    a: string;
    b(): void;
}
type KeyT = keyof T; // 0 | 'a' | 'b'

// 对象键名只有三种类型，任意对象的键名联合类型为string/number/symbol
type KeyT2 = keyof any; // string | number | symbol

// object没有自身的属性，没有键名
type KeyT3 = keyof object;  // never

// 对象采用索引形式，keyof返回属性名的索引类型
interface T2 {
    [prop: number]: number;
}
type KeyT4 = keyof T; // number

interface T3 {
    [prop: string]: number;
}
// 属性名为字符串时包含了属性名为数值的情况
type KeyT5 = keyof T3; // string|number

// keyof 运算数组和元祖，会返回数组的所有键名，包括数字建明和继承的键名
type Result = keyof ['a', 'b', 'c']; // number | "0" | "1" | "2" | "length" | "pop" | "push" | ...

// keyof运算联合类型，返回成员共有的键名， 交叉类型返回所有键名
type A = { a: string; z: boolean };
type B = { b: string; z: boolean };
type KeyT6 = keyof (A | B); // 'z'

type A2 = { a: string; x: boolean };
type B2 = { b: string; y: number };
type KeyT7 = keyof (A2 & B2); // 'a' | 'x' | 'b' | 'y'
// 相当于
// (A2 & B2) === keyof A2 | keyof B2


// keyof 使用场景
// keyof 可以精确表达对象的属性类型
// 取出对象某个指定属性的值，使用keyof更加的准确
// JS方式
function prop(obj, key) {
    return obj[key];
}
// TS
function prop<Obj, K extends keyof Obj>(obj: Obj, key: K): Obj[K] {
    return obj[key];
}

// keyof还可以用于属性映射，将一个类型所有属性逐一映射为其它值
type NewProps<Obj> = {
    [Prop in keyof Obj]: boolean;
};
// 用法
type MyObj2 = { foo: number; };
// 等于 { foo: boolean; }, 将NewProps的类型都由number类型改为了boolean类型
type NewObj = NewProps<MyObj2>;

// 去掉readonly 修饰符
type Mutable<Obj> = {
    -readonly [Prop in keyof Obj]: Obj[Prop]; // -readonly表示去除这些属性的只读特性, +readonly则是添加只读属性
};
type MyObj3 = {
    readonly foo: number;
}
// 等于 { foo: number; }
type NewObj3 = Mutable<MyObj3>;

// 让可选属性变为必有属性
type Concrete<Obj> = {
    [Prop in keyof Obj]-?: Obj[Prop]; // -?表示去除可选属性设置，+?表示添加可选属性设置
};
type MyObj4 = {
    foo?: number;
}
// 等于 { foo: number; }
type NewObj4 = Concrete<MyObj4>;


// in 运算符
// JS中的in用于判断对象是否包含某个属性名，TS中则是用于取出(遍历)联合类型的每一个成员，如上面用的案例[Prop in keyof Obj]
type U = 'a' | 'b' | 'c';
type Foo = {
    [Prop in U]: number;
};
// 等同于
type Foo = {
    a: number,
    b: number,
    c: number
};
// JS中用法
const obj = { a: 123 };
if ('a' in obj) console.log('found a');


// 方括号运算符[]
// 方括号运算符用于取出对象的键值类型，
type Person = {
    age: number;
    name: string;
    alive: boolean;
};

type Age = Person['age']; // Age 的类型是 number
// 方括号里是联合类型，返回的也会是联合类型
type TP = Person['age' | 'name']; // number|string
type TPS = Person[keyof Person]; // number|string|boolean
type TE = Person['notExisted']; // 报错, 不存在的属性会报错

// 方括号不能有值得运算
const MyArray = ['a', 'b', 'c'];
const key = 'age';
type Age2 = Person[key]; // 报错
type Age3 = Person['a' + 'g' + 'e']; // 报错

// 方括号参数可以是属性名的索引类型
type Obj = {
    [key: string]: number,
};
type Tn = Obj[string]; // number


// extends...?: 条件运算符
// 根据当前类型是否符合某种条件，返回不同的类型
T extends U ? X : Y // T是否可以赋值给U，可以表达式结果为X，否则为Y

type T = 1 extends number ? true : false; // true

interface Animal {
    live(): void;
}
interface Dog extends Animal {
    woof(): void;
}
type T1 = Dog extends Animal ? number : string; // number
type T2 = RegExp extends Animal ? number : string; // string


// infer 关键字
// 用来定义泛型中推断出来的类型参数，通常和条件运算符一起使用，用于extends关键字后面的父类型中
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
type Str = Flatten<string[]>; // string
type Num = Flatten<number>; // number
// 不使用infer则需要两个类型参数
type Flatten2<Type, Item> = Type extends Array<Item> ? Item : Type;

// 使用info通过正则匹配提取类型参数
type Str2 = 'foo-bar';
type Bar = Str2 extends `foo-${infer rest}` ? rest : never // 'bar'


// is 运算符
// 函数返回布尔值的时候，可以使用is运算符，限定返回值与参数之间的关系。
function isFish(pet: Fish | Bird): pet is Fish {
    // 参数pet类型为Fish，返回true，否则返回false
    return (pet as Fish).swim !== undefined;
}

// is运算符通常用于描述函数的返回值类型，是否参数符合某种类型
type A = { a: string };
type B = { b: string };
function isTypeA(x: A | B): x is A {
    if ('a' in x) return true;
    return false;
}

// 模板字符串
// TS可以使用模板字符串构建类型，相当于内部可以引用其他类型
type World = "world";
type Greeting = `hello ${World}`; // "hello world"

// 模板字符串只能引用 string、number、bigint、boolean、null、undefined，除此之外都会报错
type Num2 = 123;
type Obj2 = { n: 123 };
type T7 = `${Num2} received`; // 正确
type T8 = `${Obj2} received`; // 报错

// 模板字符串可以展开联合类型也可以交叉展开两个类型
type T = 'A' | 'B';
type U = `${T}_id`; // "A_id"|"B_id"

type T = 'A' | 'B';
type U = '1' | '2';
type V = `${T}${U}`; // 'A1'|'A2'|'B1'|'B2'








// 类型映射
// 将一种类型按照映射规则，转换成另一种类型，通常用于对象类型
// 上面案例中类型运算符keyof 写有部分案例
// 当两个对象属性结构一致，但是属性类型不一致，属性多时，逐个书写较为繁琐，这时我们可以使用类型映射，从类型A得到类型B
type A = {
    foo: number;
    bar: number;
};
type B = {
    [prop in keyof A]: string;
};
// 使用泛型，增加代码复用性
type ToBoolean<Type> = {
    [Property in keyof Type]: boolean;
};
// 如上得到的B的类型，所有属性都是string

// 可以通过增加修饰符，更改原始属性的可选，只读属性
// +修饰符：写成+?或+readonly，为映射属性添加?修饰符或readonly修饰符。 +可以省略
// –修饰符：写成-?或-readonly，为映射属性移除?修饰符或readonly修饰符。
type Optional<Type> = {
    [Prop in keyof Type]+?: Type[Prop];  // 添加可选属性
};
type Concrete2<Type> = {
    [Prop in keyof Type]-?: Type[Prop]; // 移除可选属性
};
type CreateImmutable<Type> = {
    +readonly [Prop in keyof Type]: Type[Prop]; // 添加 readonly
};
type CreateMutable<Type> = {
    -readonly [Prop in keyof Type]: Type[Prop]; // 移除 readonly
};

// 键名重映射
// 可以在映射键名的时候更改键名 as + 新类型，通常新类型为模板字符串，对原始类型进行操作
type A = {
    foo: number;
    bar: number;
};
type B = {
    [p in keyof A as `${p}ID`]: number;
};
// 等同于
type B = {
    fooID: number;
    barID: number;
};
// 如上，在映射过程中，将A的键名更改掉，加上了字符串ID

// 键名重映还可以过滤某些属性
type User = {
    name: string,
    age: number
}
type Filter<T> = {
    [K in keyof T as T[K] extends string ? K : never]: string
}
type FilteredUser = Filter<User> // { name: string }
// 通过never，将不符合string类型的属性过滤掉









// 注释指令
// 采用JS双斜杠注释的形式，向编译器发出命令
// @ts-nocheck
// 告诉编辑器不对当前脚本进行类型检查，可以用于TS，也可以用于JS，该指令只能写在脚本的顶部，写在代码后面则不会生效
// @ts-nocheck
const element = document.getElementById(123);

// @ts-check
// 和上面相对应的在脚本顶部添加// ts-check，会告诉编辑器对其进行类型检查，无论是否启用 checkJS 选项

// @ts-ignore
// 告诉编辑器不对下一行代码进行类型检查，可以用于TS、JS 脚本，相对来说该指令项目中较多使用

// @ts-expect-error
// 主要用在测试用例，当下一行有类型错误时，它会压制 TypeScript 的报错信息（即不显示报错信息），把错误留给代码自己处理
// 如果下一行没有类型错误，// @ts-expect-error则会显示一行提示。`Unused '@ts-expect-error' directive.`

// JSDoc
// TS 直接处理JS文件，当无法推断出类型，会使用JS脚本里面的JSDoc 注释
/**
 * @param {string} somebody
 */
function sayHello(somebody) {
    console.log('Hello ' + somebody);
}
// JSDoc必须/**开始，JSDoc必须与描述代码出于相邻位置，并且注释在上，代码在下

// TS支持大部分JSDoc声明，简单介绍几个
/**
 * @typedef {(number | string)} NumberLike  // type NumberLike = string | number;
 * @type {string} // 可以直接定义后面的变量类型
 * @param {string}  x // 定义函数参数
 * @param {string} [x="bar"] // 加默认值
 * @return {boolean} // 指定返回类型
 * @extends {Base} // 定义继承的基类
 * @public、@protected、@private分别指定类的公开成员、保护成员和私有成员。
 * @readonly 指定只读成员。
 * 
 */














