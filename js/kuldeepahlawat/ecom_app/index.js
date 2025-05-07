import { test, getAllProducts } from './utils/index.js'
var ProdList

var listPrducts = async (productListElement) => {
    const res = await getAllProducts()
    ProdList = res


    res.forEach((productData) => {
        // console.log(productData)
        if (productData) {
            // {
            //     "id": 19,
            //     "title": "Opna Women's Short Sleeve Moisture",
            //     "price": 7.95,
            //     "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
            //     "category": "women's clothing",
            //     "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
            //     "rating": {
            //         "rate": 4.5,
            //         "count": 146
            //     }
            // }
            // do something here to add a card for list
            const cardDiv = document.createElement('div')
            cardDiv.className = 'w-[300px] h-[300px] my-1 overflow-hidden border p-2 flex flex-col'
            const cardTitle = document.createElement('h3')
            cardTitle.textContent = productData.title
            cardTitle.className = 'text-sm'
            const cardImage = document.createElement('img')
            cardImage.src = productData.image
            cardImage.className = 'w-full h-[150px] bg-cover'
            const cardDesc = document.createElement('p')

            cardDesc.textContent = `${productData.description.slice(0, 35)}...`
            const cardCategory = document.createElement('p')
            cardCategory.className = 'text-xs'
            cardCategory.textContent = productData.category
            const cardPrice = document.createElement('span')
            cardPrice.textContent = `${productData.price}₹ `
            const cardRating = document.createElement('span')
            cardRating.textContent = productData.rating.rate

            // cardDiv.textContent = productData.title

            cardDiv.appendChild(cardImage)
            cardDiv.appendChild(cardCategory)
            cardDiv.appendChild(cardTitle)
            cardDiv.appendChild(cardDesc)
            const wrapperForRatingAndPrice = document.createElement('div')
            wrapperForRatingAndPrice.appendChild(cardPrice)
            wrapperForRatingAndPrice.appendChild(cardRating)
            cardDiv.appendChild(wrapperForRatingAndPrice)




            const cardAddToCart = document.createElement('button')
            cardAddToCart.className = ' border bg-red-500 duration-200 hover:bg-red-300 text-white cursor-pointer'
            cardAddToCart.textContent = 'Add To Cart'
            cardAddToCart.addEventListener('click', () => {
                console.log('clicked on ', productData.title)
                let cartProds = localStorage.getItem('cart')
                console.log(cartProds)
                if (cartProds != null) {
                    let newList = [...JSON.parse(cartProds)]
                    newList.push(productData)
                    console.log('if')
                    localStorage.setItem('cart', JSON.stringify(newList))
                } else {
                    console.log('else')
                    let newList = []
                    newList.push(productData)
                    // console.log(JSON.stringify(newList))
                    localStorage.setItem('cart', JSON.stringify(newList))
                }


            })




            cardDiv.appendChild(cardAddToCart)
            productListElement.appendChild(cardDiv)



        }


    })


}

const productListElement = window.document.getElementById('productList')
if (productListElement) console.log(productListElement)

listPrducts(productListElement)


let cartButtonNav= document.getElementById('cartButton')

if(cartButtonNav){
    cartButtonNav.addEventListener('click',()=>{
        console.log(window.location.origin)
        document.location =window.location.origin+'/cart'
    })
}