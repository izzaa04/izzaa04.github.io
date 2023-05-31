document.getElementById("menu_icon").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.right = "0";
});

document.getElementById("sidebar-close").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.right = "-350px";
});
