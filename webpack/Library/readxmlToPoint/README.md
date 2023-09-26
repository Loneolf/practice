##### Excel埋点转换

主要功能是用于读取表格文件并生成JSON文件，其中读Excel文件使用了插件`xlsx`，写文件使用的是`node`的`fs`模块

该包是使用commonjs方式引入，并只能用于node端

```
const { qing_util } = require('../dist/qing_util')
const path = require('path')
let filePath = path.resolve(__dirname, './jiaoyi.xlsx')
qing_util.readData({path: filePath, isWriteOrigin: true})
```

需要注意表格第一行为`title`，第二行就是解析内容，格式不对，解析的内容千差万别，
可以查看`demo`中的`xlsx`文件及使用


该文件仅仅是简单处理两种情况的excel，如果你想要自己的处理结果，可以自行修改源码
使用`npm run dev`，自动执行打包，可以在`demo`中随意做测试
也可以将源码`copy`出来自己处理测试


参数`isWriteOrigin:true`时打包出两个文件`originData.json`和`data.json`,
前者是`xlsx`读取`excel`的数据，后者则是处理后的数据，函数会返回处理结果，也可以用变量承接