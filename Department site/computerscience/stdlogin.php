<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<meta http-equiv="Content-Script-Type" content="text/javascript" /> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="robots" content="index, follow" />
<meta name="keywords" content="" />
<meta name="title" content="" />
<meta name="description" content="" />
<title>SignIn</title>
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
						</ul>
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
					<div id="logo"><img src="./images/logo1.png" alt="" height="110" align="baseline"/></div><!-- end #logo -->
					<div id="slogan"><h1><font size="+2">Umaer Basha Institute Of Technology</font></h1></div>
				</div><!-- end #header-top -->
			</div><!-- end .centercolumn -->
		</div><!-- end #header-inner -->
	</div><!-- end #container-top -->
	
	<div id="container-content">
		<div id="content-inner">
			<div class="centercolumn">
				<div id="page-title"><h1>Sign In!</h1></div><!-- end #page-title -->
				<div id="page-content">
					<div class="col-left">
				
					<div id="contact_form">
						  <form id="contact" action="stdlogin.php" method="post">
							<fieldset>
							  <label for="nme" id="name_label">Enter Link Address</label>
							   <input type="text" name="username" id="nae" size="30" value="" class="input"  />
							   
							  <span class="error" id="name_error">Please enter name !</span>
							  <br style="clear:both" /><br />
							  
						
							<!--  <span class="error" id="email_error">Please enter email address !</span>
							  <span class="error" id="email_error2">Please enter valid email address !</span>-->
							  <br style="clear:both" />
							  
							  <input type="submit" name="submit"  value="SignIn" />
							  
							</fieldset>
						  </form><br />
					</div><!-- end of #contact_form -->
					
			</div>
		
		</div>
<?php
$n=$_POST['username'];
if($n==http://localhost/website/computerscience/students.php
$id=$_POST['idd'];
$conn = odbc_connect('bwsqldata','',''); 
if($INSERT="INSERT INTO login1 VALUES('$n','$id')")
{
$resultse=odbc_exec($conn,$INSERT);
echo "<h2>You are valid user click to proceed in</h2>"."<br/><h2><a href=./students.php>Student Section</a></h2>";
}
else
{
echo "invalid user";
}
//$resultset=odbc_exec($conn, "SELECT StudentName FROM teachercourse WHERE FacultyMember='MadhiaKhurram'");
//odbc_result_all($resultset,"border=1");


//if($n=="admin" || $n=="ADMIN" && $id=="123456")
//{
//echo "<h2>You are valid user click to proceed in</h2>"."<br/><h2><a href=./admin.php>Admin</a></h2>";
//}
//else if($n=="librarian" || $n=="LIBRARIAN" && $id=="book")
//{
//echo "<h2>You are valid user click to proceed in</h2>"."<br/><h2><a href=./librarian.php>Library</a></h2>";
//}
//else if($n=="teacher" || $n=="TEACHER" && $id=="lecture")
//{
//echo "<h2>You are valid user click to proceed in</h2>"."<br/><h2><a href=./teach.php>Teacher Section</a></h2>";
//}
//else
//{
//echo "wrong input";
//}

?>
		<br />
		<br/>
		<br/>
		<br />
		<br/>
		<br/>
		<marquee vspace="100" bgcolor="#000000" align="absmiddle" truespeed="truespeed"><img src="images/1.jpg" height="100" width="150"border="2"/>
		<img src="images/2.jpg" height="100" width="150" border="2"/>
		<img src="images/3.jpg" height="100" width="150" border="2"/>
		<img src="images/4.jpg" height="100" width="150" border="2"/>
		<img src="images/5.jpg" height="100" width="150" border="2"/>
		<img src="images/6.jpg" height="100" width="150" border="2"/>
		<img src="images/7.jpg" height="100" width="150" border="2"/>
		</marquee>
	
	
</body>
</html>
