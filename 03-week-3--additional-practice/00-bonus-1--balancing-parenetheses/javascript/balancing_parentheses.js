function balancingParentheses(string) {
  // type your code here

  // edge case:
  // if string length is 1, return 1

  let openings = 0;
  let missing = 0;

  // iterate over the string
  for (i = 0; i < string.length; ++i) {
    if (string[i] === '(') {
      ++openings
      continue
    }

    if (openings > 0) {
      --openings;
    } else {
      ++missing;
    }
  
  // look for a left parenthese '('
  // if a left parenthese '(' is found, look for right parenthese ')'
  // if the right parenthese ')' is found, remove the pair from the string
  }

  return openings + missing
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log("");

  console.log("Expecting: 6");
  console.log(balancingParentheses(')))))('));

  console.log("");

  console.log("Expecting: 4");
  console.log(balancingParentheses('()()))(()('));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 1. Rewrite the problem in your own words
// count all of the unclosed parentheses

// 2. Validate that you understand the problem
// a ( without its own ) after it
// a ) without its own ( before it

// 3. Write your own test cases

// 4. Pseudocode

// 5. Code!