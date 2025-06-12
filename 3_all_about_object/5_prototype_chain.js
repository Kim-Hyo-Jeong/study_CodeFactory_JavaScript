/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티
// class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값임
// 프로토타입 체인
console.log(testObj.__proto__);

function Idol(name, birthday) {
    this.name = name;
    this.birthday = birthday;
}

console.log(Idol.prototype);

console.dir(Idol.prototype, {
    showHidden: true,
});

console.log(Idol.prototype.constructor === Idol);
console.log(Idol.prototype.constructor.prototype === Idol.prototype);

const souma = new Idol("神崎颯馬", "04-20");

console.log(souma.__proto__);
console.log(souma.__proto__ === Idol.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(Idol.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Idol.prototype.__proto__ === Object.prototype);

console.log(souma.toString());
console.log(Object.prototype.toString());

function Idol2(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    this.sayHello = function () {
        return `${this.name}이 인사를 합니다.`;
    };
}

const souma2 = new Idol2("神崎颯馬", "04-20");
const keito2 = new Idol2("蓮巳敬人", "09-06");

console.log(souma2.sayHello());
console.log(keito2.sayHello());
console.log(souma2.sayHello === keito2.sayHello);

console.log(souma2.hasOwnProperty("sayHello"));

function Idol3(name, birthday) {
    this.name = name;
    this.birthday = birthday;
}

Idol3.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
};
const souma3 = new Idol3("神崎颯馬", "04-20");
const keito3 = new Idol3("蓮巳敬人", "09-06");
const kuro3 = new Idol3("鬼龍紅郎", "01-26");

console.log(souma3.sayHello());
console.log(keito3.sayHello());

console.log(souma3.sayHello === keito3.sayHello);

console.log(souma3.hasOwnProperty("sayHello"));

Idol3.sayStaticHello = function () {
    return "안녕하세요 저는 static method입니다.";
};

console.log(Idol3.sayStaticHello());

/**
 * Overriding
 */
function Idol4(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    this.sayHello = function () {
        return "안녕하세요. 저는 인스턴스 메서드입니다.";
    };
}

Idol4.prototype.sayHello = function () {
    return "안녕하세요. 저는 prototype 메서드입니다!";
};

const souma4 = new Idol4("kanzaki", "04-20");

// 프로퍼티 셰도잉 - class에서 override
console.log(souma4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스 __proto__ 변경 vs 함수의 prototype 변경
 */

function Idol(name, birthday) {
    this.name = name;
    this.birthday = birthday;
}

Idol.prototype.sayHello = function () {
    return `${this.name}가 인사를 합니다.`;
};

function MaleIdol(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    this.dance = function () {
        return `${this.name}가 춤을 춥니다.`;
    };
}

const keito = new Idol("蓮巳敬人", "09-06");
const kuro = new MaleIdol("鬼龍紅郎", "01-26");

console.log(keito.__proto__);
console.log(keito.__proto__ === Idol.prototype);
console.log(Object.getPrototypeOf(keito));

console.log(keito.sayHello());
console.log(kuro.dance());
console.log(Object.getPrototypeOf(kuro) === MaleIdol.prototype);
// console.log(kuro.sayHello());

Object.setPrototypeOf(kuro, Idol.prototype);
console.log(kuro.sayHello());

console.log(kuro.constructor === MaleIdol);
console.log(kuro.constructor === Idol);
console.log(keito.constructor === Idol);
console.log(Object.getPrototypeOf(kuro) === MaleIdol.prototype);
console.log(Object.getPrototypeOf(kuro) === Idol.prototype);
console.log(MaleIdol.prototype === Idol.prototype);

MaleIdol.prototype = Idol.prototype;

const souma5 = new MaleIdol("kanzaki", "04-20");
console.log(Object.getPrototypeOf(souma5) === MaleIdol.prototype);
console.log(MaleIdol.prototype === Idol.prototype);
