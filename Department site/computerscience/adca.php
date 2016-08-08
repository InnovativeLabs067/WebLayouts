<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<meta http-equiv="Content-Script-Type" content="text/javascript" /> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="robots" content="index, follow" />
<meta name="keywords" content="" />
<meta name="title" content="" />
<meta name="description" content="" />
<title>Administration</title>
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
							<li class="home"><a href="./adhome.html">Home</a></li>
					
						<li><a href="./admin.php">Admin</a></li>
						
						
						
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
				<div id="page-title"><h1>Course Assigning</h1></div><!-- end #page-title -->
				<div id="page-content">
					<div class="col-left">
					<h2></h2>
					<p></p>
					<div id="contact_form">
						  <form id="contact" action="adca.php" method="post">
							<fieldset>
							  <label for="name" id="name_label">Course Number</label>
							  <input type="text" name="cn" id="nam" size="30" value="" class="input" />
							  <span class="error" id="name_error">Please enter number !</span>
							  <br style="clear:both" />
							  
							   <label for="id" id="id">Course Title</label>
							  <input type="text" name="ct" id="idd" size="30" value="" class="input" />
							  <span class="error" id="id_error">Please enter Title !</span>
							  <br style="clear:both" />
							  
							 <label for="Faculty Member" id="Faculty_Memberl">Faculty Member</label>
							  <input type="text" name="fm" id="f" size="30" value="" class="input" />
							  <span class="error" id="email_error">Please Enter Faculty Member !</span>
							 <br style="clear:both" />
							 
							  <label for="id" id="id">Credit Hours</label>
							  <input type="text" name="ch" id="idd" size="30" value="" class="input" />
							  <span class="error" id="id_error">Please enter Credit Hours !</span>
							  <br style="clear:both" />
							 
							  <label for="id" id="id">Section</label>
							  <input type="text" name="sec" id="idd" size="30" value="" class="input" />
							  <span class="error" id="id_error">Please enter Section !</span>
							  <br style="clear:both" />
						
							  <br />
							  <input type="submit" name="submit" value="Send"/>
							</fieldset>
						  </form><br />
<?php
$n=$_POST['cn'];
$id=$_POST['ct'];
$an=$_POST['fm'];
$avbl=$_POST['ch'];
$quan=$_POST['sec'];
$conn = odbc_connect('bwsqldata','',''); 
if($INSERT="INSERT INTO teachercourse VALUES('$n','$id','$an','$avbl','$quan')")
{
$resultse=odbc_exec($conn,$INSERT);
echo " Lish has Updated";
}
else
{ echo "Entry Failed";
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
							<li><a href="#">Scholarship</a></li>
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
