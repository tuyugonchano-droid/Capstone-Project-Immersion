// ===============================
// TOGGLE REGISTER COMPANY FORM
// ===============================

document.getElementById("toggleRegister").addEventListener("click", function () {

    const form = document.getElementById("registerForm");

    if (form.style.display === "block") {
        form.style.display = "none";
    } 
    else {
        form.style.display = "block";
    }

});


// ===============================
// FILTER STUDENTS BY COURSE
// ===============================

function filterCourse(course) {

    let sections = document.querySelectorAll(".course-section");

    sections.forEach(section => {

        if (course === "all") {
            section.style.display = "block";
        } 
        else if (section.dataset.course === course) {
            section.style.display = "block";
        } 
        else {
            section.style.display = "none";
        }

    });

}


// ===============================
// PASSWORD SHOW / HIDE
// ===============================

const togglePassword = document.querySelectorAll(".toggle-password");

togglePassword.forEach(icon => {

    icon.addEventListener("click", function () {

        const targetId = this.getAttribute("data-target");
        const input = document.getElementById(targetId);

        if (input.type === "password") {
            input.type = "text";
        } 
        else {
            input.type = "password";
        }

    });

});


// ===============================
// PAGE LOAD DEFAULT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");

    if (form) {
        form.style.display = "none";
    }

});