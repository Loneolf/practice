// 设置主题函数
function setTheme(theme) {
	// 移除所有主题class
	console.log(document);
	document.body.className = document.body.className
		.replace(/theme-\w+/g, "")
		.trim();

	// 添加新的主题class
	document.body.className += " theme-" + theme;

	// 使用cookie存储主题偏好
	document.cookie = "theme=" + theme + "; path=/";
}

// 从cookie读取主题偏好
function getUrlParameter(paramName, url = window.location.href) {
	try {
		// 创建URL对象解析URL
		const urlObj = new URL(url);
		const params = new URLSearchParams(urlObj.search);

		// 获取所有匹配的参数值
		const allValues = [...params.getAll(paramName)];

		// 若没有值，返回null
		if (allValues.length === 0) {
			return null;
		}

		// 若只有一个值，直接返回该值
		if (allValues.length === 1) {
			return allValues[0];
		}

		// 若有多个值，返回数组
		return allValues;
	} catch (error) {
		console.error("解析URL参数时出错:", error);
		return null;
	}
}

// 初始化主题
function initTheme() {
	var savedTheme = getUrlParameter("themeType");
    console.log('aaaa333333themeType', savedTheme)
	if (savedTheme) {
		setTheme(savedTheme);
	}
}
document.addEventListener("DOMContentLoaded", function () {
	// 页面加载时初始化主题
    console.log('aaaa333333DOMContentLoaded', initTheme)
	initTheme();
});
