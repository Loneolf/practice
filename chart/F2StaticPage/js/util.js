// 格式化日期
export function formatDate(dateStr, flag) {
	dateStr = dateStr + "";
	if (!flag) {
		return (
			dateStr.substr(0, 4) +
			"/" +
			dateStr.substr(4, 2) +
			"/" +
			dateStr.substr(6)
		);
	} else {
		return (
			dateStr.substr(0, 4) +
			"-" +
			dateStr.substr(4, 2) +
			"-" +
			dateStr.substr(6)
		);
	}
}

/*
 * 金额格式化，保留两位
 */
export function decimalFormat(value) {
	if (!value && value !== 0) return "-";
    value = Number(value).toFixed(2)
	var numArr = value.split(".");
	var intPartFormat = numArr[0].replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); //将整数部分逢三一断
    return `${intPartFormat}.${numArr[1]}`
}

// 删除分组逗号
export function removeGroup(num) {
	if (typeof num == "string") {
		return num.replace(/,/g, "");
	}
	return num + "";
}
