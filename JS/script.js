var deadLine = new Date ("jan 12, 2023 04:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadLine - now;
var dias = Math.floor(t / (1000 * 60 * 60 * 24));
var horas = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutos = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var segundos = Math.floor((t % (1000 * 60 )) / 1000); 

document.getElementById("timer").innerHTML = dias + "d" + horas + "h" + minutos + "m" + segundos + "s";
    if ( t < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "TERMINOU";
    }
}, 1000);