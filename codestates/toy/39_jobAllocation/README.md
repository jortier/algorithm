jobAllocation
===

# 문제
공장의 조립 기계가 고장이 나 수리를 위해 여러 명의 수리공들이 왔습니다. 조립 기계는 일자 형태로 길게 배치되어 있기 때문에 수리공들 또한 나란히 위치해서 수리를 진행해야 합니다. 기계의 각 부품은 한 명의 수리공만 수리할 수 있고, 이동을 최소화하기 위해 각 수리공들은 서로 연속해서 있는 부품만 수리해야 합니다. 각 부품을 수리하는 데 걸리는 작업량은 제각각이고, 수리 시간은 작업량에 비례합니다. 작업량과 수리공들의 수가 주어질 때, 전체 수리가 가장 빠르게 끝나는 시간을 리턴해야 합니다.

문제를 다르게 표현하면 아래와 같습니다.
```
- 자연수 배열을 n개의 연속 구간으로 나눌 때, 합이 가장 큰 구간의 합을 sum이라고 합시다. sum이 가장 작아지는 분배에서의 sum을 구해야 합니다.
```

# 입력
## 인자 1 : jobs
* number 타입을 요소로 갖는 배열
* jobs[i]는 1,000 이하의 양의 정수
* jobs.length는 1,000 이하

## 인자 2 : workersNum
* number 타입의 1,000 이하의 자연수

# 출력
* number 타입을 리턴해야 합니다.

# 입출력 예시
```javascript
let jobs = [1, 2, 3, 4, 5, 6, 7];
let workersNum = 3;
let output = jobAllocation(jobs, workersNum);
console.log(output); // --> 11 (1, 2, 3, 4 / 5, 6 / 7)

jobs = [10, 2, 3, 4, 16, 10, 10];
workersNum = 4;
output = jobAllocation(jobs, workersNum);
console.log(output); // --> 19 (10, 2, 3, 4 / 16 / 10 / 10)

```