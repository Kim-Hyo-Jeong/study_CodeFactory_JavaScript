/**
 * Immutable Object
 */

const souma = {
    name: "神崎颯馬",
    _birthday: "04-20", // 내부에서 사용하는 실제 값

    get birthday() {
        return this._birthday;
    },

    set birthday(value) {
        // 유효성 검사: "MM-DD" 형식인지 확인
        if (/^\d{2}-\d{2}$/.test(value)) {
            const [month, day] = value.split("-").map(Number);

            // 월: 1~12, 일: 1~31인지 확인
            if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
                this._birthday = value;
            } else {
                console.warn("⚠️ 유효하지 않은 날짜입니다.");
            }
        } else {
            console.warn("⚠️ 'MM-DD' 형식의 문자열을 입력해주세요.");
        }
    },

    get daysUntilBirthday() {
        const [month, day] = this._birthday.split("-").map(Number);
        const today = new Date();
        const currentYear = today.getFullYear();

        const birthdayThisYear = new Date(currentYear, month - 1, day);
        const isPast = birthdayThisYear < today;
        const nextBirthday = isPast
            ? new Date(currentYear + 1, month - 1, day)
            : birthdayThisYear;

        const diffDays = Math.ceil(
            (nextBirthday - today) / (1000 * 60 * 60 * 24)
        );
        return diffDays;
    },
};

console.log(souma);

/**
 * Extensible
 */
console.log(Object.isExtensible(souma));

souma["height"] = "174";
console.log(souma);

Object.preventExtensions(souma);

console.log(Object.isExtensible(souma));

souma["groupName"] = "紅月";
console.log(souma);

delete souma["height"];
console.log(souma);
console.log("---------------------------------------");

/**
 * Seal
 */

const souma2 = {
    name: "神崎颯馬",
    birthday: "04-20",
};

console.log(souma2);

console.log(Object.isSealed(souma2));

Object.seal(souma2);
souma2["groupName"] = "紅月";
console.log(souma2);

delete souma2["name"];
console.log(souma2);

Object.defineProperty(souma2, "name", {
    value: "Kanzaki Souma",
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(souma2, "name"));

/**
 * Freezed
 *
 * 읽기 외에 모든 기능을 불가능하게 만듦
 */
const souma3 = {
    name: "神崎颯馬",
    birthday: "04-20",
};

console.log(Object.isFrozen(souma3));

Object.freeze(souma3);
console.log(Object.isFrozen(souma3));

souma3["groupName"] = "紅月";
console.log(souma3);

delete souma3["name"];
console.log(souma3);

// Object.defineProperty(souma3, "name", {
//     value: "Kanzaki Souma",
// });

console.log(Object.getOwnPropertyDescriptor(souma3, "name"));

const souma4 = {
    name: "神崎颯馬",
    birthday: "04-20",
    profile: {
        height: 174,
        weight: 56,
    },
};

Object.freeze(souma4);

console.log(Object.isFrozen(souma4));
console.log(Object.isFrozen(souma4["profile"]));
