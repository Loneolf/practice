animates();
//封装自己的函数
function animates() {
	//canvas的宽高不出自style
	canvas.width = window.innerWidth;
	canvas.style.backgroundColor = 'transparent';
	var ctx = canvas.getContext('2d');
	//创建数组，存储粒子
	var particles = [];
	loop();
	//定义一个随机产生粒子的方法
	function loop() {
		setInterval(function() {
			//							清空画布
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			//粒子最开始的位置,每一次都新出来一个粒子
			var part = new Particle(0, canvas.height);
			//每出来一个粒子存入数组
			particles.push(part);
			//遍历数组，取出粒子，展示
			for(var i = 0; i < particles.length; i++) {
				particles[i].upDate();
			}

		}, 100);

	}
	//画粒子
	function Particle(xPos, yPos) {
		this.xPos = xPos;
		this.yPos = yPos;
		//y轴方向的变化
		this.yVal = -10;
		this.xVal = Math.random() * 8;
		//						定义重力因素
		this.gravity = 0.1;
		//						在本方法调用本封装

		//						更新坐标参数
		this.upDate = function() {
			this.xPos = this.xPos + this.xVal;
			this.yPos = this.yPos + this.yVal;
			this.yVal = this.yVal + this.gravity;
			//							随机填充颜色
			ctx.fillStyle = this.color();
			//							画圆
			this.draw();

		}
		this.draw = function() {
			ctx.beginPath();
			ctx.arc(this.xPos, this.yPos, 5, 0, Math.PI * 2, false);
			//							结束路径
			ctx.closePath();
			ctx.fill();
		};
		this.color = function() {
			//#5d5g5f
			return '#' + Math.floor(Math.random() * 16777215).toString(16);
		}

	}
	//					封装随机颜色
	/*function getColor(){
		//#5d5g5f
	    return 	'#'+Math.floor(Math.random()*16777215).toString(16);
	}*/

}