/**
 * Hoisting
 */

console.log("Hello");
console.log("World");
console.log("-------------------");

console.log(name);
var name = "팬텀";
console.log(name);

/**
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

var name;
console.log(name);
name = "팬텀";
console.log(name);

console.log(group);
let group = "紅月";
