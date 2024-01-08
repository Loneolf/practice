export { }

const simpleDecorator: ClassDecorator = function (target: object) {
    console.log(target);
}

@simpleDecorator
class A { } // "hi, this is class A"



function simpleDecorator2<t>(target:t) {
    console.log(target);
}
@simpleDecorator2
class b { } // "hi, this is class A"