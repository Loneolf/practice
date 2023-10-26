import util from "../util.js";

console.log('aaautil', util.dealWtData)

const lswtBase = {
	GRID0: [
		"委托编号|委托日期|委托时间|分支机构|资产账户|交易类别|股东账号|证券代码|证券名称|买卖方向|委托类别|委托属性|委托价格|委托数量|成交数量|委托状态|废单原因|证券全称|受限股份类别|委托金额|对方席位号|约定号|联系人姓名|联系人电话|成交价格|成交金额|成交编号|撤单数量|可撤|",
		"20049|20230829|141109|1|100200647|上海|A122522249|600030|中信证券|买入|大宗|确认委托|23.4400|1000000.00|0.00|废单|PBU不存在|中信证券|0|23440000.00|12345|123456| | |0.00000000|0.00| |0.00|0|",
		"20050|20230829|141143|1|100200647|上海|A122522249|600036|招商银行|买入|大宗|确认委托|32.1200|10000000.00|0.00|废单|PBU不存在|招商银行|0|321200000.00|87616|218846| | |0.00000000|0.00| |0.00|0|",
		"20051|20230829|141204|1|100200647|上海|A122522249|601128|常熟银行|买入|大宗|确认委托|7.3200|1000000.00|0.00|废单|PBU不存在|常熟银行|0|7320000.00|57576|674316| | |0.00000000|0.00| |0.00|0|",
		"20052|20230829|141231|1|100200647|深圳|0098660150|000063|中兴通讯|买入|大宗|互报成交确认委托|34.9100|1000000.00|0.00|废单|成交申报中的对手方交易单元不存在|中兴通讯|0|34910000.00|99731|976431| | |0.00000000|0.00|0201000000125855|0.00|0|",
	],
	ACTION: "5003",
	TOKEN: "AR5oJy73@7469-F71467673lqim",
	REQNO: "1693289787731",
	STARTPOS: "5",
	MAXCOUNT: "4",
	ERRORNO: "332704",
	CONTACTINDEX: "0",
	DRAWINDEX: "28",
	INTACTTOSERVER: "@ClZvbHVtZUluZm8JAAAANzQ2OS1GNzE0",
	ZZPINDEX: "12|3,13|0,14|0",
	DATEFORMINDEX: "1|yyyy-mm-dd,2|hh:mm:ss",
	ORDERDATEINDEX: "1",
	ENTRUSTTYPENAMEINDEX: "15",
	MATCHQTYINDEX: "14",
	ORDERTIMEINDEX: "2",
	STOCKCODEINDEX: "7",
	STOCKNAMEINDEX: "8",
	PROPRICEINDEX: "12",
	PROAMOUNTINDEX: "13",
	HIDESEGMENTINDEX: "28",
	BUSINESSNAMEINDEX: "11",
	BUYDIRECTIONINDEX: "9",
	STOCKNAMELONGIDXINDEX: "17",
	NEWINDEX: "1",
	template: "dzjy_qdrcj",
	styleType: "0",
	showButton: "0",
	Indexes: {
		CONTACTINDEX: "0",
		BUYDIRECTIONINDEX: "9",
		STOCKCODEINDEX: "7",
		STOCKNAMEINDEX: "8",
		PROPRICEINDEX: "12",
		PROAMOUNTINDEX: "13",
		DRAWINDEX: "28",
	},
};

const lscjBase = {
	GRID0: [
		"交易日期|委托编号|分支机构|资产账户|交易类别|股东账号|证券代码|证券名称|买卖方向|委托属性|委托价格|委托数量|成交数量|对方席位号|成交类型|处理标志|成交价格|成交金额|返回信息|当前时间|证券全称|受限股份类别|委托日期|委托时间|委托类别|委托金额|对方销售商|对方交易主体类型|对方交易主体代码|对方投资者账户名称|对方交易员|成交时间|成交编号|备注|",
		"20230829|20049|1|100200647|上海|A122522249|600030|中信证券|买入|确认委托|23.4400|1000000.00|0.00|12345|买卖|废单|23.4400|0.00|PBU不存在|141118|中信证券|0|20230829|141118|大宗|0.00| | | | | |0| | |",
		"20230829|20050|1|100200647|上海|A122522249|600036|招商银行|买入|确认委托|32.1200|10000000.00|0.00|87616|买卖|废单|32.1200|0.00|PBU不存在|141146|招商银行|0|20230829|141146|大宗|0.00| | | | | |0| | |",
		"20230829|20051|1|100200647|上海|A122522249|601128|常熟银行|买入|确认委托|7.3200|1000000.00|0.00|57576|买卖|废单|7.3200|0.00|PBU不存在|141210|常熟银行|0|20230829|141210|大宗|0.00| | | | | |0| | |",
		"20230829|20052|1|100200647|深圳|0098660150|000063|中兴通讯|买入|互报成交确认委托|34.9100|1000000.00|0.00|99731|买卖|废单|34.9100|0.00|成交申报中的对手方交易单元不存在|141231|中兴通讯|0|20230829|141231|大宗|0.00| | | | | |0|0201000000125855| |",
	],
	ACTION: "5004",
	TOKEN: "AR5oJy73@7469-F71467673lqim",
	REQNO: "1693289589139",
	STARTPOS: "5",
	MAXCOUNT: "4",
	ERRORNO: "332705",
	ACCOUNTINDEX: "3",
	CONTACTINDEX: "1",
	INTACTTOSERVER: "@ClZvbHVtZUluZm8JAAAANzQ2OS1GNzE0",
	ZZPINDEX: "10|3,11|0,12|0,16|3,17|2",
	BUSINESSNAMEINDEX: "9",
	BUYDIRECTIONINDEX: "8",
	DATEFORMINDEX: "0|yyyy-mm-dd,19|hh:mm:ss",
	STOCKNAMEINDEX: "7",
	STOCKCODEINDEX: "6",
	ENTRUSTTYPENAMEINDEX: "15",
	INITDATEINDEX: "0",
	MATCHQTYINDEX: "12",
	PROMONEYINDEX: "17",
	MATCHPRICEINDEX: "16",
	PROPRICEINDEX: "10",
	PROAMOUNTINDEX: "11",
	REPORTTIMEINDEX: "19",
	STOCKNAMELONGIDXINDEX: "20",
	NEWINDEX: "1",
};

const chedanBase = {
	GRID0: [
		"委托编号|委托日期|委托时间|分支机构|资产账户|交易类别|股东账号|证券代码|证券名称|买卖方向|委托类别|委托属性|委托价格|委托数量|成交数量|委托状态|废单原因|可撤|",
		"21805|20230822|161206|1|100200647|深圳|0098660150|000001|平安银行|买入|大宗|互报成交确认委托|11.3800|1000000.00|0.00|未报| |1|",
		"21806|20230822|161231|1|100200647|深圳|0098660150|000002|万 科Ａ|买入|大宗|互报成交确认委托|14.0300|1000000.00|0.00|未报| |1|",
	],
	ACTION: "5003",
	TOKEN: "HIUmQX95@7469-F714899XdH1HE",
	REQNO: "1692768845100",
	STARTPOS: "3",
	MAXCOUNT: "2",
	ERRORNO: "332704",
	CONTACTINDEX: "0",
	DRAWINDEX: "17",
	INTACTTOSERVER: "@ClZvbHVtZUluZm8JAAAANzQ2OS1GNzE0",
	ZZPINDEX: "12|3,13|0,14|0",
	DATEFORMINDEX: "1|yyyy-mm-dd,2|hh:mm:ss",
	ORDERDATEINDEX: "1",
	ENTRUSTTYPENAMEINDEX: "15",
	MATCHQTYINDEX: "14",
	ORDERTIMEINDEX: "2",
	STOCKCODEINDEX: "7",
	STOCKNAMEINDEX: "8",
	PROPRICEINDEX: "12",
	PROAMOUNTINDEX: "13",
	HIDESEGMENTINDEX: "17",
	BUSINESSNAMEINDEX: "11",
	BUYDIRECTIONINDEX: "9",
	NEWINDEX: "1",
	Indexes: {
		CONTACTINDEX: "0",
		BUYDIRECTIONINDEX: "9",
		STOCKCODEINDEX: "7",
		STOCKNAMEINDEX: "8",
		PROPRICEINDEX: "12",
		PROAMOUNTINDEX: "13",
		DRAWINDEX: "17",
	},
};

// 历史委托
export function loadLswt(params, callBack) {
	return callBack(util.dealWtData(mockData2(lswtBase, params)));
}

// 历史成交
export function loadLscj(params, callBack) {
	// console.log('aaa2333', params)
	return callBack(util.dealCJData(mockData2(lscjBase, params)));
}

// 当日委托和撤单
export function loadDrwt(params, callBack) {
	return callBack(util.dealWtData(params.Direction ? chedanBase : lswtBase));
}

// 当日成交
export function loadDrcj(params, callBack) {
	return callBack(util.dealCJData(mockData2(lscjBase, params)));
}

// 北交所新三板当日委托
export function sanbanLoadDrwt(params, callBack) {
	return callBack(util.dealCJData(mockData2(lscjBase, params)));
}
// 北交所新三板当日成交
export function sanbanLoadDrcj(params, callBack) {
	return callBack(util.sanbanDealCJData(mockData2(lscjBase, params)));
}
// 北交所新三板历史委托
export function sanbanLoadLswt(params, callBack) {
	return callBack(util.dealWtData(mockData2(lswtBase, params)));
}

// 北交所新三板历史成交
export function sanbanLoadLscj(params, callBack) {
	// console.log('aaa2333', params)
	return callBack(util.sanbanDealCJData(mockData2(lscjBase, params)));
}

export default {
	loadLswt,
	loadLscj,
	loadDrwt,
	loadDrcj,
	sanbanLoadDrwt,
	sanbanLoadDrcj,
	sanbanLoadLswt,
	sanbanLoadLscj,
};

let num = 0;
function mockData2(baseData, params) {
	console.log(baseData, params);
	if (params.isInit) num = 0;
	let resData = JSON.parse(JSON.stringify(baseData));
	let data = resData.GRID0;
	let title = data.shift();
	let resarr = [];
	let len = num > 3 ? 10 : 20;
	for (let i = 0; i < len; i++) {
		let base = data[parseInt(Math.random() * 4)].split("|");
		base[7] = base[7] + "_" + num + "_" + i;
		resarr.push(base.join("|"));
	}
	resarr.unshift(title);
	resData.GRID0 = resarr;
	// console.log(resData)
	num += 1;
	return resData;
}

function mockData(baseData, days) {
	let resData = JSON.parse(JSON.stringify(baseData));
	let data = resData.GRID0;
	let title = data.shift();
	let resarr = [];
	for (let i = 0; i < days; i++) {
		resarr = resarr.concat(data);
	}
	resarr.sort();
	resarr.unshift(title);
	resData.GRID0 = resarr;
	return resData;
}
