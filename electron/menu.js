const  { Menu, BrowserWindow } = require('electron')
let remoteWin = null
let tem = [
  {
    label:'一级菜单1',
    submenu:[
      {
        label:'1-1',
        click:()=>{
          if(remoteWin) return
          remoteWin = new BrowserWindow({width:500,height:500})
          remoteWin.loadFile('./remote.html')
          remoteWin.on('closed',()=>{
            remoteWin=null
          })
        }
      },
      {
        label:'1-2'
      }
    ]
  }
]

let m = Menu.buildFromTemplate(tem)

Menu.setApplicationMenu(m)