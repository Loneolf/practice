const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('./enter.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);

writeFile(data)
function writeFile(jsonData) {
    try {
        fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2));
        console.log('JSON file saved successfully');
      } catch (err) {
        console.log('Error writing JSON file:', err);
      }
}
console.log(data);