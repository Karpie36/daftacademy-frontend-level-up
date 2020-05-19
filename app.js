const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, 'docs')))

app.use(bodyParser.json())

app.listen(8000, () => console.log('Listening on 8000'))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/carousel', (request, response) => {

    response.json({
        status: 'success',
        carousel_element: '<div class="glider-inner"><div class="glider-inner__description"><p class="description__title">Name placeholder</p><p class="description__price">$99.99</p></div><img class="glider-inner__image" src="https://via.placeholder.com/220x338" alt="Silde image"></div>',
    })
})

app.get('/all_products', (request, response) => {

    response.json({
        status: 'success',
        product_element: '<div class="pt-4 col-6 col-md-3"><div class="card"><img src="https://via.placeholder.com/309x390" class="item-pic-placeholder card-img-top" alt="Item placeholder"><div class="card-body"> <h5 class="card-title"><img class="icon-placeholder" src="src/assets/9 View mobile/kz-number-one.svg" alt="Number One icon">ICON PLACEHOLDER </h5> <p class="card-product__name">PRODUCT NAME PLACEHOLDER</p><p class="card-product__price">PRICE $ <span class="card-product__sale">SALES $</span></p><div class="card-action d-flex justify-content-between"><button class="card-action__buy btn">ADD TO CARD </button><button class="btn card-action__save"><img src="src/assets/9 View mobile/-e-kz-heart.svg" alt="Hearth icon"></button></div></div></div></div>',
    })
})

app.get('/blog', (request, response) => {

    response.json({
        status: 'success',
        blog_element: '<div class="mt-2 col-12 col-md-5 article"><div class="article-description"><h5 class="article-description__header">ARTICLE NAME PLACEHOLDER</h5><a href="#" class="article-description__link">Shop now</a></div><img src="https://via.placeholder.com/547x630" class="article__pic-placeholder" alt="Article placeholder"></div><div class="mt-2 col-12 col-md-7"><div class="row"><div class="mt-2 mt-md-0 col-12 col-md-6 article"><div class="article-description"><h5 class="article-description__header">ARTICLE NAME PLACEHOLDER</h5><a href="#" class="article-description__link">Shop now</a></div><img src="https://via.placeholder.com/380x310" class="article__pic-placeholder" alt="Article placeholder"></div><div class="mt-2 mt-md-0 col-12 col-md-6 article"><div class="article-description"><h5 class="article-description__header">ARTICLE NAME PLACEHOLDER</h5><a href="#" class="article-description__link">Shop now</a></div><img src="https://via.placeholder.com/380x310" class="article__pic-placeholder" alt="Article placeholder"></div></div><div class="row"><div class="mt-2 col-12 article"><div class="article-description"><h5 class="article-description__header">ARTICLE NAME PLACEHOLDER</h5><a href="#" class="article-description__link">Shop now</a></div><img src="https://via.placeholder.com/769x310" class="article__pic-placeholder" alt="Article placeholder"></div></div></div>'
    })
})