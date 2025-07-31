const images = document.querySelector(".carousel-images");
const totalSlides = 3;
let index = 0;

const updateCarousel = () => {
  images.style.transform = `translateX(${-index * 100}%)`;
};

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Troca automática a cada 5 segundos
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateCarousel();
}, 5000);
