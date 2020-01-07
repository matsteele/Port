
const M = [
    [1,3,4,3],
    [3,4,3,1],
    [6,5,3,3],
    [5,6,5,4],
    [5,6,5,4]
]

const sum = (a,b) =>{
    return a+b
}

const product = (a, b) => {
    return a*b
};


const mergeAndApply = (M, applyFunc)  =>{
  let returnArr = []
  for (let col = 0; col < M[0].length ; col++ ){
    let result 
    for (let row = 0; row < M.length ; row++){
      if (row === 0) result = M[row][col]
      else result = applyFunc(result, M[row][col]);
    }
    returnArr.push(result);
  }
  return returnArr;
}


test('checks result', () => {
  let expectedResultSum = [20, 24, 20, 15]
  let expectedResultProduct = [450, 2160, 900, 144];

  expect(mergeAndApply(M, product)).toEqual(expectedResultProduct);
});