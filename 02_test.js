// const clienta = ["Lena", "Tanya", "Masha", "Nata"];
// for (let i = 0; i < client.length; i += 1) {
//     console.log(clients[i]);
// }
// console.log('получилось!');


// =============================================
/* Цикл for...of (из)  - Это хорошая замена циклу for если не нужен доступ к счётчику итерации */

// const clients = ["Lena", "Tanya", "Masha", "Nata"];
// for (const client of clients) {
//     console.log(client);
// }
// const string = 'javascript';
// for (const symbol of string) {
//     console.log(symbol);
// }

// =============================================
/*  Операторы break (прервать) и continue (продолжить) */

// const clients = ["Lena", "Tanya", "Masha", "Nata"];
// const clientNameToFind = 'Lena';
// let message;
// for (const client of clients) {
//     if (clientNameToFind === client) {
//         message = 'I am find';
//         break;
//     }
//     message = 'I am not find';
// }
// console.log(message);

// или можно короче
 
// const clients = ["Lena", "Tanya", "Masha", "Nata"];
// const clientNameToFind = 'ena';
// let message = 'I am not find';
// for (const client of clients) {
//     if (client === clientNameToFind) {
//  message = 'I am find';
//      break;
//     }
// }
// console.log(message);


// Используем цикл для вывода только чисел больше определенного значения.
// const numbers = [1, 2, 4, 5, 6, 12, 14, 15, 30, 32];
// const threshold = 15;
// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log(`number is more ${threshold}: ${numbers[i]}`);
// }

// =========================================================

// const numbers = [1, 2, 3, 5, 7, 11];
// const simpleNumber = 3;
// const hasSimpelNumber = numbers.includes(simpleNumber);
// if (hasSimpelNumber) {
//     console.log(`${simpleNumber} is a simple number`);
// }

//=======================================================

const scores = [1, 2, 3, 4, 5];

// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
const Scores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]