// selecting


let input  = document.querySelector("input")
let button = document.querySelector("button")
let ol     = document.querySelector("ol")


// event listner


button.addEventListener("click",()=>{
    let inputValue = input.value
    
    // create tag

    let li = document.createElement("li")
    li.innerText = inputValue

    // style

    li.style.cursor= "pointer"

    // add attribute

    li.setAttribute("class","active")

    // one tag in another tag = append / prepend

    ol.prepend(li)

    li.addEventListener("click",()=>{
        li.remove()
    })

    input.value = ""



})