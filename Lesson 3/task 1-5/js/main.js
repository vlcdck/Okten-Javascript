// task 1, 2 Об'єднав

// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

document.write(`<div class="block-wrapper">`)
document.write(`<div class="block">`)
for (let i = 0; i < 10; i++) {
    document.write(`
        <div>
        <h1>Hello Okten!</h1>
        <p>Index ${i + 1}</p>
        </div>`)
}
document.write(`</div>`)

//<p>index ${i + 1}</p> + 1 для того щоб починалось не з 0 а з 1


// --------------------------------------------------------------------------------------


// task 3, 4 Об'єднав

// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

document.write(`<div class="block">`)
let i = 0;
while (i < 20) {
    document.write(`
    <div>
    <h1>ZuPs! + ${i + 1}</h1>
    </div>
    `)
    i++;
}
document.write(`</div>`)
document.write(`</div>`)
// ---------------------------------------------------------------------------------------------

// task 5

// #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for (let i = 0; i < listOfItems.length; i++) {
    const listOfItem = listOfItems[i];
    document.write(`
        <li>${listOfItem}</li>
    `)
}
document.write(`</ul>`)

// -------------------------------------------------------------------------------------------


