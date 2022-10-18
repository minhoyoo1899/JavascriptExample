const http = require('http');
const fs = require('fs');
console.log(http);
console.log(fs);
const server = http.createServer((request, response) => {
  console.log(request);
  console.log(request);
  if (request.method === 'GET') {
    // 위의 조건문을 확인하면 request는 메서드를 가지고있는 모양입니다. 다른것은 무엇들이 있을까요?
    fs.readFile('./example.html', (err, data) => {
      // data라는 매개변수를 어디에선가 '인자'를 전달 받았습니다. 어디일까요?
      response.writeHead(200, { 'content-type': 'text/html' });
      // 엉뚱하게 200이라는 숫자가 보입니다. 영역(scope)상으로는 http내부의 값중 하나인 것 같습니다.
      // 이것 외에도 더 있을까요?
      response.write(data);
      response.end();
      if (err) throw err;
    });
  } else if (response.method === 'POST') {
    // if 조건문과 달리, 이번엔 POST와 같다면 참이라고 합니다. 문서에서는 어떤 요청이 들어오길래 나누어 놓았을까요?
    request.on('data', (data) => { 
      // 요청객체에는 .on() 이라는 메서드가 있습니다. 무슨 역할을 할까요?
      response.writeHead(200, { 'Content-Type': 'text.html' });
      response.write(data);
      response.end();
    });
  }
});

server.listen(3123, () => {
  console.log('요청이 오기 전까진 listen, 그저 듣고만 있습니다.');
  console.log('패킷 전송 방식이기 때문에, 전화와 다르게 통화기능은 없습니다.');
  console.log('하지만 요청은 받아 줍니다.');
});