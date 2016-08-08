<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<meta http-equiv="Content-Script-Type" content="text/javascript" /> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="robots" content="index, follow" />
<meta name="keywords" content="" />
<meta name="title" content="" />
<meta name="description" content="" />
<title>Home</title>
<!-- ////////////////////////////////// -->
<!-- //      Start Stylesheets       // -->
<!-- ////////////////////////////////// -->
<link href="../style.css" rel="stylesheet" type="text/css" />
<link href="./css/slider.css" rel="stylesheet" type="text/css" />
<!-- ////////////////////////////////// -->
<!-- //      Javascript Files        // -->
<!-- ////////////////////////////////// -->
<script type="text/javascript" src="../js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="../js/cufon-yui.js"></script>
<script type="text/javascript" src="../js/vegur_400-vegur_700.font.js"></script>
<script type="text/javascript">
	 Cufon.replace('h1') ('h1 a') ('h2') ('h3') ('h4') ('h5') ('h6') ('blockquote') ('.styled') ('.styledbold');
</script>
<script type="text/javascript" src="../js/dropdown.js"></script>
<script type="text/javascript" src="../js/jcarousellite_1.0.1c4.js"></script>
<script type="text/javascript">
	var $ = jQuery.noConflict();
	$(document).ready(function() {	
		/* for news ticker */
		$(".scroll-content").jCarouselLite({
		hoverPause:true,
		visible: 6,
		auto:3000,
		speed:1000,
		btnNext: ".scroll-next",
    	btnPrev: ".scroll-prev"
		});
		
	});	
</script>
<script type="text/javascript" src="../js/preloadimages.js"></script>
<script type="text/javascript" src="../js/swfobject.js"></script>

<!--[if IE 6]>
<script src="http://demo.templatesquare.com/html/blackbox/blackbox-darkblue/js/DD_belatedPNG.js"></script>
<script>
  DD_belatedPNG.fix('img, #logo, .bginput, .butsearch, #bottom-glow');
</script>
<![endif]--> 
<meta charset="UTF-8"></head>
<body>

<div id="wrapper">

	<div id="container-top">
		<div id="top">
			<div class="centercolumn">
				<div id="top-navigation">
					<ul id="topnav">
							<li class="home"><a href="">Home</a></li>
						<li><a href="../students.php">Students</a>
							<ul>
								<li><a href="">Programme</a></li>
										
							
								<li><a href="./index-alt2.html">Information</a></li>
							</ul>
						</li>
						<li><a href="../teachers.php">Teachers</a></li>
						<li><a href="../library.php">Library</a></li>
						<li><a href="../contact.php">Contact</a></li>
						
						
					</ul>
				</div><!-- end #top-navigation -->
				<div id="top-search">
					<form  method="get" action="">
						<div class="bginput"><input type="text" class="inputbox"/></div><div><input type="submit" value="" class="butsearch" /></div>
					</form>
				</div><!-- end #top-search -->
			</div><!-- end .centercolumn -->
		</div><!-- end #top -->
		<div id="header" class="header3d">
			<div class="centercolumn">
				<div id="header-top">
					<div></div>
					<div id="logo"><img src="../images/logo1.png" alt="" align="baseline" height="110"/></div><!-- end #logo -->
					<div id="slogan"><h1><font size="+2">Umaer Basha Institute Of Technology</font></h1></div><!-- end #logo -->
					<div id="ubit" align="right"><font size="+1" color="#FFFFFF">UBIT</font></div>
				</div><!-- end #header-top -->
				<div id="slider3d">
						<div id="flashcontent">
						<p>You need to <a href="http://www.adobe.com/products/flashplayer/">upgrade your Flash Player</a> to version 10 or newer.</p>
						</div><!-- end flash3d-->
						<script type="text/javascript">
						// <![CDATA[	
						var so = new SWFObject("piecemaker.swf", "piecemaker", "960", "497", "10", "#FFFFFF");
						so.addParam("wmode", "transparent");
						so.addParam("menu", "false");
						so.addParam("salign", "");
						so.write("flashcontent");
						// ]]>
						</script>
						
				</div><!-- end #slider3d -->
			</div><!-- end .centercolumn -->
		</div><!-- end #header -->
	</div><!-- end #container-top -->
	
	<div id="container-content">
		<div id="content">
			<div class="centercolumn">
				<p class="styledbold">Background<br />	<span class="styled">The Department of Computer Science, University of Karachi, was established by a resolution of Academic Council in its meeting, held on November 27. 1984, and it began functioning in the academic year 1985-86 by offering a Degree Program in Master of Computer Science (M.C.S.) and become one of first institutions in Karachi imparting education in Computer Science and Technology. The Department also offers evening program leading to Post Graduate Diploma (P.G.D.) in Computer & Information Sciences. In the year 1995; Department started M.C.S. evening program, on self-finance basis, to cater the growing demand of professionally skilled manpower in the field of Computer Science.</span> </p>
				<hr />
				<div class="column">
					<div class="col">
						<div class="img-frame1"><img src="../images/pic1.jpg" alt="" class="preloader" height="108" width="269" /></div>
						<h2>Library</h2>
						<p>The University of Karachi's library, known as "Dr. Mahmud Hussain Library", has houses well over !400,000 volumes dating back to the 1600s, for researchers as well as for use by students of advance studies and faculty members.</p>
					</div><!-- end .col -->
					
					<div class="col">
						<div class="img-frame1"><img src="../images/pic2.jpg" alt="" class="preloader" height="108" width="269" /></div>
						<h2>University of Karachi</h2>
						<p> It is one of the oldest universities in Pakistan and ranked among the top ten universities of the country in terms of the international standard, according to the Higher Education Commission (HEC) in 2013..</p>
					</div><!-- end .col -->
					
					<div class="col nomargin">
						<div class="img-frame1"><img src="../images/pic3.jpg" alt="" class="preloader" height="108" width="269"/></div>
						<h2>Dept. of Computer Science</h2>
						<p>The main objective of the UBIT is to impart quality education and conduct research in computer science and information technology. </p>
					</div><!-- end .col -->
					<div class="clear"></div><!-- clear float -->
				</div><!-- end #column -->
				<hr />
				<h2>Latest Events</h2>
				<div id="scroll-latest">
					<a class="scroll-prev"><img src="../images/prev.gif" alt="" /></a>
					<a class="scroll-next"><img src="../images/next.gif" alt="" /></a>
					<div class="scroll-content">
					<ul>
						<li><div class="img-frame2"><img src="../images/latest1.jpg" alt="" class="preloader" /></div></li>
						<li><div class="img-frame2"><img src="../images/latest2.jpg" alt="" class="preloader" /></div></li>
						<li><div class="img-frame2"><img src="../images/latest3.jpg" alt="" class="preloader" /></div></li>
						<li><div class="img-frame2"><img src="../images/latest4.jpg" alt="" class="preloader" /></div></li>
						<li><div class="img-frame2"><img src="../images/latest5.jpg" alt="" class="preloader" /></div></li>
						<li><div class="img-frame2"><img src="../images/latest6.jpg" alt="" class="preloader" /></div></li>
						<li><div class="img-frame2"><img src="../images/latest7.jpg" alt="" class="preloader" /></div></li>
						<li><div class="img-frame2"><img src="../images/latest8.jpg" alt="" class="preloader" /></div></li>
					</ul>
					</div><!-- end .scroll-content -->
				</div><!-- end #scroll-latest -->
			</div><!-- end .centercolumn -->
		</div><!-- end #content -->
	</div><!-- end #container-content -->
	
	<div id="container-bottom">
		<div id="bottom">
			<div id="bottom-glow">
			<div class="centercolumn">
				<div class="column">
					<div class="col">
						<h2>About Us</h2>
						<p><img src="../images/t_about.jpg" alt="" class="alignleft" height="55" width="55"/>Our aim is to developed more effective & attractive websites with appropriate database..</p>
					</div><!-- end .col -->
					<div class="col">
						<h2>Latest News</h2>
						<ul>
							<li><a href="#">Results</a></li>
							<li><a href="#">Scholarship</a></li>
							<li><a href="image1.html">Image gallery</a></li>
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
						<li><a href="#"><img src="../images/icon_linkedln.png" alt="" onmouseover="logo1.png" /></a></li>
						<li><a href="#"><img src="../images/icon_fb.png" alt="" /></a></li>
						<li><a href="#"><img src="../images/icon_twitter.png" alt=""  /></a></li>
						<li><a href="#"><img src="../images/icon_rss.png" alt="" /></a></li>
					</ul>
				</div><!-- end #social-icon -->
			</div><!-- end .centercolumn -->
			</div><!-- end #bottom-glow -->
		</div><!-- end #bottom -->
		<div id="footer">
			<div class="centercolumn">
				<div id="footer-right"><img src="../images/logo1.png" alt="" /></div><!-- end #footer-right -->
				<div id="footer-left">Copyright &copy; Parkash kumar & M.Yousuf. All rights reserved</div><!-- end #footer-left -->
			</div><!-- end .centercolumn -->
		</div>
	</div><!-- end #container-bottom -->
	
</div><!-- end #wrapper -->
<?php


?>
</body>
</html>
