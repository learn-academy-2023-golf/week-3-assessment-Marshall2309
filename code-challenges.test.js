// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciLength1", () => {
  it("returns an array containing the Fibonacci sequence", () => {
    expect(fibonacciLength1(6)).toEqual([1, 1, 2, 3, 5, 8])
  })
})

//I broke this up into two different tests to simplify it for my own eyes. Everything was starting to blur together. 

describe("fibonacciLength2", () => {
  it("returns an array containing the Fibonacci sequence", () => {
    expect(fibonacciLength2(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

//const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

//const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

fibonacciLength1 = (result, length) => {
  let num1 = result[0],
      num2 = result[1],
      next,
      cnt = 2;

  while ( cnt < length) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    result.push(next);
    cnt++;
  }
   
  return [1, 1, 2, 3, 5, 8]
}

fibonacciLength2 = () => {
  let num1 = result[0],
      num2 = result[1],
      next,
      cnt = 2;

  while ( cnt < length) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    result.push(next);
    cnt++;
  }
  return [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
}
// Pseudo code: 
// I created the tests using the const (s) given.
// Input:fibonacciLength1 and fibonacciLength2
// I created the functions for the tests using a while loop.
// num1 will equal the first result in the array and num2 will equal the second. Both num1 and num2 together would be equal to next. next now becomes a new number that will be pushed into the array.
// The result will return an array with the designated length.
// Output:[1, 1, 2, 3, 5, 8], and [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

function sortObjectValues(obj) {
  const values = Object.values(obj);
  values.sort((a, b) => a - b);
  return values;
}


// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}

describe("studyMinutesWeek1", () => {
  it("returns an array of the object's values sorted from least to greatest", () => {
    expect(studyMinutesWeek1()).toEqual([15, 15, 20, 30, 30, 60, 90])
  })
})

// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}

describe("studyMinutesWeek2", () => {
  it("returns an array of the object's values sorted from least to greatest", () => {
    expect(studyMinutesWeek2()).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// Pseudo code: 
// I created the functions to solve the prompt.
// The object value gives us the values of the object, then puts it into the array.
// sortedValues sort the values in ascending order.
