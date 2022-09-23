//================================================================================

/*
* Как метод объекта, но объявлена как внешняя функция
* в контексте объекта
*/

const showTag = function () {
  console.log('showTag --> this', this); //showTag --> this undefined
  console.log('showTag --> this.tag', this.tag); // Cannot read properties of undefined (reading 'tag')
}
// showTag ();

const userin = {
  tag: 'Mango',
}

// Записываем ссылку на функцию в свойство объекта
// Обратите внимание, что это не вызов - нет ()
userin.showUserTag = showTag;
// console.log('userin: ', userin);

// userin.showUserTag(); /*userin:  { tag: 'Mango', showUserTag: [Function: showTag] }
                        // showTag --> this { tag: 'Mango', showUserTag: [Function: showTag] }
                        // showTag --> this.tag Mango*/


 /*
 * this - это как arguments, 
 *        как локальная переменная,
 *        которая есть только внутри ф-ции 
 * */                        
//================================================================================
const counter = {
    value: 0,
    increment (value) {
        console.log('increment --> this', this);
        this.value += value;
    },
    decrement (value) {
        console.log('decrement --> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
  operation(value);
}

// updateCounter(10, counter.increment); //undefined решить можно это добавлением метода bind
// updateCounter(15, counter.decrement);
updateCounter(10, counter.increment.bind(counter));    /*в operation передаем  КОПИЮ инкремента которая навсегда привязана   */
updateCounter(5, counter.decrement.bind(counter));    /*контекстом обьекту counter */
console.log(counter);
 /*
 * при передачи метода обьекта как callback - контекст не сохраняеться 
 *   мы передаем в этом примере ссылку на какую-то рандомную ф-цию
 *   в памяти, которая ничего не знает про обьект который хранит на нее ссилку
 * */
