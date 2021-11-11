function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  let arr = [0, 1]

  for (let i = 0; i < num - 1; ++i) {
    let nextNum = arr[arr.length - 2] + arr[arr.length - 1];
    arr.push(nextNum);
  }

  return arr[arr.length - 1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 13");
  console.log("=>", fibonacci(7));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");
  console.log("=>", fibonacci(100));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 10

// num1 = 0
// num2 = 1

// num3 = num1 + num2
// num4 = num2 + num3 

// return num10


// let num = 10

// let arr = [0, 1]

// while (arr.length < num) {
//   arr.push = arr[arr.length - 1] + arr[arr.length - 2]
// }

// return arr[num]

// until the array is as long as num, keep adding to it
// then return the nth number