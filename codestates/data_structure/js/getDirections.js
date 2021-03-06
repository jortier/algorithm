function getDirections(matrix, from, to) {
  // TODO: 여기에 코드를 작성합니다.

  //from에서 갈수 있는 경우
  let fromAble = [];
  let tempAble = [];

  for(let i = 0; i < matrix[from].length; i++){
    if(matrix[from][i] === 1){
      let obj = {};
      obj[`course`] = i;
      obj[`nextCourse`] = null;
      fromAble.push(obj);

      let tempObj = {};
      tempObj[`course`] = i;
      tempObj[`nextCourse`] = null;
      tempAble.push(tempObj);
    }
  }

  function containCourse(tempObj, value){
    console.log(tempObj);
    if(tempObj.course === value && tempObj.nextCourse !== null){
      containCourse(tempObj.nextCourse, value);
    }
    if(tempObj.course === value && tempObj.nextCourse === null){
      return true;
    }

    return false;
  }

  function insertCourse(fromCourse, value){
    let obj = {};
    obj[`course`] = value;
    obj[`nextCourse`] = null;
    if(fromCourse.nextCourse === null){
      fromCourse.nextCourse = obj;
    }else{
      insertCourse(fromCourse.nextCourse, value);
    }
  }

  /*
  이걸 재귀함수로 변경
  */
  for(let i = 0; i < fromAble.length; i++){
    for(let j = 0; j < matrix[fromAble[i].course].length; j++){
      if(matrix[fromAble[i].course][j] === 1){
        insertCourse(fromAble[i], j);
      }
    }
  }

  for(let i = 0; i < tempAble.length; i++){
    for(let j = 0; j < matrix[tempAble[i].course].length; j++){
      console.log(`j === ${j}`);
      if(containCourse(tempAble[i], j)){
        insertCourse(tempAble[i], j);
      }
    }
    // findCourse(tempAble[i], matrix[tempAble[i].course]);
  }

  console.log('===from');
  console.log(fromAble);
  console.log('===temp');
  console.log(tempAble);

  // let findTo = (matrixArr, fromObj) => {
  //   if(fromObj === undefined){
  //     return false;
  //   }

  //   if((Number(Object.keys(fromObj)[0])) === fromObj[from]){
  //     return false;
  //   }

  //   if((Number(Object.keys(fromObj)[0])) === from && fromObj[from] === to){
  //     return true;
  //   }

  //   if(matrixArr[fromObj[from]] !== to){
  //     if(fromObj[from] === undefined){
  //       return false;
  //     }

  //     fromObj[from] = matrixArr[fromObj[from]][fromObj[from]];
  //     return findTo(matrixArr, fromObj);
  //   }
  // }

  // findTo(matrixArr, fromObj);

  // return findTo(matrixArr, fromObj);
}

/*
  test case 1
*/
const result = getDirections(
  [
    [0, 0],
    [0, 0],
  ],
  0,
  0
);
// console.log(result);

/*
  test case 2
*/
const matrix1 = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

// const result1 = getDirections(matrix1, 0, 1);
// console.log(result1);

// const result2 = getDirections(matrix1, 0, 2);
// console.log(result2);

// const result3 = getDirections(matrix1, 0, 3);
// console.log(result3);

// const result4 = getDirections(matrix1, 3, 1);
// console.log(result4);

const matrix2 = [
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0]
];

// const result5 = getDirections(matrix2, 0, 2);
// console.log(result5);

/*
  test case 3
*/
const matrix = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

const result6 = getDirections(matrix, 1, 0);
// console.log(result6);

// const result7 = getDirections(matrix, 2, 0);
// console.log(result7);

// const result8 = getDirections(matrix, 3, 0);
// console.log(result8);