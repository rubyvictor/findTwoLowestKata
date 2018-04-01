function sumTwoSmallestNumbers(numbers) {
  const sortedArr = numbers.sort((a, b) => {
    return a - b;
  });
  const filteredArr = sortedArr.filter(elem => elem > 0);
  return filteredArr[0] + filteredArr[1];
}

module.exports = sumTwoSmallestNumbers;
