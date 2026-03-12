let buttons = document.querySelectorAll(".view-btn");

buttons.forEach(btn => {

btn.addEventListener("click", function(){

alert("Student profile page coming soon");

});

});
function toggleMenu(){

const menu = document.getElementById("profileMenu");

menu.classList.toggle("active");

}