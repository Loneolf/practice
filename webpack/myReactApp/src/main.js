import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './store';
import App from './app'

const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(
    <Provider store={store}>
        <ConfigProvider 
            // 语言
            locale={zhCN}
            theme={{
                token: {
                // Seed Token，影响范围大
                colorPrimary: '#00b96b',
                borderRadius: 1,
                // 派生变量，影响范围小
                colorBgContainer: '#f6ffed',
                },
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConfigProvider>
    </Provider>
)