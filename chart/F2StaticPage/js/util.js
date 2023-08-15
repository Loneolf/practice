// 格式化日期
export function formatDate(dateStr, chart = '-', type) {
	if (!dateStr) return
	dateStr += "";
	if (type === "charactDate") {
		let time = new Date(dateStr);
		let y = time.getFullYear();
		let m = time.getMonth() + 1;
		let d = time.getDate();
		return `${y}年${m}月${d}日`;
	}
	return `${dateStr.substr(0, 4)}${chart}${dateStr.substr(4, 2)}${chart}${dateStr.substr(6)}`
}
/*
 * 金额格式化，保留两位
 */
export function decimalFormat(value, symbol) {
	if (!value && value !== 0) return "-";
	value = Number(value).toFixed(2);
	let numArr = value.split(".");
	const intPartFormat = numArr[0].replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); //将整数部分逢三一断
	if (symbol) {
		symbol = value > 0 ? '+' : '' 
	}
	return `${symbol || ''}${intPartFormat}.${numArr[1]}`;
}

// 删除分组逗号
export function removeGroup(num) {
	if (typeof num === "string") {
		return num.replace(/,/g, "");
	}
	return num + "";
}

export function getColor(index) {
	let baseColor = ["#F0BF8C", "#658AF8", "#FF9860", "#E5E5E5", "#FF7070"];
	if (index !== undefined && baseColor[index]) {
		return baseColor[index];
	}
	return (
		"rgb(" +
		[
			Math.round(Math.random() * 160),
			Math.round(Math.random() * 160),
			Math.round(Math.random() * 160),
		].join(",") +
		")"
	);
}

// 格式化字符串, 字符串 | 分隔符 | 每一项是否转为数字
export function formatStr(str, splitStr, isNum, isRemoveLine) {
	if (!str) return [];
	if (isRemoveLine) str = str.replace(/-/g, "");
	if (!splitStr) splitStr = ",";
	let arr = str.split(splitStr);

	if (isNum) {
		for (let i = 0; i < arr.length; i++) {
			arr[i] = Number(arr[i]);
		}
	}
	return arr;
}
