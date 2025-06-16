# 🖥️ JavaScript

## 💠목차
[🔹 콘솔과 주석](#🔹-콘솔과-주석)  
[🔹 변수와 상수에 데이터 담기](#🔹-변수와-상수에-데이터-담기)  
[🔹 기본 자료형들과 연산자](#🔹-기본-자료형들과-연산자)  
[🔹 연산자 더 알아보기](#🔹-연산자-더-알아보기)  
[🔹 객체와 배열](#🔹-객체와-배열)  
[🔹 if/else 문](#🔹-ifelse-문)  
[🔹 switch 문](#🔹-switch-문)  
[🔹 반복문](#🔹-반복문)  
[🔹 함수](#🔹-함수)  
[🔹 HTML 요소들 선택하기](#🔹-html-요소들-선택하기)  
[🔹 요소들 조작하기](#🔹-요소들-조작하기)  
[🔹 이벤트](#🔹-이벤트)  

---

## 📘 참고 자료
> (교재) [얄코의 Too Much 친절한 HTML+CSS+자바스크립트 (교보문고)](https://product.kyobobook.co.kr/detail/S000212053076)  
> (Notion) [자바스크립트 살짝 맛보기](https://www.yalco.kr/lectures/javascript-newbie/)

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

```js
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

```js
const A = 1; // 상수는 보통 대문자로 명명
console.log(A);
​
A = 2; // 💣
​
const B; // 💣
```
​
상수는 선언만 할 수 없음
```js
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
### 비교 연산자

- `boolean` 을 반환
- `==` : 자료형에 관계없이 같은*(값으로 치환될 수 있는)* 값임
    - 반대 : `!=`
- `===` : 자료형도 값도 같음
    - 반대 : `!==`
- `>` , `>=`, `<` , `<=`
    - 오른쪽보다 크*(거나 같)*다 / 작*(거나 같)* 다

```js
const a = 1;
const b = 1;
const c = '1';
const d = 2;

console.log(a == b, a != b);
console.log(a == c, a != c);
console.log(a == d, a != d);
```

```js
console.log(a === c, a !== c);
```

```js
console.log(a > b, a >= b, a <= b);
```

```js
console.log(a > d, a < d, a <= d);
```

```js
const str1 = 'ABC';
const str2 = 'DEF';

console.log(str1 === 'ABC');
```

```js
// ⭐️ 문자열의 경우 사전순서상 뒤로 오는 쪽이 더 크다고 인식
console.log(str1 > str2, str1 < str2);
```

---

### 부수효과를 일으키는 연산자

- 사용된 항의 값을 수정

#### ~ `++` vs `++` ~

- 둘 모두 값을 증가시킴
    - `--` : 감소
- ~ `++` : 값을 증가시키지 않은 채 사용
- `++` ~ : 값을 증가시킨 채 사용

```js
let num1 = 1;

console.log(num1++);
console.log(num1);
```

```js
console.log(++num1);
console.log(num1);
```

```js
let num2 = 2;
let num3 = 3;

let num4 = num2-- * --num3;

console.log(num2, num3, num4);
```

#### 할당 산술 연산자

| **연산자** | **의미** |
| --- | --- |
| `x` += `y` | `x` = `x` + `y` |
| `x` -= `y` | `x` = `x` - `y` |
| `x` *= `y` | `x` = `x` * `y` |
| `x` /= `y` | `x` = `x` / `y` |
| `x` %= `y` | `x` = `x` % `y` |
| `x` **= `y` | `x` = `x` ** `y` |

```js
let x = 3;

x += 2;
console.log(x);
```

```js
x -= 3;
console.log(x);
```

```js
x *= 12;
console.log(x);
```

```js
x /= 3;
console.log(x);
```

```js
x %= 5;
console.log(x);
```

```js
x **= 4;
console.log(x);
```

```js
// 문자열은 += 만 가능
let str3 = "안녕";
str3 += '하세요';

console.log(str3);
```

---

### `boolean` 관련 연산자

#### AND & OR

- `&&` : AND - 양쪽이 모두 `true` 일 때만 `true` 반환
- `||` : OR - 한쪽만 `true` 면 `true` 반환

```js
console.log(
  true && true,
  true && false,
  false && true,
  false && false,
);
```

```js
console.log(
  true || true,
  true || false,
  false || true,
  false || false,
);
```

```js
let z = 14;
// z = 6;
// z = 25;

console.log(
  (z > 10 && z <= 20) || z % 3 === 0
);
```

#### 삼항 연산자

- (조건) `?` (참일 시 값) `:` (거짓일 시 값)

```js
let bool1 = true;
// bool1 = false;

let result = bool1 ? '참' : '거짓';
```

```js
let num5 = 103247;

console.log(
  'num5는 3의 배수' +
  (num5 % 3 === 0 ? '입니다.' : '가 아닙니다.')
);
```

---

## 🔹 객체와 배열
### 객체

- 데이터의 묶음 - `키 : 값`의 조합
    - 둘의 조합 **프로퍼티** *property* 라 부름
- 이제껏 배운 자료형*(원시 자료형)*이외의 모든 데이터는 객체

```js
const person1 = {
  name: '김철수',
  age: 25,
  married: false
};
```

```js
console.log(typeof person1);
console.log(person1);
```

#### 값들에 접근하는 방법 *(값을 반환하는 코드들)*

```js
console.log(
	person1.name, // . 뒤에 키 이름 (식별자 명명 규칙에 맞을 시)
	person1['name'] // [] 안에 키 이름을 문자열로
);
```

```js
const person1Age = person1.age;
const typeOfMarried = typeof person1['married'];

console.log(person1Age, typeOfMarried);
```

#### 프로퍼티 추가하기

```js
person1.job = 'programmer';
person1['bloodtype'] = 'O';

console.log(person1);
```

#### 기존의 프로퍼티 수정하기

```js
person1.age++;
person1['job'] = 'PM';

console.log(person1);
```

#### `const` 인데 내용을 수정할 수 있는 이유

- 해당 상수 그 자체가 아닌, 그 내부 데이터는 변경 가능 *(기본적으로는)*
    - 아래에 배울 배열도 마찬가지

```js
person1 = {}; // 💣
```

---

### 배열

- 다수의 데이터를 저장
- 근본적으로 객체

```js
const myArray = [true, 3.14, 'Hello', person1];

console.log(myArray, myArray.length);
```

- 키가 `number` 타입인 객체
- 요소들의 자료형 제한 없음
- `length` 프로퍼티 : 배열의 요소 개수를 반환

#### 요소들에 접근하기

```js
console.log(
	myArray[0], // 프로그래밍에서는 수를 0부터 셈
	myArray[1],
	myArray[2],
	myArray[3]
);
```

```js
myArray[0] = !myArray[0];
myArray[1] *= 100;
myArray[2] += ' world!';

console.log(myArray);
```

#### 요소 추가 및 삭제

```js
myArray.push(123); // 요소를 추가

console.log(myArray);
```

```js
const popped1 = myArray.pop(); // 마지막 요소를 반환하며 제거

console.log(popped1, myArray);
```

```js
myArray.pop(); // 제거만 하는 용도

console.log(myArray);
```

#### 객체와 배열의 중첩 사용

```js
const person2 = {
  name: '김달순',
  age: 23,
  languages: ['Korean', 'English', 'French'],
  education: {
    school: '한국대',
    major: ['컴퓨터공학', '전자공학'],
    graduated: true,
  }
};

console.log(person2);
```

```js
console.log(person2.languages[2]);
```

```js
console.log(person2.education.graduated);
```

---

## 🔹 if/else 문
### `if` 문

```js
if (true) console.log('사실');
if (false) console.log('거짓');
```

```js
let open = true;

// 한 줄 코드
if (open) console.log('안녕하세요.');
```

```js
// 여러 줄 코드
if (open) {
  console.log('안녕하세요.');
  console.log('자리로 안내하겠습니다.');
}
```

### `if ... else` 문

```js
// open = !open;

if (open) {
  console.log('안녕하세요.');
  console.log('자리로 안내하겠습니다.');
} else {
	console.log('영업종료되었습니다. 죄송합니다.');
}
```

### 중첩해서 사용
```js
const x = 10;

if (x % 4) {
  if (x % 2) {
    console.log('홀수입니다.');
  } else {
    console.log('짝수입니다.');
  }
} else {
  console.log('4의 배수입니다.');
}
```

### `if ... else if` 문

```js
const a = 1;
const b = 2;

if (a < b) {
	console.log('a가 b보다 작다.');
} else if (a > b) {
	console.log('a가 b보다 크다.');
} else {
	console.log('a와 b는 같다.');
}
```

```jsx
const yootThrow = '도';

if (yootThrow === '도') {
	console.log('1칸 전진')
} else if (yootThrow === '개') {
	console.log('2칸 전진')
} else if (yootThrow === '걸') {
	console.log('3칸 전진')
} else if (yootThrow === '윷') {
	console.log('4칸 전진')
} else {
	console.log('5칸 전진')
}
```

---

## 🔹 switch 문
- 특정 변수/상수의 값 또는 반환값에 따라 작업을 실행할 때

```js
const firePower = 1;

switch (firePower) {
	case 1:
		console.log('레어');
		break;
	case 2:
		console.log('미디움');
		break;
	case 3:
		console.log('웰던');
		break;
	default:
		console.log('오류');
}
```

- `break` 제거해 볼 것
- `default` : 위의 `case` 중 해당하는 값이 없을 때

```js
const yootThrow = '도';

switch (yootThrow) {
	case '도':
		console.log('1칸 전진');
		break;
	case '개':
		console.log('2칸 전진');
		break;
	case '걸':
		console.log('3칸 전진');
		break;
	case '윷':
		console.log('4칸 전진');
		break;
	case '모':
		console.log('5칸 전진');
		break;
	default:
		console.log('무효');
}
```

```js
const yootThrow = '도';

switch (yootThrow) {
	case '모':
		console.log('1칸 전진');
	case '윷':
		console.log('1칸 전진')
	case '걸':
		console.log('1칸 전진')
	case '개':
		console.log('1칸 전진');
	case '도':
		console.log('1칸 전진');
		break;
	default:
		console.log('무효');
}
```

```js
const dayOfWeek = '월';

switch (dayOfWeek) {
	case '월':
	case '화':
	case '수':
	case '목':
		console.log('6시 퇴근');
		break;
	case '금':
		console.log('12시 퇴근');
		break;
	case '토':
	case '일':
		console.log('휴무');
		break;
	default:
		console.log('잘못된 요일입니다.');
}
```

---

## 🔹 반복문

- 주어진 조건이 충족되는 동안 특정 작업을 반복해서 수행

### `for` 문

```js
// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- 괄호 안 요소들 *( `;`으로 구분 )*
    - 변수의 선언 및 할당
    - 종료조건
    - 참일 시 블록 안의 코드 이후 실행할 것

```js
for (let i = 10; i > 0; i -= 2) {
  console.log(i);
}
```

#### 중첩 사용

```js
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + ' X ' + j + ' = ' + i * j);
  }
}
```

#### `continue` & `break`

```js
for (let i = 0; i < 100; i++) {
	if (i % 3 === 0) continue; // 한 루프를 건너뜀
	if (i > 10) break; // 루프 종료
	console.log(i);
}
```

#### `for ... of` 문

- 배열의 요소를 순서대로 반환

```js
const myArray = ['한놈', '두시기', '석삼', '너구리', '오징어'];

for (const item of myArray) { // 상수명은 자유
	console.log(item);
}
```

#### `for ... in` 문

- 객체의 키들을 순서대로 반환

```js
const person1 = {
	name: '김철수',
	age: '25',
	married: false
}

for (const key in person1) {
	console.log(key, typeof key);
}
```

```js
for (const key in person1) {
	console.log(person1[key]);
}
```

---

### `while` 문

- 괄호 안의 조건이 참인 동안 반복
- 선확인 후조치

```js
let x = 0;

while (x < 10) {
  console.log(x++);
}
```

```js
let x = 0;

while (x < 100) {
	const toPrint = x++;
	
	// continue와 break 역시 동작
	if (toPrint % 3 === 0) continue;
	if (toPrint > 10) break;

  console.log(toPrint);
}
```

#### `do ... while` 문

- 선조치 후확인

```js
let x = 12;

do {
  console.log(x++);
} while (x < 10);
```

---

## 🔹 함수

- 반복될 수 있는 작업을 정의
- input을 받아 output을 반환

```js
console.log('HTML로 갖다놓고');
console.log('CSS로 꾸미고');
console.log('JavaScript로 시킨다.');
```

```js
function describeHtmlCssJs () {
	console.log('HTML로 갖다놓고');
	console.log('CSS로 꾸미고');
	console.log('JavaScript로 시킨다.');
}
```

```js
describeHtmlCssJs();
```

#### 매개변수와 인자

- 특정 input을 받아 작업을 수행하는 함수들에 사용
- 쉼표로 구분하여 여럿을 받을 수 있음

```js
// to : 매개변수
function countTo (to) {
	for (let i = 1; i <= to; i++) {
		console.log(i);
	}
}

// 5 : 인자
countTo(5);
```

#### 값을 반환하는 함수

- `return` : 함수가 해당 값을 반환하도록 함
    - ⭐️ 마지막에 작성

```js
function add(x, y) {
	return x + y;
}
```

```js
console.log(add(2, 3));
```

```js
console.log(
  add(add(6, 7), add(8, 9))
);
```

#### 함수도 값

- 변수, 상수에, 객체의 값이나 배열의 요소로, 다른 함수의 인자로 넣을 수 있음

```java
const subt = function (x, y) {
  return x - y;
}

console.log(subt(7, 2));
```

#### 화살표 함수

- `function`으로 정의한 함수와는 세부적으로는 기능이 다름

```js
// 한 줄 안에 값만 반환시
const mult = (x, y) => x * y;

console.log(mult(2, 7));
```

```js
// 두 줄 이상의 작업이 있을 시
const mult = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다.`);
  console.log(`결과는 ${x * y}입니다.`);
  return x * y;
};

console.log(mult(2, 7));
```

---

## 🔹 HTML 요소들 선택하기
### **`getElementsByTagName`**

- 태그명으로 선택

```js
document.getElementsByTagName('section');
```

```js
// 상수/변수로 저장 가능
const $listItems = document.getElementsByTagName('li');

console.log($listItems);
```

### **`getElementsByClassName`**

- 클래스명으로 선택

```js
document.getElementsByClassName('plant');
```

```js
document.getElementsByClassName('soldout');
```

### **`getElementById`**

- 아이디로 선택

```js
document.getElementById('sweets');
```

### **`querySelector`, `querySelectorAll`**

- CSS 선택자로 선택
- 각각 첫 번째, 모든 요소 반환

```js
document.querySelector('section');
```

```js
document.querySelectorAll('section');
```

```js
document.querySelector('.plant > ul > .soldout');
```

```js
document.querySelector('#sweets ul > :nth-child(2)');
```

### `children`

- 자식 요소들 반환

```js
document
.querySelector('section')
.children;
```

### `firstElementChild` , `lastElementChild`

- 첫 번째 / 마지막 자식 요소 반환

```js
const $firstUl = document.querySelector('ul');
```

```js
$firstUl;
```

```js
$firstUl.firstElementChild;
```

```js
$firstUl.lastElementChild;
```

### `parentElement`

- 부모 요소 반환

```js
$firstUl.parentElement;
```

---

## 🔹 요소들 조작하기

### `textContent`

- 요소의 텍스트 확인 및 수정

```js
const $carrot = document
.querySelector('section > ul > li');
```

```js
$carrot;
```

```js
$carrot.textContent;
```

```js
$carrot.textContent = '제주당근';
```

### `classList`

- 리스트 형태의 클래스 확인 및 수정
    - 배열과 유사한 기능

```js
const $onion = document
.querySelector('section ul')
.lastElementChild;
```

```js
$onion;
```

```js
$onion.classList;
```

```js
$onion.classList.remove('hidden');
```

```js
$onion.classList.add('organic');
```

```js
$onion.classList.toggle('soldout');
```

### `style`

- CSS 스타일 확인 및 수정

```js
$onion.style;
```

```js
$onion.style.fontSize;
```

```js
// 대괄호 접근자로는 CSS 속성명 그대로 사용 가능
$onion.style['font-size'] = '2em';
```

```js
// 💡 마침표 접근자를 쓰면 camel case 사용
$onion.style.fontSize = '1em';
```

```js
$onion.style['font-size'];
```

### `getAttribute`, `setAttribute`

- 요소의 속성을 반환 및 수정

```js
const $hyperlink = document.querySelector('a');
```

```js
$hyperlink;
```

```js
$hyperlink.getAttribute('href');
```

```js
$hyperlink.setAttribute('href', 'https://www.google.com');
```

```js
$hyperlink.getAttribute('href');
```

### `value`, `checked`

- input 요소들의 값 확인 및 수정

```js
const $message = document
.querySelector('input[name=message]');

const $toggle = document
.querySelector('input[name=toggle]');
```

```js
$message.value;
```

```js
$message.value = '안녕하세요';
```

```js
$toggle.checked;
```

```js
$toggle.checked = !$toggle.checked;
```

### `removeChild`

- 요소 제거

```js
const $ul = document.querySelector('section > ul');
```

```js
$ul.removeChild($onion);
```

```js
// 모든 자식 요소 지우기
while ($ul.firstChild) {
  $ul.removeChild($ul.firstChild);
}
```

### `createElement`

- 태그명으로 요소를 생성

```js
const $tomato = document.createElement('li');
$tomato.textContent = '토마토';
```

```js
$tomato;
```

### `appendChild`

- 요소를 대상 요소 안에 넣음

```js
$ul.appendChild($tomato);
```

```js
const veges = ['상추', '가지', '브로콜리'];

for (const itm of veges) {
  const $el = document.createElement('li');
  $el.textContent = itm;
  $ul.appendChild($el);
};
```

---

## 🔹 이벤트
```jsx
const myButton = document.querySelector('#myButton');
```

### `addEventListener`

- 첫 번째 인자로 주어진 이벤트에, 두 번째 인자로 주어진 메서드의 동작을 부여
    - 콜백함수라 부름

```jsx
// 마우스 클릭 이벤트
myButton.addEventListener('click', function () {
	console.log('클릭');
});
```

```js
const logMouseEnter = () => { console.log('진입'); };
const logMouseLeave = () => { console.log('이탈'); };
```

```js
// 마우스 진입/이탈 이벤트
myButton.addEventListener('mouseenter', logMouseEnter);
myButton.addEventListener('mouseleave', logMouseLeave);
```

### 이벤트 객체

- `addEventListener` 의 콜백함수의 인자에 매개변수로 포함
    - 해당 이벤트에 대한 상세정보 포함

```js
const clickPosition = document.querySelector('#clickPosition');
```

```js
clickPosition.addEventListener('click', function (e) {
	console.log(e);
});
```

```js
// 하나의 이벤트에 여러 콜백함수 등록 가능
clickPosition.addEventListener('click', function (e) {
	let text = 'x: ';
	text += e.clientX;
	text += ', y: ';
	text += e.clientY;
	clickPosition.textContent = text;
});
```

```js
const myInput = document.querySelector('#myInput');
```

```js
// 인풋 요소 등이 사용자 입력을 받을 준비가 된 상태
myInput.addEventListener('focus', () => {
	myInput.setAttribute('placeHolder', '포커스 온 된 상태');
});
```

```js
// 포커스를 잃어 활성이 아니게 된 상태
myInput.addEventListener('blur', () => {
	myInput.setAttribute('placeHolder', '블러 된 상태');
});
```

```js
// 인풋 요소의 값이 바뀔 때
myInput.addEventListener('change', (e) => {
	console.log(e.target.value)
});
```

```js
// 키 입력
myInput.addEventListener('keyup', (e) => {
	console.log(e.key);
});
```