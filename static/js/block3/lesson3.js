define(function () {
    return function () {
/**
 * ====================================================================
 * Занятие 3
 * ====================================================================
 */
/**
 * Задачи для проверки НАЧАЛО ===>
 */
// Какие существуют способы создания объектов?
const myObj1 = {};
const myObj2 = new Object();
const myObj3 = Object.create(null);

// Как создать новое свойство?
myObj1.name = "Alexander";

Object.defineProperty(myObj1, "foo", {
  value: 42,
  writable: false,
});

// Как удалить свойство?
delete myObj1.name;

// Какие существуют способы копирования объектов?
const myObj1Copy1 = Object.assign({}, myObj1);
const myObj1Copy3 = {...myObj1};
const myObj1Copy2 = JSON.parse(JSON.stringify(myObj1));
const myObj1Copy4 = structuredClone(myObj1);

// Что такое функция-конструктор?
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Что такое прототипное наследование?
const animal = {
  canJump: false,
};

const rabbit = {
  __proto__: animal,
};

console.log('rabbit.canJump - ', rabbit.canJump);
// Как работает __proto__?

// Почему наедаются оба хомяка?
/*
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log('speedy.stomach - ', speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log('speedy.stomach - ', lazy.stomach); // apple

 */
// Спросить команды git
git init

git checkout -b feat/FE-102

git checkout master


/**
 * <=== КОНЕЦ Задачи для проверки
 */

// Заводим аккаунт github

// Регистрация SSH-ключа



// XHR API
// 1. Создаём новый XMLHttpRequest-объект
/*
let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL /article/.../load
xhr.open('GET', '/api/user?id=12345');

xhr.responseType = 'json';
// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function() {
  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат
    let responseObj = xhr.response;
    console.log('responseObj.firstName - ', responseObj.firstName);
    console.log('responseObj.permissions - ', responseObj.permissions);
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Получено ${event.loaded} из ${event.total} байт`);
  } else {
    console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
  }

};

xhr.onerror = function() {
  alert("Запрос не удался");
};
*/

// Fetch API
/*
fetch('/api/basket/order', {
    method: 'GET',
}).then((response) => {
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        return response.json();
    } else {
        console.log(`Ошибка HTTP: ${response.status}`);
    }
}).then((responseObj) => {
    console.log('responseObj - ', responseObj);
});
*/

// создадим новый промис
/*
const promise = new Promise((resolve, reject) => {
  // оценку, которые мы получим определим случайным образом спустя некоторое время (например, 5 секунд)
  setTimeout(() => {
    // сгенерируем оценку от 2 до 5
    const mark = Math.floor(Math.random() * 4) + 2;
    // если оценка больше 3, то...
    if (mark > 3) {
      // завершим промис успешно: для этого вызовем функцию resolve() и передадим ей в скобках полученную оценку (это нужно для того, чтобы мы затем её могли получить в методе then())
      resolve(mark);
    }
    // завершим промис с ошибкой
    reject(mark);
  }, 5000);
});

// выполнение действий после завершения промиса выполняется с помощью методов: then (в случае успеха) и catch (при ошибке)
promise
  .then(result => console.log(`Ура! Я сдал экзамен на ${result}! Папа, как и обещал дал мне 100$.`))
  .catch(result => console.log(`Увы, я получил оценку ${result}! Папа мне не дал 100$`));
*/
    };
});
