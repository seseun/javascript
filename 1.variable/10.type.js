// typeof: 데이터타입 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable); // undefined

variable = '123';
console.log(typeof variable); // string

variable = 123;
console.log(typeof variable); // number

variable = {};
console.log(typeof variable); // object

variable = function () {};
console.log(typeof variable); // function

variable = Symbol();
console.log(typeof variable); // symbol

// 할당된 값에 따라 타입이 결정된다.
// -> js는 동적언어(dynamic), weakly typed 의 programming language이다.
// <-> java = static, strongly typed(Int variable = 123;)
