/**
 * Using Function to create objects
 */

function Idol(name, birthday) {
    if (!new.target) {
        return new Idol(name, birthday);
    }
    this.name = name;
    this.birthday = birthday;

    this.dance = function () {
        return `${this.name}이 춤을 춥니다.`;
    };
}

const souma = new Idol("神崎颯馬", "04-20");
console.log(souma);
// console.log(souma.dance());
const keito = Idol("蓮巳敬人", "09-06");
console.log(keito);
// console.log(global.name);

const IdolArrow = (name, birthday) => {
    this.name = name;
    this.birthday = birthday;
};

const kuro = new IdolArrow("鬼龍紅郎", "01-26"); // TypeError: IdolArrow is not a constructor
console.log(kuro);
