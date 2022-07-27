// 月亮
export default class Moon {
  constructor(ctx, width, height) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.circle_x = width / 2;      //旋转轨迹圆心的X坐标
      this.circle_y = width;          //旋转轨迹圆心的Y坐标
      this.circle_r = width;          //旋转轨迹的半径
      this.angle = Math.atan2(Math.sqrt(width * width * 3 / 4), -width / 2);                  //旋转轨迹的角度
      this.startAngle = Math.atan2(Math.sqrt(width * width * 3 / 4), -width / 2 - 400);       //开始旋转的角度
      this.endAngle = Math.atan2(Math.sqrt(width * width * 3 / 4), width / 2 + 200);          //结束旋转的角度
      this.x = 200;         //月亮的X坐标
      this.y = 200;         //月亮的Y坐标
  }

  draw() {
      let {ctx, x, y, width, height} = this;

      var gradient = ctx.createRadialGradient(x, y, 50, x, y, 600);
      gradient.addColorStop(0, 'rgb(255,255,255)');
      gradient.addColorStop(0.01, 'rgb(70,70,80)');
      gradient.addColorStop(0.2, 'rgb(40,40,50)');
      gradient.addColorStop(0.4, 'rgb(20,20,30)');
      gradient.addColorStop(1, '#080d23');

      ctx.save();
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
  }

  move() {
      let {circle_x, circle_y, circle_r, angle, startAngle, endAngle,} = this;
      this.angle = angle - 0.001;

      if (this.angle <= endAngle) {
          this.angle = startAngle;
      }

      this.x = circle_x + (circle_r * Math.cos(angle));
      this.y = circle_y - (circle_r * Math.sin(angle)) + 50;
  }
}


// drawMoon(ctx, 4, 300, 100, 100, 45, "red")

function drawMoon(ctx, d, x, y, R, rot, fillColor) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(R, R);
  ctx.rotate((Math.PI / 180) * rot);
  MoonPath(ctx, d);
  ctx.fillStyle = fillColor;

  ctx.fill();
  ctx.restore();
}
function MoonPath(ctx, d) {
  ctx.beginPath();
  ctx.arc(0, 0, 1, Math.PI * 0.5, Math.PI * 1.5, true); //绘制外面的弧
  ctx.arcTo(d, 0, 0, 1, distance(0, -1, d, 0) / d); //绘制里面的弧
}
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}