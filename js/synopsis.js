function greet(name) {
  return `Добро пожаловать ${name}.`;
}

// Вызываем функцию greet и выводим результат в консоль
console.log(greet("Манго")); // Добро пожаловать Манго.

// Выводим функцию greet в консоль не вызывая её
console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

//==========================================
// Колбэк-функция
function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);

//=======================================
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк, вызов функции а внем сразу и вставлена колбэк ф-я
registerGuest("Манго", function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest("Поли", function notify(name) {
  console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});

//=======================================

function takeCall(name) {           // Колбэк-функция
    console.log(`Соединяем с ${name}, ожидайте...`);
    // Логика принятия звонка
}

function activateAnsweringMachine(name) {           // Колбэк-функция
    console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
    // Логика активации автоответчика
}

function leaveHoloMessage(name) {              // Колбэк-функция
    console.log(`Абонент ${name} недоступен, записываем голограмму.`);
    // Логика записи голограммы
}

function processCall(recipient, onAvailable, onNotAvailable) {    // Функция высшего порядка
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}
processCall("Манго", takeCall, activateAnsweringMachine);
processCall("Поли", takeCall, leaveHoloMessage);

//=======================================
// const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// // Перебирающий forEach
/* Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.*/
numbers.forEach(function (number, index, array) {
  console.log(`Индекс ${index}, значение ${number}, исходный массив  ${array}`);
});

//=======================================
const numbers = [5, 10, 15, 20, 25];

// Объявление функции
numbers.forEach(function (number, index) {
  console.log(`Объявление функции: Индекс ${index}, значение ${number}`);
});

// Анонимная стрелочная функция
numbers.forEach((number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
});

//=======================================
const buttonRef = document.querySelector('.js-button');
console.dir(buttonRef);

//=======================================
/*-------------замыкание-------------------*/
/*
* Функция результатом своей работы может возвращать другую функцию
* Возвращаемая функция будем иметь доступ ко всем локальным переменных, 
* хотя они находятся вне зовны видимости аргумента вызова этой функции
* это все называется ЗАМЫКАНИЕ
 */
const makeDish = function (dish) {
    const makeSheff = function (name) {
        console.log(`${dish} готовит повар ${name}`);
    }
    return makeSheff;
}

const cake = makeDish('cake');
 
cake('Lena');
cake('Olya');

const pizza = makeDish('capizzake');
pizza('Lena');
pizza('Olya');
pizza('Kolya');
//=======================================
/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;        /*  1. скрываем salary в функцию  salaryManagerFactory как отдельную переменную*/

    return {
        raise(amount) {
            if (amount > 1000) {
                return 'Ты офигел?';
            }

            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Текущая зарпалата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current());


const salaryManagerFactory = function (employeeName, baseSalary) {
    let salary = baseSalary;     /*  1. скрываем salary в функцию  salaryManagerFactory как отдельную переменную*/


    const changeBy = function (amount) {
        salary += amount;
    }
    return {                    /*  2. возвращает сюда обьект, в которой есть функция которуя ее меняет changeBy*/
        raise(amount) {         /*  3. эти функции замыкаються на переменной salary, на этой области видимости */
            changeBy(amount);
        },
        lower(amount) {        /*  3. эти функции замыкаються на переменной salary, на этой области видимости */
            changeBy(amount);
        },
        current () {           /*  3. эти функции замыкаються на переменной salary, на этой области видимости */
            return `Текущаяя зарплата ${employeeName} - ${salary}`;
        }
    };                        /*  4. таким образом мы не сможем получить доступ к salary во внешнем коде на прямую,
     только вызвать методы raise, lower, current  */
};

const salaryManager = salaryManagerFactory ('Mango', 5000);
console.dir(salaryManager.current());

// =====================================
const players2 = [
    {id: 'id-1', tag: 'Mango', timePlayed: 330, isOnline: true, points: 88},
    {id: 'id-2', tag: 'Poly', timePlayed: 450, isOnline: false, points: 60},
    {id: 'id-3', tag: 'Ajax', timePlayed: 230, isOnline: true, points: 10},
    {id: 'id-4', tag: 'Kiwi', timePlayed: 150, isOnline: true, points: 40},
];
// const playerIdToUpdate = 'playes-3';

// const playerIdToUpdate = 'playes-3';

const updatePlayers2 = players2.map (function (player) {
    if (player.id === playerIdToUpdate) {                   /*      */
        return {
            ...player,
            timePlayed: player.timePlayed + 50,
        };
    }
    return player;
});
console.table(updatePlayers2);

//--------

const updatePlayers = players.map ( player => {      /*  операция return здесь  та же операция присваивания     */
    return player.id === playerIdToUpdate                 /*     тернарник лучше использовать в операции присваивания или возврата */
        ? { ...player, timePlayed: player.timePlayed + 50 }
        : player
});
console.table(updatePlayers);

----- еще короче
const updatePlayers = players.map ( player =>       /*  операция return здесь  та же операция присваивания     */
     player.id === playerIdToUpdate                 /*     тернарник лучше использовать в операции присваивания или возврата */
        ? { ...player, timePlayed: player.timePlayed + 50 }
        : player
);
console.table(updatePlayers);

// ===============================

const tweets = [
    {id: '000', likes: 5, tags: ['.js', 'node.js']},
    {id: '001', likes: 2, tags: ['html', 'css']},
    {id: '002', likes: 17, tags: ['html', 'js', 'node.js']},
    {id: '003', likes: 8, tags: ['css', 'react']},
    {id: '004', likes: 0, tags: ['js', 'node.js', 'react.js']},
];

// const tags = tweets.map(t => t.tags).flat(); // такой способ влияет на производительность
const tags = tweets.map(t => t.tags.length); //такой способ считается хорошей практикой
console.log(tags);

// ================================

const tweets = [
    {id: '000', likes: 5, tags: ['.js', 'node.js']},
    {id: '001', likes: 2, tags: ['html', 'css']},
    {id: '002', likes: 17, tags: ['html', 'js', 'node.js']},
    {id: '003', likes: 8, tags: ['css', 'react']},
    {id: '004', likes: 0, tags: ['js', 'node.js', 'react.js']},
];

const allTags = tweets.reduce((allTags, tweet) => {
    // allTags.push(...tweet.tags); // на такой вариант распылению будут ругаться линтеры
    
    return [...allTags, ...tweet.tags];
}, [])
console.log(allTags);

// ================================

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);
console.log(tags);

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};




// Начальное значение аккумулятора это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

// ==========================================

const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
];
console.log(students);

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.table(inAscendingScoreOrder);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.table(inDescendingScoreOrder);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
console.table(inAlphabeticalOrder);

// =====================================
// const players = [
//     {id: 'id-1', tag: 'Mango', timePlayed: 330, isOnline: true, points: 88},
//     {id: 'id-2', tag: 'Poly', timePlayed: 450, isOnline: false, points: 60},
//     {id: 'id-3', tag: 'Ajax', timePlayed: 230, isOnline: true, points: 10},
//     {id: 'id-4', tag: 'Kiwi', timePlayed: 150, isOnline: true, points: 40},
// ];

// const byBestPlayers = [...players].sort((bad, best) => best.points - bad.points);
// console.table(byBestPlayers);

// //отсортируем по имеми, чтобы имена были в альфавитном порядке

// const byNameSort = [...players].sort((first, next) => {
//     if (first.tag[0] > next.tag[0]) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.table(byNameSort);

