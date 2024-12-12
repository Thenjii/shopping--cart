let shop = document.getElementById("shop");

let cart = JSON.parse(localStorage.getItem("data")) || [];


let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let{id,name,price,desc,img} = x;
        let search = cart.find((x)=>x.id === id) || []
        return`
        <div id = product-id-${id} class="item">
            <img width="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
            </div>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i onclick="remove(${id})" class="bi bi-dash-lg"></i>
                    <div id = ${id} class="quantity">
                        ${search.item === undefined? 0: search.item}
                    </div>
                    <i onclick="add(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>`;
    }).join(""));
};
  
generateShop();

// no. of items
let remove = (id) =>{
    let selectedItem = id;
    let search = cart.find((x) => x.id === selectedItem);

    if(search === undefined) return;
    else if(search.item === 0) return;
        else {
        search.item -= 1;
    }
    localStorage.setItem("data", JSON.stringify(cart));
    //console.log(cart); 
    update(selectedItem.id); 
}

let add = (id) => {
    let selectedItem = id;
    let search = cart.find((x) => x.id === selectedItem);

    if(search === undefined) {
        cart.push({
            id: selectedItem = id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(cart));
    
    update(selectedItem.id);
};

let update = (id)=>{
    let search = cart.find((x) => x.id === id);

    // console.log(id);
    document.getElementById(id).innerHTML = search;
    cartTotal()
};

let cartTotal = ()=>{
    let cartIcon = document.getElementById("cartAmount");  
    cartIcon.innerHTML = cart.map((x)=>x.item).reduce((x,y)=>x+y,0);
};

cartTotal();