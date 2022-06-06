function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // Its important to not add this variable inside the conditional as it
  // it will concatenate the strings with the number - introducing a type bug
  // make sure to calculate separately
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
