const tabs = document.querySelectorAll(".tab");
const groupLogo = document.getElementById("groupLogo");
const companyContainer = document.getElementById("companyContainer");

// Use companies from database (passed from PHP)
// If no companies in DB, use sample data for testing
let companies = [];

if(typeof companiesFromDB !== 'undefined' && companiesFromDB.length > 0){
    // Use real data from database
    companies = companiesFromDB.map(company => {
        return {
            id: company.id,
            name: company.companyname,
            description: company.companyloc,
            category: company.course,
            logo: company.logo,
            supervisor: company.supervisorname,
            contact: company.contactnumber,
            email: company.companyemail
        };
    });
}
else{
    // Sample data (temporary habang wala pang data sa database)
    companies = [
        {
            id: 1,
            name: "ABC Accounting Firm",
            description: "Business internship opportunity",
            category: "ABM",
            logo: "default.png",
            supervisor: "John Doe",
            contact: "09123456789",
            email: "abc@company.com"
        },
        {
            id: 2,
            name: "Future Science Lab",
            description: "Engineering research company",
            category: "STEM",
            logo: "default.png",
            supervisor: "Jane Smith",
            contact: "09987654321",
            email: "future@lab.com"
        },
        {
            id: 3,
            name: "WebTech Solutions",
            description: "Web and mobile development",
            category: "IT MAWT",
            logo: "default.png",
            supervisor: "Mike Johnson",
            contact: "09111222333",
            email: "info@webtech.com"
        },
        {
            id: 4,
            name: "Creative Pixel Studio",
            description: "Multimedia design agency",
            category: "Digital Arts",
            logo: "default.png",
            supervisor: "Sarah Lee",
            contact: "09444555666",
            email: "hello@creativepixel.com"
        }
    ];
}


// RENDER COMPANIES

function renderCompanies(category){

companyContainer.innerHTML = "";

companies.forEach(company =>{

if(category === "all" || company.category === category){

let card = document.createElement("div");

card.classList.add("card");

card.dataset.category = company.category;

// Show logo if exists, otherwise show placeholder
let logoSrc = company.logo && company.logo !== '' 
    ? '../../uploads/' + company.logo 
    : '../../logo container/logoblue.png';

card.innerHTML = `
<img src="${logoSrc}" class="company-card-logo" alt="${company.name}">
<h3>${company.name}</h3>
<p><strong>Location:</strong> ${company.description}</p>
<p><strong>Supervisor:</strong> ${company.supervisor || 'N/A'}</p>
<p><strong>Contact:</strong> ${company.contact || 'N/A'}</p>
<p><strong>Email:</strong> ${company.email || 'N/A'}</p>
<a href="application.php?id=${company.id}" class="apply-btn">Apply Now</a>
`;

companyContainer.appendChild(card);

}

});

}


// TAB FILTER

tabs.forEach(tab =>{

tab.addEventListener("click", () =>{

tabs.forEach(btn => btn.classList.remove("active"));

tab.classList.add("active");

let category = tab.dataset.category;

if(category === "all"){

groupLogo.style.display = "block";

companyContainer.style.display = "none";

}else{

groupLogo.style.display = "none";

companyContainer.style.display = "flex";

companyContainer.style.flexWrap = "wrap";

companyContainer.style.justifyContent = "center";

companyContainer.style.gap = "20px";

companyContainer.style.padding = "30px";

renderCompanies(category);

}

});

});


// PAGE LOAD

document.addEventListener("DOMContentLoaded", () => {

companyContainer.style.display = "none";

});


document.addEventListener("DOMContentLoaded", function(){

    const profileBtn = document.getElementById("profileBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const logoutBtn = document.getElementById("logoutBtn");

    profileBtn.addEventListener("click", function(e){
        e.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function(){
        dropdownMenu.classList.remove("show");
    });

   
    logoutBtn.addEventListener("click", function(){
        window.location.href = "../../loginclick/loginclick.html"; 
    });

});