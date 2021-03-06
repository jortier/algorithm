ImplementationStack
====
Stack 구현을 위한 기본적인 코드가 작성되어 있습니다.
Stack 자료구조의 특성을 이해하고 FILL_ME_IN 을 채워 테스트를 통과해주세요.

멤버변수
====
* 데이터를 저장할 Object 타입을 storage
* 스택의 가장 상단을 가리키는 Number 타입의 포인터 top

## 메서드
* size(): 스택에 추가된 데이터의 크기를 리턴해야 합니다.
* push(): 스택에 데이터를 추가할 수 있어야 합니다.
* pop(): 가장 나중에 추가된 데이터를 스택에서 삭제하고 삭제한 데이터를 리턴해야 합니다.

주의사항
====
* 내장 객체 Array.prototype에 정의된 메서드는 사용하면 안됩니다.
* 포인터 변수 top의 초기값은 -1, 0, 1 등의 임의로 지정할 수 있지만 여기서는 0 으로 하여 데이터가 추가 될 위치를 가리키도록 합니다.

사용예시
====
``` javascript
const stack = new Stack();

stack.size(); // 0
for(let i = 1; i < 10; i++) {
  	stack.push(i);
}
stack.pop(); // 9
stack.pop(); // 8
stack.size(); // 7
stack.push(8);
stack.size(); // 8
...
```