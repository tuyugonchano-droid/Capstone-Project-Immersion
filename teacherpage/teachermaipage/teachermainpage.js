document.getElementById("toggleRegister").addEventListener("click", function(){
        const form = document.getElementById("registerForm");
        if(form.style.display === "block"){
            form.style.display = "none";    
        }else{
            form.style.display = "block"; 
        }
});

function adduploadNotification(studentId){
    let notif = document.getElementById(studentId);
    let count = parseInt(notif.innerText);
    notif.innerText = count + 1;

}
function openStudentUploads(card){
    let notif = card.querySelector(".upload-notif");
    notif.innerText = "0";
    let studentName = card.querySelector("h3").innerText;
    alert("Viewing uploads of" + studentName);
}