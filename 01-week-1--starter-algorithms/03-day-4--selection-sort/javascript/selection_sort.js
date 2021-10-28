function selectionSort(arr) {
  return arr.sort((a, b) => a - b);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [0, 0, 6, 7]");
  console.log("=>", selectionSort([7, 0, 6, 0]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  let start_time = Date.now();

  for (let i = 0; i < 1000; ++i) {
    selectionSort([2, 1, 6]);
    selectionSort(longInput);
  }

  let average_runtime = (Date.now() - start_time) / 2000;
  console.log("Average runtime: " + average_runtime);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
