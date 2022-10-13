const first = {
  one: 1,
  two: 2,
  makeString: function () {
    return this.one + ' ' + this.two;
  }
}
// 객체 리터럴 first는 숫자 값이 담긴 두개의 property와 하나의 메서드(함수)를 가지고 있다. 
console.log(first.makeString());
console.log(typeof first.makeString());

const second = {
  one: 3,
  two: 4,
  makeString: function () {
    return this.one + ' ' + this.two;
  }
}

// 객체 리터럴 second도 동일하게 같은 property를 가지ㅗㄱ 있으나 숫자값이 다르다.
// '같은 구조'이자만 값이 다르기 때문에 구분되어야 하지만
// 작성된 메서드 makeString()는 first와 second가 완전히 '동일'하다.
// 중복이 발생한 셈
console.log(second.makeString());
console.log(typeof second.makeString());

const third = {
  one: 5,
  two: 6,
}
// 객체 리터럴 third는 값이 다른 property의 구조는 first, second와 동일한 패턴이다.
// 하지만 메서드가 빠져있다.

class Test {
  constructor(one, two) {
    this.one = one;
    this.two = tow;
  }
}

let instanceTest = new Test(7, 8);
Test.prototype.makeString = function () { 
  return this.one + " " + this.two;  
}
console.log(instanceTest.makeString);

// errorCode// third.prototype.makeString = function () {
// errorCode//   return this.one + ' ' + this.two;
// errorCode// }
// errorCode// console.log(third.makeString());

// 메서드를 객체 외부에서 선언해준 형태를 확인 할 수 있다.
// 새로운 문법인 prototype이 체인(연결)되어 있는 것을 주목 할 것
// 결과적으로 아래의 호출은 first와 second의 결과와 동일하지만
// 동적으로 처리되었기 때문에 '필요하지 않으면' 메서드를 사용하지 않아도 된다.
// 즉 중복코드를 줄이고 심지어 모듈로 변형이 가능하다.

// 객체리터럴 한 두개가 아닌 인스턴스 수만개가 생성된다면, 데이터 양과 복잡도가 사람의 인지 수준을 가뿐하게 넘어가기 때문에 개발 작업의 볼륨이 커질 수록 도입해야 할 '메서드 동적 선언'이 된다.
// 위의 예제는 함수 리터럴 방식으로 재활용은 생각하지 않은 prototype 작성방식 이지만,
// 기명함수 선언방식 (함수 작성 기본형)을 활용한다면, 곧바로 호출하는 방식으로 할달 할 수 있기 때문에 진가를 발휘한다.
// 생성자 함수의 class extends 개념과 상당히 비슷하지만 약간 방향성이 다르다.
// 동일하게 사용할 수 있고, 'prototype' 이라는 단어자체가 '동적'이라는 뜻을 뉘앙스 상으로 겸하기 때문에 개발팀 내에서 약속을 하여 구분짓고 사용하기도 한다.

/* *
 * 동적으로 메서드를 만들수 있다. 
* 개발 볼륨이 커지다 보면 '값의 묶음'형태인 객체에 의존하게 된다. 데이터를 저장 할 때 일련의 규격(프로시저, procedure)으로서, 유지보수 관리 패턴으로서, 관계를 정의하는 규칙으로서 객체는 상당히 고도로 활용되어지고 있습니다. 이러한 방식을 객체지향 프로그래밍 패러다임으로 부르며, 객체의 규격화와 다각적변형 (개발분에서는 다형성이라 부름)에 상당한 발전과 기능을 제공한다. JAVA어어가 대표적인 객체지향프로그래밍으로 매우 안정적인 데이터 처리 능력을 언어차원에서 지원하고 여기에서도 동일하게 본 예제의 개념이 들어와 있습니다. (자바스트립트가 차용)

* 멀리있는 개념은 아닌 것이 자바스크립트 내장객체(첫 글자가 class처럼 파스칼케이스로 되어있습니다.)인 String객체와 Array객체는 순서(index)가 동일하게 있다는 점 때문에 하나의 함수(메서드)를 공용으로 사용합니다. 이때 등장하는 개념이 바로 프로토 타입, prototype 체이닝 문법입니다. 짜임새있는 코드는 중복이 최소화 한다는 점을 생각 할 때, 프로토 타입의 문법은 상당히 매력적인 기능입니다. 자바스크립트 자체가 프로토 타입기반으로 작성되었다고 무방할 정도로, 상당한 내장기능에서 프로토타입으로 '묶여(물려)'있습니다.

* 리팩토링과 다형성(polymorphism)의 주요 개념중 하나이므로, 새롭게 소개하는 prototype문법은 메서드와 getter, setter를 자유롭게 사용 할 수있게 될 대, 고려하여 사용하는 것을 권장
*/