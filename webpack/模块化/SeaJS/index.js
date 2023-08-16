define(function(require, exports, module) {
    let add = require('./add.js').add
    let minus = require('./minus.js').minus
    
    exports.add = add
    exports.minus = minus
});