/**
 * Data Types
 *
 * 여섯 개의 Primitive Type과
 * 한 개의 오브젝트 타입이있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 *
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

const age = 20;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log("-------------------");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("-------------------");

/**
 * String 타입
 */

const name = "팬텀";
console.log(typeof name);

const akatsuki = "'紅月' 神崎颯馬";
console.log(akatsuki);

/**
 * Template Literal
 *
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하면 됨
 */

const akatsukiSouma = "紅月\n神崎颯馬";
console.log(akatsukiSouma);
const akatsukiSoumaTab = "紅月\t神崎颯馬";
console.log(akatsukiSoumaTab);
const akatsukiSoumaBackslash = "紅月\\神崎颯馬";
console.log(akatsukiSoumaBackslash);
const akatsukiSoumaQuote = "紅月'神崎颯馬";
console.log(akatsukiSoumaQuote);

const akatsukiSouma2 = `紅月
神崎颯馬`;
console.log(akatsukiSouma2);

console.log(typeof akatsukiSouma2);

const groupName = "紅月";
console.log(groupName + " 神崎颯馬");
console.log(`${groupName} 神崎颯馬`);
console.log("-------------------");

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log("-------------------");

/**
 * undefined 타입
 *
 * 사용자가 직접값을 초기화하지 않았을 때
 * 지정되는 값
 *
 * 직접 undefined로 값을 초기화하는 것은 권장하지 않음
 */

let notInit;
console.log(notInit);
console.log(typeof notInit);
console.log("-------------------");

/**
 * null 타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는개발자가 명시적으로 없는값으로 초기화할 때 사용됨
 */

let init = null;
console.log(init);
console.log(typeof init);
console.log("-------------------");

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용함
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용함
 */

const test1 = "1";
const test2 = "1";

console.log(test1 === test2);

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2);
console.log("-------------------");

/**
 * Object 타입
 *
 * Map
 * key-value 쌍으로 이루어져 있음
 */

const dictionary = {
    red: "빨강",
    orange: "주황",
    yellow: "노랑",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);
console.log(dictionary["yellow"]);

console.log(typeof dictionary);
console.log("-------------------");

/**
 * Array 타입
 *
 * 값을 리스트로 나열할 수 있는 타입
 */

const akatsukiMembers = ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"];

console.log(akatsukiMembers);

/**
 * index
 *
 * 0부터 시작
 * 1씩 증가함
 */

console.log(akatsukiMembers[0]);
console.log(akatsukiMembers[1]);
console.log(akatsukiMembers[2]);

console.log(typeof akatsukiMembers);
console.log("-------------------");

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시함
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론함
 */
