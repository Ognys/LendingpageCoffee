(function () {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header-active");
        }
        else {
            header.classList.remove("header-active");
        }
    };
}());

// Burger

(function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header-nav-menu");
    const close = document.querySelector(".header-nav-close");
    burger.addEventListener("click", () => {
        menu.classList.add("header-nav-menu-active");
    });
        close.addEventListener("click", () => {
        menu.classList.remove("header-nav-menu-active");
    });

}());
