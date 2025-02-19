// task 1

// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(1, 'vlad', 'prydatchenko', 'pridatchenkovladislav@gmail.com', '+380995693264'),
//     new User(2, 'danya', 'rodikov', 'pesth@gmail.com', '+380546787'),
//     new User(3, 'max', 'kostenko', 'srtdhr@gmail.com', '+3804565678'),
//     new User(4, 'dmytro', 'vlasyk', 'asr4sgb@gmail.com', '+380678987654'),
//     new User(5, 'alexei', 'chunyak', 'EWTQWrDSRHR@gmail.com', '+38096787564'),
//     new User(6, 'olexander', 'bondaruk', 'rhggdfrh@gmail.com', '+3808767576453'),
//     new User(7, 'olya', 'zaharchenko', 'zxcvbhgfds@gmail.com', '+3804545'),
//     new User(8, 'misha', 'kolodych', 'iuyhgfrth@gmail.com', '+38054355456'),
//     new User(9, 'dmytro', 'pryhodchenko', 'kjhghjiuytr@gmail.com', '+3806544567'),
//     new User(10, 'tboma', 'nidzelskiy', 'vbfggftyu@gmail.com', '+3805676567'),
// ]
// console.log(users);


// --------------------------------------------------------------------

//task 2

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(users.filter(value => value.id % 2 === 0));

// --------------------------------------------------------------------

//task 3

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(users.sort((a, b) => b.id - a.id));

// -------------------------------------------------------------------

// task 4

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// function Client(id, name, surname, email, phone, order) {
//     User.apply(this, arguments);
//     this.order = order;
// }
//
// let clients = [
//     new Client(1, 'vlad', 'prydatchenko', 'pridatchenkovladislav@gmail.com', '+380995693264', ['banan', 'tv', 'mushroom', 'banan', 'tv', 'mushroom']),
//     new Client(2, 'danya', 'rodikov', 'pesth@gmail.com', '+380546787', ['potato', 'ads', 'mushroom', 'aeawef', 'mushroom']),
//     new Client(3, 'max', 'kostenko', 'srtdhr@gmail.com', '+3804565678', ['cheese', 'afwa', 'mushroom']),
//     new Client(4, 'dmytro', 'vlasyk', 'asr4sgb@gmail.com', '+380678987654', ['phone', 'aeawef', 'mushroom', 'aeawef', 'mushroom', 'aeawef', 'mushroom']),
//     new Client(5, 'alexei', 'chunyak', 'EWTQWrDSRHR@gmail.com', '+38096787564', ['cabbage', 'rbse', 'mushroom', 'banan', 'tv', 'mushroom', 'banan', 'tv', 'mushroom']),
//     new Client(6, 'olexander', 'bondaruk', 'rhggdfrh@gmail.com', '+3808767576453', ['mouse', 'ytkm']),
//     new Client(7, 'olya', 'zaharchenko', 'zxcvbhgfds@gmail.com', '+3804545', ['keyboard', 'fsgsg', 'mushroom']),
//     new Client(8, 'misha', 'kolodych', 'iuyhgfrth@gmail.com', '+38054355456', ['lamp']),
//     new Client(9, 'dmytro', 'pryhodchenko', 'kjhghjiuytr@gmail.com', '+3806544567', ['headphones', 'mnbr', 'mushroom', 'aeawef', 'mushroom']),
//     new Client(10, 'tboma', 'nidzelskiy', 'vbfggftyu@gmail.com', '+3805676567', ['cable', 'awrewf', 'mushroom', 'aeawef']),
// ]
//
// console.log(clients);

// -------------------------------------------------------------------

// task 5

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clients.sort((a, b) => a.order.length - b.order.length));

// --------------------------------------------------------------------

//task 6

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, manufacture, maxSpeed, capacity) {
//     this.model = model;
//     this.producer = producer;
//     this.manufacture = manufacture;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//     this.info = function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = maxSpeed + newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.manufacture = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
//
// let firstCar = new Car('Corolla', 'Toyota', 2007, 165, 1.8);
// console.log(firstCar);
// firstCar.addDriver('Maxim');
// console.log(firstCar);
// firstCar.info();
// firstCar.increaseMaxSpeed(20);
// console.log(firstCar);

// ---------------------------------------------------------------

// task 7

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, manufacture, maxSpeed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.manufacture = manufacture;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//     }
//
//     static drive() {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//
//     info() {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     }
//     increaseMaxSpeed (newSpeed){
//         return this.maxSpeed += newSpeed;
//     }
//
//     changeYear (newYear){
//         return this.manufacture = newYear;
//     }
//
//     addDriver (driver){
//         return this.driver = driver;
//     }
//
//
// }
//
// let rest = new Car('111', '222', '333', 421, 18);
// // console.log(rest);
//
// rest.info();
//
// console.log('-----------------------');
// rest.increaseMaxSpeed(100);
// rest.changeYear(2005);
// rest.addDriver('ivan');
// rest.info();

// ---------------------------------------------------------------

// task 8

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Popelushka(name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let popArray = [
//     new Popelushka('popelushka1', 17, 36),
//     new Popelushka('popelushka2', 18, 37),
//     new Popelushka('popelushka3', 19, 38),
//     new Popelushka('popelushka4', 20, 39),
//     new Popelushka('popelushka5', 17, 36),
//     new Popelushka('popelushka6', 18, 37),
//     new Popelushka('popelushka7', 19, 38),
//     new Popelushka('popelushka8', 20, 39),
//     new Popelushka('popelushka9', 11, 46),
//     new Popelushka('popelushka10', 12, 52),
// ]
//
// console.log(popArray);
//
// function Prince(name, age, footFound){
//     this.name = name;
//     this.age = age;
//     this.footFound = footFound;
//
//     this.find = () => {
//         for (const girl of popArray) {
//             if (girl.footSize === footFound){
//                 return girl;
//             }
//         }
//     }
//
//     this.find2 = () => popArray.find(foot => foot.footSize === this.footFound);
// }
//
// let prince = new Prince('popelushka1', 17, 46);
// console.log(prince.find());
//
// console.log(prince.find2());


// -----------------------------------------------------------------

// task 9


// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.myForEach = function (callback) {
//     for (const item of this) {
//         callback(item);
//     }
// }
//
// let x = [];
// // Добавляє 1 в кожен елемент списку
// ['111', '222', '333', '444'].myForEach(item => x.push(item + 1));
//
// console.log(x);
//
// Array.prototype.myFilter = function (value){
//     arrayOut = []
//     for (const x of this) {
//         if (value(x)){
//             arrayOut.push(x)
//         }
//     }
//     return arrayOut;
// };
//
// let array = ['1111', '22', '333555', '444154134'];
//
// console.log(array.myFilter(x => x.length > 4));