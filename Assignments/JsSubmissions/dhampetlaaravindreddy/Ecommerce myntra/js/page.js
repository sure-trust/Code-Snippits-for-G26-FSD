let bagItem = [];
onLoad();

function onLoad() {
  let bagstr = localStorage.getItem("bagItems"); // Use a consistent key
  bagItem = bagstr ? JSON.parse(bagstr) : [];
  displayItemsOnHomePage();
  bagCount();
}

function addToBag(itemId) {
  bagItem.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItem)); // Use the consistent key
  console.log(bagItem);
  bagCount();
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
      <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
      </div>`;
  });
  itemsContainerElement.innerHTML = innerHtml;
}

function bagCount() {
  let bagcountElement = document.querySelector(".bag-item-count");
  if (bagcountElement) {
    bagcountElement.innerHTML = `${bagItem.length}`;
  }
}
