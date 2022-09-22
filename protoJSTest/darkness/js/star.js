import { random } from "./util.js";

export default class Stars {
  constructor(ctx, width, height, amount, type) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.stars = this.getStars(amount);
    this.type = type;
    this.count = 0;
  }

  getStars(amount) {
    let stars = [];
    while (amount--) {
      stars.push({
        x: random(0, this.width),
        y: random(0, this.height),
        r: random(1, 3),
        diff: random(0.1, 0.5),
        rot: random(0, 360),
      });
    }
    return stars;
  }

  draw() {
    if (this.type === "normal") return this.normalDraw();
    this.dotDraw();
  }

  blink() {
    this.count++;
    if (this.type === "normal") return this.normalBlink();
    this.dotBlink();
  }

  dotDraw() {
    if (this.count % 10 !== 0) return;
    let ctx = this.ctx;
    // ctx.clearRect(0, 0, this.width, this.height);
    ctx.save();
    ctx.fillStyle = "white";
    this.stars.forEach((star, i) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r * 2, 0, 2 * Math.PI);
      ctx.fill();
    });
    ctx.restore();
  }

  dotBlink() {
    this.stars = this.stars.map((star, i) => {
      let sign = Math.random() > 0.5 ? 1 : -1;
      star.r += sign * 0.2;
      if (star.r < 0) {
        star.r = -star.r;
      } else if (star.r > 1) {
        star.r -= 0.2;
      }
      return star;
    });
  }

  normalDraw() {
    if (this.count % 4 !== 0) return;
    let ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.save();
    this.stars.forEach((star) => {
      const { x, y, r, rot } = star;
      ctx.beginPath();
      for (var i = 0; i < 5; i++) {
        //因为正常计算Y轴是向上的，但是在canvas中Y轴是向下的，所以Y轴角度用负值
        ctx.lineTo(
          x + Math.cos(((18 + 72 * i - rot) / 180) * Math.PI) * r,
          y - Math.sin(((18 + 72 * i - rot) / 180) * Math.PI) * r
        );
        ctx.lineTo(
          x + (Math.cos(((54 + 72 * i - rot) / 180) * Math.PI) * r) / 2,
          y - (Math.sin(((54 + 72 * i - rot) / 180) * Math.PI) * r) / 2
        );
      }

      ctx.closePath();
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.restore();
    });
  }

  normalBlink() {
    this.stars.forEach((item) => {
      if (item.r > 6 || item.r < 0) item.diff *= -1;
      item.r += item.diff;
    });
  }

}
