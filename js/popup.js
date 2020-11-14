
status="Mr.Linhkool"
var a=new Array(),n=""
a[1]='R';
a[2]='a';
a[3]=' ';
a[4]='C';
a[5]='h';
a[6]='ỗ';
a[7]=' ';
a[8]='L';
a[9]='ớ';
a[10]='p';
a[11]=' ';
a[12]='M';
a[13]='ì';
a[14]='n';
a[15]='h';
a[16]=' ';
a[17]='N';
a[18]='h';
a[19]='ó';
a[20]='a';
a[21]='a';
a[22]='a';
a[23]='♥';
a[24]='';
a[25]='';
a[26]=' ';
a[27]='';
a[28]='';
a[29]=' ';
a[30]='';
a[31]='';
a[32]='';
a[33]=' ';
a[34]='';
a[35]='';
a[36]='';
a[37]='';
a[38]=' ';
a[39]=' ';
a[40]=' ';
a[41]='♥';
a[42]='♥';
a[43]='♥';
a[44]='♥';
a[45]='♥';
a[46]='♥';
a[47]='♥';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==48)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2> RA NHANH NHÉ! <img src='img/3.gif'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>LOVE YOU 3000! <img src=''/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				