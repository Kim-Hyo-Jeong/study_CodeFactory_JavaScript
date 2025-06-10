/**
 * Super and Override
 */

class Idol {
    name;
    birthday;

    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    sayHello() {
        return `안녕하세요. ${this.name}입니다.`;
    }
}

class MaleIdol extends Idol {
    habits;

    constructor(name, birthday, habits) {
        super(name, birthday);
        this.habits = habits;
    }

    sayHello() {
        // return `안녕하세요. ${this.name}입니다. 말버릇은 ${this.habits}입니다.`;
        return `${super.sayHello()} 말버릇은 ${this.habits}입니다.`;
    }
}

const souma = new MaleIdol("神崎颯馬", "04-20", "ちぇすと");

console.log(souma);
console.log(souma.sayHello());
