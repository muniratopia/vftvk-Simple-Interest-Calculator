function write_slide_value()
{
    var r = document.getElementById("rate").value;
    document.getElementById("valrange").innerHTML=r;
    
        
}   

function compute()
{
    var principal = Number(document.getElementById("principal").value);
    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("years").value);
      
    if( principal <=0)
    {
        alert("Enter a Positive Number");
        document.getElementByID("principal").focus();
        return;
    }
    var interest = principal*years*rate /100;

    var message= "If You Deposite <mark>" + principal+ "</mark><br/>";
    message += "at an interest rate of <mark>" + rate + "% </mark><br/>";
    message += "You will recieve an amount of <mark>" + interest+ "</mark>,<br/>";
    message += " in the year <mark>"+ (years+2021)+"</mark>";
    
    document.getElementById("res").innerHTML=message;
    
}
 
    