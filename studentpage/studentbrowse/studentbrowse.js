const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");
const groupLogo = document.getElementById("groupLogo");
const companyContainer = document.getElementById("companyContainer");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");

        const category = tab.dataset.category;

        if(category === "all"){

            groupLogo.style.display = "block";
            companyContainer.style.display = "none";

        }else{

            groupLogo.style.display = "none";
            companyContainer.style.display = "grid";

            cards.forEach(card =>{

                if(card.dataset.category === category){
                    card.style.display = "block";
                }else{
                    card.style.display = "none";
                }

            });

        }

    });

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