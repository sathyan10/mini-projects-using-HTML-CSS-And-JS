document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelector("button");
    btn.addEventListener("click", function fun() {
        let n1 = document.getElementById("num1");
        let n2 = document.getElementById("num2");
        let para = document.querySelector("h3");
        let opt = document.getElementById("opt");
        let sym = (opt.options[opt.selectedIndex]).textContent;
        switch (sym) {
            case "+":
                para.textContent = Number(n1.value)+Number(n2.value);
                break
            case "-":
                para.textContent = Number(n1.value)-Number(n2.value);
                break
            case "/":
                para.textContent = Number(n1.value)/Number(n2.value);
                break
            case "*":
                para.textContent = Number(n1.value)*Number(n2.value);
                break
        }})
});