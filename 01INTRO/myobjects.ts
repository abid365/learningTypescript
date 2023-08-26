const user = {
  name: "Jawad",
  email: "abid@azam.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
// createUser({ name: "Jawad", isPaid: false , email:"aaaa#aaa"});
// We can add new property , ex-email cause it does not exist in the object but we can make it with another approach
let newUser = { name: "Alpha", isPaid: false, email: "lala@jala.com" };
createUser(newUser);
// by declaring a object in a variable we can create a new property without facing any error. It is an odd beahaviour of JavaScript

// case 2
function createCourse(): { name: string; price: number } {
  return { name: "react-js", price: 450 };
}

export {};
