var deadLine = new Date ("dec 07, 2022 23:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadLine - now;
var dias = Math.floor(t / (1000 * 60 * 60 * 24));
var horas = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutos = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var segundos = Math.floor((t % (1000 * 60 )) / 1000); 

document.getElementById("dia").innerHTML = dias;
document.getElementById("horas").innerHTML = horas;
document.getElementById("minutos").innerHTML = minutos;
document.getElementById("segundos").innerHTML = segundos;



    if ( t < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "TERMINOU";
        document.getElementById("dia").innerHTML ="0";
    }
}, 1000);

