/**
 * @calculratorReturnNumber
 * @return {number} 객체에 작성된 모든 메서드들은 리턴값이 숫자 입니다.
 */
 const calculratorReturnNumber = {
  
  /**
   * @addition
   * @subtraction
   * @mulitplication
   * @division
   * 
   * @type {function (number, number) : number}
   * @returns {number} 리턴 데이터타입은 숫자입니다.
   * @param {number} operatorParameter : 인자(argument)는 숫자입니다.
   * @param {number} operandParameter : 인자(addition)는 숫자입니다.
   * 
   * 이렇게 적으면 일반적인 주석을 '사용할때' 확인 할 수 있습니다.
   */
  addition: function (operatorParameter, operandParameter) {
    return operatorParameter + operandParameter;
  },
  subtraction: function (operatorParameter, operandParameter) {
    return operatorParameter - operandParameter;
  },
  mulitplication: function (operatorParameter, operandParameter) {
    return operatorParameter * operandParameter;
  },
  division: function (operatorParameter, operandParameter) {
    return operatorParameter / operandParameter;
  }
}

calculratorReturnNumber.addition(1, 2);

// console.log(calculratorReturnNumber.addition(1, 2));
// console.log(calculratorReturnNumber.subtraction(1, 2));
// console.log(calculratorReturnNumber.mulitplication(1, 2));
// console.log(calculratorReturnNumber.division(1, 2));

/*
  jsDoc 주석방식을 사용하면
  해당 함수나 객체, 변수 등 데이터에 대한 정보를 기재하는 주석데이터 이상으로
  에디터에서 해당 조건을 읽어들여 '작성하는 순간'에 활용 할 수 있도록 힌트 형식으로
  정보를 제공합니다.
  
  위의 메서드를 작성하는 순간에 calculratorReturnNumber <- 객체를 작성할때 힌트를 확인 할 수 있고 .(점) 표시를 작성할 때 어떤 메서드가 존재하는지 확인 하는 것은 물론, 매개변수가 어떤 타입을 요구하는지 리턴은 어떤 형식인지를 제작할 때 명시해두기만 하면 '굳이 코드를 읽지 않아도' 함수를 사용할 수 있는 효과를 얻습니다.
*/