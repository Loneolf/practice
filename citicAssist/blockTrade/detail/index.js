import util from "../util.js";	
let pageData = {};
	
const cjSort = [
	"委托编号",
	"分支机构",
	"资产账户",
	"交易类别",
	"股东账号",
	"证券代码",
	"证券名称",
	"证券全称",
	"受限股份类别",
	"买卖方向",
	"委托日期",
	"委托时间",
	"委托类别",
	"委托属性",
	"委托价格",
	"委托数量",
	"委托金额",
	"对方席位号",
	"对方销售商",
	"对方交易主体类型",
	"对方交易主体代码",
	"对方投资者账户名称",
	"对方交易员",
	"处理标志",
	"成交类型",
	"交易日期",
	"当前时间",
	"成交时间",
	"成交价格",
	"成交数量",
	"成交金额",
	"成交编号",
	"返回信息",
	"备注",
];
const wtSort = [
	"委托编号",
	"委托日期",
	"委托时间",
	"分支机构",
	"资产账户",
	"交易类别",
	"股东账号",
	"证券代码",
	"证券名称",
	"证券全称",
	"受限股份类别",
	"买卖方向",
	"委托类别",
	"委托属性",
	"委托价格",
	"委托数量",
	"委托状态",
	"委托金额",
	"废单原因",
	"对方席位号",
	"约定号",
	"联系人姓名",
	"联系人电话",
	"成交价格",
	"成交金额",
	"成交数量",
	"成交编号",
	"撤单数量",
	"可撤",
]

init()
function init() {
	pageData.title = decodeURIComponent(T.getUrlParameter("title"));
	document.title = pageData.title;
	let data = localStorage.getItem('listData')
	pageData.oContent =  JSON.parse(data);
	pageData.DATEFORMINDEX = '1|yyyy-mm-dd,2|hh:mm:ss'
	initVue();
};

function initVue() {
	new Vue({
		el: "#dzjy_detail",
		data: {
			loading: true,
			list: [], // 处理后的列表数据
			index: Number(T.getUrlParameter("num")),  // 当前展示的下标索引
			showData: [] // 当前展示的数据

		},
		mounted: function() {
			this.loading = false
			let titleArr = pageData.oContent.field.split('|')
			let list = []
			let numFont = ['资金账户', '委托时间', '股东账号']
			pageData.oContent.Arr.forEach(function (v) {
				let showData = v.split('|')
				let temArr = []
				showData.forEach(function (item, i) {
					let t = titleArr[i]
					if (!t) return
					let isNumFont = numFont.indexOf(t) > 0 || !isNaN(Number(item))

					if (t.indexOf('日期') !== -1) {  // 日期格式化
						item = T.dateform(item, '1', pageData.DATEFORMINDEX)	
					}
					if (t.indexOf('时间') !== -1) { // 时间处理
						item = T.dateform(item, '2', pageData.DATEFORMINDEX)	
					}
					temArr.push({
						lable: t,
						value: item.trim() || '--',
						isNumFont: isNumFont
					})
				})
				list.push(temArr)
			})
			this.list = util.ruleSort(list, pageData.title.includes('委托') ? wtSort : cjSort)
			this.showData = this.list[this.index]
		},
		methods: {
			changeIndex: function (value) {
				console.log(this.index, value)
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
