define(function () {
    return function () {
/**
 * ====================================================================
 * Занятие 8
 * ====================================================================
 */
/**
 * Задачи для проверки НАЧАЛО ===>
 */
// Как объявляются объекты?
/*
const myObj1 = {
    name: 'Alex',
    lastName: 'Rudenko',
}; // литеральная
const myObj2 = new Object(); // ч/з экземпляр класса
const myObj3 = Object.create(null);
*/
// Как обратиться к свойству объекта?
/*
console.log(myObj1.name);
console.log(myObj1['lastName']);

const propName = 'lastName';

console.log(myObj1[propName]);

console.log('myObj1 - ', JSON.stringify(myObj1));
*/
// Как создать новое свойство
// myObj1.age = 10;
// console.log('myObj1 - ', JSON.stringify(myObj1));

// дополни знания объявлением
// свойства ч/з Object.defineProperty
/*
const user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

console.log('user.name - ', user.name);
*/
// Какие способы клонирования объектов существуют?
/*
const bankUser = {
    firstName: 'stranger',
    lastName: '',
    age: 100,
    permissions: [1,0,0,0,0,0],
};

const alexData = {...bankUser}; // деструктивное присваивание
const tanyaData = Object.assign({}, bankUser);
tanyaData.permissions[1] = 1;

console.log('tanyaData.permissions - ', tanyaData.permissions);
console.log('bankUser.permissions - ', bankUser.permissions);

const vasilisaData = JSON.parse(JSON.stringify(bankUser));
vasilisaData.permissions[2] = 1;

console.log('vasilisaData.permissions - ', vasilisaData.permissions);
console.log('bankUser.permissions - ', bankUser.permissions);
*/

// => дополни знания новым методом
/*
const mushrooms1 = {
  amanita: ["muscaria", "virosa"],
};

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.amanita.push("pantherina");
mushrooms1.amanita.pop();

console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
console.log(mushrooms1.amanita); // ["muscaria"]
 */
// Что выведет этот код? Очень опционально)))
/*
const arr = [1,2,3,4,5];
const result = arr.map(x => x * 2).filter(x => x > 5);
console.log('result - ', result);
console.log('arr - ', arr);
 */
/**
 * <=== КОНЕЦ Задачи для проверки
 */
// Сравнение объектов
/*
const obj1 = {
    name: '',
};

const obj2 = {
    name: '',
};

const obj3 = obj1;

console.log('obj1 == obj3 - ', obj1 == obj3);

const obj1Str = JSON.stringify(obj1);
const obj2Str = JSON.stringify(obj2);

console.log('obj1Str - ', obj1Str);

console.log('obj1 == obj2 - ', obj1Str === obj2Str);
*/
// методы объекта
/*
const user1 = {
  sayHi: function() { // полная форма записи
    alert("Привет user1");
  }
};
user1.sayHi();

const user2 = {
  sayHi() { // то же самое, что и "sayHi: function(){...}"
    alert("Привет user2");
  }
};
user2.sayHi();
 */


// Значение this
/* 
let user1 = {
  name: "John",
  age: 30,
};

let user2 = {
  name: "Alex",
  age: 43,
};

function sayHi() {
    // "this" - это "текущий объект".
    alert(this.name);
}

user1.sayHi = sayHi;


// user1.sayHi(); // John

user1.sayHi.call(user2);
 */
// «this» не является фиксированным
/*

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;

// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)
 */
// Пример 1. Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?
/*
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

delete window.name;

console.log( user.ref );

console.log( user.ref.name ); // Каким будет результат?
*/


// Задача для самостоятельной реализации
/*
Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.



const calculator = {
   read() {
    this.a = +prompt('insert a value');
    this.b = +prompt('insert b value');
   },
   sum() {
    if (!this.a || !this.b) return;
    // if (!this.a || !this.b) throw new Error('no values for sum');

    const output = this.a + this.b;

    console.log('sum output - ', output);

    return output;
   },
   mul() {

   },
}
calculator.sum();

calculator.read();

calculator.sum();
// calculator.mul();
 */

// Функция-конструктор
/*
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

class User1 {
    constructor(name) {
        this.name = name;
        this.isAdmin = false;
    }
}

let user = new User("Jack");
let user1 = new User1("Jack");

console.log('user.name - ', user.name); // Jack
console.log('user.isAdmin - ', user.isAdmin); // false

*/

// Проверка на вызов в режиме конструктора: new.target
/*
function User() {
  alert(new.target);
}

// без "new":
User(); // undefined

// с "new":
new User(); // function User { ... }
 */

// Создание методов в конструкторе
/*
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // Меня зовут: John
 */

// Наследование
/*
function House(ctFloors, ctRooms, isBasement){
   this.floors = ctFloors; // количество этажей
   this.rooms = ctRooms; // количество комнат
   this.basement = isBasement; // наличие подвала
}

function ModernHouse(ctFloors, ctRooms, isBasement, isAttic, ctVeranda) {
   House.apply(this, arguments); //вызываем конструктор House в контексте текущего конструктора, ModernHouse
   this.attic = isAttic;
   this.veranda = ctVeranda;
}
 */

// Инкапсуляция
// Инкапсуляция — если кратко, приватизация данных, то есть отделение 
// от общедоступных данных в определенную оболочку, доступ к которой 
// происходит через общедоступные функции.
/*
function Database() {
   let _rows=20;
   let _cols = 20;
  
   this.getTable = function() { //задаём геттер
      console.log(this);
      return _rows + ' : ' + _cols; // поскольку она находиться в той же области видимости, что и переменные _rows и _cols, то доступ разрешен.
   }
   
   this.setTable = function(row, col) { //задаём сеттер
      _rows = row; // аналогичная ситуация с областью видимости.
      _cols = col;
   }

}

var db = new Database(); // создание объекта класса Database
console.log(db._rows + ' : ' + db._cols); // "undefined : undefined"
console.log(db.getTable());// "20 : 20"

db.setTable(35, 26); // изменяем значения свойств
console.log(db.getTable());// "35 : 26"
 */
    };
});