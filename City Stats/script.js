document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    button.addEventListener("click", fun);
    function fun() {
        let opt = document.getElementById("options");
        let city = (opt.options[opt.selectedIndex]).textContent;
        let content = document.getElementById("content");
        let pop; 
        let lang;
        let lit;
        console.log(city +" "+content)
        switch (city.toLowerCase()) {
            case "chennai":
                pop = "8,50,25,000";
                lit = "85.30";
                lang = "tamil";
                break;
            case "coimbatore":
                pop = "8,00,25,000";
                lit = "88.50";
                lang = "tamil";
                break;
            case "mumbai":
                pop = "9,57,55,000";
                lit = "76.33";
                lang = "Marati";
                break;
            case "Kochi":
                pop = "6,00,24,100";
                lit = "85.53";
                lang = "Malayalam";
                break;
            case "bengaluru":
                pop = "8,40,25,000";
                lit = "90.33";
                lang = "Kannada";
                break;
            case "kolkata":
                pop = "10,12,25,060";
                lit = "74.11";
                lang = "Hindi";
                break;
            case "newedelhi":
                pop = "7,43,11,110";
                lit = "90.64";
                lang = "Hindi";
                break;
        }
        content.textContent=`The Indian city of ${city} has a population of ${pop} language spoken is ${lang} and literacy rate is ${lit}`;
    }
});
