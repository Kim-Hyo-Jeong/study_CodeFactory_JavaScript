/**
 * Operators
 * 연산자
 */

/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺼섬
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10); // 20
console.log(10 - 10); // 10
console.log(10 * 10); // 100
console.log(10 / 10); // 1
console.log(10 % 10); // 0
console.log(10 % 3); // 1

console.log("-------------------");

console.log(10 * (10 + 10)); // 200

/**
 * 증가와 감소
 */

let number = 1;

number++; // 2
console.log(number);

number--; // 1
console.log(number);
console.log("-------------------");

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number); // 1, 2

result = number--;
console.log(result, number); // 2, 1

result = ++number;
console.log(result, number); // 2, 2

result = --number;
console.log(result, number); // 1, 1

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = "99";
console.log(+sample); // 99
console.log(typeof +sample); // number

console.log(sample);
console.log(typeof sample); // string

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number

sample = "팬텀";
// NaN -> Not a Number
console.log(+sample); // NaN

sample = "99";
console.log(-sample); // -99
console.log(typeof -sample); // number

console.log("-------------------");

/**
 * 할당 연산자 (assignment operator)
 */

number = 100;
console.log(number); // 100

number += 10;
console.log(number); // 110

number -= 10;
console.log(number); // 100

number *= 10;
console.log(number); // 1000

number /= 10;
console.log(number); // 100

number %= 10;
console.log(number); // 0

console.log("-------------------");

/**
 * 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == "1"); // true

console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log(true === "1"); // false

console.log("-------------------");

console.log(5 != 5); // false
console.log(5 != "5"); // false
console.log(true != 1); // false
console.log(false != 0); // false
console.log(true != "1"); // false

console.log(5 !== 5); // false
console.log(5 !== "5"); // true
console.log(true !== 1); // true
console.log(false !== 0); // true
console.log(true !== "1"); // true

console.log("-------------------");

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1); // true
console.log(100 < 1); // false
console.log(100 <= 1); // false
console.log(100 >= 1); // true

/**
 * 삼항 조건 연산자 (ternary operator)
 * 조건 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

console.log("-------------------");

/**
 * 논리 연산자
 *
 * 1) &&
 * 2) ||
 */

// && 조건은 모두 true일 때만 true
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log("-------------------");

// || 조건은 하나라도 true면 true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(10 > 1 && 20 > 2); // true
console.log(10 < 1 && 20 > 2); // false
console.log(10 < 1 && 20 < 2); // false

console.log(10 > 1 || 20 > 2); // true
console.log(10 < 1 || 20 > 2); // true
console.log(10 < 1 || 20 < 2); // false

console.log("-------------------");

/**
 * 단축 평가 (short-circuit evaluation)
 *
 * &&를 사용했을 때 좌측이 true면 우측 값반환
 * &&를 사용했을 때 좌측이 false면 좌측 값반환
 * ||를 사용했을 때 좌측이 true면 좌측 값반환
 * ||를 사용했을 때 좌측이 false면 우측 값반환
 */

console.log(true || "팬텀"); // true
console.log(false || "팬텀"); // 팬텀
console.log(true && "팬텀"); // 팬텀
console.log(false && "팬텀"); // false

console.log(true && true && "팬텀"); // 팬텀
console.log(true && false && "팬텀"); // false

/**
 * 지수 연산자
 */
console.log(2 ** 2); // 4
console.log(10 ** 3); // 1000

/**
 * null 연산자
 */
let name;
console.log(name); // undefined

name = name ?? "팬텀";
console.log(name); // 팬텀

name = name ?? "다른 이름";
console.log(name); // 팬텀

let name2;
name2 ??= "紅月";
console.log(name2); // 紅月
