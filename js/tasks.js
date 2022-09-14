/**
  |============================
  | 1
  |============================
*/
function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;

console.log(result);
console.log(pointer);
/**
  |============================
  | 2
  |============================
*/
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza));
console.log(makeMessage("Ultracheese", deliverPizza));
/**
  |============================
  | 3
  |============================
*/
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});
/**
  |============================
  | 4
  |============================
*/
 const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName,makePizza, onOrderError ) {
      for (const pizza of this.pizzas) {
                if (this.pizzas.includes(pizzaName)) {
                    makePizza(pizzaName);
                    return;
                } else {
                         return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
                  }
                }
            },
        };
console.log(pizzaPalace.pizzas);
           
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
}

// Callback for onError
function onOrderError(error) {
  return console.log(`Error! ${error}`  );
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

/**
  |============================
  | 5
  |============================
// */
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

                        /*         1й способ             */
  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }
                        /*         2й способ             */
orderedItems.forEach(element => {
    totalPrice += element;
});
                    /*         3й способ             */
     orderedItems.forEach((function (number) {
        totalPrice += number;
     }));

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
/**
  |============================
  | 6
 * |============================
*/
function filterArray(numbers, value) {
  const filteredNumbers = [];

                        /*         1й способ             */
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }
                         /*         2й способ             */   
   numbers.forEach(element => {
    if (element > value) {
      filteredNumbers.push(element);
    }
  });
                        /*         3й способ             */    
    numbers.forEach(function (element, index) {
        if (element > value) {
            // filteredNumbers.push(element); //#1 вариант
            filteredNumbers = [...filteredNumbers, element]; //#2 вариант
        }
    });

  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 20));
/**
  |============================
  | 7
  |============================
// */
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }
    
    firstArray.forEach(function (element, index) {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
       });
    
//     firstArray.forEach(element => {
// if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

 
    return commonElements;

    
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
/**
  |============================
  | 8
  |============================
*/
// function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
}

/*   arrow  function   */
const calculateTotalPrice = (quantity, pricePerItem) => {
return quantity * pricePerItem;
}


console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
/**
  |============================
  | 9
  |============================
*/
// /*   неявный возврат (implicit return)   */
const calculateTotalPrice = (quantity, pricePerItem) =>
quantity * pricePerItem;



console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
/**
  |============================
  | 10
  |============================
*/
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
/**
  |============================
  | 11
  |============================
*/
/*        было        */
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

/*        стало       */
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number)  => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 4) );
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 20));
/**
  |============================
  | 13
  |============================
*/
/*        было        */
function changeEven(numbers, value) {

 for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
}

/*        стало       */
function changeEven(numbers, value) {
  let newArray = [];

  numbers.forEach(element => {
    if (element % 2 === 0) {
      // newArray.push(element + value);
      newArray = [...newArray, element + value];
    }
    // newArray.push(element);
    newArray = [...newArray, element];
  });

  return newArray;
};
 
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
/**
  |============================
  | 14
  |============================
*/
/*        было        */
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths);
/**
  |============================
  | 15
  |============================
*/
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];


const titles = books.map(book => book.title);
console.log(titles);

/**
  |============================
  | 17
  |============================
*/

const usersArr = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// -------- #1 solution way
const getUserNames = users => {  /* здесь getUserNames это функция, потому нужен return   */
    return users.map(user => user.name);
  };
console.log(getUserNames(usersArr));   /* и вызов с () как в console.log(getUserNames())*/
  
// -------- #2 solution way
const getUserNames = usersArr.map(user => user.name);   /* здесь getUserNames это переменная, потому мы ей присваиваем новое значение   */
 console.log(getUserNames);

/**
  |============================
  | 18
  |============================
*/
const getUserEmails = users => {
    
  return users.map(user => user.email);
};
console.log(getUserEmails(usersArr));
/**
  |============================
  | 19
  |============================
*/
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];


const evenNumbers = numbers.filter( number => number % 2 === 0 );
const oddNumbers = numbers.filter( number => number % 2 !== 0 );
console.log(evenNumbers);
console.log(oddNumbers);
/**
  |============================
  | 20
  |============================
*/
const books2 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];

const allGenres = books2.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genres, index, books2) => books2.indexOf(genres) === index);

console.log(allGenres);
console.log(uniqueGenres);

/**
  |============================
  | 21
  |============================
*/
const books3 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";


const topRatedBooks = books3.filter(({ rating }) => rating >= MIN_RATING).map(({rating}) => rating); /*деструктуризируем свойства объекта ({rating})*/
console.log(topRatedBooks);
  /*Что такое Деструктурирующее присваивание?
  *  Деструктурирующее присваивание – это специальный синтаксис,
  * который позволяет нам «распаковать» массивы или объекты в несколько переменных, 
  * так как иногда они более удобны.
 */
const booksByAuthor = books3.filter(({ author }) => author === AUTHOR).map(({author}) => author);

console.log(booksByAuthor);
/**
  |============================
  | 23
  |============================
*/
const users2 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]
const getUsersWithAge = (users2, minAge, maxAge) => {
 return users2.filter(user => user.age > minAge && user.age < maxAge).map(user => user.age);

};
console.log(getUsersWithAge(users2, 20, 40));
/**
  |============================
  | 24
  |============================
*/
const getUsersWithFriend = (users2, friendName) => {
  return users2.filter(user => user.friends.includes(friendName)).map(friends => friends.name);
};
console.log(getUsersWithFriend(users2, "Briana Decker"));
console.log(getUsersWithFriend(users2, "Goldie Gentry"));
/**
  |============================
  | 25
  |============================
*/
const getFriends = (users2) => {
  return users2.flatMap( user  => user.friends).filter((friends, index, users2) => users2.indexOf(friends) === index);
  // return users2.map(user => user.friends).filter((friends, index, user) => user.indexOf(friends) === index);
  // .flatMap(friends => friends.name)
};
console.log(getFriends(users2));
/**
  |============================
  | 26
  |============================
*/
const getActiveUsers = (users2) => {
  return users2.filter(user => user.isActive === true).map(isActive => isActive.name);
};
console.log(getActiveUsers(users2));
/**
  |============================
  | 28
  |============================
*/
const books4 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTOR = 'Robert Sheckley';

const bookWithTitle = books4.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books4.find((book) => book.author === AUTOR);

console.log(bookWithTitle);
console.log(bookByAuthor);

/**
  |============================
  | 29
  |============================
*/
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
const getUserWithEmail = (users, email) => {
 return users.find((user) => user.email === email);  
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com").name);

/**
  |============================
  | 30
  |============================
*/
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
console.log(eachElementInFirstIsEven);

const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);
console.log(eachElementInFirstIsOdd);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);;
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);;
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);
/**
  |============================
  | 31
  |============================
*/
const isEveryUserActive = (users) => {
  // return users.every((isActive) => isActive === true);
    return users.every((users) => users.isActive === true);
}
console.log(isEveryUserActive(users));
/**
  |============================
  | 32
  |============================
*/  
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];


const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);
console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);

const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);
/**
  |============================
  | 33
  |============================
*/
const isAnyUserActive = users => {
   return users.some(user => user.isActive === true);
};
console.log(isAnyUserActive(users));
/**
  |============================
  | 34
  |============================
*/
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]


const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);
console.log(totalPlayTime);
const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime);
/**
  |============================
  | 35
  |============================
*/
const players2 = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players2.reduce((totalTime, player) => {
  return totalTime + player.playtime / player.gamesPlayed
}, 0);
console.log(totalAveragePlaytimePerGame);     /*Значение переменной totalAveragePlaytimePerGame это число 1023 */
/**
  |============================
  | 36
  |============================
*/
const users3 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
const calculateTotalBalance = users3 => {
  return users3.reduce((totalBalance, user) => {
    return totalBalance + user.balance
  }, 0);
};

console.log(calculateTotalBalance(users3));      /*Вызов функции с указанным массивом пользователей*/


/**
  |============================
  | 37
  |============================
*/
const getTotalFriendCount = users3 => {
   return users3.reduce((totalFriends, user) => {
     return totalFriends + user.friends.length ;
   }, 0);
};
console.log(getTotalFriendCount(users3));
/**
  |============================
  | 38
  |============================
*/
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];


const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();
console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);
/**
  |============================
  | 39
  |============================
*/
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

/*получилась отсортированная по возрастанию копия массива*/
const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b); 

 /*получилась отсортированная по убыванию копия массива*/
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);  

 console.log(ascendingReleaseDates);
console.log(ascendingReleaseDates);
 /**
   |============================
   | 40
   |============================
 */
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);
/**
  |============================
  | 41
  |============================
*/
const books4 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const sortedByAuthorName = [...books4]
  .sort((a, b) => a.author.localeCompare(b.author))
  .map(book => book.author);                        /*map собирает результат sort в массив авторов */

const sortedByReversedAuthorName = [...books4]
  .sort((a, b) => b.author.localeCompare(a.author))
  .map(book => book.author); 

const sortedByAscendingRating = [...books4]
  .sort((a, b) => a.rating - b.rating)
  .map(book => book.rating);                      /*map собирает результат sort в массив рейтингов */

const sortedByDescentingRating = [...books4]
  .sort((a, b) => b.rating - a.rating)
  .map(book => book.rating);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);
/**
  |============================
  | 42
  |============================
*/
const sortByAscendingBalance = users5 => {  /* это функция, потому ее можна обьявлять до переменной. Ф-ция - хоститься*/
  return [...users5].
    sort((a, b) => a.balance - b.balance).
    map(user => user.balance);
};

const users5 =[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

console.log(sortByAscendingBalance(users5));
/**
  |============================
  | 43
  |============================
*/
const sortByDescendingFriendCount = users5 => {
  return [...users5]
    .sort((a, b) => b.friends.length - a.friends.length)
    .flatMap(user => user.friends);                   /* разглаживаем массив до 1й вложености */
};
console.log(sortByDescendingFriendCount(users5));
/**
  |============================
  | 44
  |============================
*/
const sortByName = users5 => {
  return [...users5].sort((a, b) => a.name.localeCompare(b.name))
  .map(user => user.name);  
};
console.log(sortByName(users5));
/**
  |============================
  | 45
  |============================
*/
const books5 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
 
/*1й способ*/
const names = [...books5].filter(book => book.rating >= MIN_BOOK_RATING)
  .sort((a, b) => a.author.localeCompare(b.author))
  .map(book => book.author);

/*2й способ*/ 
  // const names = [...books5].filter(book => book.rating >= MIN_BOOK_RATING)
  // .map(book => book.author)
  // .sort((a, b) => a.localeCompare(b));

console.log(names);
  /**
    |============================
    | 46
    |============================
  */
const getNamesSortedByFriendCount = users => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};
console.log(getNamesSortedByFriendCount(users));
/**
  |============================
  | 47
  |============================
*/
const getSortedFriends = users => {
   return [...users]
        .flatMap(user => user.friends)
        .filter((friend, index, array) =>   array.indexOf(friend) === index )
        .sort((a, b) =>  a.localeCompare(b));
};
console.log(getSortedFriends(users));
/**
  |============================
  | 48
  |============================
*/
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter((users) => users.gender === gender)
  .reduce((totalBalance, user) => totalBalance + user.balance, 0)
};
console.log(getTotalBalanceByGender(users, "female"));
console.log(getTotalBalanceByGender(users, "male"));