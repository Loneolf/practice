//两层对象模式，第一层对象Key值为埋点名称
const XLSX = require("xlsx");
const fs = require("fs");
// const path = require('path')

let baseMap = {
	key: "value",
	key_1: "value_1",
	key_2: "value_2",
	key_3: "value_3",
	key_4: "value_4",
	key_5: "value_5",
	key_6: "value_6",
	key_7: "value_7",
	key_8: "value_8",
	key_9: "value_9",
	key_10: "value_10",
	key_11: "value_11",
	key_12: "value_12",
};

// 测试代码
// let filePath = path.resolve(__dirname, './assets/jiaoyi.xlsx')
// console.log(getPath(filePath))
// readData({path: filePath, isWriteOrigin: true, isSimple: true})

/** 
 * 读取excel并生成文档, 并return 生成内容
 * @params path: string, 读取excel文件的绝对路径，生成的文件与该文件同目录
 * @params sheetNum: 要读取的文件在excel中的sheet，默认为0
 * @params isWriteOrigin: 是否将读取的文件内容生成json文件，建议为true
 * @params isSimple: 生成文件的格式，默认为false，简单处理，将描述做为key，埋点为值，有相同的描述时不建议为true
*/
function readData({path, sheetNum = 0, isWriteOrigin = false, isSimple = false}) {
	const workbook = XLSX.readFile(path);
	const sheetName = workbook.SheetNames[sheetNum];
	const sheet = workbook.Sheets[sheetName];
	const data = XLSX.utils.sheet_to_json(sheet);
	const writePath = getPath(path)
	if (isWriteOrigin) {
		writeFile(data, writePath + 'originData.json')
	}
	const res = isSimple ? dealDataEasy(data) : dealDataObj(data)
	writeFile(res, writePath + 'data.json')
	return res
}

// 获取所在的文件夹路径
function getPath(path) {
	return path.slice(0, path.lastIndexOf('\\')) + '\\'
}

// 处理数据
function dealDataObj(data) {
	let res = {};
	data.forEach((item) => {
		let str = "{";
		res[item.act_name] = {}
		for (const key in baseMap) {
			if (item[key]) {
				if (item[key] === 'resource_name' && item[baseMap[key]].startsWith('【')) {
					str += ` '${item[key]}': '[name]',`;
					res[item.act_name][`change___${item[key]}`] = `${item[baseMap[key]]}--->[name]`
				} else if (item[key] === 'resource_module' && item[baseMap[key]].startsWith('【')) {
					str += ` '${item[key]}': '[nameF]',`;
					res[item.act_name][`change___${item[key]}`] = `${item[baseMap[key]]}--->[nameF]`
				} else {
					str += ` '${item[key]}': '${item[baseMap[key]]}',`;
				}
			}
		}
		str = str.substring(0, str.length - 1) + " }";
		res[item.act_name] = {
			...res[item.act_name],
			desc: item['描述'],
			name: item['埋点中文名称'],
			resStr: `maidian.reportEvent('${item.act_name}', ${str})`
		}
	});
	return res
}

// 处理数据简易版
function dealDataEasy(data) {
	let res = {};
	data.forEach((item) => {
		let obj = {};
		let str = "{";
		for (const key in baseMap) {
			if (item[key]) {
				str += ` '${item[key]}': '${item[baseMap[key]]}',`;
				obj[item[key]] = item[baseMap[key]];
			}
		}
		str = str.substring(0, str.length - 1) + " }";
		res[item['埋点中文名称']] = `maidian.reportEvent('${item.act_name}', ${str})`;
	});
	return res
}

// 写文件
function writeFile(jsonData, fileName) {
	try {
		fs.writeFileSync(fileName || "data.json", JSON.stringify(jsonData, null, 2));
		console.log("JSON file saved successfully");
	} catch (err) {
		console.log("Error writing JSON file:", err);
	}
}

module.exports = {
	readData,
};