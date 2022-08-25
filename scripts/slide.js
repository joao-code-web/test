const slideCont = window.document.querySelectorAll(".slide a");
const prev = window.document.querySelector(".button .prev i");
const next = window.document.querySelector(".button .next i");
let max = slideCont.length;
let current = 0;

prev.addEventListener("click", () => {
    slideCont[current].classList.remove("selected");
    current++;
    if (current >= max) {
      current = 0;
    }
    slideCont[current].classList.add("selected");
  });
  
  next.addEventListener("click", () => {
    slideCont[current].classList.remove("selected");
    current--;
    if (current < 0) {
      current = max - 1;
    }
    slideCont[current].classList.add("selected");
  });