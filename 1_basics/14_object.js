/**
 * Object / 객체
 */

// key : value pair
let souma = {
    name: "神崎颯馬",
    group: "紅月",
    habits: function () {
        return `${this.name} "ちぇすと"`;
    },
};

console.log(souma);
console.log(souma.name);
console.log(souma["name"]);

const key = "name";

console.log(souma[key]);

console.log(souma.habits());

const nameKey = "name";
const nameValue = "神崎颯馬";

const groupKey = "group";
const groupValue = "紅月";

const souma2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    habits: function () {
        return `${this.name} "ちぇすと"`;
    },
};

console.log(souma2);
console.log(souma2.habits());

souma2["group"] = "XXVeil";
console.log(souma2);

souma2["birthday"] = "04-20";
console.log(souma2);

delete souma2["birthday"];
console.log(souma2);

/**
 * const로 선언한 객체의 특징
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없음
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있음
 */

const kuro = {
    name: "鬼龍紅郎",
    group: "紅月",
};

console.log(kuro);

// kuro = {};

kuro["group"] = "舞闘会";
console.log(kuro);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(kuro));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(kuro));

const name = "神崎颯馬";

const souma3 = {
    name,
};

console.log(souma3);
