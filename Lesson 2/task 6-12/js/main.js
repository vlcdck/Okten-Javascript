// task 6
//#bAUsaq6LI

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}

//task 7
// #3ckURgvs

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).

let time = 15;

if (0 <= time && time <= 15) {
    console.log('Перша чверть');
} else if (15 < time && time <= 30) {
    console.log('Друга чверть');
} else if (30 < time && time <= 45) {
    console.log('Третя чверть');
} else if (45 < time && time <= 60) {
    console.log('Четверта чверть');
} else {
    console.log('PROBLEM!')
}

//task 8
// #UMoNq4biWGe

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day = 31;

if (0 <= day && day <= 10) {
    console.log('Перша декада');
} else if (10 < day && day <= 20) {
    console.log('Друга декада');
} else if (20 < day && day <= 31) {
    console.log('Третя декада');
}

//task 9
//#KzrtqyQ

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNum = parseInt(prompt('Порядковий номер дня тижня'));

switch (dayNum) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Monday');
        break;
    default:
        console.log('Error!');
}

//task 10
//#uwsz1RnTQJ1

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let firstUserNum = parseInt(prompt('Number 1?'));
let secondUserNum = parseInt(prompt('Number 2?'));


if (firstUserNum === secondUserNum) {
    console.log('Same');
} else if (firstUserNum > secondUserNum) {
    console.log('Number 1 is bigger');
} else {
    console.log('Number 2 is bigger');
}

//task 11
//#iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//  тобто ті, які приводиться до false, а це 0 null undefined і тд).

let z = 1;

if (!z) {
    z = 'default';
    console.log(z);
} else {
    console.log(z);
}

//task 12
//#awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
