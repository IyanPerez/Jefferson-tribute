const back = document.querySelector("#back-button")
const front = document.querySelector("#front-button")
const slider = document.querySelector(".slider")

back.addEventListener("click", () =>{
    slider.scrollLeft -= 910
})
front.addEventListener("click", () =>{
    slider.scrollLeft += 910
})