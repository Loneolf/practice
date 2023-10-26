// 映射关系，快速查询
export const nameMap = {
	ZuHeJY: "组合交易",
	InsideFund: "场内基金",
	FundETF: "ETF", // 三级页面
	FundLOF: "LOF基金", // 三级页面
	Convertible: "债券",
	HSconvertible: "沪市可转债", // 三级页面
	BJSConvertible: "可转债互报成交确认交易", // 北交所 三级页面
	XSBConvertible: "可转债互报成交确认交易", // 新三板  三级页面
	BondConvertible: "债券现券交易", // 三级页面
	XinSanBan: "新三板",
	GuQuanJiLi: "股权激励",
	DaZongJiYi: "大宗交易",
	YouXianGu: "优先股",
	AdvanceOffer: "预受要约",
	OtherSearch: "其他查询",
	HStockFlow: "H股全流通",
	netVote: "网络投票",
	compensateAdvance: "先行赔付",
};

// 组合交易
export const ZuHeJY = [
	{
		type: "normal",
		showPoint: "",
		itemClickPoint: "",
		list: [
			{
				name: "自建组合",
				url: "",
				urlType: "",
				exClass: "marginTop2",
			},
			{
				name: "组合持仓",
				url: "",
			},
			{
				name: "交易记录",
				url: "",
			},
		],
	},
];

// 场内基金
export const InsideFund = [
	{
		type: "normal",
		showPoint: "jy_pt_cnjj_zx",
		itemClickPoint: "jy_pt_cnjj_yywdj",
		list: [
			{
				name: "ETF基金",
				url: "",
				valueSign: " 沪、深",
				exClass: "marginTop2",
			},
			{
				name: "LOF基金",
				url: "",
				valueSign: " 沪、深",
			},
			{
				name: "实时申赎货币基金",
				url: "",
				valueSign: " 沪",
			},
		],
	},
];

// ETF
export const FundETF = [
	{
		type: "normal",
		title: "交易",
		showPoint: "jy_pt_etf_zx",
		itemClickPoint: "jy_pt_etf_yywdj",
		list: [
			{
				name: "ETF申购",
				url: "",
			},
			{
				name: "ETF赎回",
				url: "",
			},
			{
				name: "网下现金认购",
				url: "",
			},
			{
				name: "网下股票认购",
				url: "",
			},
			{
				name: "认购内部撤单",
				url: "",
			},
			{
				name: "申赎内部撤单",
				url: "",
			},
		],
	},
	{
		type: "normal",
		title: "查询",
		list: [
			{
				name: "申赎委托查询",
				url: "",
			},
			{
				name: "申赎成交查询",
				url: "",
			},
			{
				name: "申赎历史查询",
				url: "",
				urlType: "",
				action: "12384",
				datetype: "1",
				title: "申赎历史查询",
			},
			{
				name: "网下认购查询",
				url: "",
			},
			{
				name: "成份股查询",
				url: "",
			},
		],
	},
];

// LOF基金",
export const FundLOF = [
	{
		type: "cross",
		showPoint: "jy_pt_lof_zx",
		itemClickPoint: "jy_pt_lof_yywdj",
		list: [
			{
				name: "买",
				urlType: "",
				url: "",
				imgSrc: "./img/mairu.png",
				valueSign: "购买",
			},
			{
				name: "赎",
				urlType: "",
				url: "",
				imgSrc: "./img/shuhui.png",
				valueSign: "赎回",
			},
			{
				name: "撤",
				urlType: "",
				url: "",
				imgSrc: "./img/chedan.png",
				valueSign: "撤单",
			},
			{
				name: "持",
				urlType: "",
				url: "",
				imgSrc: "./img/chicang.png",
				valueSign: "持仓",
			},
		],
	},
	{
		type: "normal",
		title: "查询",
		list: [
			{
				name: "当日委托",
				url: "",
				urlType: "",
			},
			{
				name: "当日成交",
				url: "",
				urlType: "",
			},
			{
				name: "历史委托",
				url: "",
				urlType: "",
			},
			{
				name: "历史成交",
				url: "",
				urlType: "",
			},
		],
	},
	{
		type: "normal",
		title: "其他",
		list: [
			{
				name: "LOF分拆",
				url: "",
				urlType: "",
			},
			{
				name: "LOF合并",
				url: "",
				urlType: "",
			},
		],
	},
];

// 债券
export const Convertible = [
	{
		type: "normal",
		title: "可转债转股、回售",
		showPoint: "jy_pt_zq_zx",
		itemClickPoint: "jy_pt_zq_yywdj",
		list: [
			{
				name: "沪深京可转债",
				url: "",
				helpconf: {
					secondtype: "99",
					secondtext: "帮助",
					secondurl: encodeURIComponent(
						"https://mp.weixin.qq.com/s/fEwCMJg82cUBj0LyRRhOaA"
					), // 持仓设置
				},
			},
			{
				name: "沪市可转债",
				url: "",
				valueSign: "上海固收平台",
			},
			{
				name: "新三板可转债",
				url: "",
			},
		],
	},
	{
		type: "normal",
		list: [
			{
				name: "北交所可转债互报成交确认交易",
				url: "",
				exClass: "marginTop2",
			},
			{
				name: "新三板可转债互报成交确认交易",
				url: "",
			},
		],
	},
	{
		type: "normal",
		list: [
			{
				name: "债券现券交易",
				url: "",
				valueSign: "沪、深",
				exClass: "marginTop2",
			},
		],
	},
];

// 沪市可转债
export const HSconvertible = [
	{
		type: "normal",
		help: "wxhelp",
		helpClickPoint: "jy_pt_hskzz_bz",
		showPoint: "jy_pt_hskzz_zx",
		itemClickPoint: "jy_pt_hskzz_yywdj",
		list: [
			{
				name: "转股/换股",
				url: "",
				exClass: "marginTop2",
			},
			{
				name: "回售",
				url: "",
			},
			{
				name: "回售撤销",
				url: "",
			},
			{
				name: "撤单",
				url: "",
			},
		],
	},
	{
		type: "normal",
		list: [
			{
				name: "委托查询",
				url: "",
				exClass: "marginTop2",
			},
			{
				name: "成交查询",
				url: "",
			},
		],
	},
	{
		type: "tips",
		text: "提示：通过上海固收平台进行的转股、换股、回售等业务，请在此页面操作，详情请以债券发行人公告为准。",
	},
];

// 北交所可转债互报成交确认交易",
export const BJSConvertible = [
	{
		type: "cross",
		showPoint: "jy_pt_kzzhbcjqrjy_zx",
		itemClickPoint: "jy_pt_kzzhbcjqrjy_yywdj",
		list: [
			{
				name: "买",
				urlType: "",
				url: "",
				imgSrc: "./img/mairu.png",
				valueSign: "买入",
			},
			{
				name: "卖",
				urlType: "",
				url: "",
				imgSrc: "./img/maichu.png",
				valueSign: "卖出",
			},
			{
				name: "撤",
				urlType: "",
				url: "",
				imgSrc: "./img/chedan.png",
				valueSign: "撤单",
			},
			{
				name: "持",
				urlType: "",
				url: "",
				imgSrc: "./img/chicang.png",
				valueSign: "持仓",
			},
		],
	},
	{
		type: "normal",
		title: "查询",
		list: [
			{
				name: "当日委托",
				url: "",
				urlType: "",
			},
			{
				name: "当日成交",
				url: "",
				urlType: "",
			},
			{
				name: "历史委托",
				url: "",
				urlType: "",
			},
			{
				name: "历史成交",
				url: "",
				urlType: "",
			},
		],
	},
];

// 新三板可转债互报成交确认交易",
export const XSBConvertible = [
	{
		type: "cross",
		showPoint: "jy_pt_kzzhbcjqrjy_zx",
		itemClickPoint: "jy_pt_kzzhbcjqrjy_yywdj",
		list: [
			{
				name: "买",
				urlType: "",
				url: "",
				imgSrc: "../img/mairu.png",
				valueSign: "买入",
			},
			{
				name: "卖",
				urlType: "",
				url: "",
				imgSrc: "../img/maichu.png",
				valueSign: "卖出",
			},
			{
				name: "撤",
				urlType: "",
				url: "",
				imgSrc: "../img/chedan.png",
				valueSign: "撤单",
			},
			{
				name: "持",
				urlType: "",
				url: "",
				imgSrc: "../img/chicang.png",
				valueSign: "持仓",
			},
		],
	},
	{
		type: "normal",
		title: "查询",
		list: [
			{
				name: "当日委托",
				url: "",
				urlType: "",
			},
			{
				name: "当日成交",
				url: "",
				urlType: "",
			},
			{
				name: "历史委托",
				url: "",
				urlType: "",
			},
			{
				name: "历史成交",
				url: "",
				urlType: "",
			},
		],
	},
];

// 债券现券交易
export const BondConvertible = [
	{
		activeNames: [],
		type: "collapse",
		help: "bondConvertibleHelp",
		helpClickPoint: "jy_pt_zqxqjy_bz",
		showPoint: "jy_pt_zqxqjy_zx",
		itemClickPoint: "jy_pt_zqxqjy_yywdj",
		list: [
			{
				name: "匹配成交",
				valueSign: " 沪、深",
				rightIcon: "",
				exClass: "marginTop2",
				itemChildren: [
					{
						name: "匹配买入",
						url: "",
					},
					{
						name: "匹配卖出",
						url: "",
					},
				],
			},
			{
				name: "协商成交（互报成交确认）",
				valueSign: " 沪、深",
				rightIcon: "question-o",
				itemChildren: [
					{
						name: "协商买入",
						url: "",
					},
					{
						name: "协商卖出",
						url: "",
					},
					{
						name: "协商委托确认",
						url: "",
					},
				],
			},
			{
				name: "点击成交",
				valueSign: " 沪、深",
				rightIcon: "",
				itemChildren: [
					{
						name: "报价买入",
						url: "",
					},
					{
						name: "报价卖出",
						url: "",
					},
					{
						name: "点击报价回复",
						url: "",
					},
				],
			},
			{
				name: "询价成交",
				valueSign: " 深",
				rightIcon: "",
				itemChildren: [
					{
						name: "询价买入",
						url: "",
					},
					{
						name: "询价卖出",
						url: "",
					},
					{
						name: "询价报价委托及报价回复",
						url: "",
					},
				],
			},
			{
				name: "竞买成交",
				valueSign: "深",
				rightIcon: "",
				itemChildren: [
					{
						name: "竞买预约申报",
						url: "",
					},
					{
						name: "竞买发起申报",
						url: "",
					},
					{
						name: "竞买应价申报",
						url: "",
					},
					{
						name: "竞买预约行情查询",
						url: "",
					},
				],
			},
		],
	},
	{
		type: "normal",
		list: [
			{
				name: "撤单",
				url: "",
				exClass: "marginTop2",
			},
		],
	},
	{
		type: "normal",
		list: [
			{
				name: "当日委托",
				url: "",
				exClass: "marginTop2",
			},
			{
				name: "当日成交",
				url: "",
			},
			{
				name: "历史委托",
				url: "",
			},
			{
				name: "历史成交",
				url: "",
			},
		],
	},
];

// 新三板
export const XinSanBan = [
	{
		title: "两网及退市转让",
		type: "normal",
		showPoint: "jy_pt_xsb_zx",
		itemClickPoint: "jy_pt_xsb_yywdj",
		list: [
			{
				name: "限价买入",
				url: "",
				urlType: "", //跳转普通交易买入
			},
			{
				name: "限价卖出",
				url: "",
				urlType: "", //跳转普通交易卖出
			},
		],
	},
	{
		title: "新三板摘牌转让",
		type: "normal",
		list: [
			{
				name: "摘牌买入",
				url: "",
			},
			{
				name: "摘牌卖出",
				url: "",
			},
		],
	},
	{
		type: "normal",
		list: [
			{
				name: "摘牌委托撤单",
				url: "",
				exClass: "marginTop2",
			},
		],
	},
	{
		type: "normal",
		list: [
			{
				name: "摘牌当日委托",
				// ur",
				url: "",
				urlType: "",
				exClass: "marginTop2",
				title: "drwt",
			},
			{
				name: "摘牌当日成交",
				url: "",
				urlType: "",
				title: "drcj",
				// ur",
			},
			{
				name: "摘牌历史委托",
				url: "",
			},
			{
				name: "摘牌历史成交",
				url: "",
				action: "12383",
				datetype: "1",
				title: "历史成交",
				urlType: "",
			},
		],
	},
];

// 股权激励
export const GuQuanJiLi = [
	{
		type: "normal",
		showPoint: "jy_pt_gqjl_zx",
		itemClickPoint: "jy_pt_gqjl_yywdj",
		list: [
			{
				name: "股权激励计划",
				url: "",
				exClass: "marginTop2",
				urlType: "",
				fn: function fn() {
					T.readLocalMesg(
						[
							"jyloginflag",
							"logintype=1",
							"UserCode",
							"softversion",
						],
						function (data) {
							require.async(
								"/newjy/guQuanJiLiJiHua/js/pre_check",
								function (methods) {
									if (data.JYLOGINFLAG <= 1) {
										window.combineCredit =
											methods.preCheck.bind(window);
										T.fn.changeURL(
											"http://action:10090/?jsfuncname=combineCredit()"
										);
									} else {
										methods.preCheck();
									}
								}
							);
						}
					);
				},
			},
		],
	},
	{
		type: "normal",
		title: "限制性股票",
		list: [
			{
				name: "限制性股票查询",
				url: "",
			},
		],
	},
	{
		type: "normal",
		title: "股票期权",
		list: [
			{
				name: "自主行权",
				url: "",
			},
			{
				name: "行权融资",
				url: "",
			},
		],
	},
	{
		type: "normal",
		list: [
			{
				name: "员工持股计划",
				url: "",
				exClass: "marginTop2",
				urlType: "",
				fn: function fn() {
					require.async(
						"/newjy/gqjl_yuangongjihua/js/pre_check",
						function (methods) {
							methods.preCheck();
						}
					);
				},
			},
		],
	},
];

// 大宗交易
export const DaZongJiYi = [
	{
		type: "normal",
		showPoint: 'jy_pt_dzjy_zx',
		itemClickPoint: 'jy_pt_dzjy_yywdj',
		title: '沪深证券',
		list: [
			{
				name: "沪深证券大宗意向单/定价单查询",
				url: "",
				urlType: "",
			},
		],
	},
	{
		activeNames: [],
		type: "collapse",
		list: [
			{
				name: "大宗买入",
				itemChildren: [
					{
						name: "意向买入",
						url: "",
						valueSign: "沪、深",
						urlType: "",
					},
					{
						name: "成交确认买入",
						url: "",
						valueSign: "沪、深",
						urlType: "",
					},
					{
						name: "定价买入",
						url: "",
						valueSign: "深",
						urlType: "",
					},
					{
						name: "盘后定价买入",
						url: "",
						valueSign: "深",
						urlType: "",
					},
				],
			},
			{
				name: "大宗卖出",
				itemChildren: [
					{
						name: "意向卖出",
						url: "",
						valueSign: "沪、深",
						urlType: "",
					},
					{
						name: "成交确认卖出",
						url: "",
						valueSign: "沪、深",
						urlType: "",
					},
					{
						name: "定价卖出",
						url: "",
						valueSign: "深",
						urlType: "",
					},
					{
						name: "盘后定价卖出",
						url: "",
						valueSign: "深",
						urlType: "",
					},
				],
			},
		],
	},
	{
		type: "normal",
		list: [
			{
				name: "撤单",
				url: "list/index.html?title=撤单",
			},
		]
	},
	{
		activeNames: [],
		type: "collapse",
		list: [
			{
				name: "查询",
				itemChildren: [
					{
						name: "当日委托",
						url: "/citicAssist/blockTrade/list/index.html?title=当日委托",
					},
					{
						name: "当日成交",
						url: "/citicAssist/blockTrade/list/index.html?title=当日成交",
					},
					{
						name: "历史委托",
						url: "/citicAssist/blockTrade/list/index.html?title=历史委托",
					},
					{
						name: "历史成交",
						url: "/citicAssist/blockTrade/list/index.html?title=历史成交",
					},
					
				],
			},
		],
	},
	{
		activeNames: [],
		type: "collapse",
		title: '北交所和新三板证券',
		list: [
			{
				name: "成交确认买入",
				itemChildren: [
					{
						name: "北交所证券",
						url: "",
						urlType: "",
					},
					{
						name: "新三板证券",
						url: "",
					},
					
				],
			},
			{
				name: "成交确认卖出",
				itemChildren: [
					{
						name: "北交所证券",
						url: "",
						urlType: "",
					},
					{
						name: "新三板证券",
						url: "",
					},
				],
			},
			{
				name: "查询",
				itemChildren: [
					{
						name: "当日委托",
						url: "/citicAssist/blockTrade/list/index.html?title=三板当日委托",
					},
					{
						name: "当日成交",
						url: "/citicAssist/blockTrade/list/index.html?title=三板当日成交",
					},
					{
						name: "历史委托",
						url: "/citicAssist/blockTrade/list/index.html?title=三板历史委托",
					},
					{
						name: "历史成交",
						url: "/citicAssist/blockTrade/list/index.html?title=三板历史成交",
					},
					
				],
			},
		],
	},
];

// 优先股
export const YouXianGu = [
	{
		type: "normal",
		title: "北交所",
		showPoint: "jy_pt_yxg_zx",
		itemClickPoint: "jy_pt_yxg_yywdj",
		list: [
			{
				name: "定价买入",
				url: "",
				urlType: "",
			},
			{
				name: "定价卖出",
				url: "",
				urlType: "",
			},
			{
				name: "成交确认买入",
				url: "",
			},
			{
				name: "成交确认卖出",
				url: "",
			},
			{
				name: "互报成交确认买入",
				url: "",
			},
			{
				name: "互报成交确认卖出",
				url: "",
			},
		],
	},
	{
		type: "normal",
		title: "新三板",
		list: [
			{
				name: "定价买入",
				url: "",
				urlType: "",
			},
			{
				name: "定价卖出",
				url: "",
				urlType: "",
			},
			{
				name: "成交确认买入",
				url: "",
			},
			{
				name: "成交确认卖出",
				url: "",
			},
			{
				name: "互报成交确认买入",
				url: "",
			},
			{
				name: "互报成交确认卖出",
				url: "",
			},
		],
	},
];

// 预受要约
export const AdvanceOffer = [
	// 未上线，等上线后加上链接打开即可
	// {
	// 	type: "normal",
	// 	title: "沪市和深市",
	// 	list: [
	// 		{
	// 			name: "要约收购",
	// 		"",
	// 		},
	// 	],
	// },
	{
		type: "normal",
		title: "北交所",
		showPoint: "jy_pt_ysyy_zx",
		itemClickPoint: "jy_pt_ysyy_yywdj",
		list: [
			{
				name: "要约收购",
				url: "",
			},
			{
				name: "要约回购",
				url: "",
			},
		],
	},
	{
		type: "normal",
		title: "新三板",
		list: [
			{
				name: "要约收购",
				url: "",
			},
			{
				name: "要约回购",
				url: "",
			},
		],
	},
];

// 其他查询
export const OtherSearch = [
	{
		type: "normal",
		showPoint: "jy_pt_qtcx_zx",
		itemClickPoint: "jy_pt_qtcx_yywdj",
		list: [
			{
				name: "佣金查询",
				url: "",
				exClass: "marginTop2",
			},
		],
	},
	{
		type: "normal",
		list: [
			{
				name: "新易融",
				url: "",
				exClass: "marginTop2",
			},
			{
				name: "快e融",
				url: "",
			},
		],
	},
];

// H股全流通
export const HStockFlow = [
	{
		type: "normal",
		title: "交易",
		showPoint: "jy_pt_hgqlt_zx",
		itemClickPoint: "jy_pt_hgqlt_yywdj",
		list: [
			{
				name: "行情交易",
				url: "",
			},
			{
				name: "撤单",
				url: "",
			},
		],
	},
	{
		type: "normal",
		title: "查询",
		list: [
			{
				name: "持仓",
				url: "",
			},
			{
				name: "当日委托",
				url: "",
			},
			{
				name: "当日成交",
				url: "",
			},
			{
				name: "历史委托",
				url: "",
			},
			{
				name: "历史成交",
				url: "",
			},
			{
				name: "查询交割",
				url: "",
				action: "12380",
				datetype: "1",
				title: "查询交割",
				urlType: "",
			},
			// {
			// 	name: "查询交割",
			// 	u",

			// },
		],
	},
	{
		type: "normal",
		title: "投票",
		list: [
			{
				name: "网络投票",
				url: "",
			},
			{
				name: "现场投票人员信息申报",
				url: "",
			},
			{
				name: "委托查询",
				url: "",
			},
		],
	},
];

// 网络投票
export const netVote = [
	{
		type: "normal",
		showPoint: "jy_pt_wltp_zx",
		itemClickPoint: "jy_pt_wltp_yywdj",
		list: [
			{
				name: "投票",
				url: "",
				exClass: "marginTop2",
			},
			{
				name: "投票记录",
				url: "",
			},
		],
	},
];

// 先行赔付
export const compensateAdvance = [
	{
		type: "normal",
		showPoint: "jy_pt_xxpf_zx",
		itemClickPoint: "jy_pt_xxpf_yywdj",
		list: [
			{
				name: "先行赔付受偿申报",
				url: "",
				exClass: "marginTop2",
			},
			{
				name: "申报记录查询",
				url: "",
			},
			{
				name: "申报结果查询",
				url: "",
			},
		],
	},
];
export default {
	nameMap, // 映射关系，快速查询
	ZuHeJY, // 组合交易
	InsideFund, // 场内基金
	FundETF, // ETF
	FundLOF, // LOF基金",
	Convertible, // 债券
	HSconvertible, // 沪市可转债
	BJSConvertible, // 北交所可转债互报成交确认交易",
	XSBConvertible, // 新三板可转债互报成交确认交易",
	BondConvertible, // 债券现券交易
	XinSanBan, // 新三板
	GuQuanJiLi, // 股权激励
	DaZongJiYi, // 大宗交易
	YouXianGu, // 优先股
	AdvanceOffer, // 预受要约
	OtherSearch, // 其他查询
	HStockFlow, // H股全流通
	netVote, // 网络投票
	compensateAdvance, // 先行赔付
}