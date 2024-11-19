// 该文件单独记录我们目前已经学习过的一些配置以及他的功能
import { defineConfig } from "vite";
import veteDev from './config/vite.dev.js'
import veteProd from './config/vite.prod.js'
import veteCom from './config/vite.common.js'

const envResorve = {
    serve: () => {
        console.log('dev', process.env)
        return {...veteDev, ...veteCom}
    },
    build: () => {
        console.log('prod', process.env)
        return {...veteProd,...veteCom}
    }
}


export default defineConfig(({command, mode}) => {
    console.log('aaaaaacommand', command, mode)
    // return {}
    // console.log('bbbbbbenv', mode, env)
    return envResorve[command]()
})