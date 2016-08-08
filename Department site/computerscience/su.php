<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
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
<link href="./css/inner.css" rel="stylesheet" type="text/css" />-->
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
						  <form id="contact" action="su.php" method="post">
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
							   
							  <label for="Shift" id="Shft">Shift</label>
							  <input type="text" name="Shift" id="shft" size="38" value="" class="input" />
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
							 
							 
	<h2>Gender</h2>
	<input type="radio" name="r" />male				<input type="radio" name="r"/>female <br /><br />
							 <h2>Birthday!</h2>	 
	<label >
	<select name="year" style="background-attachment:scroll" >
	<option>Year</option>
	<option >1950</option>
	<option >1951</option>
	<option >1952</option>
	<option >1953</option>
	<option >1954</option>
	<option >1955</option>
	<option >1956</option>
	<option >1957</option>
	<option >1958</option>
	<option >1959</option>
	<option >1960</option>
	<option >1961</option>
	<option>1962</option>
	<option >1964</option>
	<option >1965</option>
	<option >1966</option>
	<option >1967</option>
	<option >1968</option>
	<option >1969</option>
	<option >1970</option>
	<option >1971</option>
	<option >1972</option>
	<option >1973</option>
	<option >1974</option>
	<option >1972</option>
	<option >1975</option>
	<option >1976</option>
	<option >1977</option>
	<option >1978</option>
	<option >1979</option>
	<option >1980</option>
	<option >1981</option>
	<option >1982</option>
	<option >1983</option>
	<option >1984</option>
	<option >1985</option>
	<option >1986</option>
	<option >1987</option>
	<option >1988</option>
	<option >1989</option>
	<option >1990</option>
	<option >1992</option>
	<option >1993</option>
	<option >1994</option>
	<option >1995</option>
	<option >1996</option>
	<option >1997</option>
	<option >1998</option>
	<option >1999</option>
	<option >2000</option>
	<option >2001</option>
	<option >2002</option>
	<option >2003</option>
	<option >2004</option>
	<option >2005</option>
	<option >2006</option>
	<option >2007</option>
	<option >2008</option>
	<option >2009</option>
	<option >2010</option>
	<option >2011</option>
	<option >2012</option>
	<option >2013</option>
	<option >2014</option>
	<option>jan</option>
	</select>
	</label>
	<label>
	<select name="month">
	<option>Month</option>
	<option>jan</option>
			    <option>feb</option>
			    <option>mar</option>
			    <option>apr</option>
				
				<option>may</option>
			    <option>june</option>
			    <option>july</option>
			    <option>aug</option>
				<option>sep</option>
			    <option>oct</option>
			    <option>nov</option>
			    <option>dec</option>
	</select>
	</label>	
	<label>
	<select name="date">
	<option>Date</option>
	<option>1</option>
	<option>2</option>
	<option>3</option>
	<option>4</option>
	<option>5</option>
	<option>6</option>
	<option>7</option>
	<option>8</option>
	<option>9</option>
	<option>10</option>
	<option>11</option>
	<option>12</option>
	<option>13</option>
	<option>14</option>
	<option>15</option>
	<option>16</option>
	<option>17</option>
	<option>18</option>
	<option>19</option>
	<option>20</option>
	<option>21</option>
	<option>22</option>
	<option>23</option>
	<option>24</option>
	<option>25</option>
	<option>26</option>
	<option>27</option>
	<option>28</option>
	<option>29</option>
	<option>30</option>
	<option>31</option>
	</select></label>	<br />
							  <input type="submit" name="submit" class="button" id="submit_btn" value="Signup"/>
							
							
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
$n=$_POST['name'];
//$i=$_POST['id'];
//$f=$_POST['father'];
//$s=$_POST['section'];
//$shf=$_POST['shift'];
//$prog=$_POST['program'];
//$pwd=$_POST['password'];
//$di=$_POST['Depart_id'];
//$dob=$_POST['year'];

//$conn = odbc_connect('bwsqldata','',''); 
//
//$resultse=odbc_exec($conn,$INSERT);
//
//$INSERT="INSERT INTO std_registration VALUES('$n','$i','$f','$s','$shf','$prog','$pwd','$di','$dob')"; 
//$resultse=odbc_exec($conn,$INSERT);
?>


</body>
</html>
