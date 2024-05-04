"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
function simpleDecorator(value, context) {
    console.log("hi, this is ".concat(context.kind, " ").concat(context.name));
    return value;
}
var A = function () {
    var _classDecorators = [simpleDecorator];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var A = _classThis = /** @class */ (function () {
        function A_1() {
        }
        return A_1;
    }());
    __setFunctionName(_classThis, "A");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        A = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return A = _classThis;
}(); // "hi, this is class A"
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
function decorator(value, context) {
    // ...
}
function Greeter(value, context) {
    // value.prototype.greet = function () {
    //     console.log('你好');
    // };
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.greet = function () {
            console.log('你好');
        };
        return class_1;
    }(value));
}
var User = function () {
    var _classDecorators = [Greeter];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var User = _classThis = /** @class */ (function () {
        function User_1() {
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
var u = new User();
u.greet(); // "你好"
function countInstances(value, context) {
    var instanceCount = 0;
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            instanceCount++;
            _this.count = instanceCount;
            return _this;
        }
        return class_2;
    }(value));
}
var MyClass = function () {
    var _classDecorators = [countInstances];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MyClass = _classThis = /** @class */ (function () {
        function MyClass_1() {
        }
        return MyClass_1;
    }());
    __setFunctionName(_classThis, "MyClass");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MyClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyClass = _classThis;
}();
var inst1 = new MyClass();
inst1 instanceof MyClass; // true
inst1.count; // 1
function customElement(name) {
    return function (value, context) {
        console.log('aaaa2333');
        context.addInitializer(function () {
            customElements.define(name, value);
        });
    };
}
var MyComponent = function () {
    var _classDecorators = [customElement("hello-world")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = HTMLElement;
    var MyComponent = _classThis = /** @class */ (function (_super) {
        __extends(MyComponent_1, _super);
        function MyComponent_1() {
            return _super.call(this) || this;
        }
        MyComponent_1.prototype.connectedCallback = function () {
            this.innerHTML = "<h1>Hello World</h1>";
        };
        return MyComponent_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MyComponent");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MyComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyComponent = _classThis;
}();
