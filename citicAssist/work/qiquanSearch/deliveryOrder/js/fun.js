
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
    exports.loadData = function (oSend, callBack, titleArr) {
        if (isMock) {
            return callBack(dealLoadData(config.mockList, titleArr))
        }
        function dealCallback(data) {
            console.log('aaaaaloadTodayData', data)
            callBack(dealLoadData(data, titleArr))
        } 
        var oSend =$.extend({
			Account: '($account)',
            action: 5458,
		}, oSend);
        util.getData(oSend, dealCallback, dealCallback);
    };

    function dealLoadData(data, titleArr) {
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
                var showItem = {}
                // showItem.name = item[data.BUSINESSNAMEINDEX] // 名称
                showItem.name = item[data.REMARKINDEX] // 名称
                showItem.money = item[11]  // 发生金额
                showItem.time = util.dateFormat(item[data.ORDERDATEINDEX]) + ' ' + util.timeFormat(item[data.REPORTTIMEINDEX])
                showItem.mainArr = [
                    {lable: '成交金额', value:  util.numFixed(item[data.DEALMONEYINDEX], 4)},
                    {lable: '佣金', value: item[16]},
                    {lable: '印花税', value: ''},
                    {lable: '过户费', value: ''},
                    {lable: '委托费', value: ''},
                    {lable: '其他费', value: ''},
                ]
                showItem.subArr = [
                    {lable: '合约名称', value:  item[data.OPTIONNAMEINDEX]},
                    {lable: '期货合约代码', value: item[data.OPTIONCODEINDEX]},
                    {lable: '成交价格', value:  item[data.MATCHPRICEINDEX]},
                    {lable: '成交数量', value:  item[data.MATCHQTYINDEX]},
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

