import _ from 'lodash'

let obj = {a: 1, b: {c: 3, d: {f: 4}}}

let data = _.cloneDeep(obj)
obj.b.c = 111

console.log(JSON.stringify(obj))
console.log(JSON.stringify(data))
console.log(_.join(['lodashLog', 'loaded'], ' '))