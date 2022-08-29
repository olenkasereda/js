/**
  |============================
  | 1
  |============================
*/
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//    return console.log("You are an adult");
//   }

//   return console.log("You are a minor");
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);
/**
  |============================
  | 2
  |============================
*/
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//    return console.log("Welcome!");
//   }
//   return console.log("Access denied, wrong password!");
// }

// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");
/**
  |============================
  | 3
  |============================
*/
// function checkStorage(available, ordered) {
 
//   if (ordered === 0) {
//     return "Your order is empty!";
    
//   }
//   if (ordered > available) {
   //     return console.log("Your order is too large, not enough goods in stock!");
//   }

//   return console.log("The order is accepted, our manager will contact you");
// }

// checkStorage(100, 50);
// checkStorage(100, 50);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);
  
/**
  |============================
  | 5
  |============================
*/
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);
/**
  |============================
  | 6
  |============================
*/
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);
/**
  |============================
  | 9
  |============================
*/
// function getExtremeElements(array) {
//   const firstElementArray = array[0];
//   const lastElementArray = array[array.length-1];
    
//   return console.log([firstElementArray, lastElementArray]);
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

/**
  |============================
  | 10
  |============================
*/
// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);

//   return words;
// }
/**
  |============================
  | 11
  |============================
*/
// function calculateEngravingPrice(message, pricePerWord) {
//   const arrMessage = message.split(' ');

//   return console.log(arrMessage.length * pricePerWord);
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);
/**
  |============================
  | 12
  |============================
*/
// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);

//   return console.log(string);
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");
/**
  |============================
  | 13
  |============================
*/
// function slugify(title) {
//   const arrTitle = title.toLowerCase().split(' ');
    
//   return console.log(arrTitle.join('-'));
// }

// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");
/**
  |============================
  | 14
  |============================
*/
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

/**
  |============================
  | 16
  |============================
*/
// function makeArray(firstArray, secondArray, maxLength) {
    
//  const newArray = firstArray.concat(secondArray);
//   result = newArray.slice(0, maxLength);
//   return  result;
// }
/**
  |============================
  | 17
  |============================
*/
// const start = 3;
// const end = 7;

// for (let i = start ; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

/**
  |============================
  | 18
  |============================
*/
// function calculateTotal(number) {
//   let result = 0;
  
// for (let i = 1; i <= number; i += 1){
//     result += i;
//   }

// return result;
// }

/**
  |============================
  | 19
  |============================
*/
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1){
//   const fruit = fruits[i];

//   console.log(fruit);
// }

/**
  |============================
  | 20
  |============================
*/
// function calculateTotalPrice(order) {
//   let total = 0;
 
// for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
 
//   return total;
// }

/**
  |============================
  | 21
  |============================
*/

// function findLongestWord(string) {
//   const arrWords = string.split(' ');
//   let longWord = arrWords[0];

//   for (let i=0; i < arrWords.length; i+=1){
//     if (longWord.length < arrWords[i].length ){
//       longWord = arrWords[i];
//     }
//   }
  
//   return console.log(longWord);
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

/**
  |============================
  | 22
  |============================
*/

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//
//  for (let i = min; i <= max; i += 1) {
//     numbers.push (i);
//   }
//
//   return console.log(numbers);
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

/**
  |============================
  | 23
  |============================
*/

// function filterArray(numbers, value) {
//   const newArray = [];

//   for (const number of numbers){
//     if (number > value) {
//        newArray.push(number)
//     }
//   }

// return newArray;
// }

/**
  |============================
  | 24
  |============================
*/
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return console.log(fruits.includes(fruit));
// }

// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");
/**
  |============================
  | 25
  |============================
*/
// function getCommonElements(array1, array2) {
 
//   const  uniqueElements = [];

//    for (element of array1) {
//       if (array2.includes(element)) {
//       uniqueElements.push(element);
//    }
//    }

//   return uniqueElements;
// }
/**
  |============================
  | 26
  |============================
*/
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const price of order) {
//     total += price;
//   }

//   return total;
// }
/**
  |============================
  | 27
  |============================
*/
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//      if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

/**
  |============================
  | 29
  |============================
*/
// function getEvenNumbers(start, end) {
//    // Change code below this line
// const newArray = [];
  
// for (let i = start; i <= end; i += 1) {
//   if (i % 2 === 0) {
//     newArray.push(i);
//   }
  
// }

// return console.log(newArray);

//     // Change code above this line
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);

/**
  |============================
  | 30
  |============================
*/
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

/**
  |============================
  | 31
  |============================
*/
// function findNumber(start, end, divisor) {

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
     
//      return i;
//     }
//   }
// }
/**
  |============================
  | 32
  |============================
*/
// function includes(array, value) {
// for (let element of array){
//   if (element === value) {
//       return true;
//   }

// }
//    return false;
// }

