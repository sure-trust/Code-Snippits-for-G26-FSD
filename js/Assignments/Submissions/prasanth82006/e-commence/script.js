import { getAllProduct, test } from "./utils/script.js";

test();

const listProducts = async () => {
     const res = await getAllProduct();
     const productsListElement = document.getElementById("productList");

     res.forEach((productData) => {
          console.log(productData);

          if (productData) {
               const cardDiv = document.createElement("div");
               cardDiv.className ="w-[300px] h-auto my-2 overflow-hidden border p-4 flex flex-col gap-2";

               const cardImage = document.createElement("img");
               cardImage.src = productData.image;
               cardImage.className = "w-full h-[300px] object-cover";

               const cardTitle = document.createElement("h3");
               cardTitle.textContent = productData.title;
               cardTitle.className = "text-sm font-semibold";

               const cardDes = document.createElement("p");
               cardDes.textContent = productData.description.slice(0, 50) + "...";
               cardDes.className = "text-xs text-gray-600";

               const cardCategory = document.createElement("p");
               cardCategory.textContent = productData.category;
               cardCategory.className = "text-xs italic text-gray-500";

               const cardPrice = document.createElement("span");
               cardPrice.textContent = `$${productData.price}`;
               cardPrice.className = "font-bold text-lg";

               const cardRating = document.createElement("span");
               cardRating.textContent = `⭐ ${productData.rating.rate}`;
               cardRating.className = "text-yellow-500 font-medium";

               const wrapperForRatingAndPrice = document.createElement("div");
               wrapperForRatingAndPrice.className = "flex justify-between items-center";
               wrapperForRatingAndPrice.appendChild(cardPrice);
               wrapperForRatingAndPrice.appendChild(cardRating);

               const cardAddToCart = document.createElement("button");
               cardAddToCart.className =
                    "border bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600";
               cardAddToCart.textContent = "Add to Cart";

               cardAddToCart.addEventListener("click", () => {
                    let cartProds = localStorage.getItem("cart");
                    if (cartProds) {
                      let newList = JSON.parse(cartProds);
                      newList.push(productData);
                      localStorage.setItem("cart", JSON.stringify(newList));
                    } else {
                      let newList = [productData];
                      localStorage.setItem("cart", JSON.stringify(newList));
                    }
                  });
                  

               cardDiv.appendChild(cardImage);
               cardDiv.appendChild(cardTitle);
               cardDiv.appendChild(cardDes);
               cardDiv.appendChild(cardCategory);
               cardDiv.appendChild(wrapperForRatingAndPrice);
               cardDiv.appendChild(cardAddToCart);

               productsListElement.appendChild(cardDiv);
          }
     });
};

listProducts();
const cartButton = document.getElementById("CartButton");
if (cartButton) {
    cartButton.addEventListener("click", () => {
        window.location.href = "http://127.0.0.1:5500/e-commence/cart/j/index.html";
    });
}