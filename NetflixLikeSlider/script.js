const initslider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    // slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () =>{
            // console.log("clicked");
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;// clientWidth returns the viewable width of an element in pixels.
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        })
    })
}

window.addEventListener("load", initslider);
