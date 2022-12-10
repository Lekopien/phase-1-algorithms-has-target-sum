function hasTargetSum(array, target) {
  // Write your algorithm here
  let seenNumbers = {};
  for (let number of array){
    let complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
}
return false;

}

/* 
  Write the Big O time complexity of your function here

  O(n): The problem requires a small amount of processing time for each element in the input. Linear.
*/

/* 
  Add your pseudocode here

  
*/

/*
  Add written explanation of your solution here
*/
/*
 The code has a function called hasTargetSum that takes two arguments: an array and a target.
 The code iterates through the array, checks if the target is in the seenNumbers object, and sets it to true if so.
 If not, then it returns false.
 The first line of code creates an empty object called seenNumbers with no properties or methods on it.
 Then for each number in the array, we create another empty object called complement with that number minus its value as its key and true as its value.
 We check to see if there's already a property named complement in this new object by using Object#hasOwnProperty() .
 If there isn't one yet, then we set up our own property on this new object with that number minus its value as its key and true as its value.
 Finally, we add this newly created property to our seenNumbers object which will be used later when checking whether or not something is already present within it (i.e., whether or not something should be added).
 The code has a function called hasTargetSum that takes two parameters: an array and a target.
 The code iterates through the array of numbers and checks if the number is equal to or greater than the target.
 If it is, then it sets seenNumbers to true; otherwise, it sets seenNumbers to false.
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
