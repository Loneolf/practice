const {qing_util} = require('qing-library-util')
const path = require('path')

let filePath = path.resolve(__dirname, './assets/jiaoyi.xlsx')
// console.log(qing_util, filePath)
qing_util.readData({path: filePath, isWriteOrigin: true, isSimple: false})