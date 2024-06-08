document.addEventListener("DOMContentLoaded",function(){
    let btn=document.getElementById("btn");
    let colorname=document.getElementById("colorname");
    let  container=document.getElementById("container")
    let colors=["#21a343","#fbff1c","#ffbb00","#ff4d00","#a200ff","#ff03fb","#ff0374"];
    btn.addEventListener("click",function(){
        let k=container.style.backgroundColor=colors[Math.floor(Math.random()*7)];
        colorname.textContent=k;
    })
})