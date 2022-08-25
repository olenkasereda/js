// // ## Example 1 - Базовые операции с массивом

// // 1. Создайте массив `genres` с элементами «Jazz» и «Blues».
// // 2. Добавьте «Рок-н-ролл» в конец.
// // 3. Выведите в консоль первый элемент массива.
// // 4. Выведите в консоль последний элемент массива. Код должен работать для массива
// //    произвольной длины.
// // 5. Удалите первый элемент и выведите его в консоль.
// // 6. Вставьте «Country» и «Reggy» в начало массива.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');
// console.log(genres);

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);

// const genresDel = genres.splice(0, 1);
// console.log(genres);
// console.log(genresDel);

// genres.splice(0, 0, 'Country', 'Reggy');
// console.log(genres);

// ==================================================

// // ## Example 2 - Массивы и строки

// // Напиши скрипт для вычисления площади прямоугольника со сторонами, значения
// // которых хранятся в переменной `values` в виде строки. Значения гарантированно
// // разделены пробелом.

// const values = '20 30';
// const number = values.split(' ');
// const result = number[0] * number[1];
// // const result = Number(number[0]) + Number(number[1]);  =50, не поняла об оглавлении переменной
// console.log(result);

// ====================================================

//  ## Example 3 - Перебор массива

// // Напиши скрипт для перебора массива `fruits` циклом `for`. Для каждого элемента
// // массива выведи в консоль строку в формате `номер_элемента: значение_элемента`.
// // Нумерация элементов должна начинаться с `1`.

// // ```js
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//     const index = i + 1;
//     const element = fruits[i];
//     console.log(`${index} : ${element}`);
// }

// ===================================================
// // ## Example 4 - Массивы и циклы

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В
// переменных `names` и `phones` хранятся строки имен и телефонных номеров,
// разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на
// соответствие. Количество имен и телефонов гарантированно одинаковое.

// // Опрацювати варіант коли довжина строк різна

// const names = 'lena,tanya,masha,nata';
// const phones = '380888,34444,558486,53566';

// const namesNumber = names.split(',');
// const phonesNumber = phones.split(',');

// console.log(namesArray);
// console.log(phonesArray);

// // let longestArray = [];

// // if (namesArray.length > phonesArray.length) {
// //   longestArray = namesArray;
// // } else {
// //   longestArray = phonesArray;
// // }

// const longestArray = namesArray.length > phonesArray.length ? namesArray : phonesArray;

// for (let i = 0; i < longestArray.length; i += 1) {
//   const name = namesArray[i] === undefined ? "empty" : namesArray[i];
// //   iteration #1
//   i = 0
//   const name = namesArray[0]
//   const name = 'Jacob' === undefined // false
//   const name = namesArray[0] // Jacob;
//     //   // Iteration #4
// //   // i = 3
// //   // const name = namesArray[3]
// //   // const name = undefined === undefined // true
// //   //   const name = 'empty'
// //   const phone = phonesArray[i] === undefined ? "empty" : phonesArray[i];
// //   console.log(`${name} - ${phone}`);
// }??????????????????//

// ===============================================================

// // ## Example 5 - Массивы и строки

// // Напиши скрипт который выводит в консоль все слова строки кроме первого и
// // последнего. Результирующая строка не должна начинаться или заканчиваться
// // пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Скрипт должен работать для любой строки';
// const stringArrys = string.split(' ');
// console.log(stringArrys);

// // stringArrys.shift();
// // stringArrys.pop();
// // console.log(stringArrys);
//     //  ||
// // const copyArrys = stringArrys.slice(1, stringArrys.length - 1);
// // console.log(copyArrys);

// //      ||

// // const copyArrys = stringArrys.slice();      /* 1й способ сторку в массив */
// const copyArrays = [].concat(stringArrys);     /* 2й способ сторку в массив */
// copyArrays.splice(0, 1);       /*  удалить 1й элемент в массиве*/
// copyArrays.splice(copyArrays.length - 1, 1);     /* удалить последней элемент в массиве */
// const result = copyArrays.join(" ");     /* массив соеденяем в строку */
// console.log("original", stringArrys);     /* орригинал массива */
// console.log("copy", copyArrays);     /* копия без перваго и последнего */
// console.log(result);     /* строка копии */

// ======================================================

//  // Example 6 - Массивы и строки

// // Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит
// // ее в консоль. /*   */

// const string = 'Напиши скрипт который «разворачивает» строку';
// const Arraystring = string.split(' ');
// console.log("string :", string);
// console.log("array :", Arraystring);

// var rev = [...Arraystring].reverse();   /*Стандартный метод реверсирования массива в JavaScript использует метод reverse() метод */
// console.log("revers :",rev);

/* если масив делает не по словам а по буквам пробел убрать в сплиту  */

// ====================================================

// // ## Example 7 - Сортировка массива с циклом

// // Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве
// // элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log('исходний массив', langs);
// langs.sort();      /* Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив  */
// console.log('сортировка по порядку', langs);

// ===================================================

// // ## Example 8 - Поиск элемента

// // Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для
// // любого массива чисел. Используй цикл для решения задачи.

// const numbers = [20, 17, 94, 10, 23, 3];
// const min = Math.min(...numbers);

// let min = numbers[0];
// for (let i = 1; i < numbers.length; i += 1) {
// //    if (min < numbers[i]) {
    // min = numbers[i];
// //    
// //     }
//    
//     
// }
      

// console.log(min); // 1