// 获取某年某月的天数
// 年，月，起始日期(num), endDay(num | undfind),不传默认为全月的最后一天
export function getYearMonthDay(year, t, startDay, endDay) {
	let tem = new Date(year, t, 0);
	let num = endDay || tem.getDate();
	let arr = [];
	while (startDay < num) {
		startDay += 1;
		arr.push(`${year}${addZero(t)}${addZero(startDay)}`);
	}
	// console.log(year, t, num, arr)
	return { monthDayStr: arr.join() + ",", days: num };
}

// 模拟股票走势，baseNum:本金，days: 天数， isCost: 结果是否包含本金，true为包含, 默认不包含
export function stocksMock(baseNum, days, isCost) {
	let start = 0,
		result = [];
	let originBaseMoney = baseNum;
	while (start < days) {
		// 模拟每天的增长率 (-10%, 10%)，
		let increaseRate = Math.random() / 5 - 0.1;
		baseNum += baseNum * increaseRate;
		result.push((isCost ? baseNum : baseNum - originBaseMoney).toFixed(2));
		start += 1;
	}
	return result;
}

// 获取前几个月的数据
export function getMonthDays(monthArr, MathMonth) {
	let m = MathMonth;
	let time = new Date();
	// 获取年
	let year = time.getFullYear();
	// 获取当前月份
	let month = time.getMonth() + 1;
	let result = {},
		allDay = 0,
		dayStr = "";

	for (let i = 0; i < m; i++) {
		if (month - i <= 0) {
			month += 12;
			year -= 1;
		}
		if (month - i > 12) {
			month = month % 12;
			year += Math.floor(month / 12);
		}
		// console.log('aaaa', year, (month - i))
		// 默认起始日期是0
		let tem = getYearMonthDay(year, month - i, 0);
		dayStr = tem.monthDayStr + dayStr;
		allDay += tem.days;
		if (monthArr.includes(i + 1)) {
			result[i + 1] = {
				allDay,
				dayStr: dayStr.substring(0, dayStr.length - 1),
			};
		}
	}
	// console.log(allDay)
	return result;
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
	while (num >= 1) {
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
