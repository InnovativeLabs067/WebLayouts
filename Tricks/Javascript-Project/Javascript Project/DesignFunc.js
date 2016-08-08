/**
 * Created by Shahzaib Noor on 1/15/2015.
 */
var firstnum,secnum,thirdnum,fourth,fifth,sixth;    //Marks of Six Subjects//
var totalm , percerntage,grade;
var maxmarks;

function calc()
{
    maxmarks = Number(prompt("Enter Max Marks"));

    firstnum = Number(document.getElementById("Sub1").value);
    secnum = Number(document.getElementById("Sub2").value);
    thirdnum = Number(document.getElementById("Sub3").value);
    fourth = Number(document.getElementById("Sub4").value);
    fifth = Number(document.getElementById("Sub5").value);
    sixth = Number(document.getElementById("Sub6").value);
//---------------------------------------------Total Marks of the Subjects---------------------------

    totalm = firstnum + secnum + thirdnum + fourth + fifth + sixth;
    document.getElementById("Total").value = totalm;

//---------------------------------------------Percentage---------------------------

    percerntage = (totalm * 100) / maxmarks;
    document.getElementById("Percent").value = percerntage +"%";

//---------------------------------------------Grade------------------------------

    if (percerntage >= 80) {
        grade = "A+";
        document.getElementById("Grade").value = grade;
    }
    else if (70 <= percerntage < 80) {
        grade = "A";
        document.getElementById("Grade").value = grade;
    }

    else if (60 <= percerntage < 70) {
        grade = "B";
        document.getElementById("Grade").value = grade;
    }

    else if (percerntage < 60) {
        grade = "C";
        document.getElementById("Grade").value = grade;
    }
}