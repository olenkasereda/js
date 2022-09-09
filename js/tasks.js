// const x1 = [1, 2, 4, 5]
// console.log(typeof [1, 2, 4]);
// console.log(x1);
/**
  |============================
  | 4
  |============================
*/
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1]; // обратить вниманте

/**
  |============================
  | 7
  |============================
*/
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// console.log(apartment);

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {                 // // добавляем обьект в обьект
//     country: "Jamaica",
//     city: "Kingston",
// }

// console.log(apartment);

/**
  |============================
  | 9
  |============================
*/
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
 
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
 
// };

// console.log(credentials);

/**
  |============================
  | 10
  |============================
*/

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   // Ключ
// keys.push(key);

//  values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

/**
  |============================
  | 11
  |============================
*/
// const keys = [];
// const values = [];

// const advert = {
//   service: "apt",
// };

// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//                                        /* метод hasOwnProperty(key), который возвращает true или false */
// if (apartment.hasOwnProperty(key)) {  /* эта строка проверяет есть в объекте собственное свойство или нет */
//   keys.push(key);
//   values.push(apartment[key]);
// }

// }

// console.log(keys);
// console.log(values);

/**
  |============================
  | 12
  |============================
*/
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
                                     
// if (object.hasOwnProperty(key)) {
//     propCount += 1;
// }

// }
//   // Change code above this line
//   return console.log(propCount);
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
/**
  |============================
  | 13
  |============================
*/
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log(values);
// console.log(keys);

/**
  |============================
  | 14
  |============================
*/ //было
// function countProps(object) {

//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
 
// }

/*стало*/
// function countProps(object) {

// let propCount = 0;

// const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
// }
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({}));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
/**
  |============================
  | 15
  |============================
*/
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

/**
  |============================
  | 16
  |============================
*/
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
  
//     const salary = Object.values(salaries);
//     for (const salarie of salary) {
// totalSalary += salarie
//     }

//   return totalSalary;
//     // return salary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

/**
  |============================
  | 17
  |============================
*/
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {

//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
//     console.log(hexColors);
//     console.log(rgbColors);
/**
  |============================
  | 18
  |============================
// */
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
    
//     for (const product of products) {
//         if (productName === product.name) {  /* проверяем наличия ЗНАЧЕНИЯ (value) в ключе (key) */
        
//             return console.log(product.price);
//         }
//     }
//     return console.log(null);
// }
 
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// // console.log(getProductPrice("Droid"));
// getProductPrice("Engine");
/**
  |============================
  | 19
  |============================
*/
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {
//    let totalPrice = 0;
//     let valueArr = [];
//     for (const product of products) {
//     if (product.hasOwnProperty(propName)) { // проверяет наличие ключа  or проверку на собственное СВОЙСТВО
        
//              valueArr.push(product[propName]); /*  Object.values(propName) не подходит, потому что
//              возвращает  МАССИВ ключей, а нам нужно запушить конкретное значение */
//         }
// }

// return console.log(valueArr);
// }

// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");
/**
  |============================
  | 20
  |============================
*/
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//     let totalPrice = 0;
    
//     for (const product of products) {
//         if (productName === product.name) {        /* проверяем на наличиие ЗНАЧЕНИЯ */
//              totalPrice = product.price * product.quantity;
             
//     }
// }
//     return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar") );
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip") );
/**
  |============================
  | 21
  |============================
*/
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// /*
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// */
// const {today, tomorrow, yesterday } = highTemperatures; /*Деструктуризация позволяет «распаковать» значения свойств объекта в локальные переменные. */
//                                                         /* Порядок объявления переменных в фигурных скобках не важен.*/

// const meanTemperature = (yesterday + today + tomorrow) / 3;
/**
  |============================
  | 22
  |============================
*/
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // // было

// /* const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon; */

// //  // стало
// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
/**
  |============================
  | 23
  |============================
*/
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // // // было
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // //  // стало
// const { yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;


// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
/**
  |============================
  | 24
  |============================
*/
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
/**
  |============================
  | 25
  |============================
*/
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",},
//     tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//   icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;
/**
  |============================
  | 26
  |============================
*/
// // // // было
// function calculateMeanTemperature(forecast) {
//     const todayLow = forecast.today.low;
//     const todayHigh = forecast.today.high;
//     const tomorrowLow = forecast.tomorrow.low;
//     const tomorrowHigh = forecast.tomorrow.high;

//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
    
//     // // //  // стало
//     function calculateMeanTemperature(forecast) {
//         const { today: { low: todayLow, high: todayHigh },
//             tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;


//         return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//     }
// }
/**
  |============================
  | 27
  |============================
*/
// const scores = [89, 64, 42, 17, 93, 51, 26];

//     const bestScore = Math.max(...scores);
//     const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);
/**
  |============================
  | 28
  |============================
*/
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
/**
  |============================
  | 29
  |============================
*/
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);
/**
  |============================
  | 30
  |============================
*/
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
 
//   /* const dataCopy = { completed, category, priority};
//     return { ...dataCopy, ...data }; */

//  return {completed, category, priority, ...data};
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ text: "Buy bread" }));
/**
  |============================
  | 31
  |============================
*/
// function add(...args) {   /* благодаря ... (rest) принимает любое количество произвольное количество аргументов*/
//     let sum = 0 ;
//   for (let arg of args) {
//     sum += arg;
//   }
//   return sum;
  
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(74, 11, 62, 46, 12, 36));
/**
  |============================
  | 32
  |============================
*/

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if ( firstNumber < arg)
//     total += arg;
//   }

//   return total;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
/**
  |============================
  | 33
  |============================
*/

// function findMatches([...arrey], ...args) {
//   const matches = [];
// for (let arg of args) {                    /* перебираем по одному*/
//   if ([...arrey].includes(arg))            /* проверяем есть ли в масиве елемент перебора, есть ли совпадения*/
//   matches.push(arg);                       /* условие иф выполеяеться, тогда пушим в новый массив*/
// }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
/**
  |============================
  | 34
  |============================
*/
// const bookShelf = {
 
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName){
//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`;
//   },
  
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
/**
  |============================
  | 35
  |============================
*/
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
    
// const bookIndex = this.books.indexOf(oldName);
//  this.books.splice(bookIndex, 1, newName);

//       return (bookShelf.books);
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
/**
  |============================
  | 36
  |============================
*/
// const atTheOldToad = {
//     potions: [],
// };
/**
  |============================
  | 37
  |============================
*/
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
  
// getPotions(){
//   return this.potions;
// }
// };

// console.log(atTheOldToad.getPotions());
/**
  |============================
  | 38
  |============================
*/
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
   
//  this.potions.push(potionName);
//     /*return this.potions;*/
//   },
// };
// /* console.log(atTheOldToad.addPotion("Invisibility"));
//  console.log(atTheOldToad.addPotion("Power potion"));*/
//  atTheOldToad.addPotion("Invisibility");                      /* вызиваем функцию*/
// atTheOldToad.addPotion("Power potion");

// console.log(atTheOldToad.potions);                          /* выводим в консоль конечный результат*/
/**
  |============================
  | 39
  |============================
*/
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
    
// const indexPotion = this.potions.indexOf(potionName);
// this.potions.splice(indexPotion,1);

//   },
// };
// atTheOldToad.removePotion("Dragon breath")    /* вызиваем функцию*/
// console.log(atTheOldToad.potions);            /* выводим в консоль результат*/
// atTheOldToad.removePotion("Speed potion")
// console.log(atTheOldToad.potions);
/**
  |============================
  | 40
  |============================
*/
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
  
// const indexPotion = this.potions.indexOf(oldName);
// this.potions.splice(indexPotion,1,newName);
   
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.potions);
/**
  |============================
  | 41
  |============================
*/
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
        for (const potion of this.potions){                                /*     берем перебираем с масива обьектов по одному обьекту     */
            if (potion.name === newPotion.name) {                           /*     в этом одном обьете смотрим на свойство name и сравниваем со свойством name в newPotion  */
            return console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);    /*     если есть такое имя выводим сообщение    */
            }
        }

        this.potions.push(newPotion);        /*     если такого имени - нет, пушим в масив обьектов    */
    },
  


 removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1){      /*     берем перебираем с масива обьектов по одному обьекту со счетчиком, нам нужен индекс   */
            const potion = this.potions[i];                   /*     в переменную  potion  помещаем обьект итерации с індексом   */

            if (potion.name === potionName) {                /*   проверяем есть ли совойсто с именем как в параметре функции    */
                return this.potions.splice(i, 1);             /*     если есть, то  splice - удаляем: і -тий елемен 1шт  */
            }
        }

        return console.log(`Potion ${potionName} is not in inventory!`);   /*    если совойсто с таким именем нет, ввыводим сообщение    */
    },

  
  
  updatePotionName(oldName, newName) {
        for (let i = 0; i < this.potions.length; i += 1){
            const potion = this.potions[i];

            if (potion.name === oldName) {

                return potion.name = newName;
            }
        }

        return console.log(`Potion ${oldName} is not in inventory!`);
    },
};

atTheOldToad.getPotions();
console.log(atTheOldToad.potions);

atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
console.log(atTheOldToad.potions);

atTheOldToad.removePotion("Dragon breath");
atTheOldToad.removePotion("Speed potion");
console.log(atTheOldToad.potions);

 atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
atTheOldToad.getPotions();
console.log(atTheOldToad.potions);