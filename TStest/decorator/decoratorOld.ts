export { }
// 本篇讲述旧版装饰器

// 装饰器环境
// 使用装饰器，需要打开如下配置，在tsconfig.json中配置
// {
//     "compilerOptions": {
//         "experimentalDecorators": true,
//         "emitDecoratorMetadata": true
//     }
// }

// 装饰器种类
// 装饰器根据装饰的不同对象，分为以下五类，
// 类装饰器(ClassDecorator)：用于类。
// 属性装饰器(PropertyDecorator)：用于属性。
// 方法装饰器(MethodDecorator)：用于方法。
// 存取器装饰器(AccessorDecorator )：用于类的 set 或 get 方法。
// 参数装饰器(ParameterDecorator)：用于方法的参数。
// 装饰器只能用于类，要么用于类的主体，要么用于类的内部成员

// 使用示例如下
// @ClassDecorator() // 类装饰器
// class A {
//   @PropertyDecorator() // 属性装饰器
//   name: string;

//   @MethodDecorator() // 方法装饰器
//   fly(
//     @ParameterDecorator() // 参数装饰器
//     meters: number
//   ) {
//     // code
//   }

//   @AccessorDecorator() // 存取器装饰器
//   get egg() {
//     // code
//   }
//   set egg(e) {
//     // code
//   }
// }



// 类装饰器
// 类装饰器本质是用于类的构造方法，类装饰器有唯一的参数为构造方法，可以在内部对其构造方法进行改造，类装饰器有返回值会替换掉原来的构造方法
// 源码中的类型定义
// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

const f: ClassDecorator = function (target: any) {
  console.log('hello decorator')
  return target;
}

@f
class A { }
// 输出：hello decorator

// 无需创建实例装饰器也会执行输出。装饰器是在代码加载阶段执行，且只执行一次，实际上装饰器是在编译阶段执行的函数

// 如果除了构造方法之外类装饰器还需要其余参数，可以用“工厂模式”将装饰器写在函数中
function factory(info: string) {
  console.log('received: ', info);
  return function (target: any) {
    console.log('apply decorator');
    return target;
  }
}

@factory('log something')
class B { }
// factory方法返回的才是装饰器，故需要先执行一次函数， 装饰@后面可以是函数名，可以是函数表达式


// 类装饰器可以没有返回值，如果有返回值会替代所装饰的类的构造函数，也就是可以返回一个新的类， 对原有的类进行修改或者扩展，类似于框架中的高阶组件
function decorator(target: any) {
  return class extends target {
    value = 123;
  };
}
@decorator
class Foo {
  value = 456;
}
const foo = new Foo();
console.log(foo.value); // 123
// 对decorator进行类型描述可以是如下
type Constructor = {
  new(...args: any[]): {}
};

function decorator2<T extends Constructor>(target: T) {
  return class extends target {
    value = 123;
  };
}



// 方法装饰器，装饰类的方法MethodDecorator
// 定义
declare type MethodDecorator = <T>(
  target: Object, 
  propertyKey: string | symbol, 
  descriptor: TypedPropertyDescriptor<T>
) => TypedPropertyDescriptor<T> | void;
// 接受三个参数
// target：（对于类的静态方法）类的构造函数，或者（对于类的实例方法）类的原型。
// propertyKey：所装饰方法的方法名，类型为string|symbol。
// descriptor：所装饰方法的描述对象。

// 如下添加log的方法装饰器
function logger(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function (...args: number[]) {
    console.log('params: ', ...args);
    const result = original.call(this, ...args);
    console.log('result: ', result);
    return result;
  }
}

class C {
  @logger
  add(x: number, y:number ) {
    return x + y;
  }
}

(new C()).add(1, 2)
// params:  1 2
// result:  3




// 属性装饰器
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// 属性装饰器接受两个参数
// target: 类的原型对象，
// propertyKey: 所装饰属性的属性名，
// 属性装饰器不需要返回值

function ValidRange(min:number, max:number) {
  return (target:Object, key:string) => {
    Object.defineProperty(target, key, {
      set: function(v:number) {
        if (v < min || v > max) {
          throw new Error(`Not allowed value ${v}`);
        }
      }
    });
  }
}
// 输出 Installing ValidRange on year
class Student {
  @ValidRange(1920, 2020)
  year!: number;
}
const stud = new Student();
// 报错 Not allowed value 2022 
// stud.year = 2022;
// console.log('aaastud', stud)

// 如上通过属性装饰对赋值进行限制




// 参数装饰器
// 用来装饰构造方法或者其他方法的参数，接受三个参数
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
// target: 类的构造方法
// propertyKey: 所装饰的方法的名字
// parameterIndex，当前参数在方法的参数序列位置(从0开始)
// 参数装饰器无需返回值
function log(
  target: Object,
  propertyKey: string|symbol,
  parameterIndex: number
) {
  console.log(`${String(propertyKey)} NO.${parameterIndex} Parameter`);
}

class D {
  member(
    @log x:number,
    @log y:number
  ) {
    console.log(`member Parameters: ${x} ${y}`);
  }
}

const d = new D();
d.member(5, 5);
// member NO.1 Parameter
// member NO.0 Parameter 
// member Parameters: 5 5 




// 装饰器执行顺序
// 装饰器在代码解析时执行切只执行一次，执行顺序如下
// 1、实例相关的装饰器。
// 2、静态相关的装饰器。
// 3、构造方法的参数装饰器。
// 4、类装饰器。

function fn(key:string):any {
  return function () {
    console.log('执行：', key);
  };
}

@fn('类装饰器')
class E {
  @fn('静态方法')
  static method() {}
  @fn('静态方法2')
  static method2() {}
  
  @fn('实例方法')
  method() {}
  @fn('实例方法2')
  @fn('实例方法装饰2-2')
  method2() {

  }

  constructor(@fn('构造方法参数') foo:any) {}
}
// 执行： 实例方法
// 执行： 实例方法装饰2-2
// 执行： 实例方法2
// 执行： 静态方法
// 执行： 静态方法2
// 执行： 构造方法参数
// 执行： 类装饰器


// 当有多个实例方法或静态方法，按照装饰器的执行顺序从上到下依次执行
// 一个方法可以用多个装饰器，从下往上执行，顺序加载，逆序执行



// 关于装饰器不能作用于函数是因为在JS中，函数会提升，无论函数代码在什么位置，都会提升到代码顶部
// 而类不存在这样的问题，所以可以用于类

// 多个装饰器应用于同一目标，可以写在一行也可以写在多行
// @f @g x
// @f
// @g
// x