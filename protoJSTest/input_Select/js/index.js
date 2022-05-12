let textarea = document.querySelector(".textarea");
let ul = document.querySelector(".selectBox");
let list = Array.from(ul.children)
let start = -1; // 光标位置， 默认为-1
let isShowUl = false // 是否显示名字选中列表
let nArr = []; // 选中的名字对象数组，包含名字信息的起止position，对应的name等
let listSelect = 0 // 当前name列表选中项


textarea.addEventListener("input", changeHandle);
textarea.addEventListener("keydown", keydownhandle);
textarea.addEventListener("click", textClickHandle)
ul.addEventListener("click", ulClickHandle);


function textClickHandle(e) {
  console.log('click', e, textarea.selectionStart)
  start = textarea.selectionStart
  isInName()
}

// 监听按键，
// 1、如果当前有选项，上下键可以切换选项，enter键将选项中的name插入到文本框中
// 2、按键左右切换，判断是否在name区域内，如果在name区域内，将光标移动到name的左侧或者右侧
function keydownhandle(e) {
  console.log(e)
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    console.log('keydown', textarea.selectionStart, nArr)
  }

  if (!isShowUl) return
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    // 当有选项时，上下按键切换选项
    e.preventDefault()
    list.forEach((item, index)=>{
      let tem = item.className
      if (tem.includes('active')) {
        item.className = tem.replace('active', '').trim()
        listSelect = index + (e.key === 'ArrowDown' ? 1 : -1)
        let len = list.length - 1
        if(listSelect > len) listSelect = 0
        if (listSelect < 0) listSelect = len
      }
    })
    list[listSelect].className += ' active'
  }

  if (e.key === 'Enter') {
    e.preventDefault()
    insertText(list[listSelect].innerHTML)
  }
}

// 判断光标是否在name中，如果在name中，移动光标在name的左侧或者右侧
function isInName(position) {
  nArr.forEach((item)=>{
    console.log('aaa', start, item, start > item.startIndex && start < item.endIndex)
    if(start > item.startIndex && start < item.endIndex) {
      moveCursor(position === 'left' ? item.startIndex : item.endIndex)
    }
  })
}

function changeHandle(e) {
  if (e.data === "@") {
    ul.style.display = "block";
    isShowUl = true
    start = textarea.selectionStart;
  } else {
    hiddenUl()
  }
}

// 
function hiddenUl() {
  isShowUl = false
  ul.style.display = "none";
  list[0].className += 'active'
  listSelect = 0
}

// 向输入框插入文字
function insertText(text) {
  textarea.focus();
  let value = textarea.value;
  if (value.length !== start) {
    let frout = value.substring(0, start);
    let end = value.substring(start, value.length);
    textarea.value = frout + text + end;
  } else {
    textarea.value += text;
  }

  moveCursor(start + text.length)

  // 将插入的名称记录下，起始位置及文字，长度等信息
  nArr.push({ text: text, startIndex: start, endIndex: start + text.length, len: text.length });
  start = textarea.selectionStart;
  hiddenUl()
}

function ulClickHandle(e) {
  let text = e.target.innerText;
  insertText(text)
}

function moveCursor(position) {
  textarea.selectionStart = position
  textarea.selectionEnd = position
}