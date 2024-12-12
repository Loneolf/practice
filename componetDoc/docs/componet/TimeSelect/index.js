'use strict';

//该模块应用jquery，因所有页面均引用，在此不单独引用jquery

define(function (require, exports, module) {
    require('./assets/index.css#');
    var utils = require('../util');
    //初始化
    function init(componentsName, Vue) {
        Vue = Vue ? Vue : window.Vue;
        if (!componentsName) {
            console.error('缺少组件名称');
            return false;
        }
        if (!Vue) {
            console.error('加载Vue组件失败！');
            return false;
        }
        Vue.component(componentsName, {
            props: ['minDate', 'maxDate', 'formatter', 'beginDate', 'endDate', 'isShow', 'maxDiff'],
            
            template:  "\n<div class=\"monthDateWrap\" v-show=\"isShow\">\n    <div class=\"dateChoice\">\n        <span class=\"dateText begindate\" type=\"text\" id=\"date1\" @click=\"setPopDate('begin', 'wrap')\">{{beginDate}}</span>\n        <span class=\"dateMiddleText\">\u81F3</span>\n        <span class=\"dateText enddate\" type=\"text\" id=\"date2\" @click=\"setPopDate('end', 'wrap')\">{{endDate}}</span>\n    </div>\n    <van-popup v-model=\"isDatePickerOpen\" position=\"bottom\" @click-overlay=\"onCancel\">\n        <div class=\"month-date-picker\">\n            <van-datetime-picker \n                v-model=\"selectedDate\" \n                :type=\"datePickerType\" \n                :formatter=\"formatter\" \n                :min-date=\"minDate\" \n                :max-date=\"maxDate\" \n                swipe-duration=100\n                @confirm=\"onConfirm\" \n                @cancel=\"onCancel\" \n                @change=\"onChange\"\n            >\n                <template #title>\n                    <div class=\"month-date-picker-types\">\n                        <div \n                            class=\"month-date-picker-type date\" \n                            :class=\"{active:datePickerType == 'date'}\" \n                            @click=\"chooseDatePickerType('date')\"\n                        > \u6309\u65E5\u9009\u62E9</div>\n                        <div \n                            class=\"month-date-picker-type month\" \n                            :class=\"{active:datePickerType == 'year-month'}\" \n                            @click=\"chooseDatePickerType('year-month')\"\n                        >\u6309\u6708\u9009\u62E9</div>\n                    </div>\n                </template>\n                <template #columns-top>\n                    <div class=\"month-date-picker-dates\" :class=\"datePickerType === 'date' ? '': 'monthTimeWrap'\">\n                        <div v-if=\"datePickerType !== 'date'\" class=\"leftLine\"></div>\n                        <div class=\"month-date-picker-date\" :class=\"{active:dateType == 'begin' && datePickerType == 'date'}\" @click=\"setPopDate('begin')\">\n                            {{ datePickerType === 'date' ? beginDateTemp : monthBegin }}\n                        </div>\n                        <div style=\"margin: 0 0.2rem; color: #222222; line-height: 0.7rem; height: 0.7rem\">\u81F3</div>\n                        <div class=\"month-date-picker-date\" :class=\"{active:dateType == 'end' && datePickerType == 'date'}\" @click=\"setPopDate('end')\">\n                            {{ datePickerType === 'date' ? endDateTemp : monthEnd }}\n                        </div>\n                        <div v-if=\"datePickerType !== 'date'\" class=\"rightLine\"></div>\n                    </div>\n                </template>\n            </van-datetime-picker>\n            <van-toast></van-toast>\n        </div>\n    </van-popup>\n</div>\n",

            data: function data() {
                return {
                    componentName: componentsName,
                    beginDateTemp: this.beginDate,
                    endDateTemp: this.endDate,
                    isDatePickerOpen: false,
                    datePickerType: 'date',
                    dateType: 'begin',
                    monthBegin: '',
                    monthEnd: '',
                    firstMonthChange: true
                };
            },
            mounted: function mounted() {},
            methods: {
                chooseDatePickerType: function(type) {
                    this.datePickerType = type;
                    if (type === 'year-month' && this.firstMonthChange) {
                        var res = utils.getMonthBeginEndDate(this.maxDate)
                        this.monthBegin = res.beginDate.timeText
                        this.monthEnd = this.formateDateToString(res.endDate.time > this.maxDate ? this.maxDate : res.endDate.time)
                    }
                },
                chooseDateType: function(type) {
                    this.dateType = type;
                },       
                getDateTime: function (time) {
					return new Date(time)
				},  
                formateDateToString: function (dateObject, split) {
                    if (typeof split == 'undefined') {
                        split = '-';
                    }
                    var fullYear = dateObject.getFullYear();
                    var m = dateObject.getMonth() + 1;
                    var month = m >= 10 ? m : '0' + m;
                    var d = dateObject.getDate();
                    var day = d >= 10 ? d : '0' + d;
                    return '' + fullYear + split + month + split + day;
                },
                setPopDate: function (type, position) {
                    if (position === 'wrap') {
                        this.isDatePickerOpen = true
                        this.beginDateTemp = this.beginDate
                        this.endDateTemp = this.endDate
                    }
                    this.dateType = type
                },
                onConfirm: function onConfirm() {
                    if (this.datePickerType == 'date') {
                        var difftime = this.maxDiff || 31
                        if (this.getDateTime(this.beginDateTemp) > this.getDateTime(this.endDateTemp)) {
                            vant.Toast({
                                message: '开始日期不能大于截止日期',
                                position: 'bottom'
                            });
                            return
                        }
                        if ((this.getDateTime(this.endDateTemp) - this.getDateTime(this.beginDateTemp)) >= difftime * 24 * 60 * 60 * 1000) {
                            vant.Toast({
                                message: '查询区间不得超过' + difftime + '天',
                                position: 'bottom'
                            });
                            return
                        }
                        this.$emit('datechange', this.beginDateTemp, this.endDateTemp);
                    } else {
                        this.$emit('datechange', this.monthBegin, this.monthEnd);
                    }
                    this.isDatePickerOpen = false
                    this.datePickerType = 'date'
                    this.$emit('confirm');
                },
                onCancel: function onCancel() {
                    this.isDatePickerOpen = false
                    this.datePickerType = 'date'
                    console.log('aaaaconcel')
                },
                onChange: function onChange(picker) {
                    var values = picker.getValues();
                    console.log('aaa233change')
                    if (values.length === 2) {
                        this.monthBegin = values.join('').replace(/\D/g, '-') + '01'
                        var days = new Date(parseInt(values[0]), parseInt(values[1]), 0).getDate()
                        var endTem = new Date(parseInt(values[0]), parseInt(values[1]) - 1, days)
                        this.monthEnd = this.formateDateToString(endTem > this.maxDate ? this.maxDate : endTem)
                    } else if (values.length === 3) {
                        var time = values.join('').replace(/\D/g, '-').replace(/-$/, '');
                        if (this.dateType === 'begin') {
                            this.beginDateTemp = time
                        } else {
                            this.endDateTemp = time
                        }
                    }
                },
            },
            computed: {
                selectedDate: function selectedDate() {
                    if (this.datePickerType == 'date') {
                        return this.dateType == 'begin' ? this.getDateTime(this.beginDateTemp) : this.getDateTime(this.endDateTemp);
                    } else {
                        return this.maxDate
                    }
                }
            },
        });
    }

    exports.init = init;
});