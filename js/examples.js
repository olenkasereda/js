// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:


// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// console.table(user);

// // - добавляет поле `mood` со значением `'happy'`
// user.mood = 'happy';
// console.table(user);

// // - заменяет значение `hobby` на `'skydiving'`
// user.hobby = 'skydiving';
// console.table(user);

// // - заменяет значение `premium` на `false`

// user.premium = 'false';
// console.table(user);

// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// const keys = Object.keys(user);

// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
// console.log(keys);


// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);

// function calcSalary(salaries) {
//   let sum = 0;

//   for (const value of values) {
//     sum += value;
//       }

//   return sum;
  /*return console.log(sum);*/

// }

// console.log(calcSalary(salaries));
// console.log(calcSalary({}));
/*calcSalary({});*/


// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта


// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {

//   for (let stone of stones) {

//     if (stoneName === stone.name) {

//       console.log(stone);
//       stoneName = stone.price * stone.quantity;

//       return console.log(`общая стоимость: ${stoneName}`);
//     }
    
//    return console.log(`${stoneName} отсутствует`);
//   }
// }

// calcTotalPrice(stones, 'Изумруд');
// calcTotalPrice(stones, 'рубин');


// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  WITHDRAW: "withdraw",
  DEPOSIT: "deposit",
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
 createTransaction(amount, type) {
    return {
      amount,
      type,
      id: this.transactions.length,
    };
  }, 

  createTransaction(amount, type) {},

  // Генерація ID для транзакції
  generateId() {
    return (this.startId += 1);
  },


  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    // this = account
    return this.balance; // account.balance
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
// ```

console.log(account.getBalance());
account.deposit(450);
account.deposit(50);
account.withdraw(100);
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance());

console.log(account.getTransactionDetails(0));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

console.log(account);

// const string = "The brown fox jumps over lazy dog";

// function findLongestWord(string) {
//   const wordArray = string.split(" ");
//   let result = wordArray[0];
//   for (let word of wordArray) {
//     if (word.length >= result.length) {
//       result = word;
//     }
//   }
//   return result;
// }


//===================================
const bookShelf = {
  books: ["Последнее королевство"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // []
bookShelf.addBook("Мгла");
bookShelf.addBook("Страж снов");
console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
bookShelf.removeBook("Мгла");
console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]