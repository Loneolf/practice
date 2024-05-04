export { }

// 本篇讲述新版装饰器，也就是标准语法
// TS早期就支持装饰器，ESCMAScript标准通过的语法标准与早期TS支持的语法有较大差异
// 在TS 5.0版本同时支持两种装饰器语法，标准语法可以直接使用，传统语法需要打开--experimentalDecorators编译参数
// 若TS5.0语法 vscode提示不支持，更新VScode版本即可，VScode安装包内内置有TS，路径为Microsoft VS Code\resources\app\extensions\node_modules\typescript\lib，直接更改该目录下的TS文件为5.0版本的也可以

// 简介
// 装饰器的语法特征
// （1）第一个字符（或者说前缀）是@，后面是一个表达式。
// （2）@后面的表达式，必须是一个函数（或者执行后可以得到一个函数）。
// （3）这个函数接受所修饰对象的一些相关值作为参数。
// （4）这个函数要么不返回值，要么返回一个新对象取代所修饰的目标对象。

// 装饰器是一种特殊类型的生命， 可以附加到类声明、方法、访问符、属性或参数上、在编译时执行只执行一次
// 装饰器可以为代码添加新功能而不影响代码的结构和逻辑，使代码可读性，可维护性和扩展性提高
function simpleDecorator(value: any, context: any) {
    console.log(`hi, this is ${context.kind} ${context.name}`);
    return value;
}

@simpleDecorator
class A { } // "hi, this is class A"
// 如上装饰器simpleDecorator对类A进行装饰，无论A有没有实例，都会执行


// 装饰器的结构
// 装饰器函数的类型定义如下
// type Decorator = (
//     value: DecoratedValue,
//     context: {
//         kind: string;
//         name: string | symbol;
//         addInitializer?(initializer: () => void): void;
//         static?: boolean;
//         private?: boolean;
//         access: {
//             get?(): unknown;
//             set?(value: unknown): void;
//         };
//         metadata: DecoratorMetadata;
//     }
// ) => void | ReplacementValue;

// 装饰器函数接收value(装饰对象)和context(上下文对象)两个参数，其中TS提供原生接口ClassMethodDecoratorContext描述上下文对象，
function decorator(value: any, context: ClassMethodDecoratorContext) {
    // ...
}
// context对象属性，根据装饰对象不同而不同，其中只有kind和name必有，其余均是可选
// kind:字符串，表示修饰对象的类型，取值为  class | method | getter | setter | field | accessor
// name: 字符串或者Symbol值，装饰对象的名字，如类名、属性名等
// addInitializer(): 函数，添加类的初始化逻辑，无返回值
// private: boolean,所装饰的对象是否为类的私有成员
// static：布尔值，表示所装饰的对象是否为类的静态成员。
// access：一个对象，包含了某个值的 get 和 set 方法。
// metadata: 装饰器元数据，元数据: 用于描述数据的数据，5.2版本新增

// 根据kind，标准装饰器可分为类装饰器、方法装饰器、属性装饰器、getter\setter装饰器、accessor装饰器



// 类装饰器
type ClassDecorator = (
    value: Function,
    context: {
        readonly kind: 'class';
        readonly name: string | undefined;
        addInitializer(initializer: () => void): void;
        readonly metadata: DecoratorMetadata;
    }
) => Function | void;

// 类装饰器接受两个参数，value为类本身，context是上下文对象，其中kind为固定值class，metadata是装饰器元数据，任意装饰器都存在
// 类装饰器用于对类进行操作，可以不返回值，也可以返回函数替代当前类的构造方法，还可以返回新的类替代原来的类


// 添加方法
interface IGreeter {
    greet: () => void
}
interface User extends IGreeter { }

function Greeter(value: any, context: any) {
    // value.prototype.greet = function () {
    //     console.log('你好');
    // };
    return class extends value {
        greet() {
            console.log('你好')
        }
    }
}

@Greeter
class User { }

let u = new User();
u.greet(); // "你好"
//  通过装饰器给类添加方法会有TS类型检测问题，可以使用接口技巧修复，


// 返会新的类替代原来装饰的类
interface ICount {
    count: number
}
interface MyClass extends ICount { }
function countInstances(value: any, context: any) {
    let instanceCount = 0;
    return class extends value {
        count: number
        constructor(...args: any[]) {
            super(...args);
            instanceCount++;
            this.count = instanceCount;
        }
    };
}
@countInstances
class MyClass { }

const inst1 = new MyClass();
inst1 instanceof MyClass // true
inst1.count // 1

// context中addInitializer方法用来定义类的初始化函数，在类完全定义结束后执行
// function customElement(name: string) {
//     return <Input extends new (...args: any) => any>(
//         value: Input,
//         context: ClassDecoratorContext
//     ) => {
//         context.addInitializer(function () {
//             customElements.define(name, value);
//         });
//     };
// }
// @customElement("hello-world")
// class MyComponent extends HTMLElement {
//     constructor() {
//         super();
//     }
//     connectedCallback() {
//         this.innerHTML = `<h1>Hello World</h1>`;
//     }
// }
// 为类注册指定名称的自定义HTML元素



// 方法装饰器
type ClassMethodDecorator = (
    value: Function,
    context: {
        readonly kind: 'method';
        readonly name: string | symbol;
        readonly static: boolean;
        readonly private: boolean;
        readonly access: { get: () => unknown };
        addInitializer(initializer: () => void): void;
        readonly metadata: DecoratorMetadata;
    }
) => Function | void;

//   kind：值固定为字符串method，表示当前为方法装饰器。
//   name：所装饰的方法名，类型为字符串或 Symbol 值。
//   static：布尔值，表示是否为静态方法。
//   private：布尔值，表示是否为私有方法。
//   access：对象，包含了方法的存取器，但是只有get()方法用来取值，没有set()方法进行赋值。
//   addInitializer()：为方法增加初始化函数。

// 方法装饰器会改写类的原始方法,如果方法装饰器返回一个新的函数，会替代所装饰的函数
function replaceMethod(value: any, context: any) {
    return function () {
        // @ts-ignore
        return `How are you, ${(this).name}?`;
    }
}
class Person {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    @replaceMethod
    hello() {
        return `Hi ${this.name}!`;
    }
}
const robin = new Person('Robin');
console.log(robin.hello()) // 'How are you, Robin?'

// 利用方法装饰器，对类的方法进行延迟执行
function delay(milliseconds: number = 0) {
    return function (value: any, context: ClassMethodDecoratorContext) {
        if (context.kind === "method") {
            return function (...args: any[]) {
                setTimeout(() => {
                    // @ts-ignore
                    value.apply(this, args);
                }, milliseconds);
            };
        }
    };
}

class Logger {
    @delay(3000)
    log(msg: string) {
        console.log(`${msg}`);
    }
}

let logger = new Logger();
logger.log("Hello World");



// 属性装饰器
type ClassFieldDecorator = (
    value: undefined,
    context: {
        readonly kind: 'field';
        readonly name: string | symbol;
        readonly static: boolean;
        readonly private: boolean;
        readonly access: { get: () => unknown, set: (value: unknown) => void };
        addInitializer(initializer: () => void): void;
        readonly metadata: DecoratorMetadata;
    }
) => (initialValue: unknown) => unknown | void;
// 属性装饰器的第一个参数为undefined,不能从value获取所装饰属性的值
// 属性装饰器可以不返回值，但是返回值的话需要返回函数，该函数会自动执行，用于对装饰属性初始化，参数为装饰属性的初始值，返回值为最终值

function logged(value: undefined, context: ClassFieldDecoratorContext) {
    const { kind, name } = context;
    if (kind === 'field') {
        return function (initialValue: string) {
            console.log(`initializing ${String(name)} with value ${initialValue}`);
            return initialValue + '_';
        };
    }
}

class Color {
    @logged name = 'green';
}

const color = new Color(); // "initializing name with value green"
color.name // green_


// getter、setter装饰器
// assess略有不同，getter装饰器只有get，setter装饰器只有set
// 这两个装饰器要么不返回值，返回的话必须返回函数，取代原有的取值器或者存值器
type ClassGetterDecorator = (
    value: Function,
    context: {
        readonly kind: 'getter';
        readonly name: string | symbol;
        readonly static: boolean;
        readonly private: boolean;
        readonly access: { get: () => unknown };
        addInitializer(initializer: () => void): void;
    }
) => Function | void;

type ClassSetterDecorator = (
    value: Function,
    context: {
        readonly kind: 'setter';
        readonly name: string | symbol;
        readonly static: boolean;
        readonly private: boolean;
        readonly access: { set: (value: unknown) => void };
        addInitializer(initializer: () => void): void;
    }
) => Function | void;


// accessor 装饰器
// accessor修饰符是装饰器语法引入的新的属性修饰符，作用是为类属性自动生成取值器和存值器
// 使用时需要将tsconfig的target改为ES2015及以上版本才行
class C {
    accessor x = 1;
}
// 等同于
class C2 {
    #x = 1;
    get x() {
        return this.#x;
    }
    set x(val) {
        this.#x = val;
    }
}
// accessor还可以与静态属性和私有属性一起使用

// 类型如下
type ClassAutoAccessorDecorator = (
    value: {
        get: () => unknown;
        set: (value: unknown) => void;
    },
    context: {
        readonly kind: "accessor";
        readonly name: string | symbol;
        readonly access: { get(): unknown, set(value: unknown): void };
        readonly static: boolean;
        readonly private: boolean;
        addInitializer(initializer: () => void): void;
    }
) => {
    get?: () => unknown;
    set?: (value: unknown) => void;
    init?: (initialValue: unknown) => unknown;
} | void;
// 装饰器参数value，是包含get()和set()的对象，可以不返回值，也可以反悔新的对象取代原有的set()、get()方法，还可以反悔init方法，用于改变私有属性的值
class C3 {
    @logged3 accessor x = 1;
}
function logged3(value: any, { kind, name }: { kind: string, name: string }) {
    if (kind === "accessor") {
        let { get, set } = value;
        return {
            get() {
                console.log(`getting ${name}`);
                return get.call(this);
            },
            set(val: number) {
                console.log(`setting ${name} to ${val}`);
                return set.call(this, val);
            },
            init(initialValue: number) {
                console.log(`initializing ${name} with value ${initialValue}`);
                return initialValue;
            }
        };
    }
}
let c3 = new C3();
c3.x; // getting x
c3.x = 123; // setting x to 123
// 装饰器@logged3为x的存值器和取值器加上日志输出


// 装饰器输出顺序
// 装饰器执行分两个阶段
// （1）评估（evaluation）：计算@符号后面的表达式的值，得到的应该是函数。
// （2）应用（application）：将评估装饰器后得到的函数，应用于所装饰对象。
// 应用装饰器的顺序依次为方法装饰器、属性装饰器、类装饰器

function d(str: string) {
    console.log(`评估 @d(): ${str}`);
    return (
        value: any, context: any
    ) => console.log(`应用 @d(): ${str}`);
}
function log(str: string) {
    console.log(str);
    return str;
}
@d('类装饰器')
class T {
    @d('静态属性装饰器')
    static staticField = log('静态属性值');

    @d('原型方法')
    [log('计算方法名')]() { }

    @d('实例属性')
    instanceField = log('实例属性值');

    @d('静态方法装饰器')
    static fn() { }
}

// 评估 @d(): 类装饰器
// 评估 @d(): 静态属性装饰器
// 评估 @d(): 原型方法
// 计算方法名
// 评估 @d(): 实例属性
// 评估 @d(): 静态方法装饰器
// 应用 @d(): 静态方法装饰器
// 应用 @d(): 原型方法
// 应用 @d(): 静态属性装饰器
// 应用 @d(): 实例属性
// 应用 @d(): 类装饰器
// 静态属性值

// 评估时，按照出现的顺序执行，一个方法火属性有多个装饰器，内层的装饰器先执行，然后是外层装饰器










