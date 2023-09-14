console.log('aaa2333,hello呀,树哥')

fetch("/api/hello")
  .then((res) => res.text())
  .then((res) => {
    console.log('aaafetchRes12', res);
  });