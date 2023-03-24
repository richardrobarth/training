function deepEqual(one, two) {
  if((typeof one == 
    "object" && one != null) && (typeof two == "object" && two != null)) {    
    const keys = Object.keys(one)
    for(i=0; i<keys.length; i++) {
      return deepEqual(one[keys[i]], two[keys[i]]);
    }
  }
  return one === two;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true