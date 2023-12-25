export { }
// Enum 枚举，TS新增的数据类型，可看作是一类值的集合，既是类型，也是值
enum Color {
    Red,     // 0
    Green,   // 1
    Blue     // 2
}
// 如果不指定值，默认从0开始赋值，编译后生成属性和值正反赋值的对象，所以枚举值可以通过成员值获得成员名，
// 正反映射只有在值为数字才会发生，当值手动指定为字符串时不会反向映射
// 枚举编译后会留在代码中
// var Color;
// (function (Color) {
//     Color[Color["Red"] = 0] = "Red";
//     Color[Color["Green"] = 1] = "Green";
//     Color[Color["Blue"] = 2] = "Blue"; // 2
// })(Color || (Color = {}));
// 使用时和对象调用属性一致，可以通过点运算符和方括号运算符
let c: Color = Color.Green; // 1
// 等同于
let c2: number = Color['Green']; // 1
// Enum结构本身就是类型，变量即可以写成Color也可以写成number，Color更具有语义化

// Enum结构适合的场景是注重名字不注重值，成员名更重要，如下
enum Operator {
    ADD,
    DIV,
    MUL,
    SUB
}

function compute(op: Operator, a: number, b: number) {
    switch (op) {
        case Operator.ADD:
            return a + b;
        case Operator.DIV:
            return a / b;
        case Operator.MUL:
            return a * b;
        case Operator.SUB:
            return a - b;
        default:
            throw new Error('wrong operator');
    }
}
compute(Operator.ADD, 1, 3) // 4

// Enum 成员的值
// Enum默认不用赋值，会默认从零递增，也可以赋值具体的数字或者字符串，但是不能为Bigint
enum Color2 {
    Red,
    Green,
    Blue
}
Color2.Red = 4 // 报错
// 值设置之后不能再更改，值是只读的，所以Enum 可以被 对象的as const断言取代
enum Color3 {
    Red = 1,
    Green = 2,
    Blue = 3
}
enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

// 多个同名Enum结构会自动合并，合并时只能首个成员忽略初始值
enum Foo {
    A,
}
enum Foo {
    B = 1,
}
enum Foo {
    C = 2,
}
// 等同于
enum Foo {
    A,
    B = 1，
    C = 2
}


// keyof运算符
// 可以使用keyof运算符取出Enum结构的所有成员，作为联合类型返回
enum MyEnum {
    A = 'a',
    B = 'b'
}
// 'A'|'B'
type Foo2 = keyof typeof MyEnum;
// 可以使用in运算符取出Enum的成员值
enum MyEnum3 {
    A = 'a',
    B = 'b'
  }
// { a: any, b: any }
type Foo3 = { [key in MyEnum]: any };






