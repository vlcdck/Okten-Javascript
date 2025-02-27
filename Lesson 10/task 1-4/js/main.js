// task 1

// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let blockHide = document.getElementById('text');
let btnHide = document.getElementsByClassName('btn-txt')[0];

btnHide.addEventListener('click', () => {
    blockHide.style.display = 'none';
});

// ---------------------------------------------------------------------------------

// task 2

// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

const age = document.getElementById('form1');

age.addEventListener('submit', function (event) {
    event.preventDefault();

    let ageInp = document.getElementById('ageInput');

    if (ageInp.value < 18) {
        console.log('Ви не повнолітні');
    } else {
        console.log('Ви повнолітні');
    }
})

// ------------------------------------------------------------------------------

// task 3

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const form2 = document.getElementById('form2');

form2.addEventListener('submit', function (event){
    event.preventDefault();

    let nameInput = document.getElementById('nameInput');
    let surnameInput = document.getElementById('surnameInput');
    let ageInp = document.getElementById('ageInp');

    let usrBlock = document.createElement("div");
    let userName = document.createElement('h2');
    let userSurname = document.createElement('h2');
    let userAge = document.createElement("p");

    userName.innerText = nameInput.value;
    userSurname.innerText = surnameInput.value;
    userAge.innerText = ageInp.value;

    usrBlock.append(userName, userSurname, userAge);
    document.body.append(usrBlock);

})

// ---------------------------------------------------------------------

// task 4

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1

let number = +localStorage.getItem('number');
number +=1;
localStorage.setItem('number', number);
document.getElementsByClassName('counter')[0].innerText = number;

