let shop = document.getElementById("shop");

let shopItemsData = [
{
    id:"ghj",
    name:"Abstract Hoop",
    price: 55,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-1.jpg"
},
{
    id:"ghjk",
    name:"Bold Square Earings",
    price: 45,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-2.jpg"
},
{
    id:"ghjl",
    name:"Ear Stack Set",
    price: 50,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-3.jpg"
},
{
    id:"ghjm",
    name:"Spiral Hoops",
    price: 45,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-4.jpg"
},
{
    id:"ghjn",
    name:"Ovals Necklace",
    price: 65,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-5.jpg"
},
{
    id:"ghjo",
    name:"Ring Stack Set",
    price: 40,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-6.jpg"
},
{
    id:"ghj",
    name:"Spine Necklace",
    price: 95,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-7.jpg"
},
{
    id:"ghj",
    name:"Simple Necklace and Bracelet Set",
    price: 80,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "img-8.jpg"},]

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let{id,name,price,desc,img,} = x
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
                    <i class="bi bi-dash-lg"></i>
                    <div id = ${id} class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    `;
    }).join(""));
};
  
generateShop();