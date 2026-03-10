let activities =[];
function assignActivity(){
    let studentSelect = document.getElementById("student");
    
    let studentId= studentSelect.value;
    let studentNamne = studentSelect.options[studentSelect.seletedIndex].text;

    let title = document.getElementById("title").value;
    let deadline = document.getElementById("deadline").value;
    let pririty = document.getElementById("priority").value;
    let description = document.getElementById("description").value;

    if(studentId=="" || title ==""|| deadline=="" || priority == ""){
        alert("Please fill in all fields");
        return;
    }
    let activity ={
        student_id: studenId,
        student_name: studentNamne,
        title: title,
        deadline: deadline,
        priority: priorty,
        description: description,
        status: "Assigned"
    };
    activities.push(activity);
    renderActivities();

    document.getElementById("title").value = "";
    document.getElementById("deadline").value ="";
    document.getElementById("description").value ="";
    document.getElementById("priority").value ="";
    
    function renderActivities(){
        let table = document.getElementById("activityTable");
        table.innerHTML ="";

        activities.forEach(act =>{
            let pclass ="";

            if(act.priority=="High"){pclass="priority- high";}
            if(act.priority=="Medium"){pclass="priority-medium";}
            if(act.priorty=="Low"){pclass="priority-low";}

            let row = table.insertRow();

            row.innerHTML=
            "<td>"+act.student_name+"</td>"+"<td>"+act.title+"</td>"+"<td>"+act.deadline+"</td>"+"<td class='"+pclass+"'>"+act.priority+"</td>"+"<td>"+act.status+"</td>";
        });
    }

}a