const menuMobile = document.querySelector(".menu-mobile")
const body = document.querySelector("body")

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list") ? menuMobile.classList.replace("bi-list", "bi-x") : menuMobile.classList.replace("bi-x", "bi-list")
    body.classList.toggle("menu-nav-active")
})


// Close menu when click on link

const navItem = document.querySelectorAll(".nav-item")


navItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})
console.log(navItem)


// Animations

const item = document.querySelectorAll("[data-anime]")

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.90;

    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate")
        } else {
            element.classList.remove("animate")
        }
    })
}

animeScroll()

window.addEventListener("scroll", () => {
    
    animeScroll()
})

// Spinner
const btnEnviar = document.querySelector("#btn-send")
const btnEnviarSpinner = document.querySelector("#btn-send-spinner")

btnEnviar.addEventListener("click", () => {
    btnEnviarSpinner.style.display = "block"
    btnEnviar.style.display = "none"
})

setTimeout(() => {
    document.querySelector("#flash-alert").style.display = "none";
}, 5000)