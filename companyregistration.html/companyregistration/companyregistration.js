
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', function () {
            const input = document.getElementById(this.dataset.target);
            input.type = input.type === "password" ? "text" : "password";
        });
    });
});
let companyimageslogo = "";
let companyimages = "";
const companylogoinput = document.getElementById(`companyLogo`);
const companylogofile = document.getElementById(`logoFileName`);
companylogoinput.addEventListener(`change`, function(){
    const file = this.files[0];
    if(file){
        companylogofile.textContent = file.name;
        const reader =  new FileReader();
        reader.onload = function(e) {
            companyimageslogo = e.target.result;
        };
        reader.readAsDataURL(file);  
    }else{
       companylogofile.textContent = "No file chosen";
        companyimageslogo = " "
    }
}); 

const companypic = document.getElementById('companyImage');
const companypicfilename = document.getElementById('imageFileName');

companypic.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
            companypicfilename.textContent = file.name;

        const reader = new FileReader();
        reader.onload = function(e) {
            companyimages = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        companypicfilename.textContent = "No file chosen";
        companyimages = "";
    }
});


document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function () {
        const input = document.getElementById(this.dataset.target);
        input.type = input.type === "password" ? "text" : "password";
    });
});

document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    const companyData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        supervisor: document.getElementById("supervisorname").value,
        company: document.getElementById("companyname").value,
        location: document.getElementById("companyloc").value,
        companyImage: companyimages,
        companyLogo: companyimageslogo
    };

    
    let companies = JSON.parse(localStorage.getItem("companies")) || [];

    companies.push(companyData);

    localStorage.setItem("companies", JSON.stringify(companies));
    window.location.href = "../companypage/companypage.html"
});