/**
 * Created by Parkash on 2/1/2015.
 */

score=0;
rightsound = new Audio("success.mp3");
wrongsound = new Audio("Wrong Answer Sound Effect _ Free Sounds.mp3");
var seconds = 600;
/*var seconds = 5;*/
function secondPassed() {
    var minutes =( Math.round((seconds - 30)/60));
    //alert(minutes);
    var remainingSeconds = (seconds %60);
    if (remainingSeconds <= 10)
    {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = "Duration|"+minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        //document.getElementById('countdown').innerHTML = alert("Stop");

        //alert("stop");
        document.getElementById('over').style.display='none';

        //document.getElementById('result').innerHTML="<input type='button' value='Result'>";
        document.getElementById('result').innerHTML+="<p><a href = 'javascript:void(0)' onclick = document.getElementById('light').style.display='inline';document.getElementById('fade').style.display='inline'><input type='button' value='Click here!!!' id='resultbutton'</a></p><div id='light' class='white_content'><a href = 'javascript:void(0)' onclick = document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'><img src='button_cancel.png'id='cancel' > </a><div><img src='robo.jpg' id='robo'></div><div id='progressbbar'><div id='sliderbar'></div><div id='side'></div></div></div><div id='fade' class='black_overlay'></div>";

        var result=Math.round((score*100)/15);
        document.getElementById('light').innerHTML+="<br><br><br>"+"<div id='iqlevel'>IQ-LEVEL:</div>";
        document.getElementById('iqlevel').innerHTML+=result;
        document.getElementById('light').innerHTML+="<br><br><div id='scre'>SCORE:</div><br><br><span id='remarks'></span>";
        document.getElementById('scre').innerHTML+=score;
        document.getElementById('sliderbar').style.width = result+'%';

         if(result>50 && result<=60)
         {
         document.getElementById('remarks').innerHTML+="IQ Level is Low.....";
         }
         else if(result>60 && result<=70)
         {
         document.getElementById('remarks').innerHTML+="IQ level is Quiet Better.....";
         }

         else if(result>70 && result<=80)
         {
         document.getElementById('remarks').innerHTML+="IQ level is Good.....";
         }
         else if(result>80 && result<=90)
         {
         document.getElementById('remarks').innerHTML+="IQ level is Best.....";
         }
         else if(result>90 && result<100)
         {
         document.getElementById('remarks').innerHTML+="IQ level is Awesome.....";

         }
         else if(result==100)
         {
         document.getElementById('remarks').innerHTML+="Congratulation!!!! You are Genius";

         }
         else if(result<=50)
         {
         document.getElementById('remarks').innerHTML+="Awww... You are an Idiot......";

         }

    } else {
        seconds--;
    }
}

/*countdownTimer = setInterval('secondPassed()', 1000);*/




function question1()
{
    var question=["Q1:This sequence of four words, triangle, glove, clock, bicycle,corresponds to this sequence of numbers 3, 5, 12, 2"];
    var opt =["True","False"];

    document.getElementById('que').innerHTML=question[0];
    countdownTimer = setInterval('secondPassed()', 1000);

    document.getElementById('scoredummy').innerHTML="Score:";
    /*var radio="<input type='radio' name='option' value='true'>";*/
    var radio;
    document.getElementById('option').innerHTML="";
    document.getElementById('instructions').style.display='none';
    document.getElementById('time').innerHTML="<span id='countdown' class='timer'></span>";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='a' class='answer' id='radio'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);

    }
    document.getElementById('button').innerHTML="<input type='button' value='Next'  onclick='question2();' class='button'>"


}

function question2(){
    var ans=document.getElementsByClassName('answer');


    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
           var selectedvalue=ans[i].value;

        }
    }
    if (selectedvalue == "True")
    {


        score++;
       // document.getElementById('effect').innerHTML="<audio autoplay><source src='applause-01.mp3' type='audio/mpeg'></audio>";

         document.getElementById('score').innerHTML+=score;

        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

        //alert("Correct Answer");

    }
    else
    {
      //  document.getElementById('effect').innerHTML="<audio autoplay><source src='Wrong Answer Sound Effect _ Free Sounds.mp3' type='audio/mpeg'></audio>";


        document.getElementById('score').innerHTML+=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
      wrongsound.play();
    }

    var question=["Q2:The seventh and eighth vowel appearing in this sentence is the letter a and e respectively."];
    var opt =["True","False"];

    document.getElementById('que').innerHTML=question[0];


    /*var radio="<input type='radio' name='option' value='true'>";*/
    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='a' class='answer' id='radio'>"+opt[i]+"<br>";
       radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);

    }
    document.getElementById('button').innerHTML="<input type='button' value='Next'  onclick='question3();' class='button'>"

}


function question3(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == "False")
    {
        score++;
        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q3:Which number should come next in the series? 1 - 1 - 2 - 3 - 5 - 8 - 13"];
    var opt =[8,13,21,26];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question4();' class='button'>";
}


//question#4

function question4(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == "21")
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q4:Which one of the five choices makes the best comparison? PEACH is to HCAEP as 46251 is to:"];
    var opt =[25641,12654,15264,51462];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question5();' class='button'>";
}


function question5(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == 15264)
    {
        score++;
        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q5:Mary, who is sixteen years old, is four times as old as her brother.How old will Mary be when she is twice as old as her brother?"];
    var opt =[20,24,25,26];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question6();' class='button'>";
}

function question6(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == 24)
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q6:Which one of the numbers does not belong in the following series?2 - 3 - 6 - 7 - 8 - 14 - 15 - 30"];
    var opt =[3,13,7,14];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question7();' class='button'>";
}


function question7(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == 13)
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q7:Which one of the five choices makes the best comparison?Finger is to Hand as Leaf is to:"];
    var opt =["Twig","Tree","Branch","Blossom"];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question8();' class='button'>";
}


function question8(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == "Branch")
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q8:If you rearrange the letters\"CIFAIPC\" you would have the name of a(n):"];
    var opt =["City","Animal","River","Ocean"];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question9();' class='button'>";
}


function question9(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == "Ocean")
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q9:Choose the number that is 1/4 of 1/2 of 1/10 of 1/5 of 1/5 of 4000:"];
    var opt =[5,2,10,25];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question10();' class='button'>";
}


function question10() {
    var ans = document.getElementsByClassName('answer');

    for (var i = 0; i < ans.length; i++) {
        if (ans[i].checked) {
            var selectedvalue = ans[i].value;


        }
    }
    if (selectedvalue == 2) {
        score++;

        document.getElementById('score').innerHTML = score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else {

        document.getElementById('score').innerHTML = score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question = ["Q10:If all Bloops are Razzies and all Razzies are Lazzies, all Bloops are definitely Lazzies?"];
    var opt = ["True","False"];

    document.getElementById('que').innerHTML = question[0];


    var radio;
    document.getElementById('option').innerHTML = "";
    for (var i = 0; i < opt.length; i++) {
        document.getElementById('option').innerHTML += "<input type='radio' name='option' value='opt[i]' class='answer'>" + opt[i] + "<br>";
        radio = document.getElementsByClassName('answer');
        radio[i].setAttribute('value', opt[i]);
    }
    document.getElementById('button').innerHTML = "<input type='button' value='Next' onclick='question11();' class='button'>";


}





function question11(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == "True")
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q11:Ralph likes 25 but not 24; he likes 400 but not 300; he likes 144 but not 145. Which does he like:"];
    var opt =[1600,10,50,124];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question12();' class='button'>";
}

function question12(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == 1600)
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q12:What is the missing number in the sequence shown below? 1 - 8 - 27 - ? - 125 - 216"];
    var opt =[81,64,45,36];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question13();' class='button'>";
}


function question13(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == 64)
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q13:If Sally sells more tickets than Betty and Betty sells more tickets than Jodie, who sells the most if we compare Sally and Jodie?"];
    var opt =["Betty","Sally","Jodie"];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question14();' class='button'>";
}


function question14(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {

            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == "Sally")
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q14:If you enter with only a match into a COLD and DARK room which has an oil lamp, an oil heater and a candle in it. Which one do you light first?"];
    var opt =["Candle","Match","OilHeater","OilLantern"];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question15();' class='button'>";
}


function question15(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == "Candle")
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {

        document.getElementById('score').innerHTML=score;
        wrongsound.onplaying=function(){
            alert("Wrong Answer");
        }
        wrongsound.play();
    }
    var question=["Q15:Rearrange the following letters \"RAPETEKA\" to make a word and choose the category in which it fits."];
    var opt =["City","Fruit","Bird","Vegetable"];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='result();'  class='button'>";
}


function result(){
    var ans=document.getElementsByClassName('answer');

    for( var i=0;i<ans.length;i++)
    {
        if(ans[i].checked)
        {
            var selectedvalue=ans[i].value;


        }
    }
    if (selectedvalue == "Bird")
    {
        score++;

        document.getElementById('score').innerHTML=score;
        rightsound.onplaying = function ()
        {
            alert("Correct Answer");
        }
        rightsound.play();

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;
    }

   /* document.getElementById('button').innerHTML="<p><a href = 'javascript:void(0)' onclick = document.getElementById('light').style.display='inline';document.getElementById('fade').style.display='inline'><input type='button' value='Result'  class='button'></a></p><div id='light' class='white_content'><a href = 'javascript:void(0)' onclick = document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'><img src='button_cancel.png'id='cancel' > </a><div id='progressbbar'><div id='sliderbar'></div><div id='side'></div></div></div><div id='fade' class='black_overlay'></div>";
    var result=Math.round((score*100)/15);
    document.getElementById('light').innerHTML+="<br><br>"+"<span id='iqlevel'>IQ-LEVEL:</span><span id='imge'><img src='tf1.jpg' id='animpic'> </span>";
    document.getElementById('iqlevel').innerHTML+=result;
    document.getElementById('light').innerHTML+="<br>"+"<span id='scre'>SCORE:</span><br><br><span id='remarks'></span>";
    document.getElementById('scre').innerHTML+=score;
    document.getElementById('sliderbar').style.width = result+'%';*/
    document.getElementById('button').style.display='none';
    document.getElementById('result').innerHTML+="<p><a href = 'javascript:void(0)' onclick = document.getElementById('light').style.display='inline';document.getElementById('fade').style.display='inline'><input type='button' value='Click here!!!' id='resultbutton'</a></p><div id='light' class='white_content'><a href = 'javascript:void(0)' onclick = document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'><img src='button_cancel.png'id='cancel' > </a><div><img src='robo.jpg' id='robo'></div><div id='progressbbar'><div id='sliderbar'></div><div id='side'></div></div></div><div id='fade' class='black_overlay'></div>";
    var result=Math.round((score*100)/15);
    document.getElementById('light').innerHTML+="<br><br><br>"+"<div id='iqlevel'>IQ-LEVEL:</div>";
    document.getElementById('iqlevel').innerHTML+=result;
    document.getElementById('light').innerHTML+="<br><br><div id='scre'>SCORE:</div><br><br><span id='remarks'></span>";
    document.getElementById('scre').innerHTML+=score;
    document.getElementById('sliderbar').style.width = result+'%';

    if(result>50 && result<=60)
    {
        document.getElementById('remarks').innerHTML+="IQ Level is Low.....";
    }
    else if(result>60 && result<=70)
    {
        document.getElementById('remarks').innerHTML+="IQ level is Quiet Better.....";
    }

    else if(result>70 && result<=80)
    {
        document.getElementById('remarks').innerHTML+="IQ level is Good........";
    }
    else if(result>80 && result<=90)
    {
        document.getElementById('remarks').innerHTML+="IQ level is Best........";
    }
    else if(result>90 && result<100)
    {
        document.getElementById('remarks').innerHTML+="IQ level is Awesome.....";

    }
    else if(result==100)
    {
        document.getElementById('remarks').innerHTML+="Congratulation!!!! You are Genius";

    }
    else if(result<=50)
    {
        document.getElementById('remarks').innerHTML+="Awww... You are Idiot...";

    }
}
