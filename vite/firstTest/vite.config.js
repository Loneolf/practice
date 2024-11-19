// 该文件单独记录我们目前已经学习过的一些配置以及他的功能
import { defineConfig, loadEnv } from "vite";
import veteDev from './config/vite.dev.js'
import veteProd from './config/vite.prod.js'
import veteCom from './config/vite.common.js'

const envResorve = {
    serve: (envValue) => {
        console.log('dev', process.env, envValue)
        return {...veteDev, ...veteCom}
    },
    build: (envValue) => {
        console.log('prod', process.env, envValue)
        return {...veteProd,...veteCom}
    }
}


export default defineConfig(({command, mode}) => {
    console.log('aaaaaacommand', command, mode)
    // return {}
    const env = loadEnv(mode, process.cwd(), "QZ_");
    // console.log('bbbbbbenv', mode, env)
    return envResorve[command](env)
})