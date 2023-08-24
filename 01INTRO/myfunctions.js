"use strict";
// todo: case :1
Object.defineProperty(exports, "__esModule", { value: true });
//? we have not defined the type of this num, as a result the type can be a string or a boolean or anything else. But it is not a good practice , although the code will run if we assing the value of num as string. it will not do the mathematical operation but it will concat the string with the number 2
function addTwo(num) {
    return num + 2;
}
addTwo(5);
// todo: case :2
function addThree(num) {
    return num + 3;
}
addThree(5);
// todo: case:3
function getUpperCase(val) {
    return val.toUpperCase();
}
getUpperCase("jawad");
// todo: case:4
function signUp(name, email, isPaid) {
    return {
        name: name,
        email: email,
        paid: isPaid,
    };
}
signUp("jawad", "jawad@dev.co", false);
