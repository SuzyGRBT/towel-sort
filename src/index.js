module.exports = function towelSort (matrix) {
  let result = [];

  if(matrix == undefined) {
    return result;
  }

  for(let i = 0; i <= matrix.length - 1; i++) {

    if(i % 2 != 0) {
      result = result.concat(matrix[i].sort((a,b) => b-a));
    }

    if (i % 2 == 0) {
      result = result.concat(matrix[i]);
    }
  }
  console.log(result);
  return result;
}