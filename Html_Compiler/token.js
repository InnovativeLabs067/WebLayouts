/**
 * Created by Intel on 11/12/2014.
 *///<html>\n<head>\n<title></title>\n</head>\n<body>\n</body>\n</html>

function syntax() {


    var str = (document.getElementById('text').value);
    //var str = "<html><head><title>dfgd</title></head><body><sum>212,323</sum></body></html>";

    // var patt1 = /<html><head><title>\w*<\/title><\/head><body>(<p>(<b>\w*<\/b>|<i>\w*<\/i>|<u>\w*<\/u>|<h>\w*<\/h>|<br>\w*<\/br>|\w*)<\/p>|<div>(<b>\w*<\/b>|<i>\w*<\/i>|<u>\w*<\/u>|<h>\w*<\/h>|<br>\w*<\/br>|\w*)<\/div>|<span>(<b>\w*<\/b>|<i>\w*<\/i>|<u>\w*<\/u>|<h>\w*<\/h>|<br>\w*<\/br>|\w*)<\/span>|<sub>\d*,\d*<\/sub>|<prod>\d*,\d*<\/prod>|<sum>\d*,\d*<\/sum>|<divide>\d*,\d*<\/divide>)<\/body><\/html>/g;        var check=str.match(patt1);


    var patt1 = /<html>\n<head>\n<title>\n\w*\n*\w*\n<\/title>\n<\/head>\n<body>\n(<p>\n(<b>\n\w*\n<\/b>|<i>\n\w*\n<\/i>|<u>\n\w*\n<\/u>|<h>\n\w*\n<\/h>|<br>\n\w*\n<\/br>|\w*)\n<\/p>|<div>\n(<b>\n\w*\n<\/b>|<i>\n\w*\n<\/i>|<u>\n\w*\n<\/u>|<h>\n\w*\n<\/h>|<br>\n\w*\n<\/br>|\w*)\n<\/div>|<span>\n(<b>\n\w*\n<\/b>|<i>\n\w*\n<\/i>|<u>\n\w*\n<\/u>|<h>\n\w*\n<\/h>|<br>\n\w*<\/br>|\w*)\n<\/span>|<sub>\n\d*,\d*\n<\/sub>|<prod>\n\d*,\d*\n<\/prod>|<sum>\n\d*,\d*\n<\/sum>|<divide>\n\d*,\d*\n<\/divide>|<join>\n\w*,\w*\n<\/join>|<a href=\w*.html>\n\w*\n<\/a>|<loop \d*...\d*>\n(<p>\n(<b>\n\w*\n<\/b>|<i>\n\w*\n<\/i>|<u>\n\w*\n<\/u>|<h>\n\w*\n<\/h>|<br>\n\w*\n<\/br>|\w*)\n<\/p>|<div>\n(<b>\n\w*\n<\/b>|<i>\n\w*\n<\/i>|<u>\n\w*\n<\/u>|<h>\n\w*\n<\/h>|<br>\n\w*\n<\/br>|\w*)\n<\/div>|<span>\n(<b>\n\w*\n<\/b>|<i>\n\w*\n<\/i>|<u>\n\w*\n<\/u>|<h>\n\w*\n<\/h>|<br>\n\w*<\/br>|\w*)\n<\/span>)\n<\/loop>)\n<\/body>\n<\/html>/g;
    var check = str.match(patt1);
    var patt2=/<html>\n<head>\n<title>\n\w*\n*\w*\n<\/title>\n<\/head>\n<body>\n<\/body>\n<\/html>/g;
    var patt3=/<html>\n<head>\n<title>\n\w*\n*\w*\n<\/title>\n<\/head>\n<body>\n\w*\n<\/body>\n<\/html>/g;

    //alert(check);
    if (str.match(patt1))
    {
        alert("100% COMPILATION SUCCESSFULL.....");
        alert("No error.... Execution Complete");


    }
    else if(str.match(patt2))
    {
        alert("100% COMPILATION SUCCESSFULL.....");
        alert("No error.... Execution Complete");
    }
    else if(str.match(patt3))
    {
        alert("100% COMPILATION SUCCESSFULL.....");
        alert("No error.... Execution Complete");
    }
    else if(str=="")
    {
        alert("There is no file to compile");
    }
    else
    {
        alert("COMPILATION ERROR.....");
        alert("Invalid statement");
    }
}
   /* var patrn = /\w/g;
    //var re=str.indexOf(patrn);
    //alert(re);
    //alert(re);
    var char = str.charAt(22);
    var char1=str.charAt(47);

    var patrn1=/\d/;
    var digit=str.charAt(50);

    if (char.match(patrn)|| str=="<html>\n<head>\n<title></title>\n</head>\n<body>\n</body>\n</html>" ||str=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n</body>\n</html>")
    {
        alert("100% COMPILATION SUCCESSFULL.....");
        alert("No error.... Execution Complete");
    }
    else if(str.search(/\d,\d/g))
    {
        alert("100% COMPILATION SUCCESSFULL.....");
    }
   else if(char1.match(patrn) )
    {
        alert("100% COMPILATION SUCCESSFULL.....");
    }
    else if(digit.match(patrn1))
    {
        alert("100% COMPILATION SUCCESSFULL.....");

    }

    else
    {

        alert("error found");
    }
}
        /* if(a[0]=="<html>\n<head>\n<title></title>\n</head>\n<body>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<+>,</+>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<+>,\n</+>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }

         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<->,</->\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<->,\n</->\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }

         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<*>,</*>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<*>,\n</*>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }

         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n</>,<//>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n</>,\n<//>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<+>,</+>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<+>,\n</+>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n</p>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p></p>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
        else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<span>\n</span>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<span></span>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }

         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<div>\n</div>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<div></div>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n<b></b>\n</p>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n<b>\n</b>\n</p>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<span>\n<b></b>\n</span>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<span>\n<b>\n</b>\n</span>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<div>\n<b></b>\n</div>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<div>\n<b>\n</b>\n</div>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }

         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n<i></i>\n</p>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n<i>\n</i>\n</p>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<span>\n<i></i>\n</span>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<span>\n<i>\n</i>\n</span>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<div>\n<i></i>\n</div>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<div>\n<i>\n</i>\n</div>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }

         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n<u></u>\n</p>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n<u>\n</u>\n</p>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<span>\n<u></u>\n</span>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<span>\n<u>\n</u>\n</span>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<div>\n<u></u>\n</div>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<div>\n<u>\n</u>\n</div>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }

         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n<br></br>\n</p>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n<br>\n</br>\n</p>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<span>\n<br></br>\n</span>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<span>\n<br>\n</br>\n</span>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<div>\n<br></br>\n</div>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<div>\n<br>\n</br>\n</div>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
         else if(a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n<h></h>\n</p>\n</body>\n</html>"||a[i]=="<html>\n<head>\n<title>\n</title>\n</head>\n<body>\n<p>\n<h>\n</h>\n</p>\n</body>\n</html>")
         {
             alert("100% COMPILATION SUCCESSFULL.....");
             alert("No error.... Execution Complete");
         }
          else
         {
             alert("COMPILATION ERROR.....");
             alert("Invalid statement");
         }
*/
//}

