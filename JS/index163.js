let add = function () {
  const argsArray = Object.values(arguments);
  
  let sum = argsArray.reduce((accumulator, argument) => accumulator + argument);
  console.log(sum);
};

add(5, 1, 13, 26, 5);

add(4, 8, 15, 16, 23, 42, 11, 14, 17, 24);
