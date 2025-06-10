/**
 * Array Functions
 */
console.log("--紅月--");
let akatsukiMembers = ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"];

console.log(akatsukiMembers);
console.log();

// push()
console.log("push()");
console.log(akatsukiMembers.push("滝維吹")); // 4
console.log(akatsukiMembers); // ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬", "滝維吹"]
console.log();

// pop()
console.log("pop()");
console.log(akatsukiMembers.pop()); // "滝維吹"
console.log(akatsukiMembers); // ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"]
console.log();

// shift()
console.log("shift()");
console.log(akatsukiMembers.shift()); // "蓮巳敬人"
console.log(akatsukiMembers); // ["鬼龍紅郎", "神崎颯馬"]
console.log();

// unshift()
console.log("unshift()");
console.log(akatsukiMembers.unshift("蓮巳敬人")); // 3
console.log(akatsukiMembers); // ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"]
console.log();

// splice()
console.log("splice()");
console.log(akatsukiMembers.splice(0, 2)); // ["蓮巳敬人", "鬼龍紅郎"]
console.log(akatsukiMembers); // ["神崎颯馬"]
console.log();
akatsukiMembers = ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"];

console.log(akatsukiMembers);
console.log();

// concat()
console.log("concat()");
console.log(akatsukiMembers.concat("滝維吹"));
console.log();

// slice()
console.log("slice()");
console.log(akatsukiMembers.slice(0, 2)); // ["蓮巳敬人", "鬼龍紅郎"]
console.log(akatsukiMembers); // ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"]
console.log();

// spread operator
console.log("spread operator");
let akatsukiMembers2 = [...akatsukiMembers];
console.log(akatsukiMembers2); // ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"]

let akatsukiMembers3 = [akatsukiMembers];
console.log(akatsukiMembers3); // [["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"]]

let akatsukiMembers4 = akatsukiMembers;
console.log(akatsukiMembers4); // ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"]
console.log(akatsukiMembers4 === akatsukiMembers); // true

// console.log([...akatsukiMembers] === akatsukiMembers); // false
console.log();

// join()
console.log("join()");
console.log(typeof akatsukiMembers.join()); // string
console.log(akatsukiMembers.join()); // "蓮巳敬人,鬼龍紅郎,神崎颯馬"
console.log(akatsukiMembers.join("/")); // "蓮巳敬人,鬼龍紅郎,神崎颯馬"
console.log(akatsukiMembers.join(", ")); // "蓮巳敬人 / 鬼龍紅郎 / 神崎颯馬"
console.log();

// sort()
// 오름차순
console.log("sort()");
akatsukiMembers.sort();
console.log(akatsukiMembers); // ["神崎颯馬", "鬼龍紅郎", "蓮巳敬人"]
console.log(akatsukiMembers.reverse()); // ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"]

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

/**
 * a, b를 비교했을 때
 * 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
 * 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});

console.log(numbers); // [1, 3, 5, 7, 9]

numbers.sort((a, b) => {
    return a > b ? -1 : 1;
});

console.log(numbers); // [9, 7, 5, 3, 1]
console.log();

// map()
console.log("map()");
console.log(akatsukiMembers.map((x) => x)); // ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"]
console.log(akatsukiMembers.map((x) => `紅月: ${x}`)); // ["紅月: 蓮巳敬人", "紅月: 鬼龍紅郎", "紅月: 神崎颯馬"]

console.log(
    akatsukiMembers.map((x) => {
        if (x === "蓮巳敬人") {
            return `leader: ${x}`;
        } else {
            return x;
        }
    })
);

console.log(akatsukiMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce
console.log(numbers.reduce((p, n) => p + n, 0));

console.log;
