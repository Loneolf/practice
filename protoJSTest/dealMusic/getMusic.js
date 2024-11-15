const axios = require('axios');

const postData = { 
    input:" 兄弟的情",
    filter:" name",
    type:" netease",
    page:1, 
};

axios.post('http://www.6002255.com', postData, {
    headers: {
        'Content-Type': 'application/json', // 设置 Content-Type 为 JSON
    }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error('请求出错：', error);
});