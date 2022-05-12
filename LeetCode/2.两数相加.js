var addTwoNumbers = function(l1, l2) {
    if (!l1 || !l2) return l1 || l2
    let sum = [], index = 0, temSum = 0
    while(l1[index] || l2[index]){
        l1[index] = l1[index] || 0
        l2[index] = l2[index] || 0
        let tem = l1[index] + l2[index] + temSum
        sum[index] = tem % 10
        temSum = parseInt(tem / 10)
        index += 1
    }
    if(temSum) sum[index] = temSum
    return sum
};
let l1 = [2,4,3], l2 = [5,6,4] // [7,0,8]
// let l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] // [8,9,9,9,0,0,0,1]
console.log(addTwoNumbers(l1,l2))