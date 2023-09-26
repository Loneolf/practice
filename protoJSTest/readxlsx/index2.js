//两层对象模式，第一层对象Key值为埋点名称
const XLSX = require("xlsx");
const fs = require("fs");
const workbook = XLSX.readFile("./jiaoyi.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);

// writeFile(data, 'originData.json')
// return

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

writeFile(res);
function writeFile(jsonData, fileName) {
	try {
		fs.writeFileSync(fileName || "data.json", JSON.stringify(jsonData, null, 2));
		console.log("JSON file saved successfully");
	} catch (err) {
		console.log("Error writing JSON file:", err);
	}
}
// console.log(data);
