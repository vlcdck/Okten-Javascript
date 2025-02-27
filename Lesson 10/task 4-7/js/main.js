// task 4

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionsList = [];

if (localStorage.getItem('sessionsList')) {
    sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
}

sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// OR

// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// sessionsList.push(new Date());
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// -----------------------------------------------------------------------

// task 5

// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let inputKilo = document.querySelector('.kilo');
let inputPound = document.querySelector('.pound');

inputKilo.addEventListener('input', function () {
    inputPound.value = (inputKilo.value * 2.2).toFixed(2);
})
inputPound.addEventListener('input', function () {
    inputKilo.value = (inputPound.value / 2.2).toFixed(2);
})

// ------------------------------------------------------------------------

// task 6

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addObjToLs(keyName, objToAdd){
    let lsKey = localStorage.getItem(keyName);
    if (lsKey){
        let parsedArray = JSON.parse(lsKey);
        parsedArray.push(objToAdd);
        localStorage.setItem(keyName, JSON.stringify(parsedArray));
    } else {
        throw new Error('Error!');
    }
}

addObjToLs('sessionsList', {name: 'asdas'});

// -----------------------------------------------------------------

// task 7

// #kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
//  третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let formTable = document.querySelector('.form2');
let container = document.querySelector('.table-container');

formTable.addEventListener('submit', (event)=>{
    event.preventDefault();

    let columnInput = +(formTable.elements['columns'].value);
    let rowsInput = +(formTable.elements['rows'].value);
    let textInput = formTable.elements['insidetext'].value;

    let table = document.createElement('table');
    table.style.border = "1px solid";

    for (let i = 0; i < columnInput; i++) {
        let tableTr = document.createElement('tr');
        tableTr.style.border = "1px solid";
        for (let j = 0; j < rowsInput; j++) {
            let tableTd = document.createElement('td');
            tableTd.style.border = "1px solid";
            tableTd.innerText = textInput;
            tableTr.appendChild(tableTd);
        }
        table.appendChild(tableTr);
    }
    container.appendChild(table);
})