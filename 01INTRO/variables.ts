let greetings: string = "Hello Jawad";
console.log(greetings);
// number
let userId: number = 33445.655;

// boolean
let isLoogedin: boolean = false;

// any
// If we want to return only string then it is best to infer the type
let hero: string;
function getHero() {
  return "Jawad";
}

hero = getHero();

export {};
