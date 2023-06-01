let shopItemsData=[{
    id:"abc",
    name:"Casual Shirt",
    price:45,
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ipsum enim veniam beatae harum est corporis obcaecati. Porro fugiat ut, voluptatem quibusdam labore delectus quod ipsam neque atque non excepturi?",
    img:"img-1.jpg"
},{
    id:"bca",
    name:"Office Shirt",
    price:100,
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ipsum enim veniam beatae harum est corporis obcaecati. Porro fugiat ut, voluptatem quibusdam labore delectus quod ipsam neque atque non excepturi?",
    img:"img-2.jpg"
},{
    id:"cab",
    name:"T Shirt",
    price:25,
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ipsum enim veniam beatae harum est corporis obcaecati. Porro fugiat ut, voluptatem quibusdam labore delectus quod ipsam neque atque non excepturi?",
    img:"img-3.jpg"
},{
    id:"bac",
    name:"Mens Suit",
    price:300,
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ipsum enim veniam beatae harum est corporis obcaecati. Porro fugiat ut, voluptatem quibusdam labore delectus quod ipsam neque atque non excepturi?",
    img:"img-4.jpg"
},];

let label=document.getElementById("label");
let ShoppingCart=document.getElementById("shopping-cart");

let basket=JSON.parse(localStorage.getItem("data")) || [];

console.log(basket);

let calculation=()=>{
    let cartIcon=document.getElementById("cartAmount");
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
}
calculation();

let generateCartItems=()=>{

};