function findShortestStringRecursive(arr) {
  // type your code here
  findShortestStringRecursive(arr.reduce((shortest, string) =>
    string.length < shortest.length ? string : shortest))
}

// const sorted = arr.sort((a, b) => a.length - b.length);
// return sorted[0];

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'mc'");
  console.log("=>", findShortestString(['mmckaayy', 'mckayla', 'mckay', 'mc']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution


