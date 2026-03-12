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

    // Password confirmation validation
    const registerForm = document.getElementById("registerForm");
    if(registerForm){
        registerForm.addEventListener("submit", function(e){
            const password = this.querySelector('input[name="password"]').value;
            const confirmPassword = this.querySelector('input[name="confirmPassword"]').value;
            
            if(password !== confirmPassword){
                e.preventDefault();
                alert("Passwords do not match!");
            }
        });
    }

});


// ===============================
// VIEW COMPANY DETAILS
// ===============================

function viewCompanyDetails(companyId) {

    // Add your code here to show company details
    // Example: open modal, redirect, or fetch data
    
    console.log("Viewing company ID:", companyId);

}


// ===============================
// NAV BUTTONS CLICK EFFECT
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    const navButtons = document.querySelectorAll(".nav-btn");
    
    navButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            // Visual feedback
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);
        });
    });

});


// ===============================
// SWITCH VIEW (Companies / Students)
// ===============================

function showView(viewName) {

    const companiesSection = document.getElementById("companyListContainer");
    const studentsSection = document.getElementById("studentsView");
    const registerBtn = document.querySelector(".registercompany");
    const formWrapper = document.querySelector(".form-wrapper");
    const buttons = document.querySelectorAll(".nav-btn");

    // Reset all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    if (viewName === "companies") {
        if (companiesSection) companiesSection.style.display = "block";
        if (studentsSection) studentsSection.style.display = "none";
        if (registerBtn) registerBtn.style.display = "block";
        if (formWrapper) formWrapper.style.display = "block";
        buttons[0].classList.add("active");
    }
    else if (viewName === "students") {
        if (companiesSection) companiesSection.style.display = "none";
        if (studentsSection) studentsSection.style.display = "block";
        if (registerBtn) registerBtn.style.display = "none";
        if (formWrapper) formWrapper.style.display = "none";
        buttons[1].classList.add("active");
    }

}