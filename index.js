function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      } 
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
// 1. designate a starting point, the first number in the array
// 2. add the first number to the second number in the array
// 3. if their sum equals the target, return true. If not, add the first number to the next number in the array. 
// 4. if you've reached the end of the array and there still isnt' a match, change the "starting point" to the second number by incrementing your start. 
// 5. add the new starting number to the next number in the array. Repeat steps 2-4. 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
