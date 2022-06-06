// Union types to be flexible with parameters

// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combineAges = combine(30, 26);
// console.log(combineAges);

// const combineNames = combine("Gus", "Vann");
// console.log(combineNames);

// Literal Types

// Type Alias
type Combinable = number | string;
type ConversionDescription = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     // the + in front turns it into a number, you can also use parseFloat()
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Gus", "Vann", "as-text");
console.log(combineNames);
