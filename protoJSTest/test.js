let data = [
  {
    title: "两网及退市转让",
    type: "normal",
    list: [
      {
        name: "限价买入",
        url: "http://action:13010/?title=限价买入",
        urlType: "linkAction",
      },
      {
        name: "限价卖出",
        url: "http://action:13011/?title=限价卖出",
        urlType: "linkAction",
      },
    ],
  },
  {
    title: "新三板摘牌转让",
    type: "normal",
    list: [
      {
        name: "摘牌买入",
        url: "/newjy/gz/gz_zpmr.html",
      },
      {
        name: "摘牌卖出",
        url: "/newjy/gz/gz_zpmc.html",
      },
      {
        name: "摘牌委托撤单",
        url: "/newjy/gz/gz_zpcd.html",
        exClass: "marginTop2",
      },
      {
        name: "摘牌当日委托",
        // url: "/newjy/jy_qmore.html?oldmanP=120?qtype=drwt",
        url: '12303',
        urlType: 'tradeaction',
        exClass: "marginTop2",
        title: "drwt",
      },
      {
        name: "摘牌当日成交",
        url: '12303',
        urlType: 'tradeaction',
        title: "drcj",
        // url: "/newjy/jy_qmore.html?oldmanP=120?qtype=drcj",
      },
      {
        name: "摘牌历史委托",
        url: "/newjy/ptjy/qhiswt.html",
      },
      {
        name: "摘牌历史成交",
        url: "/newjy/ptjy/qhiscj.html",
        action: '12383',
        datetype: '1',
        title: '历史成交',
        urlType: 'tradeactionUrl'
      },
    ],
  },
]

console.log(data[0].list)