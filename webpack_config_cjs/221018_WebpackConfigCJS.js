// common JS방식의 configuration(정의)도 작성 규칙만 맞춘다면 문제없이 작동한다.

const path = require('path');
console.dir(path);

/*
  ? node.js의 내장모듈인 path객체는 어떤 함수를 지원하는지 살펴보기 
*/

module.exports = {
  mode: "production", 
  /*
    ? webpack.config.js가 지원하는 mode의 값은 3개이다. 무엇이 있는지 찾아보기
  */
  entty: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename : 'bundle.js'
  }
}