document.getElementById("toggleRegister").addEventListener("click", function(){
        const form = document.getElementById("registerForm");
        if(form.style.display === "block"){
            form.style.display = "none";    
        }else{
            form.style.display = "block"; 
        }
});