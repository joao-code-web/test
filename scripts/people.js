const studentsCLick = window.document.querySelectorAll(
  ".students .students-single"
);
const single = window.document.querySelector(".single-all");
const closeSingle = window.document.querySelector(".single-all i");
const singleImg = window.document.querySelector(".single-img");
const singleTextName = window.document.querySelector(".single-text");
const peopleName = window.document.querySelectorAll(".students-single h1");
const peopleBio = window.document.querySelectorAll(".students-single p");
const peopleImg = window.document.querySelectorAll(".students-single img");

for (let i = 0; i < studentsCLick.length; i++) {
  studentsCLick[i].addEventListener("click", () => {
    single.style.display = "block";
    singleImg.innerHTML = `<img src="${peopleImg[i].src}">`;
    singleTextName.innerHTML = `<h1>${peopleName[i].textContent}</h1> 
    <p>${peopleBio[i].textContent}</p>`;
  });
}

closeSingle.addEventListener("click", () => {
  single.style.display = "none";
});
