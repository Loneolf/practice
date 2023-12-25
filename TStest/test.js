var MyEnum;
(function (MyEnum) {
    MyEnum["A"] = "a";
    MyEnum["B"] = "b";
})(MyEnum || (MyEnum = {}));
// 可以使用in运算符取出Enum的成员值
var MyEnum3;
(function (MyEnum3) {
    MyEnum3["A"] = "a";
    MyEnum3["B"] = "b";
})(MyEnum3 || (MyEnum3 = {}));
