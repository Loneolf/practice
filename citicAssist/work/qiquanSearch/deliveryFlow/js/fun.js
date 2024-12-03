
define(function(require, exports) {
    var config = require('./config')
    var util = require('../../common/util')
    var isMock = true


    // 获取服务器时间
    exports.action5 = function (fnSuc) {
        var oSendData = {
            action: 5,
        };
        if(isMock) {
            return fnSuc(config.mockAction5.TIME.replace(/-/g,'/'))
        }
        $.getData({
            oSendData: oSendData,
            fnSuccess: function(oData) {
                var time = oData.TIME ? oData.TIME.replace(/-/g,'/') : '';
                fnSuc && fnSuc(time);
            },
            oConfig: function oConfig() {
                fnSuc && fnSuc();
            }
        });
    };

    // 获取当日数据
    exports.loadTodayData = function (oSend, callBack, titleArr) {
        if (isMock) {
            return callBack(dealLoadData(config.mocktoday, titleArr))
        }
        function dealCallback(data) {
            console.log('aaaaaloadTodayData', data)
            callBack(dealLoadData(data, titleArr))
        } 
        var oSend =$.extend({
			Account: '($account)',
            action: 5457,
		}, oSend);
        util.getData(oSend, dealCallback, dealCallback);
    };


    // 获取历史数据
    exports.loadHistoryData = function (oSend, callBack, titleArr) {
        if (isMock) {
            return callBack(dealLoadData(config.mockHistory, titleArr, 'history'))
        }
        function dealCallback(data) {
            console.log('aaaaaloadHistoryData', data)
            callBack(dealLoadData(data, titleArr, 'history'))
        } 
        var oSend =$.extend({
			Account: '($account)',
            action: 5459,

		}, oSend);
        util.getData(oSend, dealCallback, dealCallback);
    };

    function dealLoadData(data, titleArr, type) {
        console.log('aaa23333dealResultData')
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
                var dealType = item[type === 'history' ? data.WTACCOUNTTYPENAMEINDEX : data.STOCKCODETYPEINDEX] 
                var showItem = [
                    [dealType, util.dateFormat(item[data.REPORTDATEINDEX])],
                    [item[data.CLEARAMOUNTINDEX], util.dateFormat(item[data.SETTLEAMOUNTINDEX])],
                    [item[data.CLEARBALANCEINDEX]],
                    [item[data.CLEARBALANCEINDEX], item[data.SETTLEBALANCEINDEX]],
                ]
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

