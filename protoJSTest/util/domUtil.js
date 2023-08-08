
export function createElem(type, parent, className, style){
    var elem=document.createElement(type)
    if(parent) parent.appendChild(elem)
	if(className) elem.className = className
    for(var key in style){
        elem.style[key]=style[key]
    }
    return elem
}

export function loadImg(arr){
    var img=new Image()
    img.addEventListener("load",loadHandler)
    img.arr=arr
    img.self=this
    img.num=0
    img.list=[]
    img.src=img.arr[img.num]
}
export function loadHandler(e){
    this.list.push(this.cloneNode(false))
    this.num++
    if(this.num>this.arr.length-1){
        this.removeEventListener("load",this.self.loadHandler)
        var evt=new Event(Method.EVENT_ID)
        evt.list=this.list
        document.dispatchEvent(evt)
        return
    }
    this.src=this.arr[this.num]
}

export function hasClasses(classValue) {
	var index = this.className.lastIndexOf(" " + classValue);
	if (index > -1 && this.className.length - classValue.length - 1 === index) {
		return true;
	}
	return (
		this.className.indexOf(classValue + " ") === 0 ||
		this.className.indexOf(" " + classValue + " ") > 0 ||
		this.className.trim() === classValue
	);
}

export function addClasses(classValue) {
	this.className = this.className + " " + classValue;
}

export function removeClasses(classValue) {
	if (this.className.indexOf(classValue + " ") === 0) {
		this.className = this.className.replace(classValue, "");
	}

	if (this.className.indexOf(" " + classValue + " ") > -1) {
		this.className = this.className.replace(" " + classValue + " ", " ");
	}
	var index = this.className.lastIndexOf(" " + classValue);
	if (index > -1 && this.className.length - classValue.length - 1 === index) {
		this.className = this.className.slice(0, index);
	}
	if (this.className.trim() === classValue) {
		this.className = "";
	}
	this.className = this.className.trim();
}
