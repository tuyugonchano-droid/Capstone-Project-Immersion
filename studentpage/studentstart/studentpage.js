console.log("System loaded");

document.addEventListener("DOMContentLoaded", function () {

    var calendarEl = document.getElementById("calendar");

    if (calendarEl) {
        var calendar = new FullCalendar.Calendar(calendarEl, {

            initialView: "dayGridMonth",

            headerToolbar: {
                left: "prev",
                center: "title",
                right: "next"
            },

            height: "100%",         
            contentHeight: "100%",   
            expandRows: true,        
            aspectRatio: 1.0,       
            fixedWeekCount: true,    

            events: [
                {
                    title: "New Year",
                    start: "2026-01-01",
                    color: "red"
                }
            ]

        });

        calendar.render();
    }

});
async function loadAssignment(){
    try{
        const response = await fetch("api/getAssigment.php");
        const assignmentData = await response.json();
        
        document.getElementById("companyName").textContent = assignmentData.company;
        document.getElementById("asssignmentStatus").textContent = assignmentData.status;
        
        const todoContainer = document.getElementById("todoList");
        todoContainer.innerHTML = "";
        assignmentData.todos.forEach(task =>{
            const taskRow = document.createElement("div");
            taskRow.classList.add("todo-item");
            taskRow.innerHTML = `<input type = "chechbox" class = "todo-checkbox">
            <div class = "todo-details">
            <p class = "todo-title">${task.deadline}</p>
            <p class = "todo-due"> Due: ${task.deadline}</p> `;
            todoContainer.appendChild(taskRow);
        });
    }catch(error){
        console.error("Error loading assignments:", error);
    }
}
loadAssignment();

const fileInput = document.getElementById("journalFile");
const selectBtn = document.getElementById("selectFileBtn");
const uploadBtn = document.getElementById("uploadBtn");
const fileNameText = document.getElementById("fileName");
const uploadStatus = document.getElementById("uploadStatus");

let selectedFile = null;

selectBtn.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", function(){

    if(this.files.length > 0){   // ✅ FIXED HERE
        selectedFile = this.files[0];  // ✅ FIXED HERE
        fileNameText.textContent = selectedFile.name;
        uploadBtn.disabled = false;
        uploadStatus.textContent = "";
    } else {
        fileNameText.textContent = "No file selected";
        uploadBtn.disabled = true;
    }

});

uploadBtn.addEventListener("click", function (){

    if (!selectedFile) return;

    uploadStatus.textContent = "Uploading...";
    uploadStatus.style.color = "#004AAD";

    setTimeout(() =>{
        uploadStatus.textContent = "Upload Successful";
        uploadStatus.style.color = "green";
    }, 1500);

});
