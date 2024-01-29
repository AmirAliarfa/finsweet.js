import aboutus from "../app/aboutus.js";
import blog from "../app/blog.js";
import desing from "../app/desing.js";
import footer from "../app/footerbottom.js";
import footertop from "../app/footertop.js";
import login from "../app/login.js";
import menu from "../app/menu.js";
import project from "../app/project.js";
import svg from "../app/svgfineswite.js";
import textheader from "../app/text-header.js";
import us from "../app/us.js";
import work from "../app/work.js";
menu();
footer();
footertop.fot();
footertop.fotright();
blog();
login.login();
login.loginimg();
us.usleft();
us.usright();
aboutus.abouttext();
aboutus.aboutleft();
desing.desing();
desing.desintext();
desing.desingtextt();
project.project();
project.projectimg();
work.work();
work.work2();
textheader();
menu();
svg();
// let imghumberger = document.querySelector("header nav .imgmenu");
// let imgmenu = document.querySelector("header nav .imgmenu .menukesho");
// let times = document.querySelector(
//   "header nav .imgmenu .menukesho .times"
// );
// times.addEventListener("click", function () {
//   remov();
//   imgmenu.classList.add("hidden");
// });
// imghumberger.addEventListener("click", function () {
//   remo();
//   imgmenu.classList.add("block");
// });
// function remo() {
//   imgmenu.classList.remove("hidden");
// }
// function remov() {
//   imgmenu.classList.remove("block");
// }
$("header nav .imgmenu").on("click", function () {
  $(this).find(".menukesho").fadeIn(300);
});
$("header nav .imgmenu .menukesho div").on("click", function () {
  $(".menukesho").fadeOut(300);
});
function quryselector() {
  setTimeout(() => {
    let z = document.querySelector("nav ul .z div");
    let a = document.querySelector("nav ul .z a");
    let zz = document.querySelector("nav ul .z");
  }, 5000);
}
function zirmenu() {
  setTimeout(() => {
    a.addEventListener("click", function () {
      delet();
      z.classList.add("flex");
    });
    zz.addEventListener("mouseleave", function () {
      z.classList.add("hidden");
    });
    let delet = function () {
      a.addEventListener("mousemove", function () {
        z.classList.remove("hidden");
      });
    };
  }, 5500);
}
quryselector();
zirmenu();
