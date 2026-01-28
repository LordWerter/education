define(function () {
    return function () {
/**
 * ====================================================================
 * Занятие 9
 * ====================================================================
 */
/**
 * Задачи для проверки НАЧАЛО ===>
 */
// Какие существуют способы создания объектов?
/*
const myObj1 = {
    name: 'Alex',
    lastName: 'Rudenko',
}; // литеральная
const myObj2 = new Object(); // ч/з экземпляр класса
const myObj3 = Object.create(null);
*/
// Какие существуют способы копирования объектов
/*
const myObj1Copy = JSON.parse(JSON.stringify(myObj1));
const myObj1Copy2 = Object.assign({}, myObj1);
const myObj1Copy3 = {...myObj1};

const response = {
    name: 'Alex',
    lastName: 'Rudenko',
    age: 43,
};

const { 
  name,
  lastName,
  age 
} = response;
 */
/*
const name = response.name;
const lastName = response.lastName;
const age = response.age;
*/
// Что такое функция-конструктор?
/*
function User(name, lastName, age) {
  this.fistName = name;
  this.lastName = lastName;
  this.fullName = `${name} ${lastName}`;
  this.age = age;
}

const alexander = new User(name, lastName, age);

console.log('alexander - ', alexander)

function Good(count, name) {
  this.name = name;
  this.count = count;
}

const pen = new Good(1, 'pen');
const pencil = new Good(1, 'pencil');
*/

/**
 * <=== КОНЕЦ Задачи для проверки
 */
// Прототипное наследование
/*
let animal = {
  eats: true,
  walk() {
    console.log("Animal walks...");
    // этот метод не будет использоваться в rabbit
  },
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

// rabbit.walk = function() {
// Операция записи не использует прототип
//  console.log("Rabbit! Bounce-bounce!");
//};

console.log('rabbit.eats - ', rabbit.eats); // true (**)
console.log('rabbit.jumps - ', rabbit.jumps); // true

rabbit.walk();
 */



// Объяснить, что есть __proto__



// this
/*
// методы animal
let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// модифицирует rabbit.isSleeping
rabbit.sleep();

console.log('rabbit.isSleeping - ', rabbit.isSleeping); // true
console.log('animal.isSleeping - ', animal.isSleeping); // undefined (нет такого свойства в прототипе)
 */

// obj.hasOwnProperty(key): он возвращает true, если у obj есть собственное




// Нарисовать цепочку прототипов




// Какие значения показываются в процессе выполнения кода?
/*
let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log('rabbit.jumps 1 - ', rabbit.jumps ); // ? (1)

delete rabbit.jumps;

console.log('rabbit.jumps 2 - ', rabbit.jumps ); // ? (2)

delete animal.jumps;

console.log('rabbit.jumps 3 - ', rabbit.jumps ); // ? (3)
 */

// Почему наедаются оба хомяка?
/*
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log('speedy.stomach - ', speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log('speedy.stomach - ', lazy.stomach); // apple

 */

// F.prototype
// Дать пример - игра
/*
const animal = {
    isAlive: true,
    canJump: false, // ОБЪЯСНИТЬ, ЧТО ФЛАГИ - ЭТО ЛЮТЫЙ КОСТЫЛЬ!
    canSwim: false,
    canСrawl: false, // умеет ползти
}

const mammal = { // млекопитающее
    __proto__: animal,
}

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");

console.log('rabbit.canJump - ', rabbit.canJump); // true

*/



    };
});
