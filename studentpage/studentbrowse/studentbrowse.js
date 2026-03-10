const tabs = document.querySelectorAll(".tab");
const groupLogo = document.getElementById("groupLogo");
const companyContainer = document.getElementById("companyContainer");


// SAMPLE DATA (temporary habang wala pang backend)

let companies = [

{
name:"ABC Accounting Firm",
description:"Business internship opportunity",
category:"ABM"
},

{
name:"Future Science Lab",
description:"Engineering research company",
category:"STEM"
},

{
name:"WebTech Solutions",
description:"Web and mobile development",
category:"IT-MAWT"
},

{
name:"Creative Pixel Studio",
description:"Multimedia design agency",
category:"Digital Arts"
}

];


// RENDER COMPANIES

function renderCompanies(category){

companyContainer.innerHTML = "";

companies.forEach(company =>{

if(category === "all" || company.category === category){

let card = document.createElement("div");

card.classList.add("card");

card.dataset.category = company.category;

card.innerHTML = `
<h3>${company.name}</h3>
<p>${company.description}</p>
<button class="apply-btn">Apply</button>
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

companyContainer.style.display = "grid";

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