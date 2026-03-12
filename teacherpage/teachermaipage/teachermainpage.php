<?php

$conn = new mysqli("localhost","root","","immersionhub");

if($conn->connect_error){
die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['email'])){

$email = $_POST['email'];
$password = $_POST['password'];
$companyname = $_POST['companyname'];
$companyloc = $_POST['companyloc'];
$supervisorname = $_POST['supervisorname'];
$contactnumber = $_POST['contactnumber'];
$companyemail = $_POST['companyemail'];
$course = $_POST['course'];

/* IMAGE UPLOAD */

$logo = $_FILES['logo']['name'];
$logo_tmp = $_FILES['logo']['tmp_name'];

$establishment = $_FILES['establishment']['name'];
$est_tmp = $_FILES['establishment']['tmp_name'];

/* CREATE UPLOADS FOLDER IF NOT EXISTS */

if(!file_exists("../../uploads")){
mkdir("../../uploads", 0777, true);
}

move_uploaded_file($logo_tmp,"../../uploads/".$logo);
move_uploaded_file($est_tmp,"../../uploads/".$establishment);

/* INSERT DATABASE */

$sql = "INSERT INTO companies
(email,password,companyname,companyloc,supervisorname,contactnumber,companyemail,course,logo,establishment)

VALUES
('$email','$password','$companyname','$companyloc','$supervisorname','$contactnumber','$companyemail','$course','$logo','$establishment')";

if($conn->query($sql) === TRUE){
echo "<script>alert('Company registered successfully!'); window.location.href='teachermainpage.php';</script>";
}else{
echo "<script>alert('Error: " . $conn->error . "');</script>";
}

}

$companies = $conn->query("SELECT * FROM companies");

?>
<!DOCTYPE html>
<html>
<head>
    <title>Teacher Main Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="teachermainpage.css">
</head>

<body>

<nav>
   <div class="topbar">

      <div class="left-section">
        <img src="../../logo container/logoblue.png" id="logo">

        <div class="logo-text">
          <h2 id="logotext">ImmersionHub</h2>
          <p id="stilogo">STI College</p>
        </div>
      </div>

      <div class="right-section">
        <a href="#" class="profile-container">

            <img src="default.png" class="profile-pic">

            <div class="profile-info">
                <p class="profile-name">Juan Dela Cruz</p>
                <span class="profile-role">Teacher</span>
            </div>

        </a>
      </div>

   </div>
</nav>

<!-- NAV BUTTONS (Companies & Students) -->

<div class="nav-buttons-container">
  <button class="nav-btn active" onclick="showView('companies')">
    <span class="btn-icon">🏢</span>
    <span class="btn-text">Companies</span>
  </button>
  <button class="nav-btn" onclick="showView('students')">
    <span class="btn-icon">👨‍🎓</span>
    <span class="btn-text">Students</span>
  </button>
</div>


<!-- REGISTER COMPANY BUTTON -->

<div class="registercompany">
    <button class="toggle-btn" id="toggleRegister">
        + Register Company
    </button>
</div>


<!-- REGISTER FORM -->

<div class="form-wrapper">

<form id="registerForm" action="teachermainpage.php" method="POST" enctype="multipart/form-data">

<input type="text" placeholder="Email" name="email" required>

<input type="password" placeholder="Password" name="password" required>

<input type="password" placeholder="Confirm Password" name="confirmPassword" required>

<input type="text" placeholder="Name of Company" name="companyname" required>

<input type="text" placeholder="Location of Company" name="companyloc" required>

<input type="text" placeholder="Name of Supervisor" name="supervisorname" required>

<input type="text" placeholder="Contact Number" name="contactnumber" required>

<input type="text" placeholder="Company Email" name="companyemail" required>


<select name="course">
<option value="ABM">ABM</option>
<option value="HUMSS">HUMSS</option>
<option value="STEM">STEM</option>
<option value="IT MAWT">IT MAWT</option>
<option value="Digital Arts">Digital Arts</option>
<option value="Culinary Arts">Culinary Arts</option>
</select>


<input type="file" name="logo">
<input type="file" name="establishment">

<button type="submit">Register</button>

</form>

</div>


<!-- TEACHER DASHBOARD -->

<div class="teacher-dashboard" id="studentsView">

<h2>Student Immersion List</h2>

<div class="student-container">


<!-- COURSE FILTER -->

<div class="course-filter">

<button onclick="filterCourse('all')">All</button>
<button onclick="filterCourse('ABM')">ABM</button>
<button onclick="filterCourse('HUMSS')">HUMSS</button>
<button onclick="filterCourse('STEM')">STEM</button>
<button onclick="filterCourse('IT MAWT')">IT MAWT</button>
<button onclick="filterCourse('DIGITAL ARTS')">DIGITAL ARTS</button>
<button onclick="filterCourse('CULINARY ARTS')">CULINARY ARTS</button>
<button onclick="filterCourse('TOP')">TOP</button>

</div>


<!-- COURSE SECTIONS -->

<div class="course-section" data-course="ABM">
<h3>ABM Students</h3>

<div class="student-card">
<p class="student-name">Juan Dela Cruz</p>
<p class="student-email">juan@email.com</p>
</div>

<div class="student-card">
<p class="student-name">Maria Santos</p>
<p class="student-email">maria@email.com</p>
</div>

</div>


<div class="course-section" data-course="STEM">
<h3>STEM Students</h3>

<div class="student-card">
<p class="student-name">Pedro Reyes</p>
<p class="student-email">pedro@email.com</p>
</div>
</div>


<div class="course-section" data-course="HUMSS">
<h3>HUMSS Students</h3>

<div class="student-card">
<p class="student-name">Ana Lopez</p>
<p class="student-email">ana@email.com</p>
</div>
</div>


<div class="course-section" data-course="IT MAWT">
<h3>IT MAWT Students</h3>

<div class="student-card">
<p class="student-name">Mark Ramos</p>
<p class="student-email">mark@email.com</p>
</div>
</div>


<div class="course-section" data-course="DIGITAL ARTS">
<h3>Digital Arts Students</h3>

<div class="student-card">
<p class="student-name">Sample Student</p>
<p class="student-email">student@email.com</p>
</div>
</div>


<div class="course-section" data-course="CULINARY ARTS">
<h3>Culinary Arts Students</h3>

<div class="student-card">
<p class="student-name">Sample Student</p>
<p class="student-email">student@email.com</p>
</div>
</div>


<div class="course-section" data-course="TOP">
<h3>TOP Students</h3>

<div class="student-card">
<p class="student-name">Sample Student</p>
<p class="student-email">student@email.com</p>
</div>
</div>


</div>
</div>


<!-- REGISTERED COMPANIES -->

<div id="companyListContainer">

<div id="companyList">

<?php

$result = $conn->query("SELECT * FROM companies");

if($result && $result->num_rows > 0){

while($row = $result->fetch_assoc()){

?>

<div class="company-card" onclick="viewCompanyDetails(<?php echo $row['id']; ?>)">

<img src="../../uploads/<?php echo $row['logo']; ?>" class="company-logo">

<h3><?php echo $row['companyname']; ?></h3>

<p><b>Location:</b> <?php echo $row['companyloc']; ?></p>

<p><b>Course:</b> <?php echo $row['course']; ?></p>

<p><b>Supervisor:</b> <?php echo $row['supervisorname']; ?></p>

<p><b>Contact:</b> <?php echo $row['contactnumber']; ?></p>

<p><b>Email:</b> <?php echo $row['companyemail']; ?></p>

</div>

<?php

}

}else{

echo "<p>No companies registered yet.</p>";

}

?>

</div>

</div>


<script src="teachermainpage.js"></script>

</body>
</html>