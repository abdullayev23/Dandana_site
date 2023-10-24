let hamburger = document.querySelector(".burger");
let activeBurger = document.querySelector(".active-burger");
let overley = document.querySelector(".overley");
let all_link = document.querySelectorAll('#all_link');
hamburger.addEventListener("click",()=>{
    activeBurger.classList.add('active-b')
    overley.classList.add('hidden')
})
overley.addEventListener('click', ()=>{
    activeBurger.classList.remove('active-b')
    overley.classList.remove('hidden')
})
for(let nom of all_link){
    nom.addEventListener('click', (e)=>{
        e.preventDefault()
        activeBurger.classList.remove('active-b')
        overley.classList.remove('hidden')
    })
}

function addToCart(button) {
    const cart = document.querySelectorAll("#cart");
    for (let nomlari of cart){
        nomlari.style.display = "block";
        setTimeout(() => {
            nomlari.style.display = "none";
        }, 5000);
    }
}

const addToCartButton = document.querySelectorAll("#addToCartButton");
for(let nom of addToCartButton){
    nom.addEventListener("click", () => {
        addToCart(nom);
    });
}
// "Loading" animatsiyasini tugatish

