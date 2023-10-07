const birthday = new Date("October 3, 2023");
const nextDay = new Date("October 4, 2023");

function count() {
    const currently = Math.floor(Date.now() / 1000);
    const time1 = Math.floor(birthday.getTime() / 1000);
    const time2 = Math.floor(nextDay.getTime() / 1000);
    const d1 = time1 - currently;
    const d2 = time2 - currently;
    if (d1 > 0 && d2 > 0) document.getElementById("bday").innerText = "is in " + d1 + " seconds";
    else if (d1 < 0 && d2 > 0) document.getElementById("bday").innerText = "is TODAY";
    else document.getElementById("bday").innerText = "was " + (d2 * -1) + " seconds ago";
}
setInterval(count, 1000)
count();