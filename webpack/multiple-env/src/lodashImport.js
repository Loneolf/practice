export function logStr() {
    // import 功能返回promise，可用then处理加载的数据
	return import("lodash").then(({ default: _ }) => {
		return _.join(["Hello", "webpack", "import()"], ' ')
	});
}
logStr().then((str) => {
    console.log(str)
});
