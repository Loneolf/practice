class Utils {
    static IMG_LOAD_FINISH = "img_load_finish";
    constructor() {

    }
    static ce(type, style, data, prop) {
        let elem = document.createElement(type);
        if (style) Object.assign(elem.style, style);
        if (data) Object.assign(elem, data);
        if (prop){
            for(let str in prop){
                elem.setAttribute(str,prop[str]);
            }
        }
        return elem;
    }
    static randomColor() {
        let c = "#";
        for (let i = 0; i < 6; i++) {
            c += Math.floor(Math.random() * 16).toString(16);
        }
        return c;
    }
    static random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static loadImgs(imgList, baseUrl, handler, type) {
        let img = new Image();
        img.addEventListener("load", Utils.loadHandler);
        let url = Utils.getImgUrl(imgList[0], baseUrl, type);
        img.src = url;
        img.imgList = imgList;
        img.baseUrl = baseUrl;
        img.handler = handler;
        img.type = type;
        img.list = [];
        img.num = 0;
    }
    static loadHandler(e) {
        let img = this.cloneNode(false);
        this.list.push(img);
        this.num++;
        if (this.num > this.imgList.length - 1) {
            this.removeEventListener("load", Utils.loadHandler);
            if (this.handler) {
                this.handler(this.list);
                return;
            }
            let evt = new Event(Utils.IMG_LOAD_FINISH);
            evt.list = this.list;
            document.dispatchEvent(evt);
            return;
        }
        this.src = Utils.getImgUrl(this.imgList[this.num],
         this.baseUrl, this.type);
    }
    static getImgUrl(name, baseUrl, type) {
        let url = "";
        if (baseUrl) url += baseUrl;
        if (type) {
            if (name.indexOf(".") < 0) name += "." + type;
            else name = name.replace(/\.\w+$/, "." + type);
        }
        url += name;
        return url
    }
}

class Calendar {
    constructor(years, months) {
        // 获取当前日期,获取当前 的年,月
        var date = new Date();
        this.years = years || date.getFullYear();
        this.months = months || date.getMonth();
        this.elem = this.createElement();
    }
    createElement() {
        if (this.elem) return this.elem;
        // 设置日历容器
        let divs = Utils.ce("div", {
            width: "373px",
            height: '378px',
            border: "1px solid #ffa800",
            boxShadow: "0 0 4px #ffa800",
            margin: 'auto',
            position: "relative"
        });
        divs.addEventListener("mousedown",e=>e.preventDefault())
        // 创建头部
        this.createHead(divs);
        // 创建表格
        this.createDateTable(divs);
        return divs;
    }
    appendTo(parent) {
        parent.appendChild(this.elem);
         // 显示当前日期
         this.showDate();
    }
    createHead(parent) {
        // 创建左右两个按钮
        for (var i = 0; i < 2; i++) {
            var bn = Utils.ce("span",{
                fontSize:"24px",
                top: "10px",
                position: "absolute",
                left: i === 0 ? "10px" : "none",
                right: i === 0 ? "none" : "10px",
                cursor: "default"
            });
            bn.textContent=i===0 ? "<" : ">";
            bn.addEventListener("click",
             e => { this.clickHandler(e) });
            parent.appendChild(bn);
        }
        // 创建title
        this.title = Utils.ce("div", {
            width: "200px",
            height: "28px",
            lineHeight: '28px',
            textAlign: "center",
            position: "absolute",
            top: "10px",
            margin: 'auto',
            left: "0px",
            right: "0px"
        });
        parent.appendChild(this.title);
    }
    createDateTable(parent) {
        // 表头的内容
        var headList = ["日", "一", "二", "三", "四", "五", "六"];
        // 创建表格
        this.table = Utils.ce("table", {
            borderCollapse: "collapse",
            width: "353px",
            position: "absolute",
            left: "10px",
            top: "50px"
        });
        // 创建7行,其中包括表头一行,隐藏一行
        for (var i = 0; i < 7; i++) {
            var tr = Utils.ce("tr", null);
           
            // 根据星期创建列
            for (var j = 0; j < headList.length; j++) {
                var td = Utils.ce("td", {
                    height: '54px',
                    padding: "0px",
                    textAlign: "center",
                    color: (j === 0 || j === 6) 
                    ? "#ffa800" : "#000000",
                });//如果是第一行添加内容是表头的文字
                td.textContent=i === 0 ? headList[j] : "";
              // 如果是星期六和星期日,给td增加属性,
              //以便于后面鼠标离开时恢复这个颜色,存储颜色
                if (j === 0 || j === 6) td.color = "#ffa800";
                if (i === 0) continue;
                //如果是表头,不增加标签属性day
                td.setAttribute("day", "true");
                //获取td时,按照有没有该属性获取对应的td,
                //就不会获取表头的td了
                td.addEventListener("mouseover", 
                e => { this.mouseHandler(e) });
                //如果鼠标经过td时,添加事件侦听
                tr.appendChild(td);
            }
            this.table.appendChild(tr);
        }
        parent.appendChild(this.table);
    }
    setDate(year, month){
        this.showDate(year,month-1);
    }
    showDate(year, month) {
        // 一开始先设置默认隐藏最后一行
        this.table.lastElementChild.style.display = "none";
        // 并且默认高度恢复为328像素
        this.elem.style.height = "328px";
        // 获取当前日期
        var date = new Date();
        if (year != undefined){
            date.setFullYear(year);
            this.years=year;
        }

        if (month != undefined){
            date.setMonth(month);
            this.months=month;
        }
        // 如果有参数year和month,就设置为当前时间

        // 设置1号,并且获取到1号的星期几
        date.setDate(1);
        // 因为上述设置年月日,因此,就可以获取到这个月第一天时星期几
        var startWeek = date.getDay();
        // 获取当前月份,是为了比对吐过设置日期后,月份超过时,做比对使用
        month = date.getMonth();
        var max = 0;
        // 从28日开始向后递加,并且设置到日期中,并且获取递加后的月份,
        //如果月份发生改变时,证明上一日就是最大值
        for (var i = 28; i < 33; i++) {
            // 设置从28开始
            date.setDate(i);
            // 获取到设置当前日期后的月份
            var m = date.getMonth();
            // 如果不等于当前月份时,当月最大天数就是i-1;
            if (m !== month) {
                max = i - 1;
                break;
            }
        }
        // max就是当月的最大日期
        // 根据day的标签属性,获取所有的td
        var tds = document.querySelectorAll("[day=true]");
        // 从1号开始设置
        var day = 1;
        // 获取当前的日期
        var now = (new Date()).getDate();

        for (var i = 0; i < tds.length; i++) {
            // 如果i小于本月开始日期或者日期大于本月最大日期
            if (i < startWeek || day > max) {
                // 设置td的文本内容为空字符
                tds[i].textContent = "";
                continue;
            }
            // 除上述外所有的内容设置当前日
            tds[i].textContent = day;
            if (day === now) {
                // 如果当前日是今天,设置更改背景色
                this.changeBg(tds[i]);
            }
            day++;
        }

        // 如果当前的时间超过了6行,取消隐藏最后一行,并且重设高度
        if (tds.length - 7 < startWeek + max) {
            this.table.lastElementChild.removeAttribute("style");
            this.elem.style.height = "372px";
        }
        this.title.textContent = this.years + "年"
         + (this.months+1) + "月";
    }
    clickHandler(e) {
        // 判断点击左右按钮,重设年和月
        if (e.currentTarget.textContent==="<") {
            this.months--;
            if (this.months < 0) {
                this.months = 11;
                this.years--;
            }
        } else {
            this.months++;
            if (this.months > 11) {
                this.months = 0;
                this.years++;
            }
        }
        // 根据年月显示日历内容
        this.showDate(this.years, this.months);
    }
    mouseHandler(e) {
        if (e.currentTarget.textContent.length === 0) return;
        this.changeBg(e.currentTarget);
    }
    changeBg(elem) {
        if (this.pre) {
            this.pre.style.backgroundColor = "white";
            // 这是根据上一个td的color对象属性是否
            //存在设置上一个td是否字体颜色恢复
            if (this.pre.color) {
                this.pre.style.color = this.pre.color;
            } else {
                this.pre.style.color = "#000000";
            }

        }
        this.pre = elem;
        this.pre.style.backgroundColor = "#ffa800";
        this.pre.style.color = "white";
    }
}