// task 1

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function squareArea(a, b) {
//     console.log(a * b);
// }
//
// let edge_a = +prompt('Сторона а');
// let edge_b = +prompt('Сторона б');
// squareArea(edge_a, edge_b);

//------------------------------------------------------------

// task 2

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14159265359;

// function circleArea(r) {
//     console.log(PI * r * r);
// }
// let circleRadius = +prompt('Circle radius?');
// circleArea(circleRadius);

//----------------------------------------------------------

// task 3

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinderArea(r, h){
//     console.log((2 * PI * r * h) + (2 * PI * r * r));
// }
//
// let cylinderRadius = +prompt('Enter cylinder radius');
// let cylinderHeight = +prompt('Enter cylinder height');
// cylinderArea(cylinderRadius, cylinderHeight);

// ----------------------------------------------------------

// task 4

//#SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3,4,5,6,7,8,9,0];
//
// function elementArray(Array){
//     for (const arrayElement of Array) {
//         console.log(arrayElement);
//     }
// }
// elementArray(array);

// -------------------------------------------------------

// task 5

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

// function addParagraph(title){
//     document.write(`
//         <p>${title}</p>
//     `)
// }
//
// let paragraphTitle = prompt('Enter title');
// addParagraph(paragraphTitle);

// -------------------------------------------------------

// task 6

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

// function writeList(text1, text2, text3) {
//     document.write(`
//         <ul>
//         <li>${text1}</li>
//         <li>${text2}</li>
//         <li>${text3}</li>
//         </ul>
//     `)
// }
//
// writeList('Milk', 'Potato', 'Cucumber');

//-----------------------------------------------------------

// task 7

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write

// function writeCountedList(text, counter) {
//     document.write('<ul>');
//     for (let i = 0; i < counter; i++) {
//         document.write(`
//         <li>${text}</li>
//         `)
//     }
//     document.write('</ul>');
// }
//
// let listText = prompt('Enter text for list');
// let listNum = +prompt('Enter num of list');
// writeCountedList(listText, listNum);

// ------------------------------------------------------

// task 8

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

// let array = [1, true, 'potato', 6, true, 'tomato', 87, false, 'potato', 123, true, 'chipsik', 654, false, 'potato',];
//
// function writeArrayList(array) {
//     document.write('<ul>');
//     for (let i = 0; i < array.length; i++) {
//         document.write(`
//         <li>${array[i]}</li>
//         `)
//     }
//     document.write('</ul>');
// }
//
// writeArrayList(array);

// -----------------------------------------------------

// task 9

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'Banan', age: 5},
//     {id: 2, name: 'Apple', age: 12},
//     {id: 3, name: 'Orange', age: 4},
//     {id: 4, name: 'Melon', age: 142},
//     {id: 5, name: 'Cucumber', age: 654},
//     {id: 6, name: 'Onion', age: 55},
//     {id: 7, name: 'Tomato', age: 124},
//     {id: 8, name: 'Potato', age: 896},
//     {id: 9, name: 'Shaverma', age: 5},
//     {id: 10, name: 'Meat', age: 1},
//     {id: 11, name: 'Fish', age: 74},
//     {id: 12, name: 'Bone', age: 93},
//     {id: 13, name: 'Strawberry', age: 83},
//     {id: 14, name: 'Alex', age: 64},
//     {id: 15, name: 'Root', age: 66},
//     {id: 16, name: 'Mouse', age: 85},
//     {id: 17, name: 'Rat', age: 167},
//     {id: 18, name: 'Kitty', age: 942},
//     {id: 19, name: 'Charger', age: 76},
//     {id: 20, name: 'Dog', age: 52},
// ];
//
//
// function writeUsers(usersArr) {
//     for (const usersArrElement of usersArr) {
//         document.write(`
//             <div>
//             <h3>${usersArrElement.name}</h3>
//             <p>id - ${usersArrElement.id}</p>
//             <h4>age - ${usersArrElement.age}</h4>
//             </div>
//         `);
//     }
// }
//
// document.write(`<div class="block-wrapper">`);
// writeUsers(users);
// document.write(`</div>`);

// -------------------------------------------------------------

// task 10

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// let Num = [2, 5, 8, 2, 9, 3, 55, 2, 64, 222, 2, 5, 56, 34, 23, 75, 45, 236, 85];
//
// function minNum(Num) {
//     let buffer = Num[0];
//     for (let i = 0; i < Num.length; i++) {
//         let numElement = Num[i];
//         if (numElement < buffer) {
//             buffer = numElement;
//         }
//     }
//     return console.log(buffer);
// }
//
// minNum(Num);

// --------------------------------------------------------------

// task 11

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let buffer = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         buffer += arrElement;
//     }
//     console.log(buffer);
// }
//
// sum([1, 2, 10, 20, 5, 6, 8, 99]);

//--------------------------------------------------------------

// task 12

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     let buffer = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = buffer;
//     console.log(arr);
// }
//
// swap([1, 2, 10, 20, 5, 6, 8, 99], 0, 1);

// ----------------------------------------------------------

// task 13

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     let exchangeSum;
//     for (const currencyValue of currencyValues) {
//         if (currencyValue.currency === exchangeCurrency){
//             exchangeSum = sumUAH / currencyValue.value;
//         }
//     }
//     console.log(exchangeSum);
// }
// exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}, {currency:'FR',value:46}],'EUR');