/**
 * Getter and Setter
 */

class akatsuki {
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndBirthday() {
        return `${this.name} / ${this.birthday}`;
    }

    set setName(name) {
        this.name = name;
    }
}

const souma = new akatsuki("神崎颯馬", "04-20");
console.log(souma);
console.log(souma.nameAndBirthday);

souma.setName = "souma";
console.log(souma);

class akatsuki2 {
    #name;
    birthday;

    constructor(name, birthday) {
        this.#name = name;
        this.birthday = birthday;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const souma2 = new akatsuki2("神崎颯馬", "04-20");
console.log(souma2);
console.log(souma2.name);

souma2.name = "souma";
console.log(souma2.name);
