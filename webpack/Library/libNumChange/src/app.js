import _ from 'lodash'

const numMap = [
	{ text: "零", value: "0" },
	{ text: "一", value: "1" },
	{ text: "二", value: "2" },
	{ text: "三", value: "3" },
	{ text: "四", value: "4" },
	{ text: "五", value: "5" },
	{ text: "六", value: "6" },
	{ text: "七", value: "7" },
	{ text: "八", value: "8" },
	{ text: "九", value: "9" },
];

// 数字转汉字
export function numToStr (num) {
	return _.find(numMap, (item) => {
        return String(num) === item.value
	}).text;
};

// 汉字转数字
export function strToNum (str) {
	return _.find(numMap, (item) => {
        return String(str) === item.text
	}).value;
};
