/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive 
but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. 
The numbers will also all be unique and in ascending order. 
The numbers could be positive or negative and the first non-consecutive could be either too!
*/

// my initial solution: 
const firstNonConsecutive = (arr) => {
	if (arr.length === 1) return arr[0];
	for (let i = 1; i < arr.length; i++) {
    if (!(arr[i - 1] === arr[i] - 1)) {
		return arr[i];
  }
	}
	return null;
};

console.log(firstNonConsecutive([5,6,7,8,9]));
console.log(firstNonConsecutive([5,6,1117,8,9]));


// clever golf'd solution:
const firstNonConsecutive2 = arr => 
  arr.length === 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive2(arr.slice(1))
// note on slice to help remember (give me the slice of that array from array indices __ to array indices __ (or end))
console.log(firstNonConsecutive2([5,6,7,8,9]));
console.log(firstNonConsecutive2([5,6,1117,8,9]));


// unconvetional: 
function firstNonConsecutive3 (arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);
  return (Number.isInteger(result)) ? result : null;
}

console.log(firstNonConsecutive3([5,6,7,8,9]));
console.log(firstNonConsecutive3([5,6,1117,8,9]));
