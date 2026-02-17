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
// Какие методы отправки запросов есть?
/*
GET - на чтение
POST - на запись
PUT - на изменение
DELETE - на удаление
*/
// Как отправить запрос?
/*
const req = new XMLHttpRequest();
req.open('GET', '/api/user?id=12345');
req.responseType = 'json';
req.send();
req.onload = function() {
  if (req.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    console.log(`Ошибка ${req.status}: ${req.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат
    let responseObj = req.response;
    console.log('responseObj.firstName - ', responseObj.firstName);
    console.log('responseObj.permissions - ', responseObj.permissions);
  }
};

fetch('/api/user?id=12345', {
    method: 'GET'
}).then((response) => {
    if (!response.ok) {
        console.log(`Ошибка`);
    } else {
        return response.json();
    }
}).then((respObj) => {
    console.log('respObj - ', respObj);
});
*/
// Что такое промис?
// Как задать цепочку операций?
/*
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const a = 2, b = 3;
        const sum = a + b;
        console.log('Promise will be resolved now')
        resolve(sum);
    }, 1000);
}).then((result) => {
    console.log('then result - ', result);
    throw new Error('my error');
    return result;
}).then((result) => {
    console.log('then result2 - ', result);
}).catch((error) => {
    console.error(error.message);
});
*/

// Как обработать ошибку в промисе?

// что такое async/await?
/*
const sendReq = async () => {
    const response = await fetch('/api/user?id=12345', {
        method: 'GET'
    });
    console.log('response', response);
}

sendReq();
*/
// Какие способы поиска целевого элемента существуют?
/*
const targetElemById = window.document.getElementById('erty-oiuy');
targetElemById.style.background = '#ccc';

console.log(targetElemById);

const targetElement = window.document.querySelector('#erty-oiuy .header-menu__element.is-active a');
targetElement.style.color = 'green';
console.log(targetElement);
*/
// какие способы поиска коллекции элементов существуют?
/*
const targetTagCollection = window.document.getElementsByTagName('a');
const aboutBtn = targetTagCollection.item(1);
console.log('targetTagCollection item #1 - ', aboutBtn);
aboutBtn.style.color = 'green';
*/
/*
const targetCollectionByClassName = window.document.getElementsByClassName('header-menu__element');
console.log('targetCollectionByClassName - ', targetCollectionByClassName);

const menuElem = targetCollectionByClassName.item(0);
menuElem.style.fontSize = '24px';
*/
/*
const collectionBySelector = window.document.querySelectorAll('.core-tech-stack .technology-card');
console.log('collectionBySelector - ', collectionBySelector);
*/

// Как через JS вставить HTML?
const footer = window.document.querySelector('footer');

footer.innerHTML = '<h3>My new footer</h3>';

/**
 * <=== КОНЕЦ Задачи для проверки
 */
// Навигация по DOM
/// Сверху: documentElement и body
/*
<html> = document.documentElement
<body> = document.body
<head> = document.head
*/

/// Дети: childNodes, firstChild, lastChild


// Соседи и родитель
/// Родитель доступен через parentNode
/*
// после <head> идёт <body>
alert( document.head.nextSibling ); // HTMLBodyElement
*/
/*
// перед <body> находится <head>
alert( document.body.previousSibling ); // HTMLHeadElement
*/

// Навигация только по элементам
/*
Эти ссылки похожи на те, что раньше, только в ряде мест стоит слово Element:

children – коллекция детей, которые являются элементами.
firstElementChild, lastElementChild – первый и последний дочерний элемент.
previousElementSibling, nextElementSibling – соседи-элементы.
parentElement – родитель-элемент.
*/

// Атрибуты и свойства
// DOM-свойства
/*
// новое свойство для document.body
document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};
 */
// добавление метода:
/*
document.body.sayTagName = function() {
  alert(this.tagName);
};
document.body.sayTagName(); // BODY (значением "this" в этом методе будет document.body)
*/

/*
Методы для работы с атрибутами:

elem.hasAttribute(name) – проверить на наличие.
elem.getAttribute(name) – получить значение.
elem.setAttribute(name, value) – установить значение.
elem.removeAttribute(name) – удалить атрибут.
elem.attributes – это коллекция всех атрибутов.
*/

// Получение значения нестандартного атрибута
// ===> создать нестандартный атрибут
/*
document.body.getAttribute('something')
*/

// Есть особенность в использовании дата-атрибутов
/*
  <div data-widget-name="menu">Choose the genre</div>

  <script>
    // получаем элемент
    let elem = document.querySelector('[data-widget-name]');

    // читаем значение
    alert(elem.dataset.widgetName);
    // или так
    alert(elem.getAttribute('data-widget-name'));
  </script>
*/

// className и classList
/*
Методы classList:

elem.classList.add/remove("class") – добавить/удалить класс.
elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
elem.classList.contains("class") – проверка наличия класса, возвращает true/false.
*/

// Создание элемента
/*
let div = document.createElement('div');
let textNode = document.createTextNode('А вот и я');
*/

// Методы вставки
/*
node.append(...nodes or strings) – добавляет узлы или строки в конец node,
node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
node.before(...nodes or strings) –- вставляет узлы или строки до node,
node.after(...nodes or strings) –- вставляет узлы или строки после node,
node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.
*/

// Универсальный метод
/// elem.insertAdjacentHTML/Text/Element(where, html)
/*
"beforebegin" – вставить html непосредственно перед elem,
"afterbegin" – вставить html в начало elem,
"beforeend" – вставить html в конец elem,
"afterend" – вставить html непосредственно после elem.
*/

// Удаление узлов
/*
<script>
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

  document.body.append(div);
  setTimeout(() => div.remove(), 1000);
</script>
*/


    };
});
