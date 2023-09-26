define(function(require, exports, module) {
    let add = require('./add.js').add
    let minus = require('./minus.js').minus
    let data = require('./minus.js').data
    console.log(data[0].list[0].url)
    exports.add = add
    exports.minus = minus
});