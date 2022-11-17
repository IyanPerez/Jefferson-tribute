const back = document.querySelector("#back-button")
const front = document.querySelector("#front-button")
const slider = document.querySelector(".slider")
const banner = document.querySelector(".banner")


back.addEventListener("click", () =>{
    slider.scrollLeft -= banner.offsetWidth
})
front.addEventListener("click", () =>{
    slider.scrollLeft += banner.offsetWidth
})

function resizingBannerImages(){
    const bannerWidth=banner.offsetWidth 
    const images=document.querySelectorAll(".banner-photo")

    images.forEach(image => {
        image.style.width = bannerWidth + "px"
    })
}

new ResizeObserver(resizingBannerImages).observe(banner)