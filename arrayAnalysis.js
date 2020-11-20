const arrayAnalysis = (array) => {
  const average = () => {
    let total = array.reduce((acc, cur) => {
      return acc + cur;
    });

    return total / array.length;
  };

  const min = () => {
    return Math.min(...array);
  };

  const max = () => {
    return Math.max(...array);
  };

  const length = () => {
    return array.length;
  };

  return {
    average: average(),
    min: min(),
    max: max(),
    length: length(),
  };
};

arrayAnalysis([2, 2]);

module.exports = arrayAnalysis;
