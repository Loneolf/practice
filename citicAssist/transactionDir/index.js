import config from "./config.js";
import { pointData } from "./pointMap.js";
import { getURLParams } from "../lib/util.js";

const pageData = {};
init();
function init() {
	// 通过type参数获取对应的配置，如果获取不到，提示异常并后退
	pageData.configType = decodeURIComponent(getURLParams().type);
	if (!config[pageData.configType]) {
		alert("配置获取异常，请退出重试");
		window.history.back();
	}
	document.title = config.nameMap[pageData.configType];
	initVue();
}
//初始化
function initVue() {
	//根据实际情况进行初始化
	new Vue({
		el: "#container",
		data: {
			catalogueList: config[pageData.configType],
			tipPop: false,
			// 点击埋点
			clickPointStr: "",
		},
		mounted: function mounted() {
			this.showPointF();
			// console.log('aaaamounted', pageData.configType, JSON.parse(JSON.stringify(this.catalogueList)))
		},
		methods: {
			linkListItem: function (item, itemFT) {
				console.log('aaa23333', item.url)
				if (!item.url) return
				this.clickPoint(item, itemFT);
				location.href = location.origin + item.url
			},

			iconClick: function (e) {
				e.stopPropagation();
				this.tipPop = !this.tipPop;
			},
			// 曝光埋点
			showPointF: function () {
				try {
					const pointStr = pointData[this.catalogueList[0].showPoint].resStr;
					this.clickPointStr = pointData[this.catalogueList[0].itemClickPoint].resStr;
					console.log("showPoint", pointStr);
					if (!pointStr) return;
					// 使用eval执行埋点
					// eval(pointStr);
					// 右上角帮助埋点
					const helpClick = this.catalogueList[0].helpClickPoint;
					if (helpClick) {
						console.log("aaahelpClickStr:", pointData[helpClick].resStr);
						pageData.helpClickPointStr = pointData[helpClick].resStr;
					}
				} catch (error) {
					console.error("曝光埋点配置获取异常", error);
				}
			},
			// 点击埋点
			clickPoint: function (item, itemFT) {
				if (!this.clickPointStr) return;
				try {
					// 点击埋点，替换name及分类名称
					const pointStr = this.clickPointStr
						.replace("[name]", item.name)
						.replace("[nameF]", itemFT || "");
					console.log("click", pointStr);
					// eval(pointStr);
				} catch (error) {
					console.error("点击埋点异常", error);
				}
			},
		},
	});
}
