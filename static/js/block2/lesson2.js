define(function () {
    return function () {
/**
 * Занятие 2
 * Задачи для проверки НАЧАЛО ===>
 */
// 'use strict';
// a = 2; // будет ли такое объявление работать?

// var aa = 2;

// const bb = 2;
// let cc = 2;

// console.log(a);

// const b = '6';
// const c = '3';

// const result1 = b / c; // '6' ==> 6   '3' ==> 3
// что именно выведет console.log?
// console.log('typeof result1 is equal - ', typeof result1);
// что именно выведет console.log?
// console.log('result1 is equal - ', result1);

// const result2 = b + c;
// что именно выведет console.log?
// console.log('typeof result2 is equal - ', typeof result2); // string
// что именно выведет console.log?
// console.log('result2 is equal - ', result2); // 63

// let someResult = b / 0;
// что именно выведет console.log?
// console.log('typeof someResult is equal - ', typeof someResult); // number
// что именно выведет console.log?
// console.log('someResult is equal - ', someResult); // Infinity

// userData должен быть объектом. Как объявить объект?
// const userData = {}; // литеральная форма
// const itemData = new Object(); // экземпляр(инстанс) класса

// Объявление массива
// const carsData = [];
// const newCarsData = new Array();


// const someNum = Number.isInteger(2.543342);
// Integer - целое число => 1 2 3
// Float - число с плавающей точкой => 2.534523423423
// console.log(parseInt('2.3'));
// console.log(parseFloat('2.3'));
// что именно выведет console.log?
// console.log('someNum is integer - ', someNum);

// console.log("   123   ", Number("   123   ") ); // 123
// console.log("123z", Number("123z") ); // NaN
// console.log("true", Number(true) ); // 1
// console.log("false", Number(false) ); // 0

/*
typeof undefined === 'undefined'

typeof true === 'boolean'
typeof false === 'boolean'

typeof 42 === 'number'
typeof 4.2 === 'number'
typeof -42 === 'number'
typeof Infinity === 'number'
typeof -Infinity === 'number'

typeof '' === 'string'
typeof 'string' === 'string'
typeof 'number' === 'string'
typeof 'boolean' === 'string'

typeof Symbol() === 'symbol'

typeof 9007199254740991n === 'bigint'
typeof BigInt(9007199254740991) === 'bigint'

typeof null === 'object'
*/
/**
 * <=== КОНЕЦ Задачи для проверки
 */

/**
 * 1. Базовые операторы
 */
// операнд - это
// Унарный минус/плюс
// Бинарный минус/плюс





// Взятие остатка %




// Возведение в степень **



// Приведение к числу, унарный +
/*
let x = 1;
alert(+x);

let y = -2;
alert(+y);

alert(+true);
alert(+"");

let apples = 2;
let oranges = 3;

alert(apples + oranges);
*/



// Показать таблицу приоритетов



// Присваивание
/*
let x = 2 * 3 - 1; // приоритет

let someVar1 = 1;
let someVar2 = 2;

let someVar3 = 3 - (someVar1 = someVar2 + 1);

console.log('someVar3 is equal - ', someVar3);
console.log('someVar1 is equal - ', someVar1);
*/



// Присваивание по цепочке
/*
let a, b, c;

a = b = c = 2 + 2;

console.log('a is equal - ', a);
console.log('b is equal - ', b);
console.log('c is equal - ', c);
*/



// Сокращённая арифметика с присваиванием
/*
/// Есть запись
let n = 2;
n = n + 5;
n = n * 2;

/// Ее можно представить
let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

*/



// Инкремент/декремент
/*
/// Инкремент ++ увеличивает переменную на 1
let counter1 = 2;
counter1++;        // работает как counter = counter + 1, просто запись короче
console.log('counter1 - ', counter1 );
// let counterRes1 = counter1++;
// console.log('counterRes1 - ', counterRes1 );
// let counterRes2 = ++counter1;
// console.log('counterRes2 - ', counterRes2 );

/// Декремент -- уменьшает переменную на 1
let counter2 = 2;
counter2--;        // работает как counter = counter + 1, просто запись короче
console.log('counter2 - ', counter2 );
*/



// Оператор «запятая»
/*
let a = (1 + 2, 3 + 4);
alert( a ); // 7 (результат вычисления 3 + 4);

a = 1 + 2, 3 + 4;

alert(a); // 3
*/

// Строгое и нестрогое равенство


// Приведение типов
/*
/// К строке:
String(123) // '123'
String(-12.3) // '-12.3'
String(null) // 'null'
String(undefined) // 'undefined'
String(true) // 'true'
String(false) // 'false'
String(function () {}) // 'function () {}'
String({}) // '[object Object]'
String({ key: 42 }) // '[object Object]'
String([]) // ''
String([1, 2]) // '1,2'

// К числу:
Number('123') // 123
Number('123.4') // 123.4
Number('123,4') // NaN
Number('') // 0
Number(null) // 0
Number(undefined) // NaN
Number(true) // 1
Number(false) // 0
Number(function () {}) // NaN
Number({}) // NaN
Number([]) // 0
Number([1]) // 1
Number([1, 2]) // NaN

// К булеву значению
Boolean('') // false
Boolean('string') // true
Boolean('false') // true
Boolean(0) // false
Boolean(42) // true
Boolean(-42) // true
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(function () {}) // true
Boolean({}) // true
Boolean({ key: 42 }) // true
Boolean([]) // true
Boolean([1, 2]) // true

- Интерпретатор приведёт примитивные значения к логическим, если мы используем && или ||.
- К строке, если мы используем +, когда один из операндов — строка.
- К числу, если:
    мы используем операторы сравнения <, <=, >, >=;
    используем арифметические операции -, + (за исключением пункта 2), /, *.
    используем унарный плюс: +'2' === 2;
    используем оператор нестрогого сравнения ==.

*/



/*

console.log('Строка 01 - ', "" + 1 + 0);
console.log('Строка 02 - ', "" - 1 + 0);
console.log('Строка 03 - ', true + false);
console.log('Строка 04 - ', 6 / "3");
console.log('Строка 05 - ', "2" * "3");
console.log('Строка 06 - ', 4 + 5 + "px");
console.log('Строка 07 - ', "$" + 4 + 5);
console.log('Строка 08 - ', "4" - 2);
console.log('Строка 09 - ', "4px" - 2);
console.log('Строка 10 - ', "  -9  " + 5);
console.log('Строка 11 - ', "  -9  " - 5);
console.log('Строка 12 - ', null + 1);
console.log('Строка 13 - ', undefined + 1);
console.log('Строка 14 - ', " \t \n" - 2);

console.log('Строка 15 - ', true + false);
console.log('Строка 16 - ', 12 / "6");
console.log('Строка 17 - ', "number" + 15 + 3);
console.log('Строка 18 - ', 15 + 3 + "number");
console.log('Строка 19 - ', [1] > null);
console.log('Строка 20 - ', "foo" + + "bar");
console.log('Строка 21 - ', 'true' == true);
console.log('Строка 22 - ', false == 'false');
console.log('Строка 23 - ', null == '');
console.log('Строка 24 - ', !!"false" == !!"true");
console.log('Строка 25 - ', [‘x’] == ‘x’);
console.log('Строка 26 - ', [] + null + 1);
console.log('Строка 27 - ', 0 || "0" && {});
console.log('Строка 28 - ', [1,2,3] == [1,2,3]);
console.log('Строка 29 - ', {}+[]+{}+[1]);
console.log('Строка 30 - ', !+[]+[]+![]);
console.log('Строка 31 - ', new Date(0) - 0);
console.log('Строка 32 - ', new Date(0) + 0);

*/
    };
});