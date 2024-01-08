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
// 装饰器只能用于类，要么用于类的主题，要么用于类的内部成员

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
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

const f:ClassDecorator = function(target:any) {
    console.log('apply decorator')
    return target;
  }
  
  @f
  class A {}
  // 输出：apply decorator







































