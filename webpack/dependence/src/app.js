import './index.css';
import lodash from 'lodash'

import math from '@/util/math'
console.log('add', math)


class AA {
  constructor() {
    this.str = 'hello world123';
  }

  sayHellow() {
    console.log(this.str);
  }
}

const a = new AA();
a.sayHellow();

let obj = {a: {b: {c: 'd'}}}
let obj2 = lodash.cloneDeep(obj)
obj.a.b.c = 'test'
console.log(obj, obj2)
// console.log('add', add(3,4))

