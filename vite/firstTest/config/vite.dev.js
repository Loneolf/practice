import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps: {
        exclude: ['lodash-es'], // exclude的中依赖成员将不会进行依赖预构建
    }
})