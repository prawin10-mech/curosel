const images = document.getElementById("images");

let index = 0;
const img = document.querySelectorAll("#images img");

function carousel() {
  index++;

  if (index > img.length - 1) {
    index = 0;
  }
  images.style.transform = `translateX(${-index * 500}px)`;
}

setInterval(carousel, 2000);
