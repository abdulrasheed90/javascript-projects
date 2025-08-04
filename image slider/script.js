const images = [
  "IMG-20250804-WA0005.jpg",
  "IMG-20250804-WA0006.jpg",
  "IMG-20250804-WA0007.jpg"
];

let currentIndex = 0;

function showImage(index) {
  const slider = document.getElementById("slider");
  slider.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Initialize on load
window.addEventListener("DOMContentLoaded", () => {
  showImage(currentIndex);
});
