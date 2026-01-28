define(function () {
    return function () {
/**
 * 1. Базовые операторы
 * + - / * =
 */
// операнд - это то, к чему применяется оператор
// Унарный минус/плюс
// Бинарный минус/плюс

// const someVar1 = +3;
// const someVar2 = 3 + 2;

// Взятие остатка %
/*
const someVar1 = 10 % 4; // 1
console.log('Взятие остатка %', someVar1);

if (someVar1 === 0) {
    console.log('is integer');
} else {
    console.log('is float');
}
*/

// Возведение в степень **
// const someVar1 = 2 ** 3;
// console.log('Возведение в степень', someVar1);

// Приведение к числу, унарный +
/*
let x = 1;
console.log(+x); // 1 ==> number

let y = -2;
console.log(+y); // -2 ==> number

console.log(Number(true)); // 1
console.log(+true); // 1
console.log(Number("")); // 1
console.log(+""); // 0


let apples = '2';
let oranges = '3';

console.log(+apples + +oranges);
*/

// Присваивание
/*
let x = 2 * 3 - 1; // 5

let someVar1 = 1;
let someVar2 = 2;

let someVar3 = 3 - (someVar1 = someVar2 + 1);
// 3 - (someVar1 = 3)
// 3 - 3
// 0

console.log('someVar1 is equal - ', someVar1);
console.log('someVar3 is equal - ', someVar3);
*/

// Присваивание по цепочке
/*
let a, b, c;

a = b = c = 2 + 2;

console.log('a is equal - ', a); // 4
console.log('b is equal - ', b); // 4
console.log('c is equal - ', c); // 4
*/
// Инкремент/декремент
/// Инкремент ++ увеличивает переменную на 1
/*
let counter1 = 2;
counter1++;        // работает как counter = counter + 1, просто запись короче
console.log('counter1 - ', counter1 ); // 3
let counterRes1 = counter1++;
console.log('counterRes1 - ', counterRes1 ); // 3
console.log('counter1 - ', counter1 ); // 4

let counterRes2 = ++counter1;
console.log('counterRes2 - ', counterRes2 ); // 5

/// Декремент -- уменьшает переменную на 1
let counter2 = 2;
counter2--;        // работает как counter = counter - 1, просто запись короче
console.log('counter2 - ', counter2 ); // 1
*/

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
*/
    };
});