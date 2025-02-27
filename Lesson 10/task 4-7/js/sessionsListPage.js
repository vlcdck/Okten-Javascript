const sessionsList = JSON.parse(localStorage.getItem('sessionsList'));

let z =document.createElement("div");

for (const date of sessionsList) {
    let x = document.createElement("h3");
    x.innerText = date;
    z.append(x);
}

document.body.append(z)
console.log(sessionsList);