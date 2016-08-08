score=0;
percent=0;
total=5;
function login(){

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == "zain" && password == 1234) {
        location.href = "homepage.html";
    }
    else {
        window.alert("Invalid username OR Password");

        document.getElementById('username').value = "";
        document.getElementById('password').value = "";

    }
}
function signUp(){

    var name = document.getElementById('fname');
    if (document.getElementById('fname').value =="") {
        name.style.color = "red";
        document.getElementById('fname').value = "Fill out this field";

    }

    var lastname = document.getElementById('sname');
    if (document.getElementById('sname').value =="") {
        lastname.style.color = "red";
        document.getElementById('sname').value = "Fill out this field";


    }

    var password = document.getElementById('paswrd');
    if (document.getElementById('paswrd').value =="") {
        //password.style.backgroundColor = "red";
        password.style.borderColor = "Red";

    }



    var cpassword = document.getElementById('cpaswrd');
    if (document.getElementById('cpaswrd').value =="") {
        //cpassword.style.backgroundColor = "red";
        cpassword.style.borderColor = "Red";
    }

}


function feedbackPage(){

    var feedbackpageshow = "<div class='quizcenter'><div id='question'><br><p style='font-size: 25px;'>Share your Views about Quizmaster!!</p><div id='comment'></div><br><form  onsubmit='feedback();'><textarea name='comments' cols='65' rows='7' placeholder='Enter your comments!!' id='feed'></textarea><br><input type='button' value='comment' onclick='feedback();' class='allbutton'></div></form></div></div><footer>CopyRight© Zain Ansari,2016</footer>";
    document.getElementById('mainpagecenter').innerHTML = feedbackpageshow;
    document.getElementById('footer').style.display = 'none';

}


function feedback() {
    /*
     document.getElementById('commentButton').onclick =
     function (){
     displayComment();
     };
     function displayComment() {

     var views = document.getElementById('feed').value;
     document.getElementById('comment').innerHTML = views;
     //comment.style.color = "red";*/

    var views = document.getElementById('feed').value;
    document.getElementById('comment').innerText = views;
    var views = document.getElementById('feed').value = "";
    comment.style.color = "RoyalBlue";

}

function quizPage(){

    var quizespageshow ="<div class='quizcenter'><div id='question'><br><p style='font-size: 25px;'>Ask Questions!!</p><div id='askquestions'></div><br><form  onsubmit='askQuiz();'><textarea name='comments' cols='65' rows='7' placeholder='Ask questions!!' id='askquiz'></textarea><br><input type='button' value='Post' onclick='askQuiz();' class='allbutton'></div></form></div></div><footer>CopyRight© Zain Ansari,2016</footer>";
    document.getElementById('mainpagecenter').innerHTML = quizespageshow;
    document.getElementById('footer').style.display = 'none';

}

function askQuiz(){

    var questions = document.getElementById('askquiz').value;
    document.getElementById('askquestions').innerText = questions;
    var question = document.getElementById('askquiz').value = "";
    askquestions.style.color = "RoyalBlue";


}










    function aboutPage(){

    var aboutpageshow ="<div id='aboutcenter'><div id='question'><div id='about'>About US</div><br><p style='font-size: 25px;'>Webmaster provides tutorial of HTML5,CSS3 and Javascript!!</p><br><br><br></div><div id='aboutbrief'>The rise in the use of mobile devices has led many a developer to throw up their hands in frustration.<br>Should a business require both a website and a mobile application?<br>This websites provides HTML5,CSS3 and JavaScript languages tutorials that work equally well on all mobile platforms as well as websites.<br><br><br>You learn these languages and give test to test your skills.</div><br><br><div id='hcjimg'><img src='progressive-enhancement.png' id='progressimg'></div></div><footer>CopyRight© Zain Ansari,2016</footer>";
    document.getElementById('mainpagecenter').innerHTML = aboutpageshow;
    document.getElementById('footer').style.display = 'none';

}


function contactus() {

    var contactpageshow ="<div id='aboutcenter'><div id='question'><div id='about'>Contact US</div><br><p style='font-size: 25px;'>You can contact us from following details</p><br><br><br><div id='contact'><fieldset><legend>Details:</legend>Company Name: Ansari Developers<br> Email: zainansari11@y7mail.com<br>Phone no.s: 0336-2344369<p> Join us on</p><a href='none'><img src='facebook.png' alt='pic not found' width='40' height='37'></a><a href='none'><img src='twitter.png' alt='pic not found' width='38' height='37'></a><a href='none'><img src='skype.png' width='35' height='37'></a></fieldset><br><br></div></div></div><footer>CopyRight© Zain Ansari,2016</footer>";
    document.getElementById('mainpagecenter').innerHTML = contactpageshow;
    document.getElementById('footer').style.display = 'none';

}









function Question1(){



 var form = document.getElementById('onlinetest1');
 for (var i = 0; i < form.options.length; i++) {
 if (form.options[i].checked) {
 var selectedValue = form.options[i].value;

 }
 }
 if (selectedValue == "hyper text markup language") {


 //alert("Correct Answer");

 //document.write("Answer is Correct");


     document.getElementById('answers').innerHTML = "Answers";
     document.getElementById('answers').className += 'answersshow';
     document.getElementById('displayanswer1').innerText = "Q1.Answer is Correct(Answer: hyper text markup language)";
     document.getElementById('displayanswer1').style.color = "DodgerBlue";
     document.getElementById('displayanswer1').className += 'rightshow';
     //alert(score);

     score ++; /*score increment if answer is right*/
     document.getElementById('score').innerHTML=score; /* show score from this*/



     //document.getElementById('displayanswer1').style.borderColor.display = "visible";
     //document.getElementById('displayanswer1').style.backgroundColor = "Gainsboro";
     //document.getElementById('displayanswer1').style.width = "150px";

     var quiz2 = "<br><p>Q2.Which one is the smallest heading??</p><form id='onlinetest2' onSubmit='return Question2();'><input type='radio' name='options' value='a'>h3<br><input type='radio' name='options' value='b'>h5<br><input type='radio' name='options' value='c'>h1<br><input type='radio' name='options' value='d'>h6<br><br><br></form><input type='button' value='Next' onclick='Question2();'/>";
     document.getElementById('question').innerHTML = quiz2;

 }
 else {


 //alert("Wrong answer");



 //document.write("Answer is wrong'<br>'");
 //document.write("Answer is hyper text markup language");


     document.getElementById('answers').innerHTML = "Answers";
     document.getElementById('answers').className += 'answersshow';
     document.getElementById('displayanswer1').innerText = "Q1.Answer is Wrong(Answer: hyper text markup language)";
     document.getElementById('displayanswer1').style.color = "FireBrick";
     document.getElementById('displayanswer1').className += 'wrongshow';

     document.getElementById('score').innerHTML=score; //show score


     var quiz2 = "<br><p>Q2.Which one is the smallest heading??</p><form id='onlinetest2' onSubmit='return Question2();'><input type='radio' name='options' value='a'>h3<br><input type='radio' name='options' value='b'>h5<br><input type='radio' name='options' value='c'>h1<br><input type='radio' name='options' value='d'>h6<br><br><br></form><input type='button' value='Next' onclick='Question2();'/>";
     document.getElementById('question').innerHTML = quiz2;
 }
 }

 function Question2() {

 var form = document.getElementById('onlinetest2');
 for (var i = 0; i < form.options.length; i++) {
 if (form.options[i].checked) {
 var selectedValue = form.options[i].value;
 }
 }
 if (selectedValue == "d") {
 //alert("Correct Answer");

  //document.write("Answer is Correct");

  document.getElementById('displayanswer2').innerHTML = "Q2.Answer is Correct(Answer: h6)";
  document.getElementById('displayanswer2').style.color = "DodgerBlue";
  document.getElementById('displayanswer2').style.borderColor = "DimGray";
  document.getElementById('displayanswer2').className += 'rightshow';

  score++; /*score increment if answer is right*/
  document.getElementById('score').innerHTML=score; /*show score from this */

     var quiz3 = "<br><p>Q3.Who is making the web standards??</p><form id='onlinetest3' onSubmit='return Question3();'><input type='radio' name='options' value='a'>Mozilla<br><input type='radio' name='options' value='b'>Microsoft<br><input type='radio' name='options' value='c'>The World Wide Web Consortium<br><input type='radio' name='options' value='d'>Google<br><br><br></form><input type='button' value='Next' onclick='Question3();'/>";
  document.getElementById('question').innerHTML = quiz3;





 }
 else {
 //alert("Wrong answer");
 //document.write("Answer is Wrong'<br>'");
 //document.write("Answer is h6");

     document.getElementById('displayanswer2').innerHTML = "Q2.Answer is Wrong(Answer: h6)";
     document.getElementById('displayanswer2').style.color = "FireBrick";
     document.getElementById('displayanswer2').style.borderColor = "DimGray";
     document.getElementById('displayanswer2').className += 'wrongshow';

     document.getElementById('score').innerHTML=score; //show score
     var quiz3 = "<br><p>Q3.Who is making the web standards??</p><form id='onlinetest3' onSubmit='return Question3();'><input type='radio' name='options' value='a'>Mozilla<br><input type='radio' name='options' value='b'>Microsoft<br><input type='radio' name='options' value='c'>The World Wide Web Consortium<br><input type='radio' name='options' value='d'>Google<br><br><br></form><input type='button' value='Next' onclick='Question3();'/>";
     document.getElementById('question').innerHTML = quiz3;


 }
 }

function Question3(){

    var form = document.getElementById('onlinetest3');
    for (var i = 0; i < form.options.length; i++) {
        if (form.options[i].checked) {
            var selectedValue = form.options[i].value;
        }
    }
    if (selectedValue == "c") {


        //alert("Correct Answer");

        //document.write("Answer is Correct");

        document.getElementById('displayanswer3').innerText = "Q3.Answer is Correct(Answer: The World Wide Web Consortium)";
        document.getElementById('displayanswer3').style.color = "DodgerBlue";
        document.getElementById('displayanswer3').className += 'rightshow';

        //document.getElementById('displayanswer1').style.borderColor.display = "visible";
        //document.getElementById('displayanswer1').style.backgroundColor = "Gainsboro";
        //document.getElementById('displayanswer1').style.width = "150px";


        score ++; /*score increment if answer is right*/
        document.getElementById('score').innerHTML=score; /* show score from this*/


        var quiz4 = "<br><p>Q4.What is the correct HTML tag for inserting a line break??</p><form id='onlinetest4' onSubmit='return Question4();'><input type='radio' name='options' value='a'>&lt;br&gt;<br><input type='radio' name='options' value='b'>&lt;lb&gt;<br><input type='radio' name='options' value='c'>&lt;break&gt;<br><br><br></form><input type='button' value='Next' onclick='Question4();'/>";
        document.getElementById('question').innerHTML = quiz4;

    }
    else {


        //alert("Wrong answer");



        //document.write("Answer is wrong'<br>'");
        //document.write("Answer is hyper text markup language");



        document.getElementById('displayanswer3').innerText = "Q3.Answer is Wrong(Answer: The World Wide Web Consortium)";
        document.getElementById('displayanswer3').style.color = "FireBrick";
        document.getElementById('displayanswer3').className += 'wrongshow';
       // score++;
        document.getElementById('score').innerHTML=score; //show score
        var quiz4 = "<br><p>Q4.What is the correct HTML tag for inserting a line break??</p><form id='onlinetest4' onSubmit='return Question4();'><input type='radio' name='options' value='a'>&lt;br&gt;<br><input type='radio' name='options' value='b'>&lt;lb&gt;<br><input type='radio' name='options' value='c'>&lt;break&gt;<br><br><br></form><input type='button' value='Next' onclick='Question4();'/>";
        document.getElementById('question').innerHTML = quiz4;

    }
}

function Question4(){

    var form = document.getElementById('onlinetest4');
    for (var i = 0; i < form.options.length; i++) {
        if (form.options[i].checked) {
            var selectedValue = form.options[i].value;
        }
    }
    if (selectedValue == "a") {


        //alert("Correct Answer");

        //document.write("Answer is Correct");

        document.getElementById('displayanswer4').innerText = "Q4.Answer is Correct(Answer: <br>)";
        document.getElementById('displayanswer4').style.color = "DodgerBlue";
        document.getElementById('displayanswer4').className += 'rightshow';



        score ++; /*score increment if answer is right*/
        document.getElementById('score').innerHTML=score; /* show score from this*/


        //document.getElementById('displayanswer1').style.borderColor.display = "visible";
        //document.getElementById('displayanswer1').style.backgroundColor = "Gainsboro";
        //document.getElementById('displayanswer1').style.width = "150px";

        var quiz5 = "<br><p>Q5.What is the preferred way for adding a background color in HTML??</p><form id='onlinetest5' onSubmit='return Question5();'><input type='radio' name='options' value='a'>&lt;body style='background-color:yellow'&gt;<br><input type='radio' name='options' value='b'>&lt;body background='yellow'&gt;<br><input type='radio' name='options' value='c'>&lt;background&gt;yellow&lt;/background&gt;<br><br><br></form><input type='button' value='Next' onclick='Question5();'/>";
        document.getElementById('question').innerHTML = quiz5;

    }
    else {


        //alert("Wrong answer");



        //document.write("Answer is wrong'<br>'");
        //document.write("Answer is hyper text markup language");



        document.getElementById('displayanswer4').innerText = "Q4.Answer is Wrong(Answer: <br>)";
        document.getElementById('displayanswer4').style.color = "FireBrick";
        document.getElementById('displayanswer4').className += 'wrongshow';
        //score++;
        document.getElementById('score').innerHTML=score; //show score
        var quiz5 = "<br><p>Q5.What is the preferred way for adding a background color in HTML??</p><form id='onlinetest5' onSubmit='return Question5();'><input type='radio' name='options' value='a'>&lt;body style='background-color:yellow'&gt;<br><input type='radio' name='options' value='b'>&lt;body background='yellow'&gt;<br><input type='radio' name='options' value='c'>&lt;background&gt;yellow&lt;/background&gt;<br><br><br></form><input type='button' value='Next' onclick='Question5();' id='endquiz'/>";
        document.getElementById('question').innerHTML = quiz5;



    }
}


function Question5(){

    var form = document.getElementById('onlinetest5');
    for (var i = 0; i < form.options.length; i++) {
        if (form.options[i].checked) {
            var selectedValue = form.options[i].value;
        }
    }
    if (selectedValue == "a") {


        //alert("Correct Answer");

        //document.write("Answer is Correct");

        document.getElementById('displayanswer5').innerText = "Q5.Answer is Correct(Answer: <body style='background-color:yellow'>)";
        document.getElementById('displayanswer5').style.color = "DodgerBlue";
        document.getElementById('displayanswer5').className += 'rightshow';



        score ++; /*score increment if answer is right*/
        document.getElementById('score').innerHTML=score; /* show score from this*/

        document.getElementById('finishquiz').className +='thankyou';
        document.getElementById('finishquiz').innerHTML ="Thank You";

        percent=(score/total)*100; //Calculate percentage

        document.getElementById('getpercentage').innerText="Percentage%:";
        document.getElementById('percent').innerText=percent;

        //document.getElementById('displayanswer1').style.borderColor.display = "visible";
        //document.getElementById('displayanswer1').style.backgroundColor = "Gainsboro";
        //document.getElementById('displayanswer1').style.width = "150px";

        //var quiz6 = "<br><p>Q2.Which one is the smallest heading??</p><form id='onlinetest2' onSubmit='return Question2();'><input type='radio' name='options' value='a'>h3<br><input type='radio' name='options' value='b'>h5<br><input type='radio' name='options' value='c'>h1<br><input type='radio' name='options' value='d'>h6<br><br><br></form><input type='button' value='Next' onclick='Question2();'/>";
        //document.getElementById('question').innerHTML = quiz6;

    }
    else {


        //alert("Wrong answer");



        //document.write("Answer is wrong'<br>'");
        //document.write("Answer is hyper text markup language");



        document.getElementById('displayanswer5').innerText = "Q5.Answer is Wrong(Answer: <body style='background-color:yellow'>)";
        document.getElementById('displayanswer5').style.color = "FireBrick";
        document.getElementById('displayanswer5').className += 'wrongshow';


        //score++;
        document.getElementById('score').innerHTML=score; //show score
        document.getElementById('finishquiz').className +='thankyou';
        document.getElementById('finishquiz').innerHTML = "Thank You!!";

        percent=(score/total)*100;

        document.getElementById('getpercentage').innerText="Percentage%:";
        document.getElementById('percent').innerText=percent;
        //var quiz6 = "<br><p>Q2.Which one is the smallest heading??</p><form id='onlinetest2' onSubmit='return Question2();'><input type='radio' name='options' value='a'>h3<br><input type='radio' name='options' value='b'>h5<br><input type='radio' name='options' value='c'>h1<br><input type='radio' name='options' value='d'>h6<br><br><br></form><input type='button' value='Next' onclick='Question2();'/>";
        //document.getElementById('question').innerHTML = quiz6;



    }
}










/*
 function html(){

 var htmlshow = "<div id='htmlcenter'><a href='starthtmltest.html' id='test'>Take Test</a><br><br><br><div class='material'><div id='html5'>HTML5</div><br><br><br><h2>Html Tag</h2>This is the container of all tags. All the tags are enclosed in Html tag.<br><h3>Example:</h3><p class='matexample'>&lt;html&gt;<br>&lt;body&gt;<br>&lt;h1&gt;My First Heading&lt;/h1&gt;<br>&lt;p&gt;My first paragraph.&lt;/p&gt;<br>&lt;/body&gt;<br> &lt;/html&gt;</p><h2>Elements</h2>HTML elements are written with a start tag, with an end tag, with the content.<br><h3>Example:</h3><p class='matexample'>&lt;html&gt;<br>&lt;body&gt;<br>&lt;h1&gt;My First Heading&lt;/h1&gt;<br>&lt;p&gt;My first paragraph.&lt;/p&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;</p><h2>Paragraph Tag</h2> The HTML &LT;p&GT;element defines a paragraph.<br<h3>Example:</h3><p class='matexample'>&lt;p&gt;This is a paragraph&lt;/p&gt;</p><h2>Head</h2>The &LT;head&GT; element is a container for meta data (data about data).<br>HTML meta data is data about the HTML document. Metadata is not displayed.<br>Meta data typically define document title, styles, links, scripts, and other meta information.<br>The following tags describes meta data: &LT;title&GT;, &LT;style&GT;, &LT;meta&GT;,&LT;link&GT;,&LT;script&GT;<br><h3>Example:</h3><p class='matexample'>&lt;!DOCTYPE html&gt;<br>&lt;head&gt;<br>&lt;title&gt;Page Title&lt;/title&gt;<br>&lt;/head&gt;</p><h2>Images</h2>In HTML, images are defined with the &lt;img&gt; tag.<br>The &lt;img&gt; tag is empty, it contains attributes only, and does not have a closing tag.<br><h3>Example:</h3><p class='matexample'>The src attribute defines the url (web address) of the image:<br>&lt;img src='url' alt='some_text'&gt;<br></p><h2>Links</h2>In HTML, links are defined with the &lt;a&gt; tag<br>The href attribute specifies the destination address (http://www.w3schools.com/html/)<br>The link text is the visible part (Visit our HTML tutorial).<br><h3>Example:</h3><p class='matexample'>&lt;a href='html_images.asp'&gt;HTML Images</a><br>/p><h2>Heading</h2>Headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.<br>&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.<br><h3>Example:</h3><p class='matexample'>&lt;h1&gt;This is a heading&lt;/h1&gt;<br>&lt;h2&gt;This is a heading&lt;/h2&gt;<br>&lt;h3&gt;This is a heading&lt;/h3&gt;<br></p></div></div><footer>CopyRight© Zain Ansari,2014</footer><br><br>";
 document.getElementById('mainpagecenter').innerHTML = htmlshow;
 document.getElementById('footer').style.display = 'none';


 }
 */
/*
 function checkAnswers(){
 var final = "<br><form onsubmit='return Answers();'><input type ='button' value='Check Answers' class='button'  /></form>";
 document.getElementById('question').innerHTML = final;
 }

 */
/*

 function Answers(){
 document.getElementById('checkanswers').onclick =
 function (){
 Question1();
 Question2();
 };

 function Question1() {

 var form = document.getElementById('onlinetest1');
 for (var i = 0; i < form.options.length; i++) {
 if (form.options[i].checked) {
 var selectedValue = form.options[i].value;
 }
 }
 if (selectedValue == "hyper text markup language") {


 //alert("Correct Answer");

 document.write("Answer is Correct");

 //var ansc = "Answer is Correct";
 //document.getElementById('question').innerHTML = ansc;

 }
 else {

 //alert("Wrong answer");
 document.write("Answer is wrong'<br>'");
 document.write("Answer is hyper text markup language");


 //var answ = "Answer is Wrong";
 //document.getElementById('question').innerHTML = answ;

 }
 }



 function Question2() {
 var form = document.getElementById('onlinetest2');
 for (var i = 0; i < form.options.length; i++) {
 if (form.options[i].checked) {
 var selectedValue = form.options[i].value;
 }
 }
 if (selectedValue == "d") {
 //alert("Correct Answer");

 document.write("Answer is Correct");

 // var ansc = "Answer is Correct";
 //document.getElementById('question').innerHTML = ansc;
 }
 else {
 //alert("Wrong answer");

 document.write("Answer is Wrong'<br>'");
 document.write("Answer is h6");


 //var answ = "Answer is Wrong";
 //document.getElementById('question').innerHTML = answ;
 }
 }

 }
 */
/*function Answers() {
 //alert("ok");
 Question1();
 Question2();

 }*/
/*function q2Display(){
 //alert("ok");
 var quiz2 = "<br><p>Q2.Which one is the smallest heading??</p><form id='onlinetest2' onSubmit='return Question2();'><input type='radio' name='options' value='a'>h3<br><input type='radio' name='options' value='b'>h5<br><input type='radio' name='options' value='c'>h1<br><input type='radio' name='options' value='d'>h6<br><br><br></form><input type='button' value='Next'/>";
 document.getElementById('question').innerHTML = quiz2;

 }*/















