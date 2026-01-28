define(function () {
    return function () {
/**
 * ====================================================================
 * Занятие 7
 * ====================================================================
 */
/**
 * Задачи для проверки НАЧАЛО ===>
 */
/**
 * <=== КОНЕЦ Задачи для проверки
 */
/*
const myObj1 = {
    myProp1: 1,
}; // литеральный
const myObj2 = new Object(); // через экземпляр класса
const myObj3 = Object.create(null);

// console.log('myObj3 - ', myObj3);

const userData = {
    firstName: 'firstName',
    lastName: 'lastName',
    age: '',
    'my-property&&#': 'value',
    getFullName: function() {
        console.log('firstName lastName');
        return 'firstName lastName';
    },
    dateOfBirth: {
        day: '',
        month: '',
        year: '',
    },
};
*/
/*
console.log('userData.firstName - ', userData.firstName);
console.log('userData["firstName"] - ', userData["firstName"]);
console.log('userData["my-property&&#"] - ', userData["my-property&&#"]);
*/
// userData.education = 'MGU';

// console.log('userData with prop "education" - ', JSON.stringify(userData));

// delete userData.education;

// console.log('userData without prop "education" - ', userData);
/*
const alexanderData = {...userData}; // через деструктивное присваивание

// alexanderData.dateOfBirth.date = '27';

console.log('alexanderData - ', alexanderData);
console.log('userData - ', userData);

const tanyaData = Object.assign({}, userData); // ч/з Object.assign

console.log('tanyaData - ', tanyaData);

const irinaData = JSON.parse(JSON.stringify(userData));
irinaData.dateOfBirth.date = '15';
console.log('irinaData - ', irinaData);
console.log('userData - ', userData);


const irinaObjKeys = Object.keys(irinaData);
console.log('irinaObjKeys - ', irinaObjKeys);

irinaObjKeys.forEach((value, index) => {
    console.log(`property "${value}" is equal - `, irinaData[value]);
});

for (let key in irinaData) console.log(`property "${key}" is equal - `, irinaData[key]);
*/


    };
});