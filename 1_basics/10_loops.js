/**
 * Loops
 *
 * 1) for
 * 2) while
 */

members = ["蓮巳敬人", "鬼龍紅郎", "神崎颯馬"];

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("-------------------");

for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("-------------------");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

console.log("-------------------");

let sqare = "";
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
        sqare += "*";
    }
    sqare += "\n";
}

console.log(sqare);

/**
 * for ... in
 */

const souma = {
    name: "神崎颯馬",
    age: 18,
    group: "紅月",
};

console.log("-------------------");

for (let key in souma) {
    console.log(key);
}

const akatsukiMembersArray = ["神崎颯馬", "鬼龍紅郎", "蓮巳敬人"];

for (let key in akatsukiMembersArray) {
    console.log(`${+key + 1} : ${akatsukiMembersArray[key]}`);
}

/**
 * for ... of
 */

for (let value of akatsukiMembersArray) {
    console.log(value);
}

console.log("-------------------");

/**
 * while
 */

let number = 0;

while (number < 10) {
    // console.log(number);
    number++;
}

console.log(number);

/**
 * do ... while
 */

number = 0;

do {
    // console.log(number);
    number++;
} while (number < 10);

console.log(number);

console.log("-------------------");

/**
 * break
 */

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // i가 5일 때 반복문을 종료
    }
    console.log(i);
}

number = 0;

while (number < 10) {
    if (number === 5) {
        break; // number가 5일 때 반복문을 종료
    }
    number++;
    console.log(number);
}

console.log("-------------------");

/**
 * continue
 */

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // i가 5일 때 다음 반복으로 넘어감
    }
    console.log(i);
}

number = 0;

while (number < 10) {
    number++;
    if (number === 5) {
        continue; // number가 5일 때 다음 반복으로 넘어감
    }
    console.log(number);
}
