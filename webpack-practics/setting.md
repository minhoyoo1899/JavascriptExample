# 0. 시작 준비 npm init 으로 package.json 생성

# npm install --save-dev webpack
# npm install --save-dev webpack-cli
-- 웹팩 SW와 cli 명령 기능만 설치한 상태

# 1. src 디렉토리 생성
  - modules 디렉토리 생성
  - src 폴더를 생성해 주었다. (명령으로 하고싶다면 : mkdir src)
  - ./src/index.js 엔트리 파일 생성

# 2. package.json
  - "type" : "module" : 추가 (선택) -> mjs 방식
  - "scripts" : {}(기본 설치된 값 중 "test" 라는 속성이 있는 부분)
  - "build" : "webpack",
  - 사용자 설정 명령에 해당하며, build 라는 명령을 셋팅한다. 값은 문자열로 "webpack" 으로 작성한다.

# 3. 최상단 루트 디렉토리에 webpack.config.js 생성
- JSON파일이 아닌 js 파일임을 확인

- entry : "경로" -> 번들링할 개발파일
-- 여러가지 의존관계가 얽힌 통상적인 개발 파일 중 '실행'하고자 하는 파일의 경로를 설정한다.

- output : 번들러가 번들링을 진행시켜 나온 결과물의 파일이름을 간단하게 정했다 (다양한 설정들이 존재한다)


# 4. 명령줄 루트 디렉토리에서 다음과 같이 명령하면 실행이 진행된다.
명령 : npm run build

-위의 명령을 누르면 임의로 'dist' 라는 디렉토리가 생성된다 (다른설정을 통해 원하는 방식으로 바꿀 수 있다)
- 지정한 파일 이름으로 번들링 된 것을 확인 할 수 있다.

# 5. public 디렉토리 생성 후 임의의 index.html 파일 제작
- script 태그의 src 경로를 번들링이 끝난 파일로 지정한다.
