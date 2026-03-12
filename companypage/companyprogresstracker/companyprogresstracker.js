const students = {

1:{
name:"Juan Dela Cruz",
strand:"ICT",
company:"ABC Corporation",
required:200,
completed:120
},

2:{
name:"Maria Santos",
strand:"ABM",
company:"XYZ Company",
required:200,
completed:150
},

3:{
name:"Pedro Reyes",
strand:"HUMSS",
company:"Tech Solutions",
required:200,
completed:80
},

4:{
name:"Ana Cruz",
strand:"STEM",
company:"Future Labs",
required:200,
completed:60
}

};


document.getElementById("studentSelect").addEventListener("change", function(){

const id = this.value;

if(!id) return;

const student = students[id];

const remaining = student.required - student.completed;
const progress = (student.completed / student.required) * 100;

document.getElementById("studentName").innerText = student.name;
document.getElementById("studentStrand").innerText = student.strand;
document.getElementById("studentCompany").innerText = student.company;
document.getElementById("requiredHours").innerText = student.required + " hrs";
document.getElementById("completedHours").innerText = student.completed + " hrs";
document.getElementById("remainingHours").innerText = remaining + " hrs";

document.getElementById("progressBar").style.width = progress + "%";

});


// PROFILE DROPDOWN

const trigger = document.getElementById("profileTrigger");
const menu = document.getElementById("dropdownMenu");

trigger.addEventListener("click", function(){
menu.classList.toggle("show");
});

window.addEventListener("click", function(e){
if(!trigger.contains(e.target)){
menu.classList.remove("show");
}
});