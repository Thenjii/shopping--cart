let shop = document.getElementById("shop");

let cart = [];

let shopItemsData = [
{
    id:"item1",
    name:"Abstract Hoop",
    price: 55,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-1.jpg"
},
{
    id:"item2",
    name:"Bold Square Earings",
    price: 45,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-2.jpg"
},
{
    id:"item3",
    name:"Ear Stack Set",
    price: 50,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-3.jpg"
},
{
    id:"item4",
    name:"Spiral Hoops",
    price: 45,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-4.jpg"
},
{
    id:"item5",
    name:"Ovals Necklace",
    price: 65,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-5.jpg"
},
{
    id:"item6",
    name:"Ring Stack Set",
    price: 40,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-6.jpg"
},
{
    id:"item7",
    name:"Spine Necklace",
    price: 95,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-7.jpg"
},
{
    id:"item8",
    name:"Simple Necklace and Bracelet Set",
    price: 80,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-8.jpg"},]

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let{id,name,price,desc,img} = x
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
                    <i onclick="decrease(${id})" class="bi bi-dash-lg"></i>
                    <div id = ${id} class="quantity">0</div>
                    <i onclick="increase(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    `;
    }).join(""));
};
  
generateShop();

// no. of items
let decrease = (id) =>{
    let selectedItem = id;
    let search = cart.find((x) => x.id === selectedItem);

    if(search.item === 0) return;
        else {
        search.item -= 1;
    }
    //console.log(cart); 
    update(selectedItem.id); 
}

let increase = (id) => {
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
    //console.log(cart);
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
    cartIcon.innerHTML = cart.map((x)=>x.item).reduce((x,y)=>x+y,0)
}