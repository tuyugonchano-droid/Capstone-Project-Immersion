<?php
$conn = new mysqli("localhost","root","","immersionhub");
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

// Get company ID from URL
$company_id = isset($_GET['id']) ? $_GET['id'] : 0;

// Fetch company details
$result = $conn->query("SELECT * FROM companies WHERE id = $company_id");
$company = $result->fetch_assoc();

if(!$company){
    die("Company not found!");
}

// Handle form submission
if(isset($_POST['submit_application'])){
    $student_name = $_POST['student_name'];
    $student_email = $_POST['student_email'];
    $student_phone = $_POST['student_phone'];
    $student_course = $_POST['student_course'];
    
    // File uploads
    $resume = $_FILES['resume']['name'];
    $resume_tmp = $_FILES['resume']['tmp_name'];
    
    $cover_letter = $_FILES['cover_letter']['name'];
    $cover_letter_tmp = $_FILES['cover_letter']['tmp_name'];
    
    // Create uploads folder if not exists
    if(!file_exists("../../uploads/applications")){
        mkdir("../../uploads/applications", 0777, true);
    }
    
    move_uploaded_file($resume_tmp, "../../uploads/applications/".$resume);
    move_uploaded_file($cover_letter_tmp, "../../uploads/applications/".$cover_letter);
    
    // Insert to database
    $sql = "INSERT INTO applications (company_id, student_name, student_email, student_phone, student_course, resume, cover_letter) 
            VALUES ($company_id, '$student_name', '$student_email', '$student_phone', '$student_course', '$resume', '$cover_letter')";
    
    if($conn->query($sql) === TRUE){
        echo "<script>alert('Application submitted successfully!'); window.location.href='studentbrowse.php';</script>";
    }else{
        echo "<script>alert('Error: " . $conn->error . "');</script>";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Apply - <?php echo $company['companyname']; ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="application.css">
</head>
<body>

<header>
  <div class="header-container">
        <div class="header-left">
            <img src="../../logo container/logodilaw.png" class="header-logo" alt="Logo">
            <h2 class="site-title">Immersion Hub</h2>
        </div>
    </div>
</header>

<div class="application-container">

    <!-- Company Info Section -->
    <div class="company-info-card">
        <img src="../../uploads/<?php echo $company['logo']; ?>" class="company-logo" alt="Company Logo">
        <h1><?php echo $company['companyname']; ?></h1>
        <p><strong>Location:</strong> <?php echo $company['companyloc']; ?></p>
        <p><strong>Course:</strong> <?php echo $company['course']; ?></p>
        <p><strong>Supervisor:</strong> <?php echo $company['supervisorname']; ?></p>
        <p><strong>Contact:</strong> <?php echo $company['contactnumber']; ?></p>
        <p><strong>Email:</strong> <?php echo $company['companyemail']; ?></p>
    </div>

    <!-- Application Form Section -->
    <div class="application-form-card">
        <h2>Application Form</h2>
        <form method="POST" enctype="multipart/form-data">
            
            <label>Full Name</label>
            <input type="text" name="student_name" required placeholder="Juan Dela Cruz">
            
            <label>Email Address</label>
            <input type="email" name="student_email" required placeholder="juan@email.com">
            
            <label>Phone Number</label>
            <input type="text" name="student_phone" required placeholder="09123456789">
            
            <label>Course/Strand</label>
            <select name="student_course" required>
                <option value="">Select Course</option>
                <option value="ABM">ABM</option>
                <option value="HUMSS">HUMSS</option>
                <option value="STEM">STEM</option>
                <option value="IT MAWT">IT MAWT</option>
                <option value="Digital Arts">Digital Arts</option>
                <option value="Culinary Arts">Culinary Arts</option>
                <option value="TOP">TOP</option>
            </select>
            
            <label>Resume (PDF)</label>
            <input type="file" name="resume" accept=".pdf" required>
            
            <label>Cover Letter (PDF)</label>
            <input type="file" name="cover_letter" accept=".pdf" required>
            
            <button type="submit" name="submit_application" class="submit-btn">Submit Application</button>
            
        </form>
        <a href="studentbrowse.php" class="back-btn">← Back to Browse</a>
    </div>

</div>

</body>
</html>
