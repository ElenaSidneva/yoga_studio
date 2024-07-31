const card=document.querySelector(".card")
const cardText=document.querySelector(".card_text")
const sliderContainer=document.querySelector(".slider_container")

 
card.addEventListener('mouseover', function() {
    cardText.classList.add('no_visible')
    sliderContainer.classList.remove("no_visible")
})
card.addEventListener('mouseout', function() {
    cardText.classList.remove('no_visible')
    sliderContainer.classList.add("no_visible")
})




const slider = document.querySelector(".slider");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const slides = document.querySelectorAll(".slider_image");

let currentSlideIndex = 0;
const sliderWidth = slider.clientWidth;

function showSlide() {
    //slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
    slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
}

function changeSlide(slideIndex) {
    currentSlideIndex = slideIndex;
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
        if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);


//const reviewSlider = document.querySelector(".reviews")
//const reviewArrowLeft = document.querySelector(".review_arrow_left")
//const reviewArrowRight = document.querySelector(".review_arrow_right")
//const reviewCards = document.querySelectorAll(".review")

//reviewArrowLeft.addEventListener('click', () => {
//    reviewCards.style.transform = "translateX(50%)"
//})

//let currentSlide = 1;
//
//reviewArrowLeft.addEventListener("click", () => {
//  currentSlide -= 1;
//  updateSlider();
//});
//
//reviewArrowRight.addEventListener("click", () => {
//  currentSlide += 1;
//  updateSlider();
//});
//
//function updateSlider() {
//  reviewCards.forEach((card, index) => {
//    card.style.transform = `translateX(${(index - currentSlide)}%)`;
//  });
//}

const reviewSlider = document.querySelector(".review_slider");
const reviewArrowLeft = document.querySelector(".review_arrow_left");
const reviewArrowRight = document.querySelector(".review_arrow_right");
const reviewCards = document.querySelectorAll(".review");

let currentSlide = 0;
const slideWidth = reviewCards[0].offsetWidth;

reviewArrowLeft.addEventListener("click", () => {
  currentSlide -= 1;
  updateSlider();
});

reviewArrowRight.addEventListener("click", () => {
  currentSlide += 1;
  updateSlider();
});

function updateSlider() {
  reviewSlider.style.transform = `translateX(${currentSlide * -slideWidth}px)`;
}