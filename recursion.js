/* eslint-disable no-console */
'use strict';

function countingSheep(num) {
  if (num > 0) {
    console.log(`${num} - Another sheep jumps over the fence`);
    countingSheep(num-1);
  }
}
console.log('Counting Sheep');
countingSheep(3);


function arrayDouble(arr) {
  if (arr.length > 1) {
    return [2 * arr.shift()].concat(arrayDouble(arr));
  }
  else return 2 * arr;
}
console.log('\nArray Double\n', arrayDouble([1,2,3,4,5,6]));


function reverseString(string) {
  let strLength = string.length;
  if (string.length > 1) {
    return string.charAt(strLength - 1) + reverseString(string.substring(0, strLength - 1));
  }
  else return string;
}
console.log('\nReverse String\n', reverseString('hello olleh'));


function nthTriangularNumber(n) {
  if (n > 0) {
    return n + nthTriangularNumber(n-1);
  }
  else return 0;
}
console.log('\nNth Triangular Number');
for (let i = 1; i < 10; i++) {
  console.log(nthTriangularNumber(i));
}


function stringSplitter(string, splitter) {
  let index = string.indexOf(splitter);
  if (index > 0) {
    return [string.substring(0, index)].concat(stringSplitter(string.substring(index+1), splitter));
  }
  else return [string];
}
console.log('\nString Splitter\n', stringSplitter('hello this is a test', ' '));


function binaryRepresentation(num) {
  let exp = Math.floor(Math.log2(num));
  if (num > 1) return (Math.pow(10, exp)) + binaryRepresentation(num - Math.pow(2, exp));
  else return num;
}
console.log('\nBinary Representation\n', binaryRepresentation(25));


