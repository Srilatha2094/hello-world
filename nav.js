jQuery(".nav-folderized h4").click(function () {
  jQuery(this).parent(".nav").toggleClass("open");
  jQuery("html, body").animate(
    { scrollTop: jQuery(this).offset().top - 170 },
    1500
  );
});
// var menu_btn = document.querySelector("#menu-btn");
// var sidebar = document.querySelector("#sidebar");
// var container = document.querySelector(".my-container");
// menu_btn.addEventListener("click", () => {
//   sidebar.classList.toggle("active-nav");
//   container.classList.toggle("active-cont");
//   console.log("Srilatha4");
//   console.log("srilatha");
//   console.log("srilatha1");
//   console.log("srilatha5");
// });
