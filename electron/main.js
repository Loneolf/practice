let electron = require('electron') // 加载electron模块

let app = electron.app  // 引用app

let BrowserWindow = electron.BrowserWindow  // 窗口引用

let mainWindow = null  // 声明要打开的主窗口

app.on('ready',()=>{ // 窗口ready事件
  require('./menu.js')
  mainWindow = new BrowserWindow({
    width:1200,
    height:600,
    webPreferences:{nodeIntegration:true} // 可以使用node中的API，如果不设置则默认不能使用
  }) // 设置宽高都为300的窗口
  mainWindow.loadFile('index.html') // 加载HTML页面
  mainWindow.on('closed',()=>{ // 关闭窗口时置空
    mainWindow = null
  })
})