/**
 * All about objects
 *
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */

const souma = {
    name: "神崎颯馬",
    birthday: "04-20",
};
console.log(souma);

class Idol {
    // name;
    // headcount;

    constructor(name, headcount) {
        this.name = name;
        this.headcount = headcount;
    }
}

console.log(new Idol("紅月", 3));

// 생성자 함수
function IdolFuction(name, headcount) {
    this.name = name;
    this.headcount = headcount;
}

const undead = new IdolFuction("UNDEAD", 4);
console.log(undead);
