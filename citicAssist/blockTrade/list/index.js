import funs from './fun.js'
let newTime = T.styleTime();
let dataStart = newTime.getYTDS(newTime.manyDays(-3));

let pageData = {};

init()

function init() {
	pageData.title = decodeURIComponent(T.getUrlParameter("title"));
	document.title = pageData.title.replaceAll("三板", "");
	initVue();
};

function initVue() {
	new Vue({
		el: "#app",
		data: {
			// 快速选择列表
			daySelectArr: [
				{ text: "三日", value: "three", num: 3 },
				{ text: "一周", value: "weekly", num: 7 },
				{ text: "一月", value: "month", num: 30 },
			],
			isHistoryList: pageData.title.indexOf("历史") > -1,
			// 默认选择查询三天内的
			daySelectActive: 7,
			// 查询的开始时间和结束时间
			beginDate: newTime.getYTDS(newTime.manyDays(-7)),
			endDate: newTime.getYTDS(newTime.manyDays(-1)),

			// 日期弹框相关数据
			popDateValue: new Date(dataStart),
			idshowPopDate: false,
			maxDate: new Date(), //
			popDateType: "begin",

			// 显示相关数据
			dataList: [], // 处理后用于显示的数据
			originData: [], // 原始数据
			indexInfo: {},

			isPullLoading: false, // 下拉刷新
			isLoadmore: false, // 上拉刷新
			finished: false, // 数据是否加载完毕
			isLoading: false, // 是否是正在请求数据

			pageCount: 0, //
			pageSize: T.pagecount - 1, // 每次请求 显示条数
		},

		mounted () {
			this.loadData(true);
		},

		methods: {
			// 初始加载数据及上拉加载数据
			loadData (isInit) {
				// console.log('aaa23333loadData', isInit)
				if (isInit) {
					this.pageCount = 0;
					this.dataList = [];
					this.originData = [];
					this.indexInfo = {};
				}
				let params = {
					StartPos: this.pageCount,
					MaxCount: this.pageSize,
					diff: (new Date(this.endDate) - new Date(this.beginDate)) / (24 * 60 * 60 * 1000) + 1,
					isInit: isInit
				};
				let funMap = {
					历史委托: "loadLswt",
					历史成交: "loadLscj",
					当日委托: "loadDrwt",
					当日成交: "loadDrcj",
					撤单: "loadDrwt",
					三板历史委托: "sanbanLoadLswt",
					三板历史成交: "sanbanLoadLscj",
					三板当日委托: "sanbanLoadDrwt",
					三板当日成交: "sanbanLoadDrcj",
				};
				switch (pageData.title) {
					case "历史委托":
					case "历史成交":
						params.begin_date = this.beginDate.replaceAll("-", "");
						params.end_date = this.endDate.replaceAll("-", "");
						break;
					case "三板历史委托":
					case "三板历史成交":
						params.start_date = this.beginDate.replaceAll("-", "");
						params.end_date = this.endDate.replaceAll("-", "");
						break;
					case "撤单":
						params.Direction = 1;
						break;
				}
				console.log("aaaaparams", params);
				// console.log('aaaafun', funMap[pageData.title], funs[funMap[pageData.title]])
				if (!funs[funMap[pageData.title]]) {
					alert("来源异常， 请退出重试");
					T.fn.action10002();
				}
				let _that = this;
				this.isLoading = true;
				funs[funMap[pageData.title]](params, function (data) {
					_that.dealShouldLoadMore(data);
				});
			},
			// 处理接口返回的数据，是否加载更多
			dealShouldLoadMore (data) {
				// console.log('aaa2333', data.showData)
				this.pageCount += data.GRID0.length;
				this.dataList = this.dataList.concat(data.showData);
				this.originData = this.originData.concat(data.GRID0);
				this.indexInfo = data.Indexes;

				this.isLoadmore = false;
				this.isPullLoading = false;
				this.isLoading = false;
				if (data.showData.length >= this.pageSize) {
					this.finished = false;
				} else {
					this.finished = true;
				}
			},
			// 下拉刷新
			onRefresh () {
				this.isPullLoading = true;
				this.loadData(true);
			},
			// 时间选择：3日，一周，一月
			dataSelect (v) {
				this.daySelectActive = v.num;
				// console.log('aaa2333', v)
				this.beginDate = this.getDiffDate(Date.now(), v.num).timeText;
				this.endDate = this.getDiffDate(Date.now(), 1).timeText;
				this.loadData(true);
			},
			// 是否展示日期选择弹框
			setPopDate (value, type) {
				this.idshowPopDate = value;
				if (!type || !value) return;
				this.popDateType = type;
				this.popDateValue = new Date(type === "begin" ? this.beginDate : this.endDate);
				// this.maxDate = new Date(type === 'begin' ? this.getDiffDate(Date.now(), this.daySelectActive - 1).timestamp : new Date())
			},
			// 日期选择确认，更新起始日期和结束日期
			confirmPopDate (value) {
				let time = new Date(value);
				if (this.popDateType === "begin") {
					this.beginDate = this.getDiffDate(time).timeText;
					this.endDate = this.getDiffDate(time, -(this.daySelectActive - 1)).timeText;
				} else {
					this.beginDate = this.getDiffDate( time, this.daySelectActive - 1 ).timeText;
					this.endDate = this.getDiffDate(time).timeText;
				}
				this.setPopDate(false);
				this.loadData();
			},

			// 处理撤单操作
			dealWithDraw (item, i) {
				let arrData = this.originData[i + 1].split("|");
				let aWord = [];
				aWord[0] = "撤单信息\r\n";
				aWord[1] =
					"操作:" +
					arrData[this.indexInfo.BUYDIRECTIONINDEX] +
					"\r\n";
				aWord[2] =
					"代码:" + arrData[this.indexInfo.STOCKCODEINDEX] + "\r\n";
				aWord[3] =
					"名称:" + arrData[this.indexInfo.STOCKNAMEINDEX] + "\r\n";
				aWord[4] =
					"价格:" + arrData[this.indexInfo.PROPRICEINDEX] + "\r\n";
				aWord[5] =
					"数量:" + arrData[this.indexInfo.PROAMOUNTINDEX] + "\r\n";
				aWord[6] = "您是否确认以上撤单?";
				if (confirm(aWord.join(""))) {
					let that = this;
					let oSend = {
						ContactID: arrData[this.indexInfo.CONTACTINDEX],
					};
					func.ms5002(oSend, function (oData) {
						that.loadData(true);
						alert("操作成功！");
					});
				}
			},

			// 去详情页面
			goDetail (i) {
				// console.log('aaaagoDetail', i)
				let titleMap = {
					历史委托: "委托详情",
					历史成交: "成交详情",
					当日委托: "委托详情",
					当日成交: "成交详情",
					撤单: "委托详情",
					default: "详情",
				};
				let title = titleMap[pageData.title] || titleMap.default;
				let oSave = {
					Arr: this.originData.slice(1, this.originData.length),
					field: this.originData[0],
				};
				localStorage.setItem('listData', JSON.stringify(oSave))
				location.href = `${location.origin}/citicAssist/blockTrade/detail/index.html?title=${title}&num=${i}`
			},

			// time: 传入的时间戳或日期数据，diff，与传入时间戳的差值
			// 返回对应的时间戳和转换的文字日期
			getDiffDate (time, diff) {
				if (!diff) diff = 0;
				let diffTime = new Date(new Date(time).getTime() - 24 * 60 * 60 * 1000 * diff);
				return {
					timestamp: diffTime.getTime(),
					timeText: this.addTimeZero(diffTime.toLocaleDateString().replaceAll("/", "-")),
				};
			},
			addTimeZero (timeText, operate) {
				if (!operate) operate = "-";
				let arr = timeText.split(operate);
				arr.forEach(function (item, index) {
					if (Number(item) < 10) arr[index] = "0" + item;
				});
				return arr.join(operate);
			},
		},
	});
}
