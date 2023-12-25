// 对象是JS除原始类型外最基本的数据结构
// 对象类型声明，使用大括号，内部声明属性和方法
const obj: {
	x: number;
	y: number;
	add(x: number, y: number): number;
	// 或者写成
	// add: (x:number, y:number) => number;
} = {
	x: 1,
	y: 1,
	add(x, y) {
		return x + y;
	},
};
// 读取对象类型可以使用. 或者中括号
// obj.x obj['y']

// 属性类型可以用分号或者逗号结尾
// 对象类型定义可以用type，也可以用interface，
type MyObj = {
	x: number;
	y: number;
};
interface MyObj2{
	x: number;
	y: number;
};

// TS不区分对象自身属性和继承属性，一律视为对象属性
interface MyInterface {
	toString(): string; // 继承的属性
	prop: number; // 自身的属性
}
const obj2: MyInterface = {
	// 正确
	prop: 123,
};


// 可选择属性
// 当某个属性是可忽略的，加个?即可
const obj3: {
	x: number;
	y?: number;
} = { x: 1 };
// 等同于下面案例，可选属性等同于undefined，可以为y赋值undefined，不过没有意义
// 但是如果编译时打开了ExactOptionalPropertyTypes和strictNullChecks ，可选属性就不能设置成undefined
const obj4: {
	x: number;
	y?: number | undefined;
} = { x: 1 };
obj4.y.toFixed(); // 报错，可选属性调用方法需要确认，可以使用如下调用
obj4.y?.toFixed(); // 正确

// 只读属性
// 和别的只读属性一样，属性前面加上 readonly关键字， 该属性就成了只读属性
// 只读属性只能在对象初始化期间赋值，此后就不能修改该属性
const person: {
	readonly age: number;
	height: number;
} = { age: 20, height: 180 };

person.height = 183; // 正常
person.age = 21; // 报错

// readonly 如果修饰的属性值是对象，那么该对象的属性可以修改，该对象禁止完全替换
interface Home {
	readonly resident: {
		name: string;
		age: number;
	};
}
const h2: Home = {
	resident: {
		name: "Vicky",
		age: 42,
	},
};
h2.resident.age = 32; // 正确
h2.resident = {
	name: "Kate",
	age: 23,
}; // 报错
// 对象只读 可以使用只读断言 as const
const myUser = {
	name: "Sabrina",
} as const;
myUser.name = "Cynthia"; // 报错
// as const 属于TS的类型推断，如果对象明确的声明了类型， TS会以声明为准

// 当两个变量对应同一个对象时，一个可写，一个不可写，从可写的变量修改属性，会影响到只读变量
interface Person2 {
	name: string;
	age: number;
}
interface ReadonlyPerson {
	readonly name: string;
	readonly age: number;
}
let w: Person2 = {
	name: "Vicky",
	age: 42,
};
let r: ReadonlyPerson = w;
w.age += 1;
r.age; // 43

// 属性名的索引类型
// 当对象的类型很多，一个一个的声明类型比较麻烦，或者无法事前知道对象具体有多少个属性，这时我们可以使用属性名表达式来描述类型
type MyObj5 = {
	[property: string]: string;
};
const obj5: MyObj5 = {
	foo: "a",
	bar: "b",
	baz: "c",
};
// property表示属性名，可以随便起名字，表示属性名是string类型，只要属性名为string，值也是string，就符合上面的类型声明
// 除string类型的属性名，还有number和symbol
type T1 = {
	[property: number]: number;
};
const arr1: T1 = [1, 2, 3];
arr1.length; // 报错
arr1.push(); // 报错
// 使用了属性名数值索引的数组，不能正常使用length属性和数组的方法，应谨慎使用
// 或者
const arr2: T1 = {
	0: 1,
	1: 2,
	2: 3,
};

type T2 = {
	[property: symbol]: string;
};

// 当同时声明了属性名索引，也声明了单个属性名，单个属性名需要符合属性名索引的类型
type MyType = {
	foo: boolean; // 报错 foo符合属性名的字符串索引，类型必须得是string才行
	[x: string]: string;
};
// 属性名的声明较为宽泛，约束较少，应谨慎使用，

// 解构赋值
// 解构赋值可以从对象中直接提取属性
const {
	id,
	name2,
	price,
}: {
	id: string;
	name2: string;
	price: number;
} = product; //从product对象中解构id,name2,price属性

// 解构赋值的属性重命名
// 需要注意解构对象中，冒号后面跟的是属性对应的新的变量名，不是类型
let obj6 = { x: "123", y: 123 };
let { x: foo, y: bar }: { x: string; y: number } = obj6;
// 等同于
let foo = obj6.x;
let bar = obj6.y;

// 结构类型
// 只要对象 B 满足 对象 A 的结构特征，TypeScript 就认为对象 B 兼容对象 A 的类型，这称为“结构类型”原则（structural typing）
type TypeA = {
	x: number;
};
type TypeB = {
	x: number;
	y: number;
};
const B: TypeB = {
	x: 1,
	y: 1,
};
const A: TypeA = B; // 正确
// 上面类型中，B兼容A的属性，B可以赋值给A，如此设计原因是为了兼容JS， JS不关心对象的严格相似，最有有所要求的属性，即可正常运行
// 类型B可以赋值给类型A，类型B就可以称为类型A的子类型，子类型兼容父类型

// 下面的错误就是因为结构类型，obj[n]被推断出any类型，
type myObj = {
	x: number;
	y: number;
};
function getSum(obj: myObj) {
	let sum = 0;
	for (const n of Object.keys(obj)) {
		const v = obj[n]; // 报错
		sum += Math.abs(v);
	}
	return sum;
}
const test = { x: 3, y: 4, z: "5" };
getSum(test); // 类型 test 属于类型myObj的子集，传进去后无法保证obj[n]值为number，被推断为了any


// 严格字面量检查
// 对象使用字面量表示，会触发TS的严格检查，如果字面量结构和类型定义不一样，会报错
const point: {
	x: number;
	y: number;
} = {
	x: 1,
	y: 1,
	z: 1, // 报错 
};
// 根据结构类型原则，可以使用变量绕过该错误
// 不过我们应该少使用这种写法，会让参数与类型无法完全匹配
const myPoint = {
    x: 1,
    y: 1,
    z: 1
  };
  
  const point2:{
    x:number;
    y:number;
  } = myPoint; // 正确
// 多余属性检查配置：suppressExcessPropertyErrors，关闭该选项就不会检查多余类型


// 空对象
// 空对象是TS特殊的一种值和类型，无法动态添加属性和方法
const obj7 = {};
obj7.prop = 123; // 报错
// 空对象可以使用继承的属性和方法
obj7.toString()
// 因为TS不允许动态添加属性，所以对象需要在声明的时候确认类型

// 空对象作为类型，是Object类型的简写，可以赋值除了null和undefined的各种类型，与Object相同。
// 空对象赋值时可以有多余的属性，但是不能读取，读取会报错
let data:{};
// 等同于
// let data:Object;

data = {};
data = { x: 1 };
data.x  // 报错
data = 'hello';
data = 2;
// 强制使用没有任何属性的对象,使用nerve
interface WithoutProperties {
    [key: string]: never;
  }
  // 报错
const bb:WithoutProperties = { prop: 1 };
