# 🖥️ JavaScript

## 💠목차
[🔹 콘솔과 주석](#🔹-콘솔과-주석)<br>
[🔹 변수와 상수에 데이터 담기](#🔹-변수와-상수에-데이터-담기)<br>
[🔹 기본 자료형들과 연산자](#🔹-기본-자료형들과-연산자)<br>
[🔹 연산자 더 알아보기](#🔹-연산자-더-알아보기)<br>
🔹 객체와 배열<br>
🔹 if/else 문<br>
🔹 switch 문<br>
🔹 반복문<br>
🔹 함수<br>
🔹 HTML 요소들 선택하기<br>
🔹 요소들 조작하기<br>
🔹 이벤트<br>
🔹 최종 프로젝트<br>

---

## 📘 참고 자료
- (교재) [얄코의 Too Much 친절한 HTML+CSS+자바스크립트 (교보문고)](https://product.kyobobook.co.kr/detail/S000212053076)<br>

- (Notion) [자바스크립트 살짝 맛보기](https://www.yalco.kr/lectures/javascript-newbie/)

---

## 🔹 콘솔과 주석
### 콘솔 활용하기
```js
console.log("출력할 값");
```
- 괄호 안에 출력할 내용을 입력
    - print와 같은 역할
    - 개발자를 위한 메시지 출력 - 디버깅 등에 사용
- 세미콜론 `;`
    - 자바스크립트에서는 필수는 아님

```js
console.log(1, 2, 3);
```

- 쉼표로 구분하여 다수의 데이터를 한 번에 출력 가능

```js
console.log([true, false], {a:1, b:2});
```

```js
console.log(this);
```

```js
console.log(console);
```

- 다양한 데이터를 출력 가능
- 브라우저 콘솔 : 복잡한 데이터를 편리하게 펼쳐서 볼 수 있도록 해줌

### 주석

- 컴퓨터가 무시하는 메시지
- 코드를 읽는 사람을 위해 남기는 메시지

```js
console.log('Hello');

// 주석입니다.

console.log('World'); 
```

- 윈도우: `ctrl` + `/`
- 맥: `command` + `/`

```js
console.log(true); // 코드의 오른쪽에도 작성 가능함
```

```js
// console.log(false);
```

- 코드를 비활성화하는데도 사용

```js
console.log(1);

/*
여러 줄의 주석을
작성하는 방법
*/

console.log(2);
```

---

## 🔹 변수와 상수에 데이터 담기
- 어떤 데이터를 변수/상수라는 주머니에 넣는 것

```js
let darkModeOn = true;
const PI = 3.1415926535;
```

- 데이터에 의미 부여
- 한 데이터가 여러 곳에 사용될 때
    - 수정 또한 동일하게 적용되어야 할 때
    - 고정된 값이 사용되어야 할 때
- 로직 구현에 있어 여러모로 필요 (반복문 등)

### ⚠️ `var`

```js
var x = 1;
var y = 2;

console.log(x, y);
```

- 요즘에는 사용하지 않음
    - 자바스크립트 초창기에 사용
    - 여러 문제점들을 갖고 있어 오류의 원인으로 작용
- ES6 버전 이후부터는 `let` 과 `const` 로 대체

---

### `let` 과 `const`

- `let` : 변수 - 넣은 데이터를 바꿀 수 있음
- `const` : 상수 - 넣은 데이터를 바꿀 수 없음

```
let a = 1; // a란 주머니에 1이라는 데이터를 담기
console.log(a);
​
let b = a; // 한 주머니 안에 든 데이터를 다른 주머니로
console.log(a, b);
​
a = 2; // 주머니 안에 든 데이터 변경
console.log(a, b);
​
a = "안녕하세요.";
b = true;

console.log(a, b);
```

⭐️ 자바스크립트는 데이터의 종류에 있어 엄격하지 않음

```
const A = 1; // 상수는 보통 대문자로 명명
console.log(A);
​
A = 2; // 💣
​
const B; // 💣
```
​
상수는 선언만 할 수 없음
```
let c = 1;
let c = 2; // 💣
```
- 이미 만든 주머니와 같은 이름의 주머니를 다시 만들 수 없음
    - 브라우저 콘솔에서 따로따로 실행할 때는 가능함

---

### **식별자 *identifier* 명명 규칙**

- 영문, 한글 및 유니코드*(대부분의 문자 표현)* 글자, 숫자 사용 가능
- 특수문자는 `$` 또는 `_`
- 숫자로 시작할 수 없음
- 공백*(스페이스)* 사용 불가
- 예약어(Keywords) 사용 불가

---

## 🔹 기본 자료형들과 연산자
### 자료형

- 프로그램에서 사용되는 데이터의 종류
    - 숫자, 텍스트, 참/거짓, 복합…
    - 각각 필요로 하는 메모리 용량이 있음
- 자바스크립트는 동적 자료형
    - 변수/상수 등 데이터가 들어갈 곳에 자료형 제한이 없음

---

#### `boolean` : 참/거짓 여부

```js
let bool1 = true; // 참
let bool2 = false; // 거짓

console.log(bool1, bool2);
```

```js
console.log(typeof bool1);
```

- `typeof` 연산자 : 해당 데이터의 자료형을 반환

```js
const bool3 = 1 < 2;
const bool4 = 1 > 2;

console.log(bool3, bool4);
```

```js
let bool5 = !true;
let bool6 = !bool5;
let bool7 = !!bool6;

console.log(bool5, bool6, bool7);
```

- `!` 연산자 : 뒤에 오는 불리언의 반대 값을 반환

---

#### `number` : 숫자

- 정수/실수, 용량 구분 없음

```js
let num1 = 10; // 정수
let num2 = 3.14; // 실수

console.log(typeof 2);
```

```js
// 사칙연산
console.log(1 + 2);
console.log(3 - num1);
console.log(num1 * num2);
console.log(num1 / num2);
```

```js
console.log(10 % 3); // 나머지를 구하는 연산
```

```js
// 위의 연산들은 값을 반환
const num3 = (num1 + num2) * 10;

console.log(num3);
```

---

#### `string` : 문자열

```js
// 작은따옴표 또는 큰따옴표로 둘러쌈
const str1 = 'Hello';
const str2 = "월드 🌐"; // 비 알파벳 문자 및 이모지 등 표현 가능

console.log(typeof '안녕하세요');
console.log(typeof '1'); // ⭐️ 따옴표로 감싼 숫자는 문자열
```

```js
let str3 = str1 + ' World!';
console.log(str3);
```

```js
str3 = str3 + " 🙂";
console.log(str3);
```

- 더하기 연산자 : 이어 붙여진 값을 반환

---

#### `undefined` 와 `null`

- `undefined` : 주머니에 무엇이 들었는지 명시되지 않음
    - 아직 값이 지정되지 않음 / 데이터가 나올 곳이 아닌 자리
- `null` : 주머니가 비어 있다고 지정됨
    - ‘비어 있다’는 정보를 적극 제공  *(예: 만들어져야 할 정보의 생성이 실패함)*

```js
let x;
console.log(x, typeof x); // ⭐️ typeof가 반환하는 값은 문자열
```

```js
// 브라우저 콘솔에서 테스트
let y = 1;
```

```js
x = 1;
console.log(x);

x = null;
console.log(x, typeof x); // ⚠️ null의 타입은 'object'로 반환 - JavaScript 초기 설계 부실 
```

---

## 🔹 연산자 더 알아보기