//task 1
//#67kfznmiMl

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = [12, 54, 2, 'hello', 'okten', '120', true, 100200, 54.12, '122.5'];

console.log(array);

// or

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// task 2, task 3 об'єднані в одне, так як вони схожі за концепцією
//#LARqoUj5I
//#sA3Gg1sCp

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'Whitcher',
    pageCount: 235,
    genre: 'Fantasy',
    authors: [
        {
            name: 'Andrzej',
            age: 76,
        },
        {
            name: 'Henryk',
            age: 69,
        },
    ]
}

let book2 = {
    title: 'Chemistry: The Molecular Science',
    pageCount: 802,
    genre: 'Science',
    authors: [
        {
            name: 'John',
            age: 65,
        },
        {
            name: 'Conrad',
            age: 57,
        },
    ]
}

let book3 = {
    title: 'You are not so smart',
    pageCount: 155,
    genre: 'Psychology',
    authors: [
        {
            name: 'David',
            age: 46,
        },
    ]
}

//task 4
//#jCHFnEbdmFd

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username, password. Вивести в
// консоль пароль кожного користувача

let userArr = [
    {
        name: 'Vlad',
        username: 'vlqdck',
        password: 'qwerty12',
    },
    {
        name: 'Olekasndr',
        username: 'Majony',
        password: 'BesTjoom15',
    },
    {
        name: 'Daniil',
        username: 'reckless',
        password: 'NoTick5113_',
    },
    {
        name: 'Artem',
        username: 'Nidzelskiy',
        password: 'rmcitmgmso834dj_fkef',
    },
    {
        name: 'Artem',
        username: 'artemkp',
        password: 'csdfjdme2881kdjr',
    },
    {
        name: 'Dmytro',
        username: 'kitoyaka',
        password: 'vcjdjtnxd084-srr',
    },
    {
        name: 'Dmytro',
        username: 'D.',
        password: 'wetufmfuy3595',
    },
    {
        name: 'Oles',
        username: 'oles1337',
        password: 'eokernh522',
    },
    {
        name: 'Alex',
        username: 'drainersha',
        password: 'ghdifmnfb1233',
    },
    {
        name: 'Anzhelika',
        username: 'nameless',
        password: 'vekrnddd1884',
    },
]

// Вивів також username для наглядності

console.log(userArr[0].username, userArr[0].password);
console.log(userArr[1].username, userArr[1].password);
console.log(userArr[2].username, userArr[2].password);
console.log(userArr[3].username, userArr[3].password);
console.log(userArr[4].username, userArr[4].password);
console.log(userArr[5].username, userArr[5].password);
console.log(userArr[6].username, userArr[6].password);
console.log(userArr[7].username, userArr[7].password);
console.log(userArr[8].username, userArr[8].password);
console.log(userArr[9].username, userArr[9].password);

// task 5
//#coYydZuaeEB

//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний
// масив з 21 значенням вичключаємо одразу


let weekTemp = [
    {
        day: 'monday',
        morningTemp: 15,
        dayTemp: 20,
        nightTemp: 14
    },
    {
        day: 'tuesday',
        morningTemp: 16,
        dayTemp: 22,
        nightTemp: 16
    },
    {
        day: 'wednesday',
        morningTemp: 13,
        dayTemp: 16,
        nightTemp: 12
    },
    {
        day: 'Thursday',
        morningTemp: 15,
        dayTemp: 19,
        nightTemp: 10
    },
    {
        day: 'Friday',
        morningTemp: 10,
        dayTemp: 13,
        nightTemp: 8
    },
    {
        day: 'Saturday',
        morningTemp: 12,
        dayTemp: 18,
        nightTemp: 11
    },
    {
        day: 'Sunday',
        morningTemp: 15,
        dayTemp: 20,
        nightTemp: 14
    },
]