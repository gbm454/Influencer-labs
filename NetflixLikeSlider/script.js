const initslider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth; //scrollWidth return the width of an element, including content not visible on the screen due to overflow.
    // slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () =>{
            // console.log("clicked");
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;// clientWidth returns the viewable width of an element in pixels.
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });

    const handelSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block"; 
    }

    imageList.addEventListener("scroll", () => {
        handelSlideButtons();
    });
}

window.addEventListener("load", initslider);
