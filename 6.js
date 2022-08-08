// type conversion

// implicit type conversion

var result1 = 5 - 2;
var result2 = '5' -2;
var result3 = 5 - '2';
var result4 = '5' - '2';

console.log(result1, result2, result3, result4);
console.log(typeof(result1))
console.log(typeof(result2))
console.log(typeof(result3))
console.log(typeof(result4))

var result5 = 5 + 2;
var result6 = '5' + 2;
var result7 = 5 + '2';
var result8 = '5' + '2';
console.log(result5, result6, result7, result8);
console.log(typeof(result5))
console.log(typeof(result6))
console.log(typeof(result7))
console.log(typeof(result8))


// output
// 3 3 3 3
// number
// number
// number                                                                                                                               ut JS operators"
// number
// 7 '52' '52' '52'
// number
// string
// string
// string



var result9 = 4 + true;
var result10 = 4 - false;
var result11 = '4' + true;
var result12 = '4' + false;

console.log(result9 , typeof(result9));
console.log(result10 , typeof(result10));
console.log(result11 , typeof(result11));
console.log(result12 , typeof(result12));// thought true and false as a string