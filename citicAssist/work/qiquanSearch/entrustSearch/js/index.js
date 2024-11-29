define(function (require, exports, module) {
	var TimeBar = require('../TimeBar/index');
	var util = require('../../common/util')
	var funs = require('./fun')
	var pageData = {}
	var app;
	exports.init =  function () {
		funs.action5(function(res) {
			TimeBar.init('time-bar');
			var timestamp = new Date()
			pageData.nearTime = util.getNearTime(timestamp, false)
			pageData.time = util.getDiffDate(timestamp, 1).time
			pageData.type = T.getUrlParameter('type')
			pageData.title = decodeURIComponent(T.getUrlParameter('title'))
			console.log('aaa2333title', pageData.title)
			initVue();
		})
	}

	function initVue() {
		app = new Vue({
			el: "#app",
			data: {
				// 快速选择列表
				daySelectArr: [
					{ text: "近一周", value: "weekly"},
					{ text: "近一月", value: "month"},
					{ text: "自定义", value: "userDefined"},
				],
				isShowTip: pageData.title.indexOf('记录') > -1 && pageData.type === 'normal',
				isShowAccont: pageData.title.indexOf('记录') > -1, 
				isHistoryList: pageData.title.indexOf('历史') > -1,
				isResult: pageData.title.indexOf('结果') > -1,
				activeTab: 'today',
				// 默认选择查询七天内的
				accontInfo: { // 账号相关信息
					active: {text: '股东账号: --'},
					list: []
				}, 
				isShowAccontOption: false,

				// 查询的开始时间和结束时间
				beginDate: pageData.title.indexOf('当日') > -1 ?  pageData.nearTime.today :  pageData.nearTime.weekly.beginDate,
				endDate: pageData.title.indexOf('当日') > -1 ?  pageData.nearTime.today :  pageData.nearTime.weekly.endDate,
                minDate: new Date(2010, 0, 1),
                maxDate: pageData.time,

				// 显示相关数据
                dataList: [], // 处理后用于显示的数据
				originData: [], // 原始数据
				hideField: '', // 详情页不展示的字段

				isPullLoading: false, // 下拉刷新
				isLoadmore: false, // 上拉刷新
				finished: false, // 数据是否加载完毕
				isLoading: false, // 是否是正在请求数据

				pageCount: 0, // 
				pageSize: 20, // 每次请求 显示条数
				positionstr: '',

				titleArr: [], // 从第二页开始加载的数据将不返回title内容，缓存下来用于处理后续的分页数据
			},

			mounted: function () {
				return
				var that = this
				if (this.isShowAccont) {
					this.getAccont()
				} else {
					this.loadData()
				}
				var that = this
				document.addEventListener('click', function (e) {
					if (that.isShowAccontOption) {
						that.isShowAccontOption = false
					}
				})
			},

			methods: {
				handleRefresh: function () {
					try { this.$refs.list.scrollTo({top: 0, behavior: 'smooth'})} catch (error) {}
					if (!this.isHistoryList) {
						this.loadData(true)
					}
				},
				getDateTime: function (time) {
					return new Date(time)
				},
				
				// // 时间选择：一周，一月，自定义（默认近一个月）
				// dataSelect: function (v) {
				// 	this.tabActiveValue = v.value
				// 	this.beginDate = pageData.nearTime[v.value].beginDate;
				// 	this.endDate = pageData.nearTime[v.value].endDate;
				// 	this.loadData(true)
				// },


                onConfirm: function() {
                    this.loadData(true);
                },
				onDateChange: function(beginDate, endDate) {
					this.beginDate = beginDate;
					this.endDate = endDate;
				},

				// 初始加载数据及上拉加载数据
				loadData: function (isInit) {
					console.log('aaa23333loadData', isInit)
					return
					if (this.isLoading) return
					this.isLoading = true
					if (isInit) {
						this.originData = []
						this.finished = false
						try { this.$refs.list.scrollTo({top: 0, behavior: 'smooth'})} catch (error) {}
					}
					var accountType = this.accontInfo.active.value
					var text = pageData.title
					var pbegindate = this.beginDate.replace(/-/g, '')
					var penddate =  this.endDate.replace(/-/g, '')
					var params = {
						StartPos: 0, 
						MaxCount: 20,
						REQUESTNUM: 20,
					}
					if (!isInit) params.positionstr = this.positionstr
					var recordParmas =  $.extend({
						// WTACCOUNTTYPE : accountType,
						wtaccounttype :  accountType,
						WTACCOUNT : this.accontInfo.active.wtNumb,
					}, params)
					
					var funMap = { 
						"普通上海当日投票记录": {
							fun: 'loadRecord',
							params: $.extend({
								action: '5723',
							}, recordParmas)
						},
					}
					if (text.indexOf('记录') > -1) {
						if (accountType === 'SZACCOUNT'|| accountType === 'SZBACCOUNT') text = '深圳' + text
						if (accountType === 'SHACCOUNT' || accountType === 'SHBACCOUNT') text = '上海' + text
						if (pageData.type === 'credit') text = '信用' + text
						if (pageData.type === 'normal') text = '普通' + text
					}
					var reqItem = funMap[text]
					console.log('aaaareqItem', text, reqItem)
					var _that = this
					if (!reqItem) {
						_that.dealShouldLoadMore({})
						return
					}
					funs[reqItem.fun](reqItem.params, function (data) {
						console.log('aa233', data)
						document.getElementById("__hello").style.display = "none";
						_that.dealShouldLoadMore(data, isInit)
					}, _that.titleArr, text)	
				},
				// 处理接口返回的数据，是否加载更多
				dealShouldLoadMore: function (data, isInit) {
					if(data.GRID0){
						var hasTitle = util.isTitle(data.GRID0)
						if (hasTitle) {
							this.titleArr = data.titleArr
						}
						if (isInit) {
							this.dataList = data.showData
						} else {
							this.dataList = this.dataList.concat(data.showData)
						}
						var ot = util.isTitle(this.originData)
						this.originData = this.originData.concat(data.GRID0.slice(ot ? 1 : 0, data.GRID0.length))
						this.positionstr = data.positionstr
						this.hideField = data.HIDESEGMENTINDEX

						this.isLoadmore = false
						this.isPullLoading=false
						this.isLoading = false
						if (data.showData.length >= this.pageSize) {
							this.finished = false
						} else {
							this.finished = true
						}
					}
					else{
						this.isLoadmore = false
						this.isPullLoading=false
						this.isLoading = false
						this.finished = true
					}
				},
				// 下拉刷新
				onRefresh: function () {
					this.isPullLoading = true
					this.loadData(true)
				},
				
				// 去详情页面
				goDetail: function (i) {
					// console.log('aaaagoDetail', v, i)	
					var titleMap = {
						"当日投票记录": "投票记录详情",
						"历史投票记录": "投票记录详情",
						"当日投票结果": "投票结果详情",
						"历史投票结果": "投票结果详情",
						"default": '详情'
					};
					var title = titleMap[pageData.title] || titleMap.default 
					var oSave = {
						Arr: this.originData.slice(1, this.originData.length),
						hideField: this.hideField,
						field: this.originData[0],
						isShowTip: this.isShowTip && (this.accontInfo.active.value === 'SHACCOUNT' || this.accontInfo.active.value === 'SHBACCOUNT')
					};
					// console.log('aaa2333',i, oSave)
					// return
					T.saveMapMesg({ C_DETAIL: JSON.stringify(oSave) }, function () {
						T.fn.action10061({
							tzttitletype: pageData.type=== 'credit' ? 1 : 0,
							url:'/vue/networkVoting/detail/index.html?title=' + title + '&num=' + i
						});
					});
				},
			},
		});
	}
});
