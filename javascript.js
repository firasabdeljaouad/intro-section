
let navLinks = document.querySelectorAll(".nav-left ul li");
let menuBtn = document.querySelector(".mobile-menu-btun");
let mobileMenu = document.querySelector(".mobile-menu");
let subMenu = document.querySelectorAll(".sub-menu");
let overFlow = document.querySelector(".overflow");
let mobileLinks = document.querySelectorAll(".mobile-menu ul li")
let icon = document.querySelector(".arrow");
let iconMobile = document.querySelector(".arrow-mobile")



menuBtn.addEventListener('click', () => {
    let iconMenu = document.querySelector(".mobile-menu-btun img")
    menuBtn.classList.toggle("active-btn");
    mobileMenu.classList.toggle("active-menu");
    overFlow.classList.toggle("active-menu");
    if (menuBtn.classList.contains("active-btn")) {
        iconMenu.src = "images/icon-close-menu.svg"
    } else  {
        iconMenu.src = "images/icon-menu.svg"
    }
   
});

navLinks.forEach((link) => {
    const subMenu = link.querySelector(".sub-menu");
    link.addEventListener('click', () => {
        link.classList.toggle("active");
        subMenu.classList.toggle("active-menu");
    });

});

mobileLinks.forEach(link => {
    const subMenu = link.querySelector(".mobile-sub");
    link.addEventListener('click', () => {
        link.classList.toggle("active");
        subMenu.classList.toggle("active-menu");
    })
})




// navLinks.forEach(link => {
//     link.classList.add("hidden");
// })
// navLinks.forEach((ele, index) => {


//     ele.addEventListener('click', () => {
//         subMenu[index].classList.toggle("hidden");
//         subMenu[index].classList.toggle("active-btnn")
//         if (link[index].classList.contains("active-btnn")) {
//             icon[index].src = "images/icon-arrow-up.svg"
//         } else {
//             icon[index].src = "images/icon-arrow-down.svg"
//         }

//     });
// });
