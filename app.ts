function add(n1: number, n2: number) {
  return n1 + n2;
}

// This is a VOID functions and it does not return a value
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// function types allows us to describe which function type specifically we want to use somewhere
let combineValues: (a: number, b: number) => number;

combineValues = add;

// without setting function types this line will run but will throw error at runtime returning 'undefined'
// combineValues = printResult;

console.log(combineValues(8, 8));
