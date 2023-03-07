// Add active class to the current button (highlight it)
let header = document.getElementById("header");
let btns = header.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

// Dark mode query
const toggle = document.getElementById("toggleDark");
const body1 = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon-stars");
  if (this.classList.toggle("bi-moon-stars-fill")) {
    // body.style.background = "#fff";
    // body.style.color = "#000";
    // body.style.transition = "2s";
  } else {
    // body.style.background = "#121212";
    // body.style.color = "#fff";
    // body.style.transition = "2s";
  }
});

// function change() {
//   const get = document.querySelector(".lightMode");
//   get.classList.toggle("darkMode")
// }
// document.querySelector("#toggleDark").addEventListener("click", change);


const body = document.getElementById("changeStyle");
function changeStyle() {
  for (var i = 0; i < body.classList.length; i++) {
    if (body.classList[i].indexOf("lightMode") >= 0) {
      body.classList.remove("lightMode");
      body.classList.add("darkMode");
    } else {
      body.classList.remove("darkMode");
      body.classList.add("lightMode");
    }
  }
}

