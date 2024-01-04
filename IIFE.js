
// question a --> print odd numbers in array
console.log("_______________________________________");
(function odd()
{ 
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
          oddNumbers.push(numbers[i]);
        }
        
      
      }
      
      console.log("---odd numbers in given array--",oddNumbers)      
}
)();
console.log("_______________________________________");
// question b -->string arry captilize the first letter
let strarr =["hii","i am","brindha"]
var capt = strarr.map(function (str) {
    return str
      .split(' ')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  });
  
  console.log("--capitalize the first letter in string in the given array--");
  console.log(capt);
  console.log("_______________________________________");
  // question c -->Sum of all numbers in an array
let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

(function(arrsum)
{
    let sum=0
    for (let i = 0; i < numarr.length; i++)
     {
          sum=sum+numarr[i];
          
    }
    console.log("--sum of arrays--",sum)
})();
console.log("_______________________________________");
// question d -->prime numbers in an array
let numbers1 = [2, 3, 5, 7, 8, 11, 13, 17, 19, 23, 29, 31, 37];

(function(prime){ 
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
  console.log("----prime numbers in given array----")
  console.log(PrimeNumbers)
}
)();
console.log("_______________________________________");
//question e-->palindromes in an array
var words = ["level", "hello", "milk", "world", "madam", "amma"];

var findPalindromes = (function (arr) {
  var palindromes = [];

  arr.forEach(function (word) {
    var reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
      palindromes.push(word);
    }
  });

  return palindromes;
})(words);

console.log("Palindromes in the array");
console.log(findPalindromes);
console.log("_______________________________________");
// question f --> median of two sorted arrays of the same size.
var findMedian = (function(nums1, nums2) {
  var mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  var length = mergedArray.length;

  if (length % 2 === 0) {
    return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
})([1, 3, 5], [2, 4, 6]);

console.log("Median of the two sorted arrays:")
console.log(findMedian);
console.log("_______________________________________");
// question g -->Remove duplicates from an array
var array = [1, 2, 3, 4, 2];

var removeDuplicates = (function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
})(array);

console.log("Array with duplicates removed:", removeDuplicates);
console.log("_______________________________________");
//question h -->Rotate an array by k times
var originalArray = [1, 2, 3, 4, 5];
var rotations = 3;

var rotatedArray = (function(arr, k) {
  for (var i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})(originalArray.slice(), rotations);
console.log("Rotated Array by", rotations, "times:", rotatedArray);

