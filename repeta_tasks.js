/*  02-payment.js
 * Посчитать общую сумму покупок в корзине
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // 2 сделать переменную total до цикла
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }
// console.log('total=', total);

/* or */

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);


// Добавить такс

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// // for (let value of cart) {
// //   value = Math.round(value * 1.1);
// // }

// console.log(cart);

// =====================================================

/*  even.js
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let value of numbers) {
//   value = numbers[i];
// }

// console.log(cart);



// =================================================================
// Напиши функцию getExtremeElements(array)
// которая принимает один параметр array - массив
// элементов произвольной длины.Функция должна возвращать
//  массив из двух элементов - первого и последнего
//  элемента параметра array.

// function getExtremeElements(array) {
// return [array[0], array[array.length-1]]

// }

// // ========= #12 ===========================
// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);

//   return console.log(string);
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");


// ========= #16 =================================
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//    return console.log(newArray.slice(0, maxLength));
          
//   } else {
//       return console.log(newArray);
//   }
// }
/* или второй вариант*/

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//  const newArray = firstArray.concat(secondArray);
//  const result = newArray.slice(0, maxLength);
//   return  result;
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

