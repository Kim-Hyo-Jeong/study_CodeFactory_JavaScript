/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티
 *                    - 예를 들면 getter와 setter
 */

const souma = {
    name: "神崎颯馬",
    birthday: "04-20",
};

console.log(Object.getOwnPropertyDescriptor(souma, "name"));
// { value: '神崎颯馬', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(souma, "birthday"));
// { value: '04-20', writable: true, enumerable: true, configurable: true }

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부, false로 설정하면 프로퍼티 값을 수정할 수 없음
 * 3) enumerable - 열거가 가능한지 여부, for...in 루프 등을 사용할 수 있으면 true를 반환함
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단함
 *                 - false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지됨
 *                 - 단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능함
 */

console.log(Object.getOwnPropertyDescriptor(souma, "name"));

console.log(Object.getOwnPropertyDescriptors(souma));

console.log("---------------------------------------------------------------");

const souma2 = {
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

console.log(souma2);

// 테스트
console.log(`${souma2.name}의 생일은 ${souma2.birthday}이고,`);
console.log(`생일까지 ${souma2.daysUntilBirthday}일 남았어요!`);

souma2.birthday = "06-11";
console.log(souma2.birthday);
console.log(souma2.daysUntilBirthday);

console.log(Object.getOwnPropertyDescriptor(souma2, "birthday"));

souma2["height"] = 174;
console.log(souma2);
console.log(Object.getOwnPropertyDescriptor(souma2, "height"));
console.log(souma2);

Object.defineProperty(souma2, "weight", {
    value: 56,
    writable: true,
    enumerable: true,
    configurable: true,
});

console.log(souma2);
console.log(Object.getOwnPropertyDescriptor(souma2, "weight"));

souma2.height = 175;
console.log(souma2);

Object.defineProperty(souma2, "height", {
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(souma2, "height"));
console.log("---------------------------------------------------------------");

souma2.height = 174;
console.log(souma2);

/**
 * Enumerable
 */
console.log(Object.keys(souma2));
for (let key in souma2) {
    console.log(key);
}

Object.defineProperty(souma2, "name", {
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(souma2, "name"));

console.log(Object.keys(souma2));
for (let key in souma2) {
    console.log(key);
}
console.log(souma2);
console.log(souma2.name);

/**
 * Configurable
 */
Object.defineProperty(souma2, "height", {
    writable: true,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(souma2, "height"));

// Object.defineProperty(souma2, "height", {
//     enumerable: false,
// });

console.log(Object.getOwnPropertyDescriptor(souma2, "height"));

Object.defineProperty(souma2, "height", {
    value: 174,
});

console.log(Object.getOwnPropertyDescriptor(souma2, "height"));

Object.defineProperty(souma2, "height", {
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(souma2, "height"));
