// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
//Base Case if n is equal to 0 we will return 1
  //if n is equal to 1 we will return 1.
//Recursive Case - We want n * n-1 until we reach n = 0.
var factorial = function(n) {
  if(n === 0){
    return 1;
  }
  if(n < 0){
    return null;
  }
    return n * factorial(n-1);
  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
//Base Case - if n is 0,1, or 2.
//Recursive Case - Subtract 2 from n on each function call for positive integers until
  //n equals one of our base cases. For negative integers we will add two.
var isEven = function(n) {
  if(n === 0){
    return true;
  }
  if(n === 1){
    return false;
  }
  if(n === 2){
    return true;
  }
  if(n < 0){
    return isEven(n+2);
  }else{
    return isEven(n-2);
  }

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21**
//Base Case sumBelow(0) = 0 
//Recursive Case  - calling sumBelow until n = 0
//Action - We need n to get to 0. 
var sumBelow = function(n) {
  if(n === 0){
    return 0;
  }
  if(n === 1){
    return 0;
  }
  if(n === -1){
    return 0;
  }
  if(n > 1){
    return (n-1) + sumBelow(n-1);
  }
  if(n < 1){
    return (n+1) + sumBelow(n+1);
  }

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
//Our output is going to be an array.
//Base Case if x = y return an empty array.
//We need a variable set to an empty array.
//Recursive Case - We want x to eventually equal y.
  //We will subtract from x if x is greater than y
    //from each function call we want to push x-1 to the empty array.
  //we will subtract for y if y is greater than x.
    //From each function call we want to push x+1 to the empty array.
/*var range = function(x, y) {
  var results = [];
  if(x === y){
    return results;
  }
  if(x > y){
    return results.push(x-1) + range(x-1, y);
  }
  if(x < y){
    return results.push(x+1) + range(x, y-1);
  }
};
*/

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
//Base case - when exp = 0 return 1 and when exp = 1 return base
//Recusive - On each call of the function we need the base to multiply itself, and exponent to decrease by 1
//
var exponent = function(base, exp) {
  if(exp === 0){
    return 1;
  }
  if(exp === 1){
    return base;
  }
  if(exp > 1){
    return (base * exponent(base, exp-1));
  }
  if(exp < 0){
    return 1/(base * (exponent(base,-exp-1)));
  }

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
//Base Case - if n = 1 or 2 return true, if n = 0 return false.
//Recursive Case - Call powerOfTwo function on n/2 until n equals one of our base cases
var powerOfTwo = function(n) {
  if(n === 0){
    return false;
  }
  if(n > 0 && n < 1){
    return false;
  }
  if(n > 1 && n < 2){
    return false;
  }
  if(n === 1){
    return true;
  }
  if(n === 2){
    return true;
  }
  if(n > 2){
    return powerOfTwo(n/2);
  }

 
};

// 9. Write a function that accepts a string a reverses it.
//Base Case if the length of the string is 1 then return string.
//Recursive Case - return the last letter of the string on each function call
  //And then recursively call the function with the string minus the last letter.
var reverse = function(string) {
  if(string.length-1 === 0){
    return string;
  }else{
    return string.slice(string.length-1) + reverse(string.slice(0,string.length-1));
  }

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
//Base Case - If x equals 0 we return y, if y = 0 we return x.
//Recursive Case = recursively call gcd(y, (remainder of x and y)) until x or y equals zero.
var gcd = function(x, y) {
  var z = x % y;
  if(x === 0){
    return y;
  }
  if(y === 0){
    return x;
  }
  if(x < 0 || y < 0){
    return null;
  }
  else{
    return gcd(y, z);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
//Base Case if str1 equals str2 exactly then return true.
  //if str1 doesnt equal str2 return false.
  //if str1 length doesn't equal str2 length return false.
//Recursive Case = check each character one by one, recursively calling comparestr
  //to test the next character.
var compareStr = function(str1, str2) {
  if(str1[0]!== str2[0]){
    return false;
  }
  if(str1 === str2){
    return true;
  }else{
    return compareStr(str1.slice(0, str1.length-1), str2.slice(0,str2.length-1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};