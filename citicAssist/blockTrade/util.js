// 格式化日期，添加年月日文字
export function dataFormat(value, operate) {
	var str = value + "";
	var rule = operate ? "$1" + operate + "$2" + operate + "$3" : "$1年$2月$3日";
	return str.replace(/(\d{4})(\d{2})(\d{2})/g, rule);
}

// 处理委托和撤单数据
export function dealWtData(data) {
	var arr = [];
	data["GRID0"].forEach(function (item) {
		arr.push(item.split("|"));
	});
	var title = arr.shift();
	console.log(title, title.indexOf("委托数量"));
	var showData = [];
	arr.forEach(function (item) {
		var showItem = {};
		showItem.name = item[data["STOCKNAMEINDEX"]]; //股票名字
		showItem.code = item[data["STOCKCODEINDEX"]]; // 股票代码
		showItem.buyDirection = item[data["BUYDIRECTIONINDEX"]]; // 买入还是卖出
		var donePrice = title.indexOf("成交价格") !== -1 ? Number(item[title.indexOf("成交价格")]).toFixed(4) : "--";
		showItem.mainArr = [
			{ lable: "委托价格", value: Number(item[title.indexOf("委托价格")]).toFixed(4), },
			{ lable: "委托数量", value: T.zzpindex(item[title.indexOf("委托数量")], String(title.indexOf("委托数量")), data["ZZPINDEX"]) + "股", },
			{ lable: "成交价格", value: donePrice },
			{ lable: "成交数量", value: T.zzpindex( item[title.indexOf("成交数量")], String(title.indexOf("成交数量")), data["ZZPINDEX"] ) + "股",},
			{ lable: "委托时间", value: T.dateform( item[title.indexOf("委托时间")], String(title.indexOf("委托时间")), data.DATEFORMINDEX ), },
			{ lable: "委托属性", value: item[title.indexOf("委托属性")] },
		];
		// console.log('aaaatime', item[data['ORDERTIMEINDEX']], data['ORDERTIMEINDEX'], data.DATEFORMINDEX)
		// console.log('aaa',donePrice, Number(item[title.indexOf('成交价格')]).toFixed(4))
		showItem.operate = { 
            status: item[data["ENTRUSTTYPENAMEINDEX"]], // 是否已废弃或者已成交
			chedan: item[data["DRAWINDEX"]] != 0 ? "撤单" : "",
		};
		showData.push(showItem);
	});
	// console.log('aaaaarrr', title)
	// console.log('aaaamockdata', showData, data)
	data.showData = showData;
	return data;
}

// 处理成交数据
export function dealCJData(data) {
	var arr = [];
	data["GRID0"].forEach(function (item) {
		arr.push(item.split("|"));
	});
	var title = arr.shift();
	var showData = [];
	arr.forEach(function (item) {
		var showItem = {};
		showItem.name = item[data["STOCKNAMEINDEX"]]; //股票名字
		showItem.code = item[data["STOCKCODEINDEX"]]; // 股票代码
		showItem.buyDirection = item[data["BUYDIRECTIONINDEX"]]; // 买入还是卖出
		showItem.entrustTypeName = item[data["ENTRUSTTYPENAMEINDEX"]]; // 是否已废弃或者已成交
		showItem.mainArr = [
			{ lable: "成交价格", value: item[data["MATCHPRICEINDEX"]] },
			{
				lable: "成交数量",
				value: T.zzpindex(
					item[data["MATCHQTYINDEX"]],
					data["MATCHQTYINDEX"],
					data["ZZPINDEX"]
				),
			},
			{
				lable: "成交金额",
				value: Number(item[data["PROMONEYINDEX"]]).toFixed(4),
			},
			{
				lable: "成交时间",
				value: T.dateform(
					item[data.REPORTTIMEINDEX],
					data.REPORTTIMEINDEX,
					data.DATEFORMINDEX
				),
			},
		];
		showData.push(showItem);
	});
	// console.log('aaaaarrr', title)
	// console.log('aaaamockdata', showData, data)
	data.showData = showData;
	return data;
}

// 处理三板成交数据
export function sanbanDealCJData(data) {
	var arr = [];
	data["GRID0"].forEach(function (item) {
		arr.push(item.split("|"));
	});
	var title = arr.shift();
	console.log("aaa23333", title);
	console.log("aaa23333arr", arr);
	var showData = [];
	arr.forEach(function (item) {
		var showItem = {};
		showItem.name = item[data["STOCKNAMEINDEX"]]; //股票名字
		showItem.code = item[data["STOCKCODEINDEX"]]; // 股票代码
		showItem.buyDirection = item[data["BUYDIRECTIONINDEX"]]; // 买入还是卖出
		showItem.entrustTypeName = item[data["ENTRUSTTYPENAMEINDEX"]]; // 是否已废弃或者已成交
		showItem.mainArr = [
			{
				lable: "成交价格",
				value: Number(item[title.indexOf("成交价格")]).toFixed(4),
			},
			{
				lable: "成交数量",
				value: T.zzpindex(
					item[title.indexOf("发生数量")],
					String(title.indexOf("发生数量")),
					data["ZZPINDEX"]
				),
			},
			{
				lable: "成交金额",
				value: Number(item[title.indexOf("成交金额")]).toFixed(2),
			},
			// {lable: '成交金额', value: T.zzpindex(item[title.indexOf('成交金额')],String(title.indexOf('成交金额')),data['ZZPINDEX'])},
			{
				lable: "成交时间",
				value: T.dateform(
					item[title.indexOf("成交时间")],
					String(title.indexOf("成交时间")),
					data.DATEFORMINDEX
				),
			},
		];
		showData.push(showItem);
	});
	// console.log('aaaaarrr', title)
	// console.log('aaaamockdata', showData, data)
	data.showData = showData;
	return data;
}

// 详情页，按照指定的顺序，将展示内容排序
export function ruleSort(data, rule) {
	if (!data || !rule) return data;
	data.forEach(function (item) {
		item.sort(function (a, b) {
			for (var i = 0; i < rule.length; i++) {
				var key = rule[i];
				if (a.lable === key) {
					return -1;
				} else if (b.lable === key) {
					return 1;
				}
			}
			return 0;
		});
	});
	return data;
}

export default {
	dataFormat,
	dealWtData,
	dealCJData,
	sanbanDealCJData,
	ruleSort,
};
