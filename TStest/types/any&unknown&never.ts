let x:any; // 可以赋值任意值
x = 1; // 正确
x = 'foo'; // 正确
x = true; // 正确

// 一旦设置为any，相当于关闭了该变量的类型检查，只要语法正确，就不会报错
let y:any = 'hello';
y(1) // 不报错
y.foo = 100; // 不报错

function add(x, y) {
    return x + y;
}
add(1, [1, 2, 3]) // 不报错

// any的污染问题，因为可以任意赋值，会污染正常的变量
let a:any = 'hello';
let b:number;
b = a; // 不报错
b * 123 // 不报错
b.toFixed() // 不报错








// unknown也可以赋值任意值
let s:unknown;

s = true; // 正确
s = 42; // 正确
s = 'Hello World'; // 正确

// 但是不能将unknown赋值给正常类型的变量
let v:unknown = 123;
let v1:boolean = v; // 报错
let v2:number = v; // 报错

// 不能直接调用unknown的属性和方法
let v4:unknown = { foo: 123 };
v4.foo  // 报错
let v5:unknown = 'hello';
v5.trim() // 报错
let v6:unknown = (n = 0) => n + 1;
v6() // 报错

// unknown类型的变量，只能进行比较(==,===,!=,!==,||,&&,?)、取反(!)、typeof和instanceof运算
let e:unknown = 1;
e + 1 // 报错
e === 1 // 正确

// 类型缩小后可以正常运算
let h:unknown = 1;
if (typeof h === 'number') {
  let r = h + 10; // 正确
}
let i:unknown = 'hello';
if (typeof i === 'string') {
  i.length; // 正确
}











// never 不存在的类型，可用于错误处理，联合类型
function handleError(error: Error): never {
    throw error;
}

type UnionType = string | number | boolean;
function handleUnionType(value: UnionType): UnionType {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'boolean') {
    return!value;
  } else {
    throw new Error('无效的联合类型值');
  }
}