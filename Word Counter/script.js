function fun(){
    let words=document.getElementById("words").value;
    let arr=words.split(' ');
    let lengths=arr.length;
    let result=document.getElementById("result");

    result.innerHTML="Total Words : "+lengths;
}