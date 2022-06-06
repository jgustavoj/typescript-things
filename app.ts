// used when we dont know what that user might input - can be a number, string, bool etc.
// this a better option than using 'any' because it makes sure you do some type checking
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

// Never type - functions that are intended to NEVER return anything, different from VOID as it could return something
// if you want to be specific to other developers you can type this function as never to make sure its understood that this function will never return a value
// but just simply throw an error

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error ocurred!", 500);
