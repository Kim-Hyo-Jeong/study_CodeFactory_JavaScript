# 🧱 Thread

> 프로세스(작업의 단위) 내에서 실행되는 흐름의 작은 단위

---

## JavaScript는 Single Threaded다

> JS는 어느 한순간에 동시에 단 하나의 작업만 실행할 수 있음

---
## 🧵 Sync Programming (동기 프로그래밍)

> 작업이 순차적으로 하나씩 실행되며,  
> 이전 작업이 끝나야 다음 작업으로 넘어갈 수 있음

예시 흐름:
1. 콘솔에 `'Hello'` 출력
2. 2초가 걸리는 작업 시작 및 완료 (이 동안 아무 것도 안 함)
3. 콘솔에 `'World'` 출력
4. 콘솔에 `'완료'` 출력   

<br>

```js
console.log('Hello');

const start = Date.now();
while (Date.now() - start < 2000) {
  // 2초 동안 대기 (blocking)
}

console.log('World');
console.log('완료');
```