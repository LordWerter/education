const url = require('url');
const fs = require('fs');

const define = function(req, res, postData) {
    // Теперь получаем наш адрес. Если мы переходим на localhost:3000/test, то path будет '/test'
    const urlParsed = url.parse(req.url, true);
    let path = urlParsed.pathname;
    console.log('GET request path - ', JSON.stringify(urlParsed));

    // Теперь записываем полный путь к server.js. Мне это особенно нужно, так как сервер будет
    // висеть в systemd, и путь, о котором он будет думать, будет /etc/systemd/system/...
    prePath = __dirname;
    try {
      // Здесь мы пытаемся подключить модуль по ссылке. Если мы переходим на
      // localhost:8000/api, то скрипт идёт по пути /routing/dynamic/api, и, если находит там
      // index.js, берет его. Я знаю, что использовать тут try/catch не слишком правильно, и потом
      // переделаю через fs.readFile, но пока у вас не загруженный проект, разницу в скорости
      // вы не заметите.
      // let dynPath = './dynamic/' + path;
      // let routeDestination = require(dynPath);
      if (path === '/api/user') {
        res.end(JSON.stringify({
            firstName: 'Alexander',
            lastName: 'Rudenko',
            age: 43,
            permissions: [1,1,1,0,0,0,0,0]
        }));

      } else if (path === '/api/basket/order') {
        res.end(JSON.stringify([
            {
                name: 'pen',
                count: 1,
                price: 250,
            },
            {
                name: 'pencil',
                count: 3,
                price: 180,
            },
            {
                name: 'eraser',
                count: 1,
                price: 140,
            },
            {
                name: 'glue',
                count: 1,
                price: 240,
            },
            {
                name: 'ruler',
                count: 1,
                price: 450,
            },
        ]));
      } else {
        res.end('We have API!');
      }
    }
    catch (err) {
      // Не нашлось api? Грустно.
      res.end("We don't have API!");
    }
};
exports.define = define;