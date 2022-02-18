// Get user name
let myName=document.querySelector("#myName");
let getUserName=prompt("Adınızı Giriniz: ");
myName.innerHTML=getUserName; // Change name

// Days

let day;
switch(new Date().getDay()) {
    case 0:
        day="Pazar";
        break;
    case 1:
        day="Pazartesi"
        break;
    case 2:
        day="Salı"
        break;
    case 3:
        day="Çarşamba"
        break;
    case 4:
        day="Perşembe"
        break;
    case 5:
        day="Cuma"
        break;
    case 6:
        day = "Cumartesi";
        break;
}

function showTime () {
    let date = new Date();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    saat = (saat < 10) ? "0" + saat : saat;
    dakika = (dakika < 10) ? "0" + dakika : dakika;
    saniye = (saniye < 10) ? "0" + saniye : saniye;
    let time = `${saat}:${dakika}:${saniye} ${day}`;

    document.getElementById("myClock").innerHTML= time;
    setTimeout(showTime, 1000)

}

showTime()

