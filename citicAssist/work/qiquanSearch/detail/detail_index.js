define(function (require, exports) {
	var pageData = {};
	var util = require('../common/util')
	var app;
	exports.init = function () {
		pageData.title = decodeURIComponent(T.getUrlParameter("title"));
		document.title = pageData.title;
		T.readMapMesg(["C_DETAIL", "DATEFORMINDEX"], function (oData) {
			pageData.oContent =  JSON.parse(oData.C_DETAIL);
			pageData.DATEFORMINDEX = oData.DATEFORMINDEX
			// console.log('aaa', pageData.oContent)
			initVue();
		});
	};

	function initVue() {
		app = new Vue({
			el: "#dzjy_detail",
			data: {
				loading: true,
				list: [], // 处理后的列表数据
				index: Number(T.getUrlParameter("num")),  // 当前展示的下标索引
				showData: [], // 当前展示的数据
				recordTip: pageData.oContent.isShowTip ? '提示：先行赔付议案，投票情况的数值表示申报金额，先行赔付结果请以结果查询页面为准。' : '', // 投票记录是否显示提示
			},
			mounted: function() {
				console.log('aaa2333', this.isShowTip, pageData.oContent)
				this.loading = false
				var titleArr = pageData.oContent.field.split('|')
				var hideField = pageData.oContent.hideField
				var that = this
				// console.log('aaa233', hideField)
				var list = []
				var numFont = ['资金账户', '委托时间', '股东账号']
				var yianNum = titleArr.indexOf('议案类型')
				var that = this
				pageData.oContent.Arr.forEach(function (v) {
					var showData = v.split('|')
					var temArr = []
					if (v.indexOf('先行赔付') > -1) {
						temArr.tipText = '提示：请到交易所或投保基金网站查询申报结果'
					}
					showData.forEach(function (item, i) {
						var t = titleArr[i]
						if (!t) return
						var isNumFont = numFont.indexOf(t) > 0 || !isNaN(Number(item))
						if (t.indexOf('日期') > -1) {
							item = util.dateFormat(item)
						} else if (t.indexOf('时间') > -1){
							item = util.timeFormat(item.trim())
						} 
						if (t === '议案编号') {
							item = that.processNumberString(item)
						}
						if (t === '议案类型') {
							if (item == 0) item = '非累积议案'
							if (item == 1) {
							// if (item == '1=vote_type') {
								item = '累积议案'
							}
							if (temArr.tipText) {
								item = '先行赔付'
							}
						}
						if (t === '投票情况') {
							if (temArr.tipText) {
								t = '申报金额'
							} else {
								item = util.getVoteDetail(item, showData[yianNum])
							}
						}
						if (t === '股东大会类型') {
							if (item == 0) item = '年度'
							if (item == 1) item = '临时'
						}
						if ( t === '委托状态' && item === '已确认') {
							item = '已接收'
						}

						if (t === '定位串') return
						// hideField之后的字段不显示
						// if (i > hideField) return
						// console.log('aaaaitem', item)
						temArr.push({
							lable: t,
							value: item && item.trim() || '--',
							isNumFont: isNumFont
						})
					})
					list.push(temArr)
				})
				this.list = list
				// this.list = util.ruleSort(list, pageData.title.includes('委托') ? wtSort : cjSort)
				this.showData = this.list[this.index]
				// console.log(JSON.parse(JSON.stringify(this.showData)))
			},
			methods: {
				processNumberString: function(str) {
					var parts = str.split('.');
					if (parts.length === 1) {
					  	return str;
					} else {
						var decimalPart = parts[1];
						if (decimalPart.length > 3) {
							return parseFloat(str).toFixed(3);
						} else {
							return str;
						}
					}
				},
				changeIndex: function (value) {
					if (this.index + value >= this.list.length) {
						return alert('当前页最后一条记录')
					}
					if (this.index + value < 0) {
						return alert('当前页第一条记录')
					}
					this.index += value
					this.showData = this.list[this.index]

				}
			},
		});
	}
});
