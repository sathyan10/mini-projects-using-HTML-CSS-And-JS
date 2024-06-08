document.addEventListener("DOMContentLoaded",function(){
    const btn=document.querySelector("button")
    btn.addEventListener("click",()=>{
        let t1=0,t2=0,t3=0,t4=0;
        const userName=document.getElementById("username")
        const userEmail=document.getElementById("email")
        const userPassword=document.getElementById("password")
        const userRepassword=document.getElementById("repassword")
        if(userName.value.trim()===''){
            t1=1
            document.getElementById("uerror").style.display="block";
        }else{
            t1=0
            document.getElementById("uerror").style.display="none";
        }

        if(userEmail.value.trim()===''){
            t2=1
            document.getElementById("merror").style.display="block";
        }
        else{
            t2=0
            document.getElementById("merror").style.display="none";
        }

        if(userPassword.value.trim()===''){
            t3=1
            document.getElementById("perror").style.display="block";
        }else{
            t3=0
            document.getElementById("perror").style.display="none";
        }

        if(userRepassword.value.trim()===''){
            t4=1
            document.getElementById("cperror").style.display="block";
        }else{
            t4=0
            document.getElementById("cperror").style.display="none";
        }

    if(t1==0 && t2==0 && t3==0 && t4==0){
                check((userPassword.value),(userRepassword.value));
    }
    })

    function check(p1,p2){
        if(p1===p2){
            btn.type="submit"
            alert("registered successfully")
        }else{
            alert("password mismatch")
        }

    }

})