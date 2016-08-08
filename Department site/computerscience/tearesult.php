<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<meta http-equiv="Content-Script-Type" content="text/javascript" /> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="robots" content="index, follow" />
<meta name="keywords" content="" />
<meta name="title" content="" />
<meta name="description" content="" />
<title>Results Updates</title>
<!-- ////////////////////////////////// -->
<!-- //      Start Stylesheets       // -->
<!-- ////////////////////////////////// -->
<link href="./css/style.css" rel="stylesheet" type="text/css" />
<link href="./css/inner.css" rel="stylesheet" type="text/css" />
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
						<li class="home"><a href="./thome.html">Home</a></li>
						
						
						<li><a href="./teach.php">Teachers</a></li>
						
						
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
				<div id="page-title"><h1>Update Results</h1></div><!-- end #page-title -->
				<div id="page-content">
					<div class="col-left">
					<h2>Updates</h2>
					<p></p>
					<div id="contact_form">
					
					
						  <form id="contact" action="tearesult.php" method="post">
							<fieldset>
							  <label for="name" id="name_label">Student Name</label>
							  <input type="text" name="n1" id="nam" size="30" value="" class="input" />
							  <span class="error" id="name_error">Please enter name !</span>
							  <br style="clear:both" />
							  
							   <label for="id" id="id">Student_ID</label>
							  <input type="text" name="id" id="idd" size="30" value="" class="input" />
							  <span class="error" id="id_error">Please enter ID !</span>
							  <br style="clear:both" />
							  
							 <label for="Course Number" id="Course_Number">Course Number</label>
							  <input type="text" name="cn" id="cnn" size="30" value="" class="input" />
							  <span class="error" id="cn_error">Please enter Course Number !</span>
							    <br style="clear:both" />
							  
							   <label for="Theory Marks" id="Theory_Marks">Theory Marks</label>
							  <input type="text" name="th" id="t" size="30" value="" class="input" />
							  <span class="error" id="th_error">Please enter Theory Marks !</span>
							    <br style="clear:both" />
							  
							   <label for="Practical Marks" id="Practical_Marks">Practical Marks</label>
							  <input type="text" name="pm" id="p" size="30" value="" class="input" />
							  <span class="error" id="pm_error">Please enter Practical Marks !</span>
							 
							  <br style="clear:both" />
							  
							  <label for="Grade Point" id="Grade_Point">Grade Point</label>
							  <input type="text" name="gp" id="g" size="30" value="" class="input" />
							  <span class="error" id="gp_error">Please enter Grade Point !</span>
							 
							  <br style="clear:both" />
							  <input type="submit" value="Upload" />
							</fieldset>
						  </form><br />
<?php
$n=$_POST['n1'];
$id=$_POST['id'];
$cn=$_POST['cn'];
$th=$_POST['th'];
$pm=$_POST['pm'];
$gp=$_POST['gp'];
$conn = odbc_connect('bwsqldata','',''); 
if($INSERT="INSERT INTO std_marks VALUES('$id','$n','$cn','$th','$pm','$gp')")
{
$resultse=odbc_exec($conn,$INSERT);
echo " Your Result has uploaded";
}
else
{ echo "Uploading failed";
}

?>

					</div><!-- end of #contact_form -->
					</div><!-- end .col-left -->
					<div class="side-right">
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<!-- end widget-area -->
					<div class="widget-area">
							<ul>
								
									</ul>
									</div>
									</div>
								</li>
							</ul>
					</div><!-- end widget-area -->
					</div><!-- end .side-right -->
					<div class="clear"></div>
				</div><!-- end #page-content -->
			</div><!-- end .centercolumn -->
		</div><!-- end #content-inner -->
	</div><!-- end #container-content -->
	
	<div id="container-bottom">
		<div id="bottom">
			<div id="bottom-glow">
			<div class="centercolumn">
				<div class="column">
					<div class="col">
						<h2>About Us</h2>
						<p><img src="./images/t_about.jpg" alt="" class="alignleft" height="55" width="55" />Our aim is to developed more effective & attractive websites with appropriate database..</p>
					</div><!-- end .col -->
					<div class="col">
						<h2>Latest News</h2>
						<ul>
						  <li><a href="#">Results</a></li>
							<li><a href="#">Message</a></li>
							<li><a href="#">Image gallery</a></li>
							<li><a href="#">Seminars</a></li>
							<li><a href="#">Other Information by Department</a></li>
						</ul>
					</div><!-- end .col -->
					<div class="col nomargin">
						<h2>Contact Info</h2>
						<ul>
						<li><strong>Web Developers</strong><br />
						  1234 Address City, TS 56789<br />
						  Karachi, Pakistan<br />
						  Phone: 0303-2769561<br />
						  Fax: 0800-123456<br />
						  Email: pk_bscs@yahoo.com<br />
						  Website: www.webdev.com</li>
						</ul>
					</div><!-- end .col -->
				</div><!-- end #column -->
				<div class="clear"></div><!-- clear float -->
				<div id="social-icon">
					<ul>
						<li><a href="#"><img src="./images/icon_linkedln.png" alt="" /></a></li>
						<li><a href="#"><img src="./images/icon_fb.png" alt="" /></a></li>
						<li><a href="#"><img src="./images/icon_twitter.png" alt="" /></a></li>
						<li><a href="#"><img src="./images/icon_rss.png" alt="" /></a></li>
					</ul>
				</div><!-- end #social-icon -->
			</div><!-- end .centercolumn -->
			</div><!-- end #bottom-glow -->
		</div><!-- end #bottom -->
		<div id="footer">
			<div class="centercolumn">
				<div id="footer-right"><img src="./images/logo1.png" alt="" /></div><!-- end #footer-right -->
				<div id="footer-left">Copyright &copy; Parkash kumar & M.Yousuf. All rights reserved</div>
			</div><!-- end .centercolumn -->
		</div>
	</div><!-- end #container-bottom -->
	
</div><!-- end #wrapper -->

</body>
</html>
