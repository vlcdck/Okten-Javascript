// // #whXxOBlYS0H
// // - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

const recipeUrl = new URL('https://dummyjson.com/recipes');
recipeUrl.searchParams.set('limit', '100');


const wrapper = document.querySelector('.wrapper');

fetch(recipeUrl)
    .then(value => value.json())
    .then(objRecipe => {
        const {recipes} = objRecipe;

        for (const recipe of recipes) {
            console.log(recipe)
            const recipeDiv = document.createElement('div');

            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])) {

                    const arrayDiv = document.createElement('div');
                    const title = document.createElement('h2');
                    title.innerText = `${recipeKey}:`;
                    const ol = document.createElement('ol');
                    const array = recipe[recipeKey];
                    for (const item of array) {
                        const li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    arrayDiv.append(title, ol);
                    recipeDiv.appendChild(arrayDiv);
                } else  {
                    if (recipeKey !== 'image'){
                        const keyDiv = document.createElement('div');
                        keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                        recipeDiv.appendChild(keyDiv);
                    }
                }
            }
            const img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);


            wrapper.appendChild(recipeDiv);
        }
    })