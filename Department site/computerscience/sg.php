\<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<!--<link rel="shortcut icon" href="http://demo.templatesquare.com/html/blackbox/blackbox-darkblue/images/favicon.ico" />-->
<meta http-equiv="Content-Script-Type" content="text/javascript" /> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="robots" content="index, follow" />
<meta name="keywords" content="" />
<meta name="title" content="" />
<meta name="description" content="" />
<title>signup</title>
<!-- ////////////////////////////////// -->
<!-- //      Start Stylesheets       // -->
 ////////////////////////////////// 
<link href="./css/style.css" rel="stylesheet" type="text/css" />
<!--<link href="./css/inner.css" rel="stylesheet" type="text/css" />-->
<!-- ////////////////////////////////// -->
<!-- //      Javascript Files        // -->
<!-- ////////////////////////////////// -->
<script type="text/javascript" src="./js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="./js/cufon-yui.js"></script>
<script type="text/javascript" src="./js/vegur_400-vegur_700.font.js"></script>
<script type="text/javascript">
	 Cufon.replace('h1') ('h1 a') ('h2') ('h3') ('h4') ('h5') ('h6') ('blockquote') ('.styled') ('.styledbold')
</script>
<script type="text/javascript" src="./js/dropdown.js"></script>
<script type="text/javascript" src="./js/contact.js"></script>
<script type="text/javascript" src="./js/preloadimages.js"></script>
<!--[if IE 6]>
<script src="http://demo.templatesquare.com/html/blackbox/blackbox-darkblue/js/DD_belatedPNG.js"></script>
<script>
  DD_belatedPNG.fix('img, #logo, .bginput, .butsearch, #bottom-glow');
</script>
<![endif]--> 
<meta charset="UTF-8"></head>
<body>

<div id="wrapper">

	<div id="container-top-inner">
		<div id="top">
			<div class="centercolumn">
				<div id="top-navigation">
					<ul id="topnav">
						<li class="home"><a href="./index.html">Home</a></li>
						<li><a href="./students.php">Students</a>
							<ul>
								<li><a href="./sg.php">Registration</a></li>
									<li><a href="info.php">Information</a></li>
										<li class="course"><a href="./courses.php">Courses</a></li>
							</ul>
						</li>
					
						<li><a href="./teachers.html">Teachers</a></li>
						<li><a href="./library.html">Library</a></li>
						<li><a href="./contact.html">Contact</a></li>
					</ul><!-- end #topnav -->
				</div><!-- end #top-navigation -->
				<div id="top-search">
					<form  method="get" action="">
						<div class="bginput"><input type="text" class="inputbox"/></div><div><input type="submit" value="" class="butsearch" /></div>
					</form>
				</div><!-- end #top-search -->
			</div><!-- end .centercolumn -->
		</div><!-- end #top -->
		<div id="header-inner">
			<div class="centercolumn">
				<div id="header-top">
					<div id="logo"><img src="./images/lo.png" alt="" height="110" align="baseline"/></div><!-- end #logo -->
					<div id="slogan"><h1><font size="+2">Umaer Basha Institute Of Technology</font></h1></div>
				</div><!-- end #header-top -->
			</div><!-- end .centercolumn -->
		</div><!-- end #header-inner -->
	</div><!-- end #container-top -->
	
	<div id="container-content">
		<div id="content-inner">
			<div class="centercolumn">
				<div id="page-title"><h1>Sign Up!</h1></div><!-- end #page-title -->
				<div id="page-content">
					<div class="col-left">
				
					<div id="contact_form">
						  
							<form id="contact" action="sg.php" method="post">
							<fieldset>
							  <label for="nae" id="name_label">Student Name</label>
							   <input type="text" name="name"  size="29" value="" class="input" />
							  <span class="error" id="name_error"><font color="#FF0000" >Enter Student Name !</font></span>
							  
							  <label for="name" id="name_label">	Student_ID</label>
							   <input type="text" name="id" id="ne" size="30" value="" class="input" />
							  <span class="error" id="name_error"><font color="#FF0000" >Enter Student_ID !</font></span>
							  <br style="clear:both" /><br />
							  
							 <label for="Father Name" id="Father Name">Father Name</label>
							  <input type="text" name="father" id="fnm" size="30" value="" class="input" />
							   <span class="error" id="name_error"><font color="#FF0000">Enter FatherName!</font></span>
							   <br style="clear:both" /><br />
							   
							  <label for="Section" id="sec">Section</label>
							  <input type="text" name="section" id="sec" size="35" value="" class="input" />
							      <span class="error" id="name_error" ><font color="#FF0000">Enter Section!</font></span>
							   <br style="clear:both" /><br />
							   
							  <label for="Shf" id="Sht">Shift</label>
							  <input type="text" name="Shift" id="sht" size="38" value="" class="input" />
							     <span class="error" id="name_error" ><font color="#FF0000">Enter Shift!</font></span>
							   <br style="clear:both" /><br />
							   
							  <label for="program" id="prog">Program</label>
							  <input type="text" name="program" id="prog" size="34" value="" class="input" />
							   <span class="error" id="name_error" ><font color="#FF0000">Enter Program!</font></span>
							 <br style="clear:both" /><br />
							 <!--  <span class="error" id="email_error">Please enter email address !</span>
							  <span class="error" id="email_error2">Please enter valid email address !</span>-->
							 
							   
							  <label for="password" id="pwd" >Password</label>
							  	<input type="password" name="password" id="pwd" size="32" value="" class="input" />
								 <span class="error" id="name_error" ><font color="#FF0000">Enter Password!</font></span>
							  <br style="clear:both" /><br />
							  
							  <label for="DepartmentID" id="d_id">Depart_ID</label>
							  <input type="text" name="Depart_ID" id="D_ID" size="32.5" value="" class="input" />
							   <span class="error" id="name_error" ><font color="#FF0000">Enter Program!</font></span>
							 <br style="clear:both" /><br />
	
							 <h2>Birthday!</h2>	 
							 
							 <label for="Dob" id="dob">Date OF Birth</label>
							  <input type="text" name="Dob" id="D_ID" size="29" value="" class="input" />
							   <span class="error" id="name_error" ><font color="#FF0000">Enter Program!</font></span>
							 <br style="clear:both" /><br />


	
	<br />
							  <input type="submit" name="submit"  value="Signup"  />
							
							
							</fieldset>
						  </form><br />
					</div><!-- end of #contact_form -->
					
			</div>
		
		</div>
		<br />
		<br/>
		<br/>
		<br />
		<br/>
		<br/>
<?php
$i=$_POST['id'];
$n=$_POST['name'];
$f=$_POST['father'];
$s=$_POST['section'];
$shft=$_POST['Shift'];
$prog=$_POST['program'];
$pwd=$_POST['password'];
$did=$_POST['Depart_ID'];
$dob=$_POST['Dob'];

$conn = odbc_connect('bwsqldata','',''); 
if($INSERT="INSERT INTO studentreg VALUES('$i','$n','$f','$shft','$prog','$pwd','$dob','$did','$s')")
{$resultse=odbc_exec($conn,$INSERT);
echo " you are registered now";}
else
{ echo "you are not allowed to registered";
}
$resultset=odbc_exec($conn, "SELECT Student_ID,StudentName,FatherName,Shift,Program,DOB,Depart_ID,section FROM studentreg");
odbc_result_all($resultset,"border=1");
?>		
	
</body>
</html>
