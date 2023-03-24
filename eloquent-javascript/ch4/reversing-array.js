function reverseArray(arr) {
  let reversedArr = [];
  while(arr.length > 0) {
    reversedArr.push(arr.pop())
  }
  return reversedArr;
}

function reverseArrayInPlace(arr) {
  let reversedArr = [];
  while(arr.length > 0) {
    reversedArr.push(arr.pop());
  }
  arr.push(...reversedArr);
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
