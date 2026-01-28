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

/**
 * Циклы while и for
 */
// => Цикл «while»
      /*
      while (условие) {
        // код, называемый "телом цикла"
      }
      */
      /*
      let count = 3;
      while (count > 0) {
          alert(count);
          count--;
      }
      */

// => Цикл «do…while»
      // чтобы тело цикла выполнилось хотя бы один раз,
      // даже если условие окажется ложным
      /*
      do {
        // тело цикла
      } while (condition);

      let i = 0;

      do {
        console.log('first run');
        --i;
      } while (i > 0);
      */


// => Цикл «for»
      /*
      for (начало; условие; шаг) {
        // ... тело цикла ...
      }
      */
     /*
      const arr = [1,2,3,4,5];

      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }

      let y = 0;

      for (; y < arr.length; y++) {
        console.log(arr[y]);
      }
      */
      /*
      for (;;) {
        console.log(arr[y]);
        y++;
      }
      */
// ==> Прерывание цикла: «break»
      /*
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] >= 3) break;
      }
*/
/*
      const obj = {
        a: 1,
        b: 2,
      }
      for (let property in obj) {
        console.log(obj[property]);
      }

      const arr = [1,2,3,4,5];
      arr.forEach((elem, index) => {
        console.log(`elem with index ${index} is equal`, elem);
      });

      const myStr = 'fsgdfgsdfgsdrfgas';
      const myStr2 = new String('fgsdfgsdfgsdrfgasfgsdfgsdfgsdrfgas');

      myStr.split('').forEach();
      [1,2,3,4,56,6,7,6].forEach((value) => {

      });

      // Function declaration
      function sayHi() {
        console.log('Hi, Irina!');
      }

      sayHi();

      function sayBye () {
        console.log('Bye everyone!');
      }

      sayBye();
*/
/*
      const myNum = 1;
      const myNum2 = new Number(1);

      const myBool = true;
      const myBool2 = new Boolean(true);

      const myObj = {};
      const myObj2 = new Object();
      console.log(String.fromCharCode(65, 66, 67));
*/
// ==> Переход к следующей итерации: continue



// ==> Цикл «for...in»



// ==> Цикл «for...of»



    };
});

