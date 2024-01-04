console.log("_______________________________________");

// question a --> print odd numbers in array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers = [];
var odd=() =>
{

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
          oddNumbers.push(numbers[i]);
        }
      }
    console.log("---odd numbers in given array--")
    console.log( oddNumbers);
}
odd()
console.log("_______________________________________");
// question b -->string arry captilize the first letter
let strarr = ["hii", "i am", "brindha"];

var capt = strarr.map(str =>
  str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
);

console.log("--capitalize the first letter in string in the given array--");
console.log(capt);
console.log("_______________________________________");
// question c -->Sum of all numbers in an array
let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
let sum=0
var arrsum=()=>
{

    for (let i = 0; i < numarr.length; i++)
     {
          sum=sum+numarr[i];
          
    }
    console.log("--array of sum--") 
    console.log(sum);
} 
arrsum()
console.log("_______________________________________");
// question d -->prime numbers in an array
let numbers1 = [2, 3, 5, 7, 8, 11, 13, 17, 19, 23, 29, 31, 37];

var prime=()=>{ 
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
console.log( PrimeNumbers);
}
prime(numbers1)
console.log("_______________________________________");
//question e-->palindromes in an array
var words = ["level", "hello", "milk", "world", "madam","amma"];

var findPalindromes = (arr1)=> {
  var palindromes = [];

  arr1.forEach(function(word) {
    var reversedWord = word.split('').reverse().join('');

    if (word === reversedWord) {
      palindromes.push(word);
    }
  });

  console.log("Palindromes in the array");
console.log( palindromes);
};

findPalindromes(words)
  
console.log("_______________________________________");