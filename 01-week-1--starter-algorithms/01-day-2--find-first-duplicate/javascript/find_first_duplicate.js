function findFirstDuplicate(arr) {
  
  // given an array 

  let uniques = new Set();

  // iterate over it
  for (let i = 0; i < arr.length; i++) {
    // until one number is returned twice
    // then return that number
    if (uniques.has(arr[i])) 
        return arr[i];
        uniques.add(arr[i]);
  }
  // otherwise, return -1
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 4");
  console.log("=>", findFirstDuplicate([2, 1, 4, 4, 3, 3, 2]));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
