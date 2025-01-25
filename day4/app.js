var images = document.querySelectorAll(".image img");
var view_image = document.querySelector(".gallery");
var iconClose = document.querySelector(".close");
var iconPrev = document.querySelector(".previous");
var iconNext = document.querySelector(".next");
var viewImage = document.querySelector(".gallery img");

var currentIndex = 0;

function showImage() {
  if (currentIndex == 0) {
    iconPrev.classList.add("hide");
  } else {
    iconPrev.classList.remove("hide");
  }

  if (currentIndex == 7) {
    iconNext.classList.add("hide");
  } else {
    iconNext.classList.remove("hide");
  }
  viewImage.src = images[currentIndex].src;
  view_image.classList.add("show");
}
images.forEach((image, index) => {
  image.addEventListener("click", function () {
    currentIndex = index;
    showImage();
  });
});
iconClose.addEventListener("click", function () {
  view_image.classList.remove("show");
});
iconPrev.addEventListener("click", function () {
  currentIndex = (8 + currentIndex - 1) % 8;
  showImage();
});
iconNext.addEventListener("click", function () {
  currentIndex = (8 + currentIndex + 1) % 8;
  showImage();
});
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    view_image.classList.remove("show");
  }
});
