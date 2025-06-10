/**
 * Inheritance
 * 상속(Inheritance)은 객체들 간의 관계를 구축하는 방법이다.
 * 수퍼 클래스, 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
 */

class Idol {
    name;
    birthday;

    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }
}

class FemaleIdol extends Idol {
    dance() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

class MaleIdol extends Idol {
    sing() {
        return `${this.name}이 노래를 부릅니다.`;
    }
}

const souma = new MaleIdol("神崎颯馬", "04-20");

console.log(souma.sing());
console.log(souma.birthday);

console.log(souma instanceof Idol);
console.log(souma instanceof MaleIdol);
console.log(souma instanceof FemaleIdol);
