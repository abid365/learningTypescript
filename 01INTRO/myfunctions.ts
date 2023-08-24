// todo: case :1

//? we have not defined the type of this num, as a result the type can be a string or a boolean or anything else. But it is not a good practice , although the code will run if we assing the value of num as string. it will not do the mathematical operation but it will concat the string with the number 2

function addTwo(num) {
  return num + 2;
}

addTwo(5);

// todo: case :2
function addThree(num: number) {
  return num + 3;
}

addThree(5);

export {};
