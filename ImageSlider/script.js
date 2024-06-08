document.addEventListener("DOMContentLoaded", function () {
    let image = document.querySelector("img");
    const content = document.getElementById("content")
    let l = 1;
    image.src = `image${l}.jpeg`;
    content.append(image);
    let larrow = document.getElementById("arrowleft")
    let rarrow = document.getElementById("arrowright")
    larrow.addEventListener("click", () => {
        if (l == 1) {
            l = 5
        } else {
            l -= 1
            image.src = `image${l}.jpeg`;
        }

    })
    rarrow.addEventListener("click", () => {
        if (l == 5) {
            l =1 
        } else {
            l += 1
            image.src = `image${l}.jpeg`;
        }
    })

})
