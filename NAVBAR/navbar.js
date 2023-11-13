const santhosh =document.querySelector(".santhosh");
const navMenu =document.querySelector(".nav-menu");

santhosh.addEventListener("click",() =>{
    santhosh.classList.toggle("active");
    navMenu.classList.toggle("active");

})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
        santhosh.classList.remove("active");
        navMenu.classList.remove("active");
 }))