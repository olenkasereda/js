/**
  |============================
  | 1
  |============================
*/
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],

//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },

// };

// pizzaPalace.order("Big Mike")
//     console.log(pizzaPalace.order("Smoked"));
//     console.log(pizzaPalace.order("Four meats"));
//     console.log(pizzaPalace.order("Big Mike"));

/**
  |============================
  | 2
  |============================
*/
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
 
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
  
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
/**
  |============================
  | 3
  |============================
*/
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
 
//   getOrdersLog() {
//     return this.order        /* то же самое что historyService.order*/
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },

// };

// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));
/**
  |============================
  | 4
  |============================
*/
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// /*Метод Object.create(obj) создаёт и возвращает новый объект,
//  связывая его с объектом obj.
// */
// child.name = "Jason";
// child.age = 27;
/**
  |============================
  | 5
  |============================
*/
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parents = Object.create(ancestor);

// parents.name = "Stacey";
// parents.surname = "Moore";
// parents.age = 54;

// const childs = Object.create(parents);
// childs.name = "Jason";
// childs.age = 27;

// console.log(ancestor.isPrototypeOf("parent"));
// console.log(parents.hasOwnProperty("heritage"));
// console.log(parents.surname);
// console.log(childs.heritage);
/**
  |============================
  | 6
  |============================
// */
// class Car {
  
// }
// console.log(new Car());
/**
  |============================
  | 7
  |============================
*/
// class Car {
 
// constructor(brand, model, price){
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// }

// console.log(new Car("Audi", "Q3", 36000)); // Car {brand: 'Audi', model: 'Q3', price: 36000}
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan", "Murano", 31700));
/**
  |============================
  | 8
  |============================
*/
// class Car {
  
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); //Car {brand: 'Audi', model: 'Q3', price: 36000}
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 })); //Car {brand: 'BMW', model: 'X5', price: 58900}
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
/**
  |============================
  | 9
  |============================
*/
// class Car {
//   constructor({brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice(){
//     return this.price;
//   }
//   changePrice(newPrice){
//       this.price = newPrice;
//       return this.price;
//   }
// }
//  const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 }); //Car {brand: 'Audi', model: 'Q3', price: 36000}
// console.log(audi.getPrice()); //36000
// console.log(audi.changePrice(37000));
/**
  |============================
  | 10
  |============================
*/
// class Storage{
//       constructor (items){
//           this.items = items;   /**/
//       }
//     getItems() {
//         return this.items;   /**/
//     }
//     addItem(newItem) {
//         this.items.push(newItem);     /*  или this.items = [...this.items, newItem]; */
//     }

//     removeItem(itemToRemove) {
//     for (let i = 0; i < this.items.length; i += 1) {   /* перебираем по одному учитывая индекс*/
//         const item = this.items[i];                    /* присвоим переменную*/
//         if (itemToRemove === item) {                   /* проверим на наличие, совпадение*/
//              this.items.splice(i, 1);                  /* удаляем*/
//  }
// // или 2й метод
// //     removeItem(itemToRemove){
// //         const idx = this.items.indexOf(itemToRemove);
// //         this.items.splice(idx, 1)
// //     }
//         }
//     }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
/**
  |============================
  | 11
  |============================
*/
// class StringBuilder{
//     constructor(initialValue) {
//         this.value = initialValue;
//     }

//     getValue(){
//        return this.value;
//     }

//     padEnd(str) {
//         //  this.value = [...this.value, str];   /*так не подходит, нуден НЕ масив*/
//           this.value = this.value + str;
//     }

//     padStart(str) {
//          this.value =  str + this.value;    /*можно использовать оператор + для добавления нескольких строк вместе*/
//     }

//     padBoth(str) {
//          this.value =  str + this.value + str; /*источник: https://devdocs.io/javascript/global_objects/string*/
//     }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
/**
  |============================
  | 12
  |============================
*/
// class Car {

// #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand(){
//     return  this.#brand;
//   }

//   changeBrand(newBrand){
//       this.#brand = newBrand;
//       return this.#brand;    /* без return не выведет обновление*/
//   }

// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));
// const Nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 })
// Nissan.changeBrand("Honda");
// console.log(Nissan.getBrand());
/**
  |============================
  | 13
  |============================
*/
// class Storage {
// #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
/**
  |============================
  | 14
  |============================
// */
// class StringBuilder {
// #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
/**
  |============================
  | 15
  |============================
*/
// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }

// }
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 }); // { model: "Murano", price: 31700 }
// console.log(nissan);
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
/**
  |============================
  | 16
  |============================
*/
// class Car {
//  static MAX_PRICE = 50000;        //https://devdocs.io/javascript/classes/class_static_initialization_blocks

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//         if(newPrice > Car.MAX_PRICE){
//           return this.#price;
//         }
//       this.#price = newPrice;
//       return this.#price;
//   }

// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
/**
  |============================
  | 17
  |============================
*/
// class Car {
//   static #MAX_PRICE = 50000;

//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return "Error! Price exceeds the maximum";
//         }
//         return "Success! Price is within acceptable limits";
// }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// console.log(bmw.price);
/**
  |============================
  | 18
  |============================
*/
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" } 
/*публичное статическое свойство 
AccessLevel(уровень доступа), значение которого это объект { }* /
// }
// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);
/**
  |============================
  | 19
  |============================
// */
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
// constructor ({email, accessLevel}){
//   super(email);
//     this.accessLevel = accessLevel;
// }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
/**
  |============================
  | 20
  |============================
*/
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {

    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
        this.blacklistedEmails = [];
    }
    blacklist(email) {
        return this.blacklistedEmails.push(email);
    }
    isBlacklisted(email) {
        return this.blacklistedEmails.includes(email);
  
    }
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
