console.log("_______________________________________");
// question a --> print odd numbers in array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers = [];
var odd=function()
{

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
          oddNumbers.push(numbers[i]);
        }
      }
      
    return oddNumbers;
}
console.log("---odd numbers in given array--")
console.log(odd())
console.log("_______________________________________");
// question b -->string arry captilize the first letter
let strarr =["hii","i am","brindha"]
var capt =strarr.map(function(str) {
  return str.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
});
console.log("--captilize the first letter in string in given array--")
console.log(capt);
console.log("_______________________________________");
// question c -->Sum of all numbers in an array
let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
let sum=0
var arrsum=function()
{

    for (let i = 0; i < numarr.length; i++)
     {
          sum=sum+numarr[i];
          
    }
    return sum;
}
      
console.log("--array of sum--")    
console.log(arrsum())
console.log("_______________________________________");
// question d -->prime numbers in an array
let numbers1 = [2, 3, 5, 7, 8, 11, 13, 17, 19, 23, 29, 31, 37];

var prime=function(){ 
  let PrimeNumbers = [];
  for (var i = 0; i < numbers1.length; i++) {
    var num = numbers1[i];
    var isPrime = true;
    for (var j = 2; j < num; j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && num > 1) {
      PrimeNumbers.push(num);
    }
    
  }
  return PrimeNumbers;
}
console.log("----prime numbers in given array----")
console.log(prime(numbers1))
console.log("_______________________________________");
//question e-->palindromes in an array
var words = ["level", "hello", "milk", "world", "madam","amma"];

var findPalindromes = function(arr1) {
  var palindromes = [];

  arr1.forEach(function(word) {
    var reversedWord = word.split('').reverse().join('');

    if (word === reversedWord) {
      palindromes.push(word);
    }
  });

  return palindromes;
};

console.log("Palindromes in the array");
console.log(findPalindromes(words))
console.log("_______________________________________"); 
// question f --> median of two sorted arrays of the same size.
var findMedian = function(nums1, nums2) {
  var mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  var length = mergedArray.length;

  if (length % 2 === 0) {
    return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
};


var nums1 = [1, 3, 5];
var nums2 = [2, 4, 6];

console.log("Median of the two sorted arrays:")
console.log(findMedian(nums1, nums2));
console.log("_______________________________________");
//question g -->Remove duplicates from an array
var array = [1, 2, 3, 4, 2];

var removeDuplicates = function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
};


var result = removeDuplicates(array);

console.log("Array with duplicates removed:", result);
console.log("_______________________________________");
//question h -->Rotate an array by k times
var rotateArray = function(arr, k) {
  for (var i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
var originalArray = [1, 2, 3, 4, 5];
var rotations = 3;
var rotatedArray = rotateArray(originalArray, rotations);
console.log("Rotated Array by", rotations, "times:", rotatedArray);
console.log("_______________________________________");