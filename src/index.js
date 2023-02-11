module.exports = function towelSort (matrix) {
  let arr = [];

    function direct(i) {
        for (let j = 0; j < matrix[i].length; j++){
            arr.push(matrix[i][j]);
        }
    }

    function reverse(i) {
        for (let j = matrix[i].length -1; j >= 0; j--){
            arr.push(matrix[i][j]);
        }
    }

    if (!matrix) return arr;

    for (let i = 0; i < matrix.length; i++) {
        direct(i);
        i++;
        if (i < matrix.length) reverse(i);
    }
    return arr;
}
