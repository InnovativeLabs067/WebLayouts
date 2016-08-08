/**
 * Created by Parkash on 2/1/2015.
 */



score=0;
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
        score++
        alert("Correct Answer");
        document.getElementById('score').innerHTML+=score;


    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML+=score;

    }

    var question=["Q2:The seventh vowel appearing in this sentence is the letter a."];
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
    document.getElementById('button').innerHTML="<input type='button' value='Next'  onclick='question3();' class='next'>";

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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;

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
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question4();' class='next'>";
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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;

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
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question5();' class='next'>";
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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;

    }
    var question=["Q5:Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?"];
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
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question6();' class='next'>";
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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;

    }
    var question=["Q6:Which one of the numbers does not belong in the following series? 2 - 3 - 6 - 7 - 8 - 14 - 15 - 30"];
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
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question7();' class='next'>";
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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;

    }
    var question=["Q7:Which one of the five choices makes the best comparison? Finger is to Hand as Leaf is to:"];
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
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question8();' class='next'>";
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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;

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
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question9();' class='next'>";
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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;
    }
    var question=["Q9:Choose the number that is 1/4 of 1/2 of 1/5 of 200:"];
    var opt =[2,5,10,25];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question10();' class='next'>";
}


function question10() {
    var ans = document.getElementsByClassName('answer');

    for (var i = 0; i < ans.length; i++) {
        if (ans[i].checked) {
            var selectedvalue = ans[i].value;


        }
    }
    if (selectedvalue == 5) {
        score++;
        alert("Correct Answer");
        document.getElementById('score').innerHTML = score;

    }
    else {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML = score;
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
    document.getElementById('button').innerHTML = "<input type='button' value='Next' onclick='question11();' class='next'>";


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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;
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
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question12();' class='next'>";
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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;
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
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question13();' class='next'>";
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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;
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
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question14();' class='next'>";
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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;
    }
    var question=["Q14:2,10,12,60,62,310... What is next?"];
    var opt =[312,360,1550,4650];

    document.getElementById('que').innerHTML=question[0];


    var radio;
    document.getElementById('option').innerHTML="";
    for(var i=0;i<opt.length;i++)
    {
        document.getElementById('option').innerHTML+="<input type='radio' name='option' value='opt[i]' class='answer'>"+opt[i]+"<br>";
        radio= document.getElementsByClassName('answer');
        radio[i].setAttribute('value',opt[i]);
    }
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='question15();' class='next'>";
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
    if (selectedvalue == 1550)
    {
        score++;
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;
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
    document.getElementById('button').innerHTML="<input type='button' value='Next' onclick='result();'  class='answer' id='result' >";
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
        alert("Correct Answer");
        document.getElementById('score').innerHTML=score;

    }
    else
    {
        alert("Wrong Answer");
        document.getElementById('score').innerHTML=score;
    }
    document.getElementById('result').style.display='none';
    document.getElementById('button').innerHTML+="<p><a href = 'javascript:void(0)' onclick = document.getElementById('light').style.display='inline';document.getElementById('fade').style.display='inline'><input type='button' value='Result'  id='buton'></a></p><div id='light' class='white_content'><a href = 'javascript:void(0)' onclick = document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'><img src='button_cancel.png'id='cancel' > </a><div id='progressbbar'><div id='sliderbar'></div><div id='side'></div></div></div><div id='fade' class='black_overlay'></div>";
    var result=Math.round((score*100)/15);
    document.getElementById('light').innerHTML+="<br><br>"+"<span id='iqlevel'>IQ-LEVEL:</span><span id='imge'><img src='tf1.jpg' id='animpic'> </span>";
    document.getElementById('iqlevel').innerHTML+=result;
    document.getElementById('light').innerHTML+="<br>"+"<span id='scre'>SCORE:</span><br><br><br><span id='remarks'></span>";
    document.getElementById('scre').innerHTML+=score;
    document.getElementById('sliderbar').style.width = result+'%';

    if(result>50 && result<=60)
    {
        document.getElementById('remarks').innerHTML+="IQ Level is Low.....";
    }
    else if(result>60 && result<70)
    {
        document.getElementById('remarks').innerHTML+="IQ level is Quiet Better.....";
    }

    else if(result>70 && result<80)
    {
        document.getElementById('remarks').innerHTML+="IQ level is Good.....";
    }
    else if(result>80 && result<90)
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
    else if(result<50)
    {
        document.getElementById('remarks').innerHTML+="Awww... You are Idiot...";

    }
}

/*function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.setMinutes(10);

    var s=today.getSeconds();


    m=m/60000000000;
    m= Math.floor(m);
    //alert(shrt);
   // s.setSeconds(60);

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =h+":"+ m+":"+s;
    var t = setTimeout(function(){startTime()},500);

}

function checkTime(i) {
    if (i<10)
    {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}*/
 /*var time;
time=document.getElementById('txt').innerHTML;
alert(time);*/
var myVar=setInterval(function(){myTimer()},1000);

function myTimer() {
    var d = new Date();
    var t= d.getTime();

    var min= d.getMinutes();

    var sec= d.getSeconds();
    document.getElementById("txt").innerHTML = min+":"+sec;
}