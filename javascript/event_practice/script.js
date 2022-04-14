const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


grandparent.addEventListener("click", e => {
    console.log("grandparent bubble")
    }, { once: true })

parent.addEventListener("click", e => {
//    e.stopPropagation()
    console.log("parent bubble")
    })

        
child.addEventListener("click", e => {
    console.log("child bubble")
    })
//document.addEventListener("click", e => {
//     console.log("document capture")
//    }, { capture: true })
           
document.addEventListener("click", e => {
    console.log("document bubble")
    })
   