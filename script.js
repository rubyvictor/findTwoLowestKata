function sumTwoSmallestNumbers(numbers) {
  const sortedArr = numbers.sort((a, b) => {
    a - b;
  });
  const filteredArr = sortedArr.filter(elem => elem > 0);
  return filteredArr[0] + filteredArr[1];
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
