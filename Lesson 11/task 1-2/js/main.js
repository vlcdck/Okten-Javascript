// task 1

// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let wrapCart = document.querySelector('#cartWrapper');

fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(objectCart => {
        const {carts} = objectCart;

        // перебір кожного об'єкта та створення розмітки під його поля

        for (const cart of carts) {
            const divContainer = document.createElement("div");
            divContainer.classList.add('cart-container');

            const divMainInfo = document.createElement("div");
            divMainInfo.classList.add('cart-info');

            const userId = document.createElement('h2');
            userId.classList.add('userID');
            userId.innerText = `User id - ${cart.userId}`;

            const priceContainer = document.createElement('div');
            priceContainer.classList.add('price-container');
            const totalPrice = document.createElement('p');
            totalPrice.classList.add('total-price');
            totalPrice.innerText = `Total cart price - ${cart.total}`;
            const discountPrice = document.createElement('p');
            discountPrice.classList.add('discount-price');
            discountPrice.innerText = `Cart Sale price - ${cart.discountedTotal}`;
            priceContainer.append(totalPrice, discountPrice);

            const quantityContainer = document.createElement('div');
            quantityContainer.classList.add('quantity-container');
            const totalProducts = document.createElement('p');
            totalProducts.classList.add('total-products');
            totalProducts.innerText = `Types of products - ${cart.totalProducts}`;
            const totalQuantity = document.createElement('p');
            totalQuantity.classList.add('total-quantity');
            totalQuantity.innerText = `Total products - ${cart.totalQuantity}`;
            quantityContainer.append(totalProducts, totalQuantity);

            divMainInfo.append(userId, priceContainer, quantityContainer);

            const productsContainer = document.createElement('div');
            productsContainer.classList.add('products-container');


            // перебір продуктів у корзині та створення картки з полями

            for (const product of cart.products) {

                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                const productImg = document.createElement('img');
                productImg.classList.add('product-img');
                productImg.src = product.thumbnail;

                const productTitle = document.createElement('h3');
                productTitle.classList.add('product-title');
                productTitle.innerText = product.title;

                const productPrice = document.createElement('p');
                productPrice.classList.add('product-price');
                productPrice.innerText = `Price - ${product.price}`;

                const productQuantity = document.createElement('p');
                productQuantity.classList.add('product-quantity');
                productQuantity.innerText = `Quantity - ${product.quantity}`;

                const priceTotal = document.createElement('p');
                priceTotal.classList.add('price-total');
                priceTotal.innerText = `Total price - ${product.total}`;

                const discountedTotal = document.createElement('p');
                discountedTotal.classList.add('discounted-total');
                discountedTotal.innerText = `Sale price - ${product.discountedTotal}`;

                productCard.append(productImg, productTitle, productPrice, productQuantity, priceTotal);
                productsContainer.append(productCard);
            }

            // об'єднання всього

            divContainer.append(divMainInfo, productsContainer);
            wrapCart.appendChild(divContainer);
            document.body.append(wrapCart);
        }
    })



// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.