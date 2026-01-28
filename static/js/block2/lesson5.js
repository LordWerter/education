define(function () {
    return function () {
/**
 * ====================================================================
 * Занятие 5
 * ====================================================================
 */
/**
 * Задачи для проверки НАЧАЛО ===>
 */
// Какие типы данных есть в JS



// Какие математические операторы есть JS
// + - / * ** % ++ --


// Какие операторы сравнения есть в JS
// > < == === <= >=


// тренажер - 8 задач рандомом



// Проранжировать функции тайп чекинга
/*
1. typeof
2. instanceof
3. Object.prototype.toString.call
4. Araay.isArray
5. комбинированные проверки
*/
// Какие циклы есть в JS
/*
while (условие выполнения цикла) {
    тело цикла
}

do {
    тело цикла
} while (условие выполнения цикла);

for (начало; условие выполнения цикла; шаг) {
    тело цикла
}
const myArr = [1,2,3,4,5];

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

let i = 0;

for (; i < myArr.length;) {
    console.log(myArr[i]);
    i++;
}
*/
// Как объявляется Function Declaration
/*
function sayHi() {
    console.log('Hi everyone!');
}
*/

/**
 * <=== КОНЕЦ Задачи для проверки
 */
// Локальные константы и переменные в теле функции
// console.log('a is equal - ', a);
/*
console.log('aa is equal - ', aa);

const a = 2;
var aa = 3;
// console.log('bb is equal - ', bb);

function calcSum() {
    console.log('bb is equal - ', bb);
    const b = 3;
    var bb = 4;
    console.log('a is equal - ', a);
    console.log(a + b);
}

calcSum();

console.log('a is equal - ', a);
*/

// Внешние константы и переменные
/*
let name = 'Вася';

function runHi() {
    console.log(`${name} says Hi`);
}

console.log(`${name} says Hi`);
// name = 'Колян';
runHi();
console.log(`${name} says Hi`);

name = 'Петро';
runHi();
*/
// Параметры
/*
// Синтаксис Function Declaration
function название_функции(параметры_функции) {
    тело функции
}
*/
/*
function runHi(name = 'Семен') {
    console.log(`${name} says Hi`);
}
const myName = 'Александр';

runHi(myName);

runHi();
*/
// Значения по умолчанию
/*
function calcSum(a = 0, b = 0) {
    const result = a + b;
    console.log(result);
}

calcSum();

calcSum(3, 4);

const aa = 2;
const bb = 3;

calcSum(aa, bb);
*/
// Возврат значения
/*
let result = 0;

function calcSum(a = 0, b = 0) {
    const output = a + b;
    if (output > 10) {
        console.warn('result is more than 10');
        return;
    }
    console.log('output is equal:', output);

    return output;

    console.log('output is equal:', output); // НЕ БУДЕТ РАБОТАТЬ!!!
}

result = calcSum(2, 3); // 5
console.log('result is equal:', result);

result = calcSum(12, 3);
console.log('result is equal:', result);
*/
// Выбор имени функции
/*
Как правило, используются глагольные префиксы, обозначающие общий характер действия, 
после которых следует уточнение. Обычно в командах разработчиков действуют соглашения,
касающиеся значений этих префиксов.

Например, функции, начинающиеся с "show" обычно что-то показывают.

Функции, начинающиеся с…

"get…" – возвращают значение,
"calc…" – что-то вычисляют,
"create…" – что-то создают,
"check…" – что-то проверяют и возвращают логическое значение, и т.д.
*/



// Function Expression



// Функция – это значение



// Функции-«колбэки»



// Function Expression в сравнении с Function Declaration
/// Во-первых, синтаксис: как отличить их друг от друга в коде.
//
/// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
/// 
/// В строгом режиме, когда Function Declaration находится в блоке {...}, 
/// функция доступна везде внутри блока. Но не снаружи него.
/*
let welcome;

if (age < 18) {

  welcome = function() {
    alert("Привет!");
  };

}
*/
// Стрелочные функции, основы
/// Многострочные стрелочные функции

    };
});