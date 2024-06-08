function length(){
    let n=document.getElementById("num1").value;
    n=n/2.54;
    let result=document.getElementById("result1");
    result.textContent=n.toFixed(3) +" inches";
}

function rupees(){
    let n=document.getElementById("num2").value;
    n=n * 0.012 ;
    let result=document.getElementById("result2");
    result.textContent=n +" dollers";
}

function Fahrenheit(){
    let n=document.getElementById("num3").value;
    n=(n* 9 / 5) + 32 ;
    let result=document.getElementById("result3");
    result.textContent=n +" Fahrenheit";
}

function kg(){
    let n=document.getElementById("num4").value;
    n=n* 2.205 ;
    let result=document.getElementById("result4");
    result.textContent=n +" pounds";
}

function hours(){
    let n=document.getElementById("num5").value;
    n=n* 60 ;
    let result=document.getElementById("result5");
    result.textContent=n +" minute";
}
