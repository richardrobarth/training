function arrayToList(inputArr) {
  return addNode(inputArr, 0);
}
function addNode(arr, index) {
  return {
    value: arr[index],
    rest: index < arr.length -1 ? addNode(arr, index +1) : null
  }
}

function listToArray(someList) {
  let arr = [];
  return traverseList(someList, arr);
}
function traverseList(current, arr) {
  if(current) {
    arr.push(current.value);
    traverseList(current.rest, arr);
  }  
  return arr;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  }
}

function nth(list, index) {
  return listToArray(list)[index];
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20