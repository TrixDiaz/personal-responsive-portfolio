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
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon-stars");
  if (this.classList.toggle("bi-moon-stars-fill")) {
     body.classList.remove("darkMode");
     body.classList.add("lightMode");
  } else {
      body.classList.remove("lightMode");
      body.classList.add("darkMode");
  }
});

