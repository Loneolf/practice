TS练习

<!-- 使用ts-node插件直接运行TS文件 -->
```
ts-node script.ts
```
使用上面指令报错`TypeError [ERR_UNKNOWN_FILE_EXTENSION]`,是因为module冲突，可以添加指令如下
```
ts-node --esm script.ts
```
[原理参考](https://juejin.cn/post/7266663176979103800#heading-2)
