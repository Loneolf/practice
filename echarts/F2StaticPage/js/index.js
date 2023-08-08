import { formatDate, decimalFormat } from "./util.js";

const data = {
	x: [
		20230412, 20230413, 20230414, 20230417, 20230418, 20230419, 20230420,
		20230424, 20230426, 20230427, 20230428, 20230504, 20230505, 20230508,
		20230509, 20230510, 20230511, 20230515, 20230516, 20230525, 20230526,
		20230529, 20230530, 20230531, 20230601, 20230602, 20230605, 20230606,
		20230607, 20230608, 20230609, 20230612, 20230613, 20230614, 20230615,
		20230616, 20230619, 20230620, 20230621, 20230627, 20230628, 20230629,
		20230630, 20230703, 20230704, 20230705, 20230706, 20230707, 20230710,
		20230711, 20230712,
	],
	y: [
		1634.16, 1465.57, 1698.47, 1824.59, 1974.74, 1752.36, 1752.36, 439.64,
		537.77, 656.42, 779.51, 948.82, 910.68, 1203.03, 1027.8, 961.22, 730.92,
		778.22, 614.06, -65.83, -216.28, -314.45, -283.7, -300.83, -398.31,
		54.86, -64.54, -143.2, -151.32, -85.12, 60.37, 365.71, 571.46, 495.17,
		871.23, 1299.44, 1371.97, 1382.47, 794.56, 653.66, 684.78, 631.97,
		977.73, 1385.81, 1510.52, 1505.17, 1432.79, 1324.4, 1374.83, 1514.13,
		1325.65,
	],
};

let profitList = [];
for (let i = 0; i < data.x.length; i++) {
	profitList.push({
		x: data.x[i] + "",
		y: decimalFormat(data.y[i]),
		type: "累计收益",
	});
}

console.log("aaa233", profitList);

let accumulatedIncome = profitList[profitList.length - 1].y;

let profitChart = new F2.Chart({
	id: "profitChart",
	pixelRatio: window.devicePixelRatio,
	padding: [10, 30, "auto", 60],
});
//加载数据、设置x轴数据横向展示范围、不显示图例
profitChart
	.source(profitList, {
		y: {
			tickCount: 6, // 坐标轴上刻度点的个数，不同的度量类型对应不同的默认值
			minTickInterval: 0.01,
			snapArray: [0, 1, 2, 4, 5, 10],
		},
	})
	.scale({ x: { range: [0, 1] } })
	.legend(false);
//设置滑动提示杆
profitChart.tooltip({
	showCrosshairs: false, //不显示自带tips线
	showTooltipMarker: false, //不显示自带tips数据位置
	custom: true, //自定义tips,不显示自带tips对X轴数据提示
	triggerOff: "touchend", // 消失的触发行为，可自定义
	tooltipMarkerStyle: {
		fill: "#C8893B", // 设置 tooltipMarker 的样式
		stroke: "rgba(200,137,59,0.3)",
		lineWidth: 6,
		radius: 2,
	},
	onShow: function onShow(obj) {
		this.showTooltipMarker = true; //显示自带tips数据位置
		let x = obj.items[0].x; //获得x轴坐标
		let value = obj.items[0].value; //获得y轴数据
		// yieldTipsFlag = yieldTipsDataFlag = yieldTipsDateFlag = true; //显示收益tips、数据文本、日期文本
		// $refs.yieldTipsFlag.style.left = $refs.yieldTipsDateFlag.style.left =
		// 	x + "px"; //数据、日期文本跟随tips线X轴移动
		// yieldTipsData = value; //回显我的账户数据
		// yieldTipsDate = formatDate(obj.items[0].title, true); //设置滑动日期数据
	},
	onHide: function onHide() {
		// yieldTipsFlag = yieldTipsDataFlag = yieldTipsDateFlag = false; //显示收益率tips、数据文本、日期文本
	},
});
//设置x轴数据底线显隐及文本描述、位置
profitChart.axis("x", {
	line: null,
	label: function label(text, index, total) {
		let cfg = { text: "" };
		if (index == 0) {
			cfg.text = formatDate(text, true);
			cfg.textAlign = "left";
		}
		if (index == total - 1) {
			cfg.text = formatDate(text, true);
			cfg.textAlign = "right";
		}
		return cfg;
	},
});
let unitFlag = 0;
let sff = [];
profitChart.axis("y", {
	label: function label(text, index) {
		sff.push(text);
	},
});
console.log("aaaadata", data, sff);
profitChart.line().position("x*y").color("type", ["#C8893B"]).size("type", [1]);
profitChart
	.area({ startOnZero: false })
	.position("x*y")
	.color("type", ["rgba(200,137,59,0.5)"])
	.size("type", [1])
	.shape("smooth");

profitChart.render();

let unit = ''

if (sff.length > 0) {
	profitChart.axis("y", {
		label: function label(text, index) {
			let text1 = text.split(".")[0];
			let cfg = {};
			if (index == 0) {
				if (parseFloat(text1) > 0) {
					if (text1.length >= 5 && text1.length < 8) {
						unitFlag = 1;
					} else if (text1.length >= 8) {
						unitFlag = 2;
					} else {
						unitFlag = 0;
					}
				} else {
					if (text1.length >= 6 && text1.length < 10) {
						unitFlag = 1;
					} else if (text1.length >= 10) {
						unitFlag = 2;
					} else {
						unitFlag = 0;
					}
				}
			}
			if (unitFlag == 1) {
				cfg.text = (parseFloat(text) / 10000).toFixed(2);
				unit = "单位(万元)";
			} else if (unitFlag == 2) {
				cfg.text = (parseFloat(text) / 100000000).toFixed(2);
				unit = "单位(亿元)";
			} else {
				cfg.text = parseFloat(text).toFixed(2);
				unit = "单位(元)";
			}
			return cfg;
		},
	});
	profitChart.render();
}
