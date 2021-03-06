function add(n1: number, n2: number) {
  return n1 + n2;
}

// This is a VOID functions and it does not return a value
function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// function types define the parameter and return type of a function
let combineValues: (a: number, b: number) => number;

combineValues = add;

// without setting function types this line will run but will throw error at runtime returning 'undefined'
// combineValues = printResult;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
