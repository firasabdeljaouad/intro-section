
let features = document.querySelector(".feature");
let company = document.querySelector(".company");
let nav = document.querySelectorAll(".navbar ul li");
let link = document.querySelectorAll(".sub-menu");
let icon = document.querySelectorAll(".arrow")


link.forEach(link => {
        link.classList.add("hidden");
    })
nav.forEach((ele, index) => {
    
    
    ele.addEventListener('click', () => {
        link[index].classList.toggle("hidden");
        link[index].classList.toggle("active-btn")
        if(link[index].classList.contains("active-btn")){
            icon[index].src="images/icon-arrow-up.svg"
        }else{
            icon[index].src="images/icon-arrow-down.svg"
        }

    });
});


