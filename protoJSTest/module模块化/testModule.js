
let aa = 123
let bb = 234
export {aa as a2, bb}
setInterval(() => {
  aa += 1
}, 1000);
function add (x,y) {
  return x + y
}

export { add }

export default 1