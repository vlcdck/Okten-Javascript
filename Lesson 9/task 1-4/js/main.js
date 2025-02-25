// task 1

// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.background = 'black';
block.style.color = 'white';
block.style.fontSize = '22px';
block.style.width = '200px';
block.style.height = '200px';
block.innerText = 'HELLO!';

let clonedBlock = block.cloneNode(true);
document.body.append(block, clonedBlock);


// -------------------------------------------------------------------

//task 2

// #OPLI89c9G
// - Є масив:
let array = ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let list = document.createElement('ul');

for (const item of array) {
    let listElement = document.createElement("li");
    listElement.innerText = item;
    list.appendChild(listElement);
}

document.body.append(list);

// ---------------------------------------------------------------------

//task 3

// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let block = document.createElement('div');
    let titleElement = document.createElement('h2');
    let monthDurationElement = document.createElement('p');
    titleElement.innerText = course.title;
    monthDurationElement.innerText = course.monthDuration;
    block.append(titleElement, monthDurationElement);
    document.body.append(block);
}

// ------------------------------------------------------------------------------

// task 4

// #Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.classList.add('item');
    let titleElement = document.createElement('h1');
    titleElement.classList.add('heading')
    let monthDurationElement = document.createElement('p');
    monthDurationElement.classList.add('description')

    titleElement.innerText = course.title;
    monthDurationElement.innerText = course.monthDuration;
    block.append(titleElement, monthDurationElement);
    document.body.append(block);
}