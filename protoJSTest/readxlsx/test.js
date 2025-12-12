// 一层对象模式
const XLSX = require("xlsx");
const fs = require("fs");
const workbook = XLSX.readFile("./color.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);



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
};

writeFile(data);
function writeFile(jsonData) {
	try {
		fs.writeFileSync("colorTest.json", JSON.stringify(jsonData, null, 2));
		console.log("JSON file saved successfully");
	} catch (err) {
		console.log("Error writing JSON file:", err);
	}
}
// console.log(data);
