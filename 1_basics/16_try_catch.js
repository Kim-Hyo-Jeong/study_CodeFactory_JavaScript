/**
 * try...catch
 *
 * 1) 발생시킬 때 -> 던진다고 함 (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 함 (catch)
 */

function runner() {
    try {
        console.log("Hello");
        // throw new Error("큰 문제가 생겼습니다!");
        console.log("Gengar");
    } catch (e) {
        console.log("---catch---");
        console.log(e);
    } finally {
        console.log("---finally---");
    }
}

runner();
