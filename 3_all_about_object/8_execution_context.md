# Execution Context

**Execution Context**는 실행하려는 JS 코드와 코드를 실행할 때 필요한 정보를 담고 있는 특수한 환경입니다.  
코드 실행에 필요한 모든 데이터를 들고 있는 환경이라고 생각하면 됩니다.

Execution Context는 크게 두 가지로 나눌 수 있습니다:

-   **Global Context**

    -   최상위 Execution Context입니다.
    -   코드를 실행하면 무조건 생성되는 context로, 웹에서는 `window` 객체, Node.js에서는 `global` 객체를 생성하고 가지고 있습니다.

-   **Function Context**
    -   함수가 실행될 때마다 함수별로 생성되는 context입니다.
    -   해당 함수 실행에 필요한 모든 정보를 포함합니다.

---

# Execution Context Stack

Execution Context는 두 단계로 나뉘어 처리됩니다:

## 1. Creation Phase

-   Global Object를 생성합니다.
-   `window` 또는 `global` 객체가 생성되며, 함수에서는 `arguments` 객체가 생성됩니다.
-   `this`를 `window` 또는 `global`에 바인딩합니다.
-   변수와 함수를 Memory Heap에 할당하고, 기본값으로 `undefined`를 저장합니다.

## 2. Execution Phase

-   코드를 실제로 실행합니다.
-   필요하다면 새로운 Execution Context를 생성합니다.
