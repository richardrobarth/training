//console.log('Excercie 1');

function sum(array) {
  sum = 0
  for(i=0; i<array.length; i++) {
    sum+=array[i];
  }
  return sum;
}

function range(start, stop, step = 1) {
  let arr = [];

  // make declining range negative to use same loop
  if(step < 0) { 
    start = start * -1;
    stop = stop * -1;
  }
  for(i=start; i<=stop; i+=Math.abs(step)) {
    arr.push(Math.abs(i));
  }
  return arr;
}

console.log(sum(range(1, 10)));
