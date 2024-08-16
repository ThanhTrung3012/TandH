window.addEventListener("scroll", () => {
    if ( scrollY > 0) {
        document.querySelector('header').classList.add("active")
    }
    else {
        document.querySelector('header').classList.remove("active")
    }
})