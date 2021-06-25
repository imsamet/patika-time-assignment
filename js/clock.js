function time() {
    var date = new Date();
    var hourse = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = date.getDay();

    hourse = hourse < 10 ? "0" + hourse : hourse;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    switch(session){
        case 1:
            session = "Pazartesi";
            break;
        case 2:
            session = "Salı";
            break;
        case 3:
            session = "Çarşamba";
            break;
        case 4:
            session = "Perşembe";
            break;
        case 5:
            session = "Cuma";
            break;
        case 6:
            session = "Cumartesi";
            break;
        case 7:
            session = "Pazar";
            break;

    }
    var time = hourse + ":" + minute + ":" + second + " " + session;

    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
}

function askName() {
    var name = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = name;
}

askName()
time()

setInterval(time, 1000);