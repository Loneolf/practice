// pointData数据是使用node脚本读取excel文件自动生成的
// 将其抽离成了npm包，可以安装npm包: npm i qing-library-util@0.1.1，
// 包因为需要使用node的fs模块，打的包使用commonjs引入，具体使用看包中的文档
// 后续维护新增埋点：可以使用npm包读取excel文件，并将生成的文件贴到该配置文件中

	export const pointData = {
    "jy": {
      "desc": "点击底部一级导航栏中的“交易”tab时触发",
      "name": "交易",
      "resStr": "maidian.reportEvent('jy', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'tab_click', 'title': '交易首页', 'btn_name': '交易', 'btn_module': '一级底部导航栏', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_zx": {
      "desc": "交易默认首页（当前为普通）展现时触发",
      "name": "交易-展现",
      "resStr": "maidian.reportEvent('jy_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '交易首页', 'note': '【记录交易首页展现的是哪个页面，当前默认为：普通】', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_tab": {
      "desc": "交易顶部的四个tab点击",
      "name": "交易-tab",
      "resStr": "maidian.reportEvent('jy_tab', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'tab_click', 'title': '交易首页', 'btn_name': '【普通、信用、期权、期货四者之一】', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_pt_khlqfl": {
      "desc": "交易-普通里的开户领取福利按钮",
      "name": "交易_普通_开户领取福利",
      "resStr": "maidian.reportEvent('jy_pt_khlqfl', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '普通交易页面', 'resource_name': '开户领取福利', 'resource_module': '交易顶部运营位', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_pt_dl": {
      "desc": "点击“登录查看”时触发",
      "name": "交易-普通-登录",
      "resStr": "maidian.reportEvent('jy_pt_dl', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'register_login', 'title': '普通交易页面', 'account_type': '交易账号登陆', 'type': '登录', 'function_module': '综合', 'function': '交易账号登陆' })"
    },
    "jy_pt_qzsx": {
      "desc": "交易-普通里，登陆后在总资产区域的强制刷新转圈按钮",
      "name": "交易-普通-强制刷新",
      "resStr": "maidian.reportEvent('jy_pt_qzsx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '普通交易页面', 'btn_name': '强制刷新', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_pt_wdzc": {
      "desc": "点击“我的资产”时触发",
      "name": "交易-普通-我的资产",
      "resStr": "maidian.reportEvent('jy_pt_wdzc', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '普通交易页面', 'btn_name': '我的资产', 'btn_module': '人民币总资产', 'function_module': '我的', 'function': '我的资产' })"
    },
    "jy_pt_yzzz": {
      "desc": "点击“银证转账”是触发",
      "name": "交易-普通-银证转账",
      "resStr": "maidian.reportEvent('jy_pt_yzzz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '普通交易页面', 'btn_name': '银证转账', 'btn_module': '人民币总资产', 'function_module': '综合', 'function': '银证转账' })"
    },
    "jy_pt_jyan": {
      "change___resource_name": "【买入、卖出、撤单、持仓、查询，五大交易按钮之一】--->[name]",
      "desc": "点击五大交易按钮的买入时触发",
      "name": "交易-普通-交易按钮",
      "resStr": "maidian.reportEvent('jy_pt_jyan', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '普通交易页面', 'resource_name': '[name]', 'resource_type': '金刚位', 'resource_location': '上部', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_pt_cksy": {
      "desc": "点击查看收益时触发",
      "name": "交易-普通-查看收益",
      "resStr": "maidian.reportEvent('jy_pt_cksy', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '普通交易页面', 'resource_name': '查看收益', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_pt_jrdx": {
      "desc": "点击今日打新模块“新股”、“新债”时触发",
      "name": "交易-普通-今日打新",
      "resStr": "maidian.reportEvent('jy_pt_jrdx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '普通交易页面', 'btn_name': '【新股 或 新债】', 'btn_module': '今日打新', 'function_module': '交易', 'function': '新股新债申购' })"
    },
    "jy_pt_gznhg": {
      "desc": "点击“国债逆回购”时触发",
      "name": "交易-普通-国债逆回购",
      "resStr": "maidian.reportEvent('jy_pt_gznhg', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '普通交易页面', 'resource_name': '国债逆回购', 'function_module': '交易', 'function': '国债逆回购交易' })"
    },
    "jy_pt_zbgnq": {
      "change___resource_name": "【对应金刚位，如：预约打新、条件单 等】--->[name]",
      "desc": "点击中部功能区金刚位时触发",
      "name": "交易-普通-中部功能区",
      "resStr": "maidian.reportEvent('jy_pt_zbgnq', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '普通交易页面', 'resource_name': '[name]', 'resource_type': '金刚位', 'resource_location': '中部', 'function_module': '交易', 'function': '交易首页中部功能区' })"
    },
    "jy_pt_etfspds": {
      "desc": "点击etf实盘大赛时触发",
      "name": "交易-普通-etf实盘大赛",
      "resStr": "maidian.reportEvent('jy_pt_etfspds', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '普通交易页面', 'resource_name': 'ETF实盘大赛', 'resource_location': '中部', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_pt_xbgnq": {
      "change___resource_name": "【对应运营位名称，如：场内基金、债券等】--->[name]",
      "desc": "点击页面下部功能区各主要交易功能入口时触发",
      "name": "交易-普通-下部功能区",
      "resStr": "maidian.reportEvent('jy_pt_xbgnq', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '普通交易页面', 'resource_name': '[name]', 'resource_type': '金刚位', 'resource_location': '下部', 'function_module': '交易', 'function': '交易首页下部功能区' })"
    },
    "jy_pt_jysz": {
      "desc": "点击“交易设置”时触发",
      "name": "交易-普通-交易设置",
      "resStr": "maidian.reportEvent('jy_pt_jysz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '普通交易页面', 'resource_name': '交易设置', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_pt_tcdl": {
      "desc": "点击“退出登录”时触发",
      "name": "交易-普通-退出登陆",
      "resStr": "maidian.reportEvent('jy_pt_tcdl', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'register_login', 'title': '普通交易页面', 'account_type': '资金账号', 'type': '退出登录', 'function_module': '综合', 'function': '交易账号登陆' })"
    },
    "jy_pt_fhjb": {
      "desc": "点击“返回旧版”时触发",
      "name": "交易-普通-返回旧版",
      "resStr": "maidian.reportEvent('jy_pt_fhjb', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '普通交易页面', 'btn_name': '返回旧版', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_pt_qtcx_zx": {
      "desc": "“其他查询”页面曝光时触发",
      "name": "交易-普通-其他查询-展现",
      "resStr": "maidian.reportEvent('jy_pt_qtcx_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '其他查询', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_pt_qtcx_yywdj": {
      "change___resource_name": "【对应运营位名称，如：佣金查询、新易融 等】--->[name]",
      "desc": "点击对应运营位时触发",
      "name": "交易-普通-其他查询-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_qtcx_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '其他查询', 'resource_name': '[name]', 'function_module': '交易', 'function': '普通沪深京全屏交易' })"
    },
    "jy_pt_cnjj_zx": {
      "desc": "“场内基金”页面曝光时触发",
      "name": "交易-普通-场内基金-展现",
      "resStr": "maidian.reportEvent('jy_pt_cnjj_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '场内基金', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_cnjj_yywdj": {
      "change___resource_name": "【对应运营位名称，如：ETF基金、LOF基金 等】--->[name]",
      "desc": "点击对应运营位时触发",
      "name": "交易-普通-场内基金-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_cnjj_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '场内基金', 'resource_name': '[name]', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_etf_zx": {
      "desc": "\"ETF\"页面曝光时触发",
      "name": "交易-普通-etf-展现",
      "resStr": "maidian.reportEvent('jy_pt_etf_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': 'ETF基金交易', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_etf_yywdj": {
      "change___resource_name": "【对应列表项名称，如：ETF申购、ETF赎回等】--->[name]",
      "change___resource_module": "【交易、查询之一】--->[nameF]",
      "desc": "点击对应运营位时触发",
      "name": "交易-普通-etf-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_etf_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': 'ETF基金交易', 'resource_name': '[name]', 'resource_module': '[nameF]', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_etf_bz": {
      "desc": "点击“帮助”按钮时触发",
      "name": "交易-普通-etf-帮助",
      "resStr": "maidian.reportEvent('jy_pt_etf_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': 'ETF基金交易', 'btn_name': '帮助', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_lof_zx": {
      "desc": "\"LOF\"页面曝光时触发",
      "name": "交易-普通-lof-展现",
      "resStr": "maidian.reportEvent('jy_pt_lof_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': 'LOF基金交易', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_lof_yywdj": {
      "change___resource_name": "【对应按钮或列表名称，包括第一排交易按钮的名称】--->[name]",
      "change___resource_module": "【交易按钮、查询、其他之一】--->[nameF]",
      "desc": "点击对应运营位时触发",
      "name": "交易-普通-lof-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_lof_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': 'LOF基金交易', 'resource_name': '[name]', 'resource_module': '[nameF]', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_lof_bz": {
      "desc": "点击“帮助”按钮时触发",
      "name": "交易-普通-lof-帮助",
      "resStr": "maidian.reportEvent('jy_pt_lof_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': 'LOF基金交易', 'btn_name': '帮助', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_sssshbjj_zx": {
      "desc": "“实时申赎货币基金”页面曝光时触发",
      "name": "交易-普通-实时申赎货币基金-展现",
      "resStr": "maidian.reportEvent('jy_pt_sssshbjj_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '实时申赎货币基金', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_sssshbjj_yywdj": {
      "change___resource_name": "【对应运营位名称额，如：基金申购、基金赎回 等】--->[name]",
      "desc": "点击“基金申购”时触发",
      "name": "交易-普通-实时申赎货币基金-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_sssshbjj_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '实时申赎货币基金', 'resource_name': '[name]', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_sssshbjj_bz": {
      "desc": "点击“帮助”时触发",
      "name": "交易-普通-实时申赎货币基金-帮助",
      "resStr": "maidian.reportEvent('jy_pt_sssshbjj_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '实时申赎货币基金', 'btn_name': '帮助', 'function_module': '交易', 'function': '场内基金交易' })"
    },
    "jy_pt_zq_zx": {
      "desc": "“债券”页面曝光时触发",
      "name": "交易-普通-债券-展现",
      "resStr": "maidian.reportEvent('jy_pt_zq_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '债券交易', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_zq_yywdj": {
      "change___resource_name": "【各列表项名称，例如：沪深京可转债】--->[name]",
      "change___resource_module": "【各栏目名称，例如：可转债转股、回售，没有就传空】--->[nameF]",
      "desc": "点击债券页面各列表项时触发",
      "name": "交易-普通-债券-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_zq_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '债券交易', 'resource_name': '[name]', 'resource_module': '[nameF]', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_hsjkzz_zx": {
      "desc": "“沪深京可转债”页面曝光时触发",
      "name": "交易-普通-沪深京可转债-展现",
      "resStr": "maidian.reportEvent('jy_pt_hsjkzz_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '沪深京可转债', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_hsjkzz_tabdj": {
      "desc": "点击顶部tab时触发",
      "name": "交易-普通-沪深京可转债-tab点击",
      "resStr": "maidian.reportEvent('jy_pt_hsjkzz_tabdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'tab_click', 'title': '沪深京可转债', 'btn_name': '【对应tab名称，如：转股、回售 等】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_hsjkzz_qr": {
      "desc": "点击“确认”时触发",
      "name": "交易-普通-沪深京可转债-确认",
      "resStr": "maidian.reportEvent('jy_pt_hsjkzz_qr', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'confirm', 'title': '沪深京可转债', 'entrust_type': '【对应交易类型，即tab名称，如：转股】', 'product_code': '【对应产品code】', 'entrust_num': '【对应委托数量】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_hsjkzz_bz": {
      "desc": "点击“帮助”时触发",
      "name": "交易-普通-沪深京可转债-帮助",
      "resStr": "maidian.reportEvent('jy_pt_hsjkzz_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '沪深京可转债', 'btn_name': '帮助', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_hskzz_zx": {
      "desc": "“沪市可转债”页面曝光时触发",
      "name": "交易-普通-沪市可转债-展现",
      "resStr": "maidian.reportEvent('jy_pt_hskzz_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '沪市可转债', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_hskzz_yywdj": {
      "change___resource_name": "【对应运营位名称，如：转股/换股、回售 等】--->[name]",
      "desc": "点击对应运营位时触发",
      "name": "交易-普通-沪市可转债-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_hskzz_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '沪市可转债', 'resource_name': '[name]', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_hskzz_bz": {
      "desc": "点击“帮助”时触发",
      "name": "交易-普通-沪市可转债-帮助",
      "resStr": "maidian.reportEvent('jy_pt_hskzz_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '沪市可转债', 'btn_name': '帮助', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_xsbkzz_zx": {
      "desc": "“新三板可转债”页面曝光时触发",
      "name": "交易-普通-新三板可转债-展现",
      "resStr": "maidian.reportEvent('jy_pt_xsbkzz_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '新三板可转债', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_xsbkzz_tabdj": {
      "desc": "点击对应tab时触发",
      "name": "交易-普通-新三板可转债-tab点击",
      "resStr": "maidian.reportEvent('jy_pt_xsbkzz_tabdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'tab_click', 'title': '新三板可转债', 'btn_name': '【对应tab名称，如：转股、回售 等】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_xsbkzz_qr": {
      "desc": "点击“确认”时触发",
      "name": "交易-普通-新三板可转债-确认",
      "resStr": "maidian.reportEvent('jy_pt_xsbkzz_qr', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'confirm', 'title': '新三板可转债', 'entrust_type': '【对应交易类型，即tab名称，如：转股、回售 等】', 'product_code': '【对应产品code】', 'entrust_num': '【对应委托数量】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_xsbkzz_bz": {
      "desc": "点击“帮助”按钮时触发",
      "name": "交易-普通-新三板可转债-帮助",
      "resStr": "maidian.reportEvent('jy_pt_xsbkzz_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '新三板可转债', 'btn_name': '帮助', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_kzzhbcjqrjy_zx": {
      "desc": "“可转债互报成交确认交易”页面曝光时触发",
      "name": "交易-普通-可转债互报成交确认交易-展现",
      "resStr": "maidian.reportEvent('jy_pt_kzzhbcjqrjy_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '可转债互报成交确认交易', 'note': '【北交所、新三板 二选一】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_kzzhbcjqrjy_yywdj": {
      "change___resource_name": "【对应运营位名称，如：买入、当日委托 等】--->[name]",
      "change___resource_module": "【交易按钮、查询 之一】--->[nameF]",
      "desc": "点击对应运营位时触发",
      "name": "交易-普通-可转债互报成交确认交易-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_kzzhbcjqrjy_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '可转债互报成交确认交易', 'resource_name': '[name]', 'resource_module': '[nameF]', 'note': '【北交所、新三板 二选一】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_kzzhbcjqrjy_bz": {
      "desc": "点击“帮助”按钮时触发",
      "name": "交易-普通-可转债互报成交确认交易-帮助",
      "resStr": "maidian.reportEvent('jy_pt_kzzhbcjqrjy_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '可转债互报成交确认交易', 'btn_name': '帮助', 'note': '【北交所、新三板 二选一】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_kzzhbcjqrmr_zx": {
      "desc": "“可转债互报成交确认买入”页面曝光时触发",
      "name": "交易-普通-可转债互报成交确认买入-展现",
      "resStr": "maidian.reportEvent('jy_pt_kzzhbcjqrmr_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '可转债互报成交确认买入', 'note': '【北交所、新三板 二选一】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_kzzhbcjqrmr_qr": {
      "desc": "点击“确认”时触发",
      "name": "交易-普通-可转债互报成交确认买入-确认",
      "resStr": "maidian.reportEvent('jy_pt_kzzhbcjqrmr_qr', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'confirm', 'title': '可转债互报成交确认买入', 'entrust_type': '【对饮交易类型，如：可转债互报成交确认买入】', 'product_code': '【对应产品code】', 'note': '【北交所、新三板 二选一】', 'entrust_num': '【对应委托数量】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_kzzhbcjqrmc_zx": {
      "desc": "“可转债互报成交确认卖出”页面曝光时触发",
      "name": "交易-普通-可转债互报成交确认卖出-展现",
      "resStr": "maidian.reportEvent('jy_pt_kzzhbcjqrmc_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '可转债互报成交确认卖出', 'note': '【北交所、新三板 二选一】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_kzzhbcjqrmc_qr": {
      "desc": "点击“确认”时触发",
      "name": "交易-普通-可转债互报成交确认卖出-确认",
      "resStr": "maidian.reportEvent('jy_pt_kzzhbcjqrmc_qr', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'confirm', 'title': '可转债互报成交确认卖出', 'entrust_type': '【对饮交易类型，如：可转债互报成交确认卖出】', 'product_code': '【对应产品code】', 'note': '【北交所、新三板 二选一】', 'entrust_num': '【对应委托数量】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_kzzhbcjqrcd_zx": {
      "desc": "“可转债互报成交确认撤单”页面曝光时触发",
      "name": "交易-普通-可转债互报成交确认撤单-展现",
      "resStr": "maidian.reportEvent('jy_pt_kzzhbcjqrcd_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '可转债互报成交确认撤单', 'note': '【北交所、新三板 二选一】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_kzzhbcjqrcc_zx": {
      "desc": "“可转债互报成交确认持仓”页面曝光时触发",
      "name": "交易-普通-可转债互报成交确认持仓-展现",
      "resStr": "maidian.reportEvent('jy_pt_kzzhbcjqrcc_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '可转债互报成交确认持仓', 'note': '【北交所、新三板 二选一】', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_zqxqjy_zx": {
      "desc": "“债券现券交易”页面曝光时触发",
      "name": "交易-普通-债券现券交易-展现",
      "resStr": "maidian.reportEvent('jy_pt_zqxqjy_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '债券现券交易', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_zqxqjy_yywdj": {
      "change___resource_name": "【对应运营位名称，如：匹配成交、匹配买入 等】--->[name]",
      "desc": "点击相关运营位时触发",
      "name": "交易-普通-债券现券交易-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_zqxqjy_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '债券现券交易', 'resource_name': '[name]', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_zqxqjy_bz": {
      "desc": "点击“帮助”时触发",
      "name": "交易-普通-债券现券交易-帮助",
      "resStr": "maidian.reportEvent('jy_pt_zqxqjy_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '债券现券交易', 'btn_name': '帮助', 'function_module': '交易', 'function': '债券交易' })"
    },
    "jy_pt_xsb_zx": {
      "desc": "“新三板”页面曝光时触发",
      "name": "交易-普通-新三板-展现",
      "resStr": "maidian.reportEvent('jy_pt_xsb_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '新三板', 'function_module': '交易', 'function': '新三板交易' })"
    },
    "jy_pt_xsb_yywdj": {
      "change___resource_name": "【对应运营位名称， 如：限价买入、限价卖出 等】--->[name]",
      "change___resource_module": "【对应栏目，如：两网及退市转让】--->[nameF]",
      "desc": "点击相关列表运营位时触发",
      "name": "交易-普通-新三板-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_xsb_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '新三板', 'resource_name': '[name]', 'resource_module': '[nameF]', 'function_module': '交易', 'function': '新三板交易' })"
    },
    "jy_pt_xsb_bz": {
      "desc": "点击“帮助”时触发",
      "name": "交易-普通-新三板-帮助",
      "resStr": "maidian.reportEvent('jy_pt_xsb_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '新三板', 'btn_name': '帮助', 'function_module': '交易', 'function': '新三板交易' })"
    },
    "jy_pt_ggt_zx": {
      "desc": "“港股通”页面展现时触发",
      "name": "交易-普通-港股通-展现",
      "resStr": "maidian.reportEvent('jy_pt_ggt_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '港股通', 'function_module': '交易', 'function': '港股通交易' })"
    },
    "jy_pt_ggt_yywdj": {
      "change___resource_name": "【对应运营位名称，如：买入、当日委托、网络投票、交易日历 等】--->[name]",
      "change___resource_module": "【交易按钮、交易查询、投票与公司欣慰、其他查询 等】--->[nameF]",
      "desc": "港股通页面上首部交易按钮和下面的列表项点击时触发",
      "name": "交易-普通-港股通-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_ggt_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '港股通', 'resource_name': '[name]', 'resource_module': '[nameF]', 'function_module': '交易', 'function': '港股通交易' })"
    },
    "jy_pt_ggt_bz": {
      "desc": "点击港股通页面右上角帮助时触发",
      "name": "交易-普通-港股通-帮助",
      "resStr": "maidian.reportEvent('jy_pt_ggt_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '港股通', 'btn_name': '帮助', 'function_module': '交易', 'function': '港股通交易' })"
    },
    "jy_pt_gqjl_zx": {
      "desc": "“股权激励”页面展现",
      "name": "交易-普通-股权激励-展现",
      "resStr": "maidian.reportEvent('jy_pt_gqjl_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '股权激励', 'function_module': '交易', 'function': '股权激励' })"
    },
    "jy_pt_gqjl_yywdj": {
      "change___resource_name": "【对应运营位名称，如：股权激励计划、 限制性股票查询 等】--->[name]",
      "change___resource_module": "【对应模块名称，如：限制性股票、股票期权 等】--->[nameF]",
      "desc": "点击对应运营位时触发",
      "name": "交易-普通-股权激励-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_gqjl_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '股权激励', 'resource_name': '[name]', 'resource_module': '[nameF]', 'function_module': '交易', 'function': '股权激励' })"
    },
    "jy_pt_gqjl_bz": {
      "desc": "点击“帮助”时触发",
      "name": "交易-普通-股权激励-帮助",
      "resStr": "maidian.reportEvent('jy_pt_gqjl_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '股权激励', 'btn_name': '帮助', 'function_module': '交易', 'function': '股权激励' })"
    },
    "jy_pt_dzjy_zx": {
      "desc": "“大宗交易”页面展现时触发",
      "name": "交易-普通-大宗交易-展现",
      "resStr": "maidian.reportEvent('jy_pt_dzjy_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '大宗交易', 'function_module': '交易', 'function': '大宗交易' })"
    },
    "jy_pt_dzjy_yywdj": {
      "change___resource_name": "【对应运营位名称，如：沪深证券、意向买入 等】--->[name]",
      "desc": "点击对应运营位时触发",
      "name": "交易-普通-大宗交易-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_dzjy_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '大宗交易', 'resource_name': '[name]', 'function_module': '交易', 'function': '大宗交易' })"
    },
    "jy_pt_dzjy_bz": {
      "desc": "点击“帮助”时触发",
      "name": "交易-普通-大宗交易-帮助",
      "resStr": "maidian.reportEvent('jy_pt_dzjy_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '大宗交易', 'btn_name': '帮助', 'function_module': '交易', 'function': '大宗交易' })"
    },
    "jy_pt_yxg_zx": {
      "desc": "“优先股”页面展现时触发",
      "name": "交易-普通-优先股-展现",
      "resStr": "maidian.reportEvent('jy_pt_yxg_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '优先股', 'function_module': '交易', 'function': '优先股' })"
    },
    "jy_pt_yxg_yywdj": {
      "change___resource_name": "【对应运营位名称，如：定价买入、定价卖出 等】--->[name]",
      "change___resource_module": "【对应模块名称，如：北交所、新三板 等】--->[nameF]",
      "desc": "点击对应运营位时触发",
      "name": "交易-普通-优先股-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_yxg_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '优先股', 'resource_name': '[name]', 'resource_module': '[nameF]', 'function_module': '交易', 'function': '优先股' })"
    },
    "jy_pt_yxg_bz": {
      "desc": "点击“帮助”时触发",
      "name": "交易-普通-优先股-帮助",
      "resStr": "maidian.reportEvent('jy_pt_yxg_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '优先股', 'btn_name': '帮助', 'function_module': '交易', 'function': '优先股' })"
    },
    "jy_pt_ysyy_zx": {
      "desc": "“预受要约”页面展现时触发",
      "name": "交易-普通-预受要约-展现",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '预受要约', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_yywdj": {
      "change___resource_name": "【对应运营位名称，如：要约收购、要约回购 等】--->[name]",
      "change___resource_module": "【对应模块名称，如：沪市和深市、北交所 等】--->[nameF]",
      "desc": "点击对应运营位时触发",
      "name": "交易-普通-预受要约-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '预受要约', 'resource_name': '[name]', 'resource_module': '[nameF]', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_hs_yysg_zx": {
      "desc": "“要约收购”时触发",
      "name": "交易-普通-预受要约-沪深-要约收购-展现",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_hs_yysg_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '沪深要约收购', 'note': '【沪深、北交所、新三板 选一】', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_hs_yysg_tabdj": {
      "desc": "点击顶部tab时触发",
      "name": "交易-普通-预受要约-沪深-要约收购-tab点击",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_hs_yysg_tabdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'tab_click', 'title': '沪深要约收购', 'btn_name': '【对应运营位名称，如 要约申报、要约解除 等】', 'note': '【沪深、北交所、新三板 选一】', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_hs_yysg_bz": {
      "desc": "点击“帮助”时触发",
      "name": "交易-普通-预受要约-沪深-要约收购-帮助",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_hs_yysg_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '沪深要约收购', 'btn_name': '帮助', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_hs_yysg_sb": {
      "desc": "点击“申报”时触发",
      "name": "交易-普通-预受要约-沪深-要约收购-申报",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_hs_yysg_sb', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'submit', 'title': '沪深要约收购', 'product_name': '【对应产品名称】', 'product_code': '【对应产品code】', 'entrust_num': '【对应委托数量】', 'product_price': '【对应收购价格，如32】', 'p_type': '申报', 'note': '【沪深、北交所、新三板 选一】', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_hs_yysg_jc": {
      "desc": "点击“解除”时触发",
      "name": "交易-普通-预受要约-沪深-要约收购-解除",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_hs_yysg_jc', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'submit', 'title': '沪深要约收购', 'product_name': '【对应产品名称】', 'product_code': '【对应产品code】', 'entrust_num': '【对应解除数量】', 'product_price': '【对应收购价格，如32】', 'p_type': '解除申报', 'note': '【沪深、北交所、新三板 选一】', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_hs_yysg_cd": {
      "desc": "点击“撤单”时触发",
      "name": "交易-普通-预受要约-沪深-要约收购-撤单",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_hs_yysg_cd', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'cancel', 'title': '沪深要约收购', 'product_name': '【对应产品名称】', 'product_code': '【对应产品code】', 'entrust_num': '【对应撤销数量】', 'product_price': '【对应收购价格，如20.55】', 'p_type': '【申报、解除】', 'note': '【沪深、北交所、新三板 选一】', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_hs_yysg_yylbdj": {
      "change___resource_name": "【对应运营位名称，即产品名称，如：汉商股份 等】--->[name]",
      "desc": "要约列表点击",
      "name": "交易-普通-预受要约-沪深-要约收购-要约列表点击",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_hs_yysg_yylbdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '沪深要约收购', 'resource_name': '[name]', 'product_code': '【对应产品code】', 'note': '【沪深、北交所、新三板 选一】', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_bjsxsb_yysg_zx": {
      "desc": "“北交所/新三板的要约收购”页面展现时触发",
      "name": "交易-普通-预受要约-北交所新三板-要约收购-展现",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_bjsxsb_yysg_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '北交所/新三板要约收购', 'note': '【沪深、北交所、新三板 选一】', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_bjsxsb_yysg_bz": {
      "desc": "北交所/新三板的要约收购右上角帮助",
      "name": "交易-普通-预受要约-北交所新三板-要约收购-帮助",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_bjsxsb_yysg_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '北交所/新三板要约收购', 'btn_name': '帮助', 'note': '【沪深、北交所、新三板 选一】', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_bjsxsb_yyhg_zx": {
      "desc": "“北交所/新三板的要约回购”页面展现时触发",
      "name": "交易-普通-预受要约-北交所新三板-要约回购-展现",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_bjsxsb_yyhg_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '北交所/新三板要约回购', 'note': '【沪深、北交所、新三板 选一】', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_ysyy_bjsxsb_yyhg_bz": {
      "desc": "北交所/新三板的要约回购右上角帮助",
      "name": "交易-普通-预受要约-北交所新三板-要约回购-帮助",
      "resStr": "maidian.reportEvent('jy_pt_ysyy_bjsxsb_yyhg_bz', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '北交所/新三板要约回购', 'btn_name': '帮助', 'note': '【沪深、北交所、新三板 选一】', 'function_module': '交易', 'function': '预受要约' })"
    },
    "jy_pt_hgqlt_zx": {
      "desc": "H股全流通页面展现时触发",
      "name": "交易-普通-H股全流通-展现",
      "resStr": "maidian.reportEvent('jy_pt_hgqlt_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': 'H股全流通', 'function_module': '交易', 'function': 'H股全流通' })"
    },
    "jy_pt_hgqlt_yywdj": {
      "change___resource_name": "【对应运营位名称，如：行情交易、撤单、持仓等】--->[name]",
      "change___resource_module": "【对应模块名称，如：交易、查询、投票等】--->[nameF]",
      "desc": "H股全流通页面上点击各列表运营位时触发",
      "name": "交易-普通-H股全流通-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_hgqlt_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': 'H股全流通', 'resource_name': '[name]', 'resource_module': '[nameF]', 'function_module': '交易', 'function': 'H股全流通' })"
    },
    "jy_pt_wltp_zx": {
      "desc": "网络投票页面展现时触发",
      "name": "交易-普通-网络投票-展现",
      "resStr": "maidian.reportEvent('jy_pt_wltp_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '网络投票', 'function_module': '交易', 'function': '网络投票' })"
    },
    "jy_pt_wltp_yywdj": {
      "change___resource_name": "【对应运营位名称，如：投票、投票纪录等】--->[name]",
      "desc": "网络投票页面上点击各列表运营位时触发",
      "name": "交易-普通-网络投票-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_wltp_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '网络投票', 'resource_name': '[name]', 'function_module': '交易', 'function': '网络投票' })"
    },
    "jy_pt_xxpf_zx": {
      "desc": "先行赔付页面展现时触发",
      "name": "交易-普通-先行赔付-展现",
      "resStr": "maidian.reportEvent('jy_pt_xxpf_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '先行赔付', 'function_module': '交易', 'function': '先行赔付' })"
    },
    "jy_pt_xxpf_yywdj": {
      "change___resource_name": "【对应运营位名称，如：先行赔付受偿申报、申报记录查询等】--->[name]",
      "desc": "先行赔付页面上点击各列表运营位时触发",
      "name": "交易-普通-先行赔付-运营位点击",
      "resStr": "maidian.reportEvent('jy_pt_xxpf_yywdj', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'resource_click', 'title': '先行赔付', 'resource_name': '[name]', 'function_module': '交易', 'function': '先行赔付' })"
    },
    "jy_pt_xjxzq_zx": {
      "desc": "现金选择权页面展现时触发",
      "name": "交易-普通-现金选择权-展现",
      "resStr": "maidian.reportEvent('jy_pt_xjxzq_zx', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'pageview', 'title': '现金选择权', 'function_module': '交易', 'function': '现金选择权' })"
    },
    "jy_pt_xjxzq_sb": {
      "desc": "现金选择权页面上点击申报时触发",
      "name": "交易-普通-现金选择权-申报",
      "resStr": "maidian.reportEvent('jy_pt_xjxzq_sb', { 'appkey': 'aa347fba81312f23', 'record_cluster': 'xet_HMA', 'xwhat': 'btn_click', 'title': '现金选择权', 'btn_name': '申报', 'function_module': '交易', 'function': '现金选择权' })"
    }
  }