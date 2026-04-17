let ApiKey = 'https://fakestoreapi.com/products/'


fetch(ApiKey).then((randomData)=>{

    return randomData.json()

}).then((jsData)=>{

    
// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

   

    let api = document.querySelector(".api")

    // api.innerHTML = `<h1>${jsData.title.slice(0,40)}</h1> <img src="${jsData.image} "/><p>${jsData.description.slice(0, 100)}</p>`;


    jsData.forEach((c,i,t)=>{

        console.log(c);

        let ApiChild = document.createElement("div")

        ApiChild.innerHTML = `<h1>${c.title.slice(0,60) + " ..."}</h1> <img src="${c.image}" />  <p>${c.description.slice(0,100)+" ..."}</p>`


        api.append(ApiChild)
        

        
        

    })

    
    
    
    
    
    
    
})
.catch((error)=>{

    let api = document.querySelector(".api")

    api.innerText = error
    api.style.color = "red"

    console.log(error.message);
    

})