/* Utils */

/**
 * @param {*} inputArray 
 * @param {*} i (index to swap)
 * @param {*} j (index to swap with)
 */
function swap(inputArray, i, j) {
  let temp = inputArray[i];
  inputArray[i] = inputArray[j];
  inputArray[j] = temp;
}

module.exports = {
  swap: swap
}