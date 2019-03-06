
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let total = 0
  if (fromN === toN) {
    return fromN
  } else if (fromN === 1){
    return fromN + toN;
  } else if (fromN === 0) {
    return fromN + toN;
  } else if (fromN < toN) {
    for (let N = fromN; N<= toN; N++) {
      total += N;
    }
    return total;
  }
}

module.exports = sum;