document.addEventListener("DOMContentLoaded", function () {
    let dv = document.getElementById("content")
    let hh = document.createElement("h1");
    let mm = document.createElement("h1");
    let ss = document.createElement("h1");
    let cur = document.createElement("h1");
    let pdate = document.createElement("p");
    hh.innerHTML = "00 :";
    mm.innerHTML = "00 :";
    ss.innerHTML = "00 ";
    cur.innerHTML = "Am";
    dv.appendChild(pdate)
    dv.appendChild(hh)
    dv.appendChild(mm)
    dv.appendChild(ss)
    dv.appendChild(cur)

    setInterval(() => {
        let date = new Date()
        pdate.innerHTML =date.toDateString();
        hh.innerHTML = date.getHours() > 12 ? "0"+date.getHours() % 12+" : " : date.getHours() + " : ";
        mm.innerHTML = date.getMinutes() > 9 ? date.getMinutes() + " :" : "0" + date.getMinutes() + " :";
        ss.innerHTML = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds() + "  ";
        cur.innerHTML = date.getHours() >= 12 ? " PM" : " AM";
    }, 1000)
})