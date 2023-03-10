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
    //  body.classList.add("lightMode");
  } else {
      // body.classList.remove("lightMode");
      body.classList.add("darkMode");
      body.style.transition = '2s';
  }
});

// Burger Dropdown button 
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "bi bi-x" : "bi bi-list";
};


