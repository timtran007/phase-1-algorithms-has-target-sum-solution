function hasTargetSum(array, target) {
// create an object to keep track of numbers we've already seen
  const seenNumbers = {}
// iterate through each number in the array
  for(let number of array){

    let complement = target - number 

    if(complement in seenNumbers) return true

    seenNumbers[number] = true;
  }
 
  return false
}


// function hasTargetSum(array, target) {
// for (let i = 0; i < array.length; i++){
//   // n steps
//   let complement = target - array[i]
//   for (let j = i+1; j< array.length; j++){
//     // n * n steps
//     if (array[j] === complement) return true
//   }
// }
// return false;
// }

/* 
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
create an object to keep track of numbers we've already seen
iterate through each number in the array
	for the current number, identify complement that adds to the target(complement = target - number)
	check if any key on our object is the complement
    if so, return true
    otherwise, add that number to the object

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
