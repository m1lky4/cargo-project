var hoverText = document.getElementById("hover-text");
var menu = document.getElementById("menu");

hoverText.addEventListener("mouseover", function() {
  menu.classList.add("show-menu");
});

hoverText.addEventListener("mouseout", function() {
  menu.classList.remove("show-menu");
});

