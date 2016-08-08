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
						<li class="home"><a href="./index.html">Home</a></li>
						<li><a href="./students.html">Students</a>
							<ul>
								<li><a href="./information.html">Information</a></li>
								<li><a href="./index-alt2.html">Results</a></li>
								<!--<li><a href="./about.html">About</a></li>
								<li><a href="./portfolio.html">Portfolio</a></li>
								<li><a href="./portfolio-detail.html">Portfolio Detail</a></li>
								<li><a href="./blog.html">Blog</a></li>
								<li><a href="./single.html">Single</a></li>
								<li><a href="./fullwidth.html">Full Width</a></li>
								<li><a href="./contact.html">Contact</a></li>-->
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
						  <form id="contact" action="signin.php" method="post">
							<fieldset>
							  <label for="nme" id="name_label">User Name</label>
							   <input type="text" name="username" id="nae" size="30" value="" class="input" />
							  <span class="error" id="name_error">Please enter name !</span>
							  <br style="clear:both" /><br />
							  
							  
							 <label for="Student Id" id="Student_Id">Student_ID</label>
							  <input type="text" name="idd" id="eil" size="30" value="" class="input" />
							<!--  <span class="error" id="email_error">Please enter email address !</span>
							  <span class="error" id="email_error2">Please enter valid email address !</span>-->
							  <br style="clear:both" />
							  <input type="submit" name="submit"  value="SignIn"/>
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
		<marquee vspace="100" bgcolor="#000000" align="absmiddle" truespeed="truespeed"><img src="images/1.jpg" height="100" width="150"border="2"/>
		<img src="images/2.jpg" height="100" width="150" border="2"/>
		<img src="images/3.jpg" height="100" width="150" border="2"/>
		<img src="images/4.jpg" height="100" width="150" border="2"/>
		<img src="images/5.jpg" height="100" width="150" border="2"/>
		<img src="images/6.jpg" height="100" width="150" border="2"/>
		<img src="images/7.jpg" height="100" width="150" border="2"/>
		</marquee>
<?php
$conn = odbc_connect('bwsqldata','',''); 
 
$username = $_POST['username']; // you must escape any input. Remember.
 
//$query = "SELECT * FROM `user_tbl` WHERE `username` = '{$username}'";
$query=odbc_exec($conn, "SELECT * FROM studentreg WHERE StudentName='{$username}'"); 
//$result = mysql_query($query);
$result=odbc_exec($conn,$query); 
if ( odbc_num_rows ( $result ) > 1 )
{
    /* Username already exists */
    echo 'Username already exists';
}
else
{
    /* Username doesn't exist */
    /* .. insert query */
}
?>		
	
</body>
</html>
