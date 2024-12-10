## 格式化日期，添加年月日文字
```js
exports.dataFormat = function (value, operate) {
    var str = value + "";
    var rule = operate ? ('$1' + operate + '$2' + operate+ '$3') : "$1年$2月$3日"
    return str.replace(/(\d{4})(\d{2})(\d{2})/g, rule);
}
```
## 年月日日期格式化
```js
exports.dateFormat = dateFormat
function dateFormat (date) {
    if (!date) return
    return date.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")
}
```
## 时分秒时间格式化
```js
exports.timeFormat = timeFormat
function timeFormat (time) {
    if (!time || time === '0') return '--'
    if (time.length < 6) {
        time = '0' + time
        return timeFormat(time)
    }
    return time.replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2:$3")
}
```
## 获取最近时间：当天、近一周、近一月、近三月

```js
// 传入一个时间，返回该时间当天、近一周、近一月、近三月的时间
// includeTody，是否把当天时间当做近一周...的结束时间
exports.getNearTime = getNearTime
function getNearTime(time, includeTody) {
    if (!time) time = new Date()
    var colTime = time
    if (!includeTody) {
        colTime = getDiffDate(time, 1).time
    }
    var endDate = getDiffDate(colTime, 0).timeText
    var monthBegin = new Date(colTime.getFullYear(), colTime.getMonth() - 1, colTime.getDate() + 1) 
    var threeMonthBegin = new Date(colTime.getFullYear(), colTime.getMonth() - 3, colTime.getDate() + 1) 
    return {
        today: getDiffDate(time, 0).timeText,
        weekly: {
            beginDate: getDiffDate(colTime, 7).timeText,
            endDate: endDate,
        }, 
        userDefined: {
            beginDate: getDiffDate(monthBegin, 0).timeText,
            endDate: endDate,
        },
        month: {
            beginDate: getDiffDate(monthBegin, 0).timeText,
            endDate: endDate,
        },
        threeMonth: {
            beginDate: getDiffDate(threeMonthBegin, 0).timeText,
            endDate: endDate,
        },
    }
}
```
## 对数据按照指定规则进行排序
```js
/**
    * 对数据进行排序
    * @param {Array} data - 要排序的数据
    * @param {Array} rule - 排序规则
    * @param {Array} indexs - 可选参数，用于指定在数据中查找规则的索引
    * @returns {Array} - 排序后的数据
    */
exports.ruleSort = ruleSort
function ruleSort(data, rule, indexs) {
    if (!data || !rule) return data
    data.sort(function (a, b) {
        for (var i = 0; i < rule.length; i++) {
            var key = rule[i];
            if (indexs) {
                if (a[indexs] === key) {
                    return -1;
                } else if (b[indexs] === key) {
                    return 1;
                }
            } else {
                if (a === key) {
                    return -1;
                } else if (b === key) {
                    return 1;
                }
            }
        }
        return 0;
    });
    return data
}
```

## 金额处理，是否转换为以万为单位
```js
exports.formatNum = formatNum
function formatNum(num) {
    if (!num) return
    // 如果存在小数点数据，不处理数据
    var decimal = num.split('.')[1]
    if (Number(decimal) !== 0) return num
    // 当对100求余为0，当以万为单位最多只有两位小数时，则显示万
    if (num == 0) return Number(num).toFixed()
    if (num % 100 === 0) {
        return num / 10000 + '万'
    }
    return Number(num).toFixed()
}
```

## 计算传入时间与当前时间的差值

```js
// time: 传入的时间戳或日期数据，diff，与传入时间戳的差值
// 返回对应的时间戳和转换的文字日期
exports.getDiffDate = getDiffDate 
function getDiffDate (time, diff) {
    if (!diff) diff = 0;
    var diffTime = new Date(new Date(time).getTime() - 24 * 60 * 60 * 1000 * diff);
    return {
        timestamp: diffTime.getTime(),
        timeText: addTimeZero(diffTime.toLocaleDateString().replace(/\//g, "-")),
        time: diffTime,
    };
}
```

## 时间补零
```js
function addTimeZero (timeText, operate) {
    if (!operate) operate = "-";
    var arr = timeText.split(operate);
    arr.forEach(function (item, index) {
        if (Number(item) < 10) arr[index] = "0" + item;
    });
    return arr.join(operate);
}
```

## 时间戳转日期
```js
// 获取传入时间当天零时的时间戳，new Date('2023-11-11'),这种时间格式在webView中无法正常解析，需要额外处理下
exports.getDayTime = getDayTime
function getDayTime(day) {
    return new Date(day.replace('/-/g', '/')).getTime()
}
```

## 去掉字符串最后的那个符号，默认为顿号，可通过参数控制
```js
exports.moveLastComma = moveLastComma
function moveLastComma(str, symbol) {
    if (!str) return str
    if (str[str.length - 1] === (symbol || '、')) {
        return str.substring(0, str.length - 1)
    }
    return str
}
```
## 保留小数点后几位
```js
exports.numFixed = numFixed
function numFixed(num, fixed) {
    if (!num) return ''
    return Number(num).toFixed(fixed)
}
```