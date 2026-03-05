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

const assignmentData = {
    company: "ABC Corporation",
    status: "Currently Assigned",
    todos: [
        { title: "Submit Weekly Report", due: "Mar 3, 2026" },
        { title: "Mentor Evaluation Form", due: "Mar 7, 2026" },
        { title: "Mid-term Assessment", due: "Mar 15, 2026" },
        { title: "Final Portfolio", due: "Apr 1, 2026" }
    ]
};

document.getElementById("companyName").textContent = assignmentData.company;
document.getElementById("assignmentStatus").textContent = assignmentData.status;

const todoContainer = document.getElementById("todoList");

assignmentData.todos.forEach(task => {

    const taskRow = document.createElement("div");
    taskRow.classList.add("todo-item");

    taskRow.innerHTML = `
        <input type="checkbox" class="todo-checkbox">
        <div class="todo-details">
            <p class="todo-title">${task.title}</p>
            <p class="todo-due">Due: ${task.due}</p>
        </div>
    `;

    todoContainer.appendChild(taskRow);
});


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
