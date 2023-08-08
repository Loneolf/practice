import * as DomeUtil from './domUtil.js';
export const dutil = DomeUtil
//    深复制
export function cloneObj(targetObj, souseObj) {
	var name = Object.getOwnPropertyNames(souseObj);
	for (var i = 0; i < name.length; i++) {
		var desc = Object.getOwnPropertyDescriptor(souseObj, name[i]);
		if (typeof desc.value === "Object" && desc.value !== null) {
			// var obj = (Array.isArray(desc.value) ? [] :{})
			var obj = desc.value.constructor; //作用等同于上一句注释。
			clone(obj, desc.value);
			Object.defineProperty(targetObj, name[i], {
				writable: desc.writable,
				enumerable: desc.enumerable,
				configurable: desc.configurable,
				value: obj,
			});
			continue;
		}
		Object.defineProperty(targetObj, name[i], desc);
	}
	return targetObj;
}

// 获取某个范围内的随机值
export function mathRand(min, max) {
	return parseInt(Math.random() * (max - min)) + min;
}
// 补零
export function addZero(num) {
	if (num < 10) num = `0${num}`;
	return num;
}

// 获取随机值，总金额，分为多少数量，最小值，最大值, 是否是整数
// console.log(getRungeNum(300, 10, 10, 50)); ['46.11', '39.49', '33.36', '19.13', '29.85', '19.72', '31.38', '26.52', '31.89', '22.55']
export function getRungeNum(totalAmount, num, minMoney = 0, maxMoney, isInt) {
	if (!minMoney) minMoney = 0.01;
	if (!maxMoney) maxMoney = totalAmount / 2;
	if (num === 1) return [totalAmount];
	if (totalAmount < num * minMoney || totalAmount > num * maxMoney) {
		throw new Error("参数异常，分配不完或者不够分");
	}

	let arr = [];
	while (num > 1) {
		let money;
		let max = totalAmount - num * minMoney;
		let avg = (max / (num - 1)) * 2;
		money = (Math.random() * avg + minMoney).toFixed(isInt ? 0 : 2);
		arr.push(money);
		totalAmount -= money;
		num -= 1;
	}
	arr.push(totalAmount.toFixed(isInt ? 0 : 2));
	// console.log(
	// 	"aaaasum",
	// 	arr.reduce((sum, item) => {
	// 		return Number(sum) + Number(item);
	// 	})
	// );
	return arr;
}
