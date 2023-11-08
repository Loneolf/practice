import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../page/Home')
const About = () => import('../page/About')

export default createRouter({
    history: createWebHashHistory(),
    mode: 'history', // 配置mode为history
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
    ]
})