<template>
    <div class="getFieldIndexBox">
          <div class="leftBox">
              <textarea v-module="taValue" class="textarea" @input="changeHandle($event)" />
          </div>
          <div class="rightBox">
              <template v-if="showData.length > 0">
                  <p v-for="(item, index) in showData" :key="index" class="item">
                      {{item[0]}} ---- <span :class="item[1].includes('需补充下标') ? 'needIndex' : ''">{{item[1]}}</span>
                      <span @click="copy(item[1])" class="iconfont">复制</span>
                  </p>
              </template>
              <p v-else :class="tipText === '请粘贴正确的请求数据' ? 'tip errorTip' : 'tip'">{{tipText}}</p>
          </div>
      </div>
  </template>
  
  
  <script setup>
  import { ref } from "vue";
  const taValue = ref('')
  const showData = ref([])
  const tipText = ref('请粘贴正确的请求数据')
  
  function getFieldIndex(data) {
      const grid0 = data.GRID0[0].split('|');
      let res = []
      grid0.forEach((item, index) => {
          if (!item) return
          // console.log(item, index)
          let tem = [9999]
          for (const key in data) {
              if (tem[0] === 9999) {
                  tem[0] = index
              }
              if (Number(data[key]) === index) {
                  tem.push(`${item}:${key}`)
              }
          }
          if (tem.length === 1) tem.push(`${item}:需补充下标`)
          res.push(tem)
      });
      console.log(res.sort((a, b) => {
          return a[0] - b[0]
      }))
      return res.sort((a, b) => {
          // console.log(a[0], b[0])
          return a[0] - b[0]
      });
  }
  // getFieldIndex(JSON.parse(taValue))
  function changeHandle(e) {
	console.log(e.target.value)
      try {
          if (!e.target.value) {
              tipText.value = '请粘贴要解析的数据'
              showData.value = []
              return
          }
          let data = JSON.parse(e.target.value)
          showData.value = getFieldIndex(data)
          console.log(getFieldIndex(data))
      } catch (error) {
          tipText.value = '请粘贴正确的请求数据'
          showData.value = []
          console.log('error', error)
      }
  }
  
  function copy(params) {
      navigator.clipboard.writeText(params).then(() => {
          alert(`已复制内容:${params}`)
      }).catch(() => {
          alert('复制失败，请检查剪切板权限及浏览器版本')
      })
  }
  
  </script>
  
  
  <style lang="less">
  .getFieldIndexBox{
      height: 100%;
      display: flex;
      .leftBox {
          width: 36%;
          min-width: 36%;
          overflow: auto;
          padding: 20px;
          height: 100%;
          border-right: 2px solid #cccccc;
          textarea {
              height: 80%;
              width: calc(100% - 20px);
              border: none;
              resize: none;
              padding: 10px;
              border-radius: 10px;
              background-color: aliceblue;
          }
      }
      .rightBox{
          flex: 1;
          height: 100%;
          overflow: auto;
          padding: 20px;
          .item{
              margin-bottom: 10px;
              display: flex;
              align-items: center;
              .iconfont{
                  margin-left: 10px;
                  cursor: pointer;
                  display: none;
              }
          }
          .item:hover{
             .iconfont{
                  display: block;
              }
          }
          .tip{
              text-align: center;
          }
          .errorTip, .needIndex{
              color: #ff4d4f;
          }
      }
  }
  </style>