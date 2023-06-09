let shop=document.getElementById("shop");

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

let basket=JSON.parse(localStorage.getItem("data")) || [];

//es6 arrow function
let generateShop=()=>{
    return (shop.innerHTML=shopItemsData.map((x)=>{
        let {id,name,price,desc,img}=x;
        let search=basket.find((x)=>x.id===id) || [];
        return `
        <div id=product-id-${id} class="item">
        <img src=${img} width="220">
        <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"> </i>
                <div id=${id} class="quantity">${search.item===undefined? 0:search.item}</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"> </i>
            </div>
        </div>
        </div>
    </div>
    `
    }).join(""));
};

generateShop();


let increment=(id)=>{
     let selectedItem=id;
     let search=basket.find((x)=>x.id===selectedItem.id);
     if(search===undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
         });
     }
    else{
        search.item+=1;
    }
    //  console.log(basket);

    update(selectedItem.id);
    localStorage.setItem("data",JSON.stringify(basket));


}

let decrement=(id)=>{
    let selectedItem=id;
    let search=basket.find((x)=>x.id===selectedItem.id);
    
    if(search===undefined){
        return;
    }
    else if(search.item===0){
      return;
    }
   else{
    
        search.item-=1;
   }
    // console.log(basket);
    update(selectedItem.id); 
    basket=basket.filter((x)=>x.item!==0);
    localStorage.setItem("data",JSON.stringify(basket));

}

let update=(id)=>{
    let search=basket.find((x)=>x.id===id);
     document.getElementById(id).innerHTML=search.item;
     calculation();
}

let calculation=()=>{
     let cartIcon=document.getElementById("cartAmount");
     cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
}
calculation();//every time app runs ,the function is evoked so cart won't go 0 on refreshing