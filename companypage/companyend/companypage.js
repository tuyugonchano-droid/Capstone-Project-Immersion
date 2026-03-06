function filterCourse(course){
    let sections = document.querySelectorAll(".course-section");
    sections.forEach(section =>{
        if(course ==='all'){
            section.style.display = "block";

        }else if(section.dataset.course === course){
            section.style.display = "block";

        }else{
            section.style.display = "none";
        }

    });
}