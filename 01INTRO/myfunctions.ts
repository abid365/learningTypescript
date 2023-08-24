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

// todo: case:3
function getUpperCase(val: string) {
  return val.toUpperCase();
}
getUpperCase("jawad");

// todo: case:4
function signUp(name: string, email: string, isPaid: boolean) {
  return {
    name: name,
    email: email,
    paid: isPaid,
  };
}
signUp("jawad", "jawad@dev.co", false);

// todo: case:5 -> arrow function
// if we don't pass the default value in isPaid it will show error while passing as argument
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  return {
    name: name,
    email: email,
    paid: isPaid,
  };
};

loginUser("Jawad", "jd@jj.com");

export {};
