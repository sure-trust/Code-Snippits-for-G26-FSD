 const platformFee= 100;
 OnLoad();
function OnLoad(){
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}
function loadBagItemObjects() {
  console.log(bagItem);
  bagItemObjects = bagItem.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems() {
  let containerElement = document.querySelector('.products-container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function  generateItemHTML(item){
return `<div class="product-container">
  <img class= 'image'src="${item.image}">
  <button class="remove-btn" onclick=" removeBagItem(${item.id})"> X</button>
  <div class="details">
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">${item.current_price}</span>
          <span class="original-price">${item.original_price}</span>
          <span class="discount">${item.discount_percentage}% OFF</span>
      </div>
      <div class="return">14 day return available</div>
  </div>
  </div>`
}
function removeBagItem(itemId)
{
  bagItem= bagItem.filter(bagItemId => bagItemId!=itemId)
  localStorage.setItem("bagItems", JSON.stringify(bagItem));
  OnLoad();
}
function displayBagSummary(){
  totalMRP=0;
  totalCurrentPrice=0;

  bagItemObjects.forEach(bagitem =>{
    totalMRP+= bagitem.original_price;
    totalCurrentPrice+= bagitem.current_price;
  })
  discount=totalMRP-totalCurrentPrice;

  bagSummaryElement= document.querySelector('.bag-summary');
  bagSummaryElement.innerHTML=`<div class="price-details">PRICE DETAILS (${bagItemObjects.length} Items)</div>
      <div class="mrp">
        <span>Total MRP</span>
        <span>₹${totalMRP}</span>
      </div>
      <div class="discount-mrp">
        <span>Discount on MRP</span>
        <span>₹${discount}</span>
      </div>
      <div class="fee">
        <span>Platform Fee</span>
        <span>₹${platformFee}</span>
      </div>
      <hr>
      <div class="totalamount">
        <span>Total Amount</span>
        <span>₹${totalMRP-discount+platformFee}</span>
      </div>
      <button class="place-order">PLACE ORDER</button>`;
}
