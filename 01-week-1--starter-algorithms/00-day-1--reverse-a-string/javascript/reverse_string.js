function reverseString(str) {
  // type your code here
  var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: '  '");
  console.log("=>", reverseString("  "));

  console.log("");

  console.log("Expecting: 'alyaKcM'");
  console.log("=>", reverseString("McKayla"));

  console.log("");

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
