
define(function(require, exports) {
    var config = require('./config')
    var util = require('../../common/util')
    var isMock = false


    // 获取服务器时间
    exports.action5 = function (fnSuc) {
        var oSendData = {
            action: 5,
        };
        if(isMock) return fnSuc('2024/07/19 16:18:32')
        $.getData({
            oSendData: oSendData,
            fnSuccess: function(oData) {
                var time = oData.TIME ? oData.TIME.replace(/-/g,'/') : '';
                fnSuc && fnSuc(time);
            },
            oConfig: function oConfig(data) {
                fnSuc && fnSuc();
            }
        });
    };

    // 获取股东卡号
	exports.ms122 = function (oSend, callBack, fnFail) {
		var oSend =$.extend({
			action:122,
			Account: '($account)'
		}, oSend);
        // 账号类型值 上海A=SHACCOUNT、深圳A=SZACCOUNT、上海B=SHBACCOUNT、深圳B=SZBACCOUNT、三板A=SBACCOUNT、沪HK=HKACCOUNT、三板B=SBBACCOUNT、深HK=HKSZACCOUNT
		if (isMock) {
			return callBack(config.mockAccontData)
		}
		util.getData(oSend, callBack, fnFail);
	};

    // 投票记录
    exports.loadRecord = function (oSend, callBack, titleArr, type) {
        if (isMock) {
            return callBack(dealRecordData(config.mockList, titleArr, type))
        }
        function dealCallback(data) {
            console.log('aaaaadealdealCallback', data)
            callBack(dealRecordData(data, titleArr, type))
        } 
        var oSend =$.extend({
			Account: '($account)'
		}, oSend);
        util.getData(oSend, dealCallback, dealCallback);
    };

    // 投票结果
    exports.loadhistory = function (oSend, callBack, titleArr, type) {
        if (isMock) {
            return callBack(dealResultData(config.mockList, titleArr, type))
        }
        function dealCallback(data) {
            console.log('aaaaadealresultCallback', data)
            callBack(dealResultData(data, titleArr, type))
        } 
        var oSend =$.extend({
			Account: '($account)'
		}, oSend);
        util.getData(oSend, dealCallback, dealCallback);
    };

    function dealResultData(data, titleArr, type) {
        console.log('aaa23333dealResultData', type)
        if(data.GRID0){
            var arr = []
            data['GRID0'].forEach(function (item){
                arr.push(item.split('|'))
            })
            var title
            if (isTitle(data.GRID0)) {
                data.titleArr = arr.shift()
                title = data.titleArr
            } else {
                title = titleArr
            }
            var showData = []
            console.log(title)
            console.log(arr)
            arr.forEach( function (item) {
                var showItem = {}
                var billType = item[data.VOTETYPEINDEX]
                showItem.name = item[data.STOCKNAMEINDEX] //证券名称 
                showItem.code = item[data.STOCKCODEINDEX] // 证券代码
                showItem.yianName = item[data.VOTEINFOINDEX]
                showItem.meetingName = item[data.MEETINGNAMEINDEX]
                // console.log('aaa23333item[data.MATCHQTYINDEX]', item[data.MATCHQTYINDEX], billType)
                showItem.mainArr = [
                    {lable: '议案编号', value:  Number(item[data.VOTECODEINDEX]).toFixed(3)},
                    {lable: '议案类型', value: billType === '0' ? '非累积议案' : '累积议案'},
                    {lable: '投票情况', value:  util.getVoteDetail(item[data.MATCHQTYINDEX], billType)},
                    {lable: '成交时间', value: util.timeFormat(item[1])},
                ]
                if (type.indexOf('历史') > -1) {
                    showItem.mainArr[3] = {lable: '成交时间', value: util.dateFormat(item[0]) + ' ' +util.timeFormat(item[1]), isOneLine: true}
                }
                if (showItem.meetingName.indexOf('先行赔付') > -1) {
                    // showItem.yianName = showItem.meetingName
                    showItem.mainArr[1].value = '先行赔付'
                    showItem.mainArr[2].lable = '申报金额'
                    showItem.tip = '提示：请到交易所或投保基金网站查询申报结果'
                }
                showData.push(showItem)
            })
            // console.log('aaaaarrr', title)
            data.showData = showData
            if (arr.length) {
                data.positionstr = arr.pop()[data.POSITIONSTRINDEX]
            }

        }
        return data
    }

    function dealRecordData(data, titleArr, type) {
        console.log('aaa23333dealRecordData', type)
        if(data.GRID0){
            var arr = []
            data['GRID0'].forEach(function (item){
                arr.push(item.split('|'))
            })
            var title
            if (isTitle(data.GRID0)) {
                data.titleArr = arr.shift()
                title = data.titleArr
            } else {
                title = titleArr
            }
            var showData = []
            console.log(title)
            console.log(arr)
            arr.forEach( function (item) {
                var showItem = {}
                var billType = item[data.VOTETYPEINDEX]
                showItem.name = item[data.STOCKNAMEINDEX] //证券名字 
                showItem.code = item[data.STOCKCODEINDEX] // 证券代码
                showItem.status = item[data.ENTRUSTTYPENAMEINDEX]
                if (showItem.status === '已确认') showItem.status = '已接收'
                showItem.mainArr = [
                    {lable: '议案编号', value: Number(item[data.VOTECODEINDEX]).toFixed(3)},
                    {lable: '议案类型', value: billType === '0' ? '非累积议案' : '累积议案'},
                    {lable: '投票情况', value:  util.getVoteDetail(item[data.MATCHQTYINDEX], billType)},
                    {lable: '委托时间', value: util.timeFormat(item[data.ORDERTIMEINDEX])},
                ]
                if (type.indexOf('历史') > -1) {
                    showItem.mainArr[3] = {lable: '委托时间', value: util.dateFormat(item[data.ORDERDATEINDEX]) + ' ' +util.timeFormat(item[data.ORDERTIMEINDEX]), isOneLine: true}
                }

                showData.push(showItem)
            } )
            // console.log('aaaaarrr', title)
            data.showData = showData
            if (arr.length) {
                data.positionstr = arr.pop()[data.POSITIONSTRINDEX]
            }
        }
        return data
    }

    function isTitle(arr) {
        if (!arr || arr.length === 0) return false
        var titleStr = arr[0]
        // 投票记录和投票结果的title中都含有'证券名称'字段
        if (titleStr.indexOf('证券代码') > -1 || titleStr.indexOf('委托编号') > -1) {
            return true
        }
        return false
    }
    exports.GoBackOnLoad='1';
});
