const BrowserWindow = require('electron').remote.BrowserWindow

let remoteBTN = document.querySelector('.remoteBTN')

let remoteWin = null

remoteBTN.addEventListener('click',()=>{
  if(remoteWin) return
  remoteWin = new BrowserWindow({width:500,height:500})
  remoteWin.loadFile('./remote.html')
  remoteWin.on('closed',()=>{
    remoteWin=null
  })
})