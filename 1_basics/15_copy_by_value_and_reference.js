/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value임
 * 2) 객체는 copy by reference임
 */

let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);

clone += " 팬텀입니다.";
console.log("--------------------------------------");

console.log(original);
console.log(clone);

let originalObj = {
    name: "神崎颯馬",
    group: "紅月",
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log("--------------------------------------");

originalObj["group"] = "XXVeil";
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name: "神崎颯馬",
    group: "紅月",
};

cloneObj = {
    name: "神崎颯馬",
    group: "紅月",
};

console.log(originalObj === cloneObj);

const souma1 = {
    name: "神崎颯馬",
    group: "紅月",
};
const souma2 = souma1;
const souma3 = {
    name: "神崎颯馬",
    group: "紅月",
};

console.log(souma1 === souma2); // true
console.log(souma1 === souma3); // false
console.log(souma2 === souma3); // false

/**
 * Spread Operator
 */

const souma4 = {
    ...souma3,
};

console.log(souma4);
console.log(souma4 === souma3);

const souma5 = {
    birthday: "04-20",
    ...souma3,
};

console.log(souma5);

const souma6 = {
    name: "souma",
    ...souma3,
};

console.log(souma6);

const souma7 = {
    ...souma3,
    name: "souma",
};

console.log(souma7);

const numbers = [1, 3, 5];
const numbers2 = [...numbers, 10];

console.log(numbers2);
