Promise.MyAll = function (promises) {
  let results = [];
  let length = promises.length;
  let promiseCount = 0;
  return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
          Promise.resolve(promises[i]).then(res => {
              results[i] = res;
              promiseCount++;

              if (promiseCount === length) {
                  resolve(results);
              }
          }, err => {
              reject(err);
          })
      }
  })
}


let promise1 = Promise.resolve(1);
let promise2 = Promise.resolve(2);
let promise3 = Promise.resolve(3);

Promise.MyAll([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // [1, 2, 3]
  })
  .catch(reason => {
    console.log(reason);
  });
