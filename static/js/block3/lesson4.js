define(function () {
    return function () {
/**
 * ====================================================================
 * Занятие 4
 * ====================================================================
 */
/**
 * Задачи для проверки НАЧАЛО ===>
 */
/**
 * <=== КОНЕЦ Задачи для проверки
 */

// создадим новый Promise
/*
const newTask = new Promise((resolve, reject) => {
    setTimeout(() => {
        const a = 2, b = 3;
        const sum = a + b;
        console.log('Promise will be resolved now')
        resolve(sum);
    }, 1000);
}).then((result) => {
    console.log('result is - ', result);
    return result;
}).then(() => {
    throw new Error('My custom error');
}).catch((error) => {
    console.error('error catch is running', error.message);
});

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

fetch('/api/basket/order', {
    method: 'GET',
}).then((response) => {
    if (!response.ok) {
        console.error('Error in request to /api/basket/order')
    } else {
        console.log(response);
        console.log('Hoorey!')
    }
});
// async/await
const asyncFunction = async () => {
    const response = await fetch('/api/basket/order', {
        method: 'GET',
    });
    console.log('async/await response - ', response);
}

asyncFunction();
*/
// DOM (Document Object Model) - это ...
/*
Document Object Model, сокращённо DOM – объектная модель документа,
которая представляет все содержимое страницы в виде объектов,
которые можно менять.
 */
/*
const domObj = window.document
console.log('window.document - ', domObj);

console.log('window.document.body - ', domObj.body);

const targetElem = window.document.getElementById('erty-oiuy');
setTimeout(() => {
    targetElem.style.background = "#ccc";
}, 1000);

console.log('targetElem - ', targetElem);

const targetTagCollection = window.document.getElementsByTagName('a');
const aboutBtn = targetTagCollection.item(1);
console.log('targetTagCollection - ', aboutBtn);
aboutBtn.style.color = 'green';

const targetCollectionByClassName = window.document.getElementsByClassName('header-menu__element');

console.log('targetCollectionByClassName - ', targetCollectionByClassName);
const menuElem = targetCollectionByClassName.item(0);
menuElem.style.fontSize = '24px';

const targetElemP = window.document.querySelector('.main-banner__text-block h3');

targetElemP.style.color = "#ccc";

const collectionBySelector = window.document.querySelectorAll('.core-tech-stack .technology-card');
console.log('collectionBySelector - ', collectionBySelector);

const feedbacksSection = window.document.querySelector('#feedbacks');
console.log('feedbacksSection - ', feedbacksSection);
// feedbacksSection.innerHTML = '<p>Some random text</p>';

const parent = document.querySelector('#parent-node');
const point = document.querySelector('#point-node');
const newNode = document.createElement("p");
newNode.innerHTML = 'Some random text using insertBefore';
parent.insertBefore(newNode, point);

const sizes = point.getBoundingClientRect();
console.log('sizes - ', sizes);
*/
// DOM - это представление HTML-документа в виде дерева тегов.
/*
Каждый узел этого дерева – это объект.

Теги являются узлами-элементами (или просто элементами). Они образуют структуру дерева: 
<html> – это корневой узел, <head> и <body> его дочерние узлы и т.д.
*/
    };
});
