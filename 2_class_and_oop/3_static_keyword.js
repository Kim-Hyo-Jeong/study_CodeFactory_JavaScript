/**
 * Static Keyword
 */

class akatsuki {
    name;
    birthday;
    static groupName = "紅月";

    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    static returnGroupName() {
        return "紅月";
    }
}

const souma = new akatsuki("神崎颯馬", "04-20");
console.log(souma);

console.log(akatsuki.groupName);
console.log(akatsuki.returnGroupName());

/**
 * factory constructor
 */

class akatsuki2 {
    name;
    birthday;

    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    static fromObject(object) {
        return new akatsuki2(object.name, object.birthday);
    }

    static fromList(list) {
        return new akatsuki2(list[0], list[1]);
    }
}

const souma2 = akatsuki2.fromObject({
    name: "神崎颯馬",
    birthday: "04-20",
});

console.log(souma2);

const kuro = akatsuki2.fromList(["鬼龍紅郎", "01-26"]);

console.log(kuro);
