document.addEventListener("DOMContentLoaded", function () {
    fetch('https://api.frankfurter.app/currencies')
        .then(resp => resp.json())
        .then(data => {
            populateOptions(data);
        });

    function populateOptions(data) {
        let select = document.querySelectorAll("select");
        let array = Object.entries(data)
        array.forEach((ar) => {
            select.forEach(sel => {
                let opt = document.createElement("option")
                opt.value = ar[0]
                opt.innerHTML = ar[0]
                sel.appendChild(opt);
            })

        })
        let btn = document.querySelector("button")
        btn.addEventListener("click", function () {
            const amount = document.getElementById("input").value;
            const ans = document.getElementById("ans");
            const select1 = document.getElementById("select1")
            const select2 = document.getElementById("select2")
            const selected1 = select1.options[select1.selectedIndex].value
            const selected2 = select2.options[select2.selectedIndex].value
            console.log(selected1 + " " + selected2)
            if (selected1 == selected2) {
                alert("select valid options !")
            } else {
                money(amount, selected1, selected2, ans)
            }
        })
            function money(amount, selected1, selected2, ans) {
                const host = 'api.frankfurter.app';
                fetch(`https://${host}/latest?${amount}&from=${selected1}&to=${selected2}`)
                    .then(resp => resp.json())
                    .then((data) => {
                        console.log(data)
                        ans.innerHTML = (data.rates[selected2])
                        console.log(data.rates)
                    })
                    .catch(error => {
                        console.error('Error fetching conversion rate:', error);
                    })
                }
            


    }
})





