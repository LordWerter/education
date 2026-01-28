define(function () {
    return function () {
/**
 * Занятие 3
 * Задачи для проверки НАЧАЛО ===>
 */
// 1. Как объявить константу со значением 3?
// const a = 3;
// 2. Как объявить переменную со значением true?
// let b = true;
// 3. Как объявить переменную и назначить ей объект?
// let c = {};
// 4. Какие формы объявления объекта есть?
// let c = {};
// let cc = new Object();
// let ccc = Object.create(); // создание объекта без __proto__
// 5. Как проверить кратность 5ти? Проверяем числа 24, 30
// const a = 24 % 5;
// const b = 30 % 5;
// 6. Что выведет каждый console.log?
/*
let counter1 = 2;
counter1++;
console.log('counter1 - ', counter1 ); // 3
let counterRes1 = counter1++;
console.log('counterRes1 - ', counterRes1 ); // 3
console.log('counter1 - ', counter1 ); // 4
*/


// 3. Тренажер по приведению типов


/**
 * <=== КОНЕЦ Задачи для проверки
 */

/*
- Интерпретатор приведёт примитивные значения к логическим, если мы используем && или ||.
- К строке, если мы используем +, когда один из операндов — строка.
- К числу, если:
    мы используем операторы сравнения <, <=, >, >=;
    используем арифметические операции -, + (за исключением пункта 2), /, *.
    используем унарный плюс: +'2' === 2;
    используем оператор нестрогого сравнения ==.
*/



// Проверки примитивных типов данных
/*
const a = 1;
const aa = new Number(1); // НЕЛЬЗЯ ДЕЛАТЬ!!!
const b = 'string';
const bb = new String('string'); // НЕЛЬЗЯ ДЕЛАТЬ!!!
const c = true;
const cc = new Boolean(true); // НЕЛЬЗЯ ДЕЛАТЬ!!!
*/
// Проверка является ли переменная объектом
/*
console.log('typeof {} - ',                   typeof {});
console.log('typeof {name: "John"} - ',       typeof {name: "John"});
console.log('typeof new String("string") - ', typeof new String("string"));
console.log('typeof Array - ',                typeof []);
console.log('typeof null - ',                 typeof null);
console.log('typeof new Date() - ',           typeof new Date());
console.log('typeof new RegExp() - ',         typeof new RegExp());

const obj = { a: 1, b: 2 };

if (typeof obj === 'object' && obj instanceof Object) {
  console.log('Это объект');
}

try {
    const typeCheckRes = null instanceof null;
} catch (e) {
    console.error(e);
}

// typeof x === 'object' && !Array.isArray(x) && x !== null

Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(new Date()); // "[object Date]"
Object.prototype.toString.call(function(){}); // "[object Function]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(123); // "[object Number]"
Object.prototype.toString.call("abc"); // "[object String]"
*/

/*
Примерное ранжирование методов по скорости выполнения (от быстрейшего к самому медленному):
1. typeof — наиболее быстрый, но наименее точный
2. instanceof — быстрый для простых проверок, но замедляется при глубокой цепочке прототипов
3. Array.isArray() — оптимизирован и достаточно быстр для своей задачи
4. Object.prototype.toString.call() — более медленный из-за вызова функции и обработки строк
5. Комбинированные проверки — могут быть самыми медленными из-за множественных операций
*/

// Операторы сравнения
/*
const a = '2';
const b = 2;
console.log('a == b', a == b); // нестрогое сравнение
console.log('a === b', a === b); // строгое сравнение: проверка на значение и тип данных
*/

// Сравнение строк
/*
alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true

// Алгоритм сравнения двух строк:
// 1. Сначала сравниваются первые символы строк.
// 2. Если первый символ первой строки больше (меньше), 
// чем первый символ второй, то первая строка больше (меньше) второй. 
// Сравнение завершено.
// 3. Если первые символы равны, то таким же образом сравниваются 
// уже вторые символы строк.
// 4. Сравнение продолжается, пока не закончится одна из строк.
// 5. Если обе строки заканчиваются одновременно, то они равны.
// Иначе, большей считается более длинная строка.

*/



// Строгое сравнение



// Условное ветвление: if, '?'
/*
const a = 161;

if (typeof a === 'number') {
    console.log('a is number');
}

if (typeof a !== 'string') console.log('a is not string');
*/
// Преобразование к логическому типу
// Число 0, пустая строка "", null, undefined и NaN становятся false.
// Из-за этого их называют «ложными» («falsy») значениями.

// Блок «else» и «else if»
/*
if (a <= 50) {
    console.log('a <= 50');
} else if (a <= 100) {
    console.log('50 < a <= 100');
} else {
    console.log('a > 100');
}
*/

// Условный оператор „?“
/*
const result = a > 100 ? 'dfgsdfgea' : '675432145678';
console.log(result);
*/
// Логические операторы
/*
Cемь логических операторов:
 * ИЛИ                                   - ||
 * И                                     - &&
 * НЕ                                    - !
================================================
 * Оператор нулевого слияния             - ??
 * Оператор логического присваивания ИЛИ - ||=
 * Оператор логического присваивания И   - &&=
 * Оператор нулевого присваивания        - ??=
*/
    };
});