var value1=0;
var operator=null;
var value2=0;
var result=0;
function func(val) 
{ 
    if(isNaN(val)&&val!='.')
    {
        
        if(operator==null)
        {
        value1=parseFloat(document.getElementById("display").value);
        document.getElementById("display").value='0';
        operator=val;
        }
        else
        {
        value2=parseFloat(document.getElementById("display").value);
        value1=calculate(value1,operator,value2)
        operator=val;
        document.getElementById("display").value='0';
        }
    }
    else
    {
        var existingValue=document.getElementById("display").value;
        if(existingValue==0)
        document.getElementById("display").value=val ;
        else
        document.getElementById("display").value+=val ;
    }
   
} 
function clr() 
{ 
    document.getElementById("display").value="" ;
} 
function calculate(val1,operator,val2)
{
    if(operator=='+')
    {
    result=val1+val2;
    }
    else if(operator=='-')
    {
    result=val1-val2;
    }
    else if(operator=='*')
    {
    result=val1*val2;
    }
    else if(operator=='/')
    {
    result=val1/val2;
    }
   return result ;
}
function finalCalculate()
{
    value2=parseFloat(document.getElementById("display").value);
    if(operator=='+')
    {
    result=value1+value2;
    }
    else if(operator=='-')
    {
    result=value1-value2;
    }
    else if(operator=='*')
    {
    result=value1*value2;
    }
    else if(operator=='/')
    {
    result=value1/value2;
    }
    document.getElementById("display").value=result;
    unset();
}
function del()
{
   var str= document.getElementById("display").value;
   str = str.substring(0, str.length - 1);
   document.getElementById("display").value=str;
}
function unset()
{
    value1=0;
    value2=0;
    operator=null;
}

