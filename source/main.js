let shop = document.getElementById("shop");

//get cart data from local storage / declare it empty
let cart = JSON.parse(localStorage.getItem("data")) || [];

//generate items & display them in the DOM 
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = cart.find((x) => x.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>R ${price} </h2>
            <div class="buttons">
              <i onclick="remove(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="add(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

//displays shop items
generateShop();

//add items to cart
let add = (id) => {
  let selectedItem = id;
  //checks if items is in cart
  let search = cart.find((x) => x.id === selectedItem.id);

  //adds 1 to cart if item isnt in cart
  if (search === undefined) {
    cart.push({
      id: selectedItem.id,
      item: 1,
    });
    //increase # of item if it's in cart
  } else {
    search.item += 1;
  }

  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(cart));
};

//remove items from cart
let remove = (id) => {
  let selectedItem = id;
  let search = cart.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  cart = cart.filter((x) => x.item !== 0);
  
  localStorage.setItem("data", JSON.stringify(cart));
};

let update = (id) => {
  let search = cart.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();