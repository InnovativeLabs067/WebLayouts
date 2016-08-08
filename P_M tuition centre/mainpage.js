/**
 * Created by Parkash on 1/20/2015.
 */
function aboutus()
{
    var h1="Aboutus";
    var para1="In order to be successful at motivating students, education needs to be fun. Keeping this important aspect in mind, " +
        "we at P_M Tuition Centre have made sure that all students come with a view to learn something positive. " +
        "Students freely interact with each other to learn, and we have taken great pains to maintain our facilities " +
        "with the utmost care and affection.";


    var para2="<br>"+"The P_M Tuition Centre faculty is as broad ranging in its interests and expertise as it is distinguished. " +
        "It includes prominent Teachers of physics, chemistry, maths as well as leading specialists in every area of education. " +
        "Over 10+ full-time teachers are joined us as tutors in the in our offered courses. In addition, dozens of guest lecturers " +
        "help to make Adamjee Coaching a vibrant intellectual community";

    var para3="<br>"+"We believe that no student can learn to his or her fullest potential unless provided the motivation and an environment to do so." +
        "We take pride in the fact that no other center provides the great atmosphere and environment that we do.";

    document.getElementById('heading').innerHTML=h1;
    document.getElementById('para1').innerHTML=para1;
    document.getElementById('para2').innerHTML=para2;
    document.getElementById('para3').innerHTML=para3;
}
 function contact()
 {
 var h1="Contact";
     document.getElementById('heading').innerHTML=h1;
    // var para1="";
     document.getElementById('para1').innerHTML=" <form method='post' action='login.html'><label id='labelid' for>User_ID</label><div class='field'><input type='text' id='userid' name='userid' REQUIRED></div><label class='label' for>Write your message here!</label><br><textarea id='textarea' rows='7' cols='50'></textarea><input type='submit' id='login2' name='login'   value='Send'></form>" ;
     var para2="<br><marquee>Address:Karachicentre near PIB colony flat-306,block-A,Contact#0341-3326418,0303-2763561</marquee>";
     document.getElementById('para2').innerHTML=para2;
     /*document.getElementById('content3').style.height=430;*/
     var para3="";
     document.getElementById('para3').innerHTML=para3;
  }
function zoom(eid)
{
    var imge=document.getElementById(eid);
    imge.style.height='140px';
    imge.style.width='200px';


}

function resize(id)
{
    var imge=document.getElementById(id);
    imge.style.height='120px';
    imge.style.width='180px';


}