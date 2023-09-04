function getAsyncString() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('aaaa233-hello wld撒旦法')
        }, Math.random(200) + 100);
    })
}

async function hello () {
    let str = await getAsyncString()
    console.log(str)
}

export default hello