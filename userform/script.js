document.addEventListener("DOMContentLoaded", function () {
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let but = document.getElementById("but");
    let change = document.getElementById("change");
    btn1.addEventListener("click", fun);

    

    let user={};
    let p = document.querySelector("p");
    p.style.display="none";
    let details = document.getElementById("details");
    details.addEventListener("click", function(){
       if(p.style.display==="none"){
        p.style.display="block";
        details.innerHTML="HideData";
       }else{
        p.style.display="none";
        details.innerHTML="ShowData";
       }
        
    });

    function fun() {
        let name = document.getElementsByName("name")[0].value;
        let mail = document.getElementsByName("mail")[0].value;
        let password = document.getElementsByName("password")[0].value;
        user = {
            UserName: name,
            UserEmail: mail,
            UserPassword: password
        };

        alert(`Hi ${user.UserName} your data was successfully submitted`);
        p.textContent = `Your Name is: ${user.UserName}, your email is: ${user.UserEmail}, and your password length is: ${user.UserPassword.length}`;
    }

    btn2.addEventListener("click", function(){
        let opt=document.getElementById("opt");
        let choice=opt.options[opt.selectedIndex].value;
        let changeValue = document.getElementsByName("changevalue")[0].value;
        if(choice == "name") {
            user["UserName"] = changeValue;
        } else if(choice == "mail") {
            user["UserEmail"] = changeValue;
        } else if(choice == "password") {
            user["UserPassword"] = changeValue;
        }
        change.style.display = "none";
        alert(`Hi ${user.UserName} your data was changed successfully submitted`);
        p.innerHTML = `Your Name is: ${user.UserName}, your email is: ${user.UserEmail}, and your password length is: ${user.UserPassword.length}`;
    });

    but.addEventListener("click", function() {
        if (change.style.display === "none") {
            change.style.display = "block";
        } else {
            change.style.display = "none";
        }
    });

})