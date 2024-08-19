window.addEventListener("scroll", () => {
    if ( scrollY > 0) {
        document.querySelector('header').classList.add("active")
    }
    else {
        document.querySelector('header').classList.remove("active")
    }
})



// reponsive
const menuBar = document.querySelector(".ti-menu")
menuBar.addEventListener("click",() => {
    document.querySelector("header nav").classList.toggle("active")
})