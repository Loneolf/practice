/*
 * @Autor: qinqinghao
 * @Description: 
 * @Date: 2020-12-31 16:47:57
 * @LastEditTime: 2020-12-31 16:52:31
 */
var isValid = function(s) {
  if(!s && s !== '' || s.length % 2 !==0) return false
  return true
};

let str = '()[]{}('
console.log(isValid(str))