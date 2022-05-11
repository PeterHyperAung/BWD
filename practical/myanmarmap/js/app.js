let currentPlace = document.querySelector(".current-place");
let allPath = document.querySelectorAll(".map path");
let lastElement;

allPath.forEach(function (el) {
  el.addEventListener("mouseout", () => {
    currentPlace.innerText = el.getAttribute("title");
    el.classList.add("left");
    lastElement = el;
  });

  el.addEventListener("mouseover", () => {
    lastElement.classList.remove("left");
    currentPlace.innerText = el.getAttribute("title");
  });
});
