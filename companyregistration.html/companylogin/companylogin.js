    function goToRegister() {
        window.location.href = "../companyregistration/companyregistration.html";
    }

    document.getElementById("sign-in.container").addEventListener("submit", function(e){
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let companies = JSON.parse(localStorage.getItem("companies")) || [];


        let foundCompany = companies.find(company => 
            company.email === email && company.password === password
        );

        if(foundCompany){
        
            localStorage.setItem("loggedInCompany", JSON.stringify(foundCompany));

            alert("Login Successful!");
            window.location.href = "../companypage/companypage.html";
        } else {
            alert("Invalid Email or Password");
        }
    });
