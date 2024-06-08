document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("button");
    let arr = JSON.parse(localStorage.getItem('arr')) || [];

    const content = document.getElementById("content");

    function createPElement(text) {
        const p = document.createElement("p");
        p.innerHTML = text;
        content.appendChild(p);

        p.addEventListener("click", function () {
            if (this.style.textDecoration === "line-through") {
                const index = arr.indexOf(this.innerHTML);
                arr.splice(index, 1);
                this.remove();
                localStorage.setItem('arr', JSON.stringify(arr));
            } else {
                this.style.textDecoration = "line-through";
            }
        });
    }

    arr.forEach((item) => {
        createPElement(item);
    });

    btn.addEventListener("click", function () {
        let input = document.getElementById("in").value;

        if (input) {
            arr.push(input);
            console.log(arr);
            document.getElementById("in").value = "";

            createPElement(input);

            localStorage.setItem('arr', JSON.stringify(arr));
        }
    });
});
