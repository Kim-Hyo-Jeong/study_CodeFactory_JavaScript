/**
 * 클래스(Class)
 * 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀
 * 정보를 일반화해서 정리하는 방법
 */

/**
 * Class Keyword
 */

class akatsuki {
    name;
    birthday;

    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    sayName() {
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}

// constructor - 생성자

const souma = new akatsuki("神崎颯馬", "04-20");
console.log(souma);

const keito = new akatsuki("蓮巳敬人", "09-06");
console.log(keito);

const kuro = new akatsuki("鬼龍紅郎", "01-26");
console.log(kuro);

// class akatsuki {
//     constructor(name, birthday) {
//         this.name = name;
//         this.birthday = birthday;
//     }
// }

console.log(souma.sayName());
console.log(keito.sayName());
console.log(kuro.sayName());

console.log(typeof akatsuki);
console.log(typeof souma);
