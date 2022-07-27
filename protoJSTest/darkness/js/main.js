import Stars from './star.js'
import Moon from './moon.js'

let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
// 设置画布的宽高
canvas.width = width;
canvas.height = height;

// 初始化星星
let stars = new Stars(ctx, width, height, 200, 'normal')
let moon = new Moon(ctx, width, height)
function animation () {
  // stars.blink()
  // stars.draw()

  // moon.move();
  // moon.draw();
  requestAnimationFrame(animation)
}
animation()


// //流星生成函数
// const meteorGenerator = () => {
//   //x位置偏移，以免经过月亮
//   let x = Math.random() * width;
//   meteors.push(new Meteor(ctx, x, height));
// };

// //每一帧动画生成函数
// const frame = () => {
//   //每隔10帧星星闪烁一次，节省计算资源
//   count++;
//   count % 10 == 0 && stars.blink();
//   count % 300 == 0 && meteorGenerator();

//   moon.move();
//   moon.draw();
//   stars.draw();

//   meteors.forEach((meteor, index, arr) => {
//       //如果流星离开视野之内，销毁流星实例，回收内存
//       if (meteor.flow()
//       ) {
//           meteor.draw()
//       }
//       else {
//           arr.splice(index, 1)
//       }
//   });

//   requestAnimationFrame(frame);
// };

// let width = window.innerWidth,
//   height = window.innerHeight,
//   canvas = document.getElementById("canvas"),
//   ctx = canvas.getContext('2d'),
//   //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
//   moon = new Moon(ctx, width, height),
//   stars = new Stars(ctx, width, height, 200),
//   meteors = [],
//   count = 0;

// canvas.width = width;
// canvas.height = height;

// frame();