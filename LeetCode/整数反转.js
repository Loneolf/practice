/*
 * @Autor: qinqinghao
 * @Description: 
 * @Date: 2020-09-24 17:13:35
 * @LastEditTime: 2020-10-09 15:18:24
*/

/*
* @lc app=leetcode.cn id=7 lang=javascript
*
* [7] 整数反转
*/

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 * first
 */
// var reverse = function(x) {
//     let res = parseInt(`${x}`.split('').reverse().join('')) 
//     if(x<0) res = -res
//     if(res > 2147483647 || res < -2147483648) return 0
//     return res
// };

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 * second
 */
var reverse = function(x) {
    let res = parseInt(`${x}`.split('').reverse().join('')) 
    if(x<0) res = -res
    if(res > 2147483647 || res < -2147483648) return 0
    return res
};
console.log(parseInt((-123).toString().split('').reverse().join('')))