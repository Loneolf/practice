/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   if(!strs || strs.length === 0) return ''
//   if(strs.length === 1) return strs[0]
//   let commonStr = ''
//   for (let i = 0; i < strs[0].length; i++) {
//     commonStr = strs[0].substr(0,i+1)   
//     let beforCom = strs[0].substr(0,i)   
//     for (let j = 1; j < strs.length; j++) {
//       if(strs[j].substr(0,i+1) !== commonStr) return beforCom
//     }
//   }
//   return commonStr
// };
// @lc code=end
// var longestCommonPrefix = function(strs) {
//   if(!strs || strs.length === 0) return ''
//   if(strs.length === 1) return strs[0]
//   let min = strs[0] , max = ''
//   strs.forEach(item => {
//     if(item > max) max = item
//     if(item < min) min = item
//   })
//   let commonStr = ''
//   for (let i = 0; i < min.length; i++) {
//     commonStr = min.substr(0,i+1)   
//     let beforCom = min.substr(0,i)   
//     if(max.substr(0,i+1) !== commonStr) return beforCom
//   }
//   return commonStr
// };

//  解法3，使用递归，分治策略,使用递归相对较耗性能，在此题中并非最优解
let longestCommonPrefix = function(strs) {
  if(!strs || !strs.length) return ""
  return longerSplit(strs)
}

let longerSplit = function(arr){
  let len = arr.length
  if(len === 1) return arr[0]
  let mid = Math.floor(len / 2)
  let arr1 = arr.slice(0,mid)
  let arr2 = arr.slice(mid)
  return compare(longerSplit(arr1), longerSplit(arr2))
}

let compare = function(str1, str2){
  str = str1.length > str2.length ? str2 : str1
  for (let i = 0; i < str.length; i++) {
    if(str1.substr(0, i+1) !== str2.substr(0, i+1)) return str.substr(0,i)
  }
  return str
}


let arr = ["fl3ower","fl3ow","fl3ight"]
let arr2 = ['a', 'b']
console.log(longestCommonPrefix(arr2))