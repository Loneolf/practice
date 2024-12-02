define(function (require, exports, module) {
	var TimeBar = require('../../common/TimeBar/index');
	var util = require('../../common/util')
	var funs = require('./fun')
	var pageData = {}
	var app;
	exports.init =  function () {
		funs.action5(function(res) {
			TimeBar.init('time-bar');
			var timestamp = new Date(res)
			pageData.nearTime = util.getNearTime(timestamp, false)
			pageData.time = util.getDiffDate(timestamp, 1).time
			console.log('aaa2333pageData', pageData)
			initVue();
		})
	}

	function initVue() {
		app = new Vue({
			el: "#app",
			data: {
				
				activeTab: 'weekly',

				// 查询的开始时间和结束时间
				beginDate: pageData.nearTime.weekly.beginDate,
				endDate: pageData.nearTime.weekly.endDate,
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

				pageStart: 0, // 
				pageSize: 20, // 每次请求 显示条数
				MaxCount: 20,

				titleArr: [], // 从第二页开始加载的数据将不返回title内容，缓存下来用于处理后续的分页数据
			},

			mounted: function () {
				this.loadData()
			},

			methods: {
				handleRefresh: function () {
					try { this.$refs.list.scrollTo({top: 0, behavior: 'smooth'})} catch (error) {}
					if (!this.isHistoryList) {
						this.loadData(true)
					}
				},
				
				backClick: function () {
					
				},

				onTabChange: function (tab) { 
					this.activeTab = tab
					this.beginDate = pageData.nearTime[this.activeTab].beginDate;
					this.endDate = pageData.nearTime[this.activeTab].endDate;
					this.loadData(true)
				},

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
					if (this.isLoading) return
					this.isLoading = true
					if (isInit) {
						this.originData = []
						this.finished = false
						try { this.$refs.list.scrollTo({top: 0, behavior: 'smooth'})} catch (error) {}
					}
					var pbegindate = this.beginDate.replace(/-/g, '')
					var penddate =  this.endDate.replace(/-/g, '')
					var params = {
						StartPos: this.pageStart, 
						MaxCount: this.MaxCount,
						BEGINDATE: pbegindate,
						ENDDATE: penddate,
					}
					
					var _that = this
					console.log('aaa23333reqParams', params)
					funs.loadData(params, function (data) {
						console.log('aa233', data)
						document.getElementById("__hello").style.display = "none";
						_that.dealShouldLoadMore(data, isInit)
					}, _that.titleArr)	
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
						this.hideField = data.HIDESEGMENTINDEX

						this.isLoadmore = false
						this.isPullLoading=false
						this.isLoading = false
						this.pageStart += 20
						this.MaxCount += 20
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
					console.log('aaaagoDetail', i)	
					var oSave = {
						Arr: this.originData.slice(1, this.originData.length),
						hideField: this.hideField,
						field: this.originData[0],
					};
					// console.log('aaa2333',i, oSave)
					// return
					T.saveMapMesg({ C_DETAIL: JSON.stringify(oSave) }, function () {
						T.fn.action10061({
							url:'/vue/networkVoting/detail/index.html?title=委托详情&num=' + i
						});
					});
				},
			},
		});
	}
});
