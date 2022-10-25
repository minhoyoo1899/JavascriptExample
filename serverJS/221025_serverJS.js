const fs = require('fs');
const path = require('path');
const http = require('http');
const { response } = require('express');

const server = http.createServer((request, respose) => { 
  const main = fs.readFileSync('../public/static/index.html', (err) => {
    if (err) throw err;
  });

  if (request.method === 'GET') {
    respose.statusCode = 200;
    respose.setHeader('Content-Type', 'text/html');
    respose.end(main);
  } else if (request.method === 'POST') {
    let body = "";

    request.on('data', (data) => { 
      body += data;
      data = data.toString('utf-8');
      console.log(data, 'this is first event');
    });

    request.on('end', () => { 
      console.log(body, "this is last event");

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(main);
    });
  }
});

server.listen(5588, () => {
  console.log('server running');
});

/*
 * express.js 프레임워크에서는 .get(), set()과 같은 메서드 들이 일련의 처리를 해 주던 것들을 직접 작성한 것을 볼 수 있습니다. 짧은 코드들은 이해의 노력을 줄여주면서 동시에 의존하게 만든다. 역설적으로 반복해서 작성한부분을 확인을 할 수있다. '세 줄'의 반복적인 코드가 중요한 포인트, 반복적으로 작성했다는 것은 ' 반복적으로필요한 동작이기 때문이다.' 프로토콜을 통해 통신하기 때문에 엄격한 규칙을 거스를 방법은 없습니다. 

 *요청 메서드에 아무런 할당이 없으면 'GET'방식을 따른다. '최초 접속'은 보통 GET요청이기 때문이다. 그리고 거기에는 상태코드라는 이름의 '숫자암호'와, '헤더'라는 개념이 같이 들어온다. 그것이 반복적인 작업수행이다. 패킷 방식의 통신이기 때문에, 이것이 어떤 상태인지 어떤방식인지 읽어애 좋을지를 먼저 다룬다는 것은 '반복 작성된 코드'를 통해 확인 할 수 있다. 

 * 만약 이 예제에서 POST요청을 진행하게 될 경우, 두 번의 이벤트가 일어나고, GET요처의 처리처럼 '종료'에 해당하는 일이 공통적으로 한다는 것을 발견 할 수 있다. 종료하지 않으면 어떻게 되는 지 살펴 볼 필요가 있다. (커스텀이 불가능 하다면 나의 코드가 아니다.)

 * 반복코드는 함수화 해서 묶고 함수는 메서드로 묶어라 

 *
 */
