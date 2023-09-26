const { qing_util } = require('../dist/qing_util')
const path = require('path')

let filePath = path.resolve(__dirname, './jiaoyi.xlsx')

qing_util.readData({path: filePath, isWriteOrigin: true, isSimple: false})