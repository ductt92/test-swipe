let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
let nextBtn = document.getElementById("nextSlide");
let prevBtn = document.getElementById("prevSlide");
showSlides(slideIndex);
checkIndex(slideIndex);

function checkIndex(index) {
  if (index === 1) {
    prevBtn.classList.add("disable");
  }
  if (index >= slides.length) {
    nextBtn.classList.add("disable");
  }
  if (index > 1 && index < slides.length) {
    nextBtn.classList.remove("disable");
    prevBtn.classList.remove("disable");
  }
}

function nextAction() {
  if (slideIndex + 1 <= slides.length) {
    slideIndex = slideIndex + 1;
    showSlides(slideIndex);
    checkIndex(slideIndex);
  }
}

function prevAction() {
  if (slideIndex > 1) {
    slideIndex = slideIndex - 1;
    showSlides(slideIndex);
    checkIndex(slideIndex);

  }
}

function showSlides(actionIndex) {
  checkIndex(slideIndex);
  if (!actionIndex > slides.length || !actionIndex < 1) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
}
