// JavaScript Document

function CorrectAnswer() 
{
 var score=0;
     var form = document.getElementById('onlinetest'); //for passing form.
     for(var i = 0; i < form.Question.length; i++)
     {
          if(form.Question[i].checked)//check means selection of radio button
          {
          var selectedValue = form.Question[i].value;
          }
		  

     }
 
 if(selectedValue=="Urdu")
 {

	
  alert("Correct Answer");


    score++;
	 alert(score);
	   document.write("<a href=q2.html>Next</a>");
	
 }
 
 else
 {
	 alert("wrong answer");
 }
 
 //return false;
}

 function Answer2() 
{
	
 
     var form2 = document.getElementById('onlinetest1'); //for passing form.
     for(var i = 0; i < form2.Question2.length; i++)
     {
          if(form2.Question2[i].checked)//check means selection of radio button
          {
          var answer = form2.Question2[i].value;
          }
		  
 
     }
	 if(answer=="Islamabad")
	 {
	 
	 //document.write(answer);
	 alert("correct answer");
	
	
	  score++
	  alert(score);
	 }
	 else
	 {
		 alert("wrong answer");
		 }
}
