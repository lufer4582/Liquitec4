reloj();
fecha();

function reloj() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>am</span>" : "<span>pm</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("ph").innerHTML = "La Hora es : " +hr+ " : " + min + " : " + sec + " " + ap;
    var time = setTimeout(function(){ reloj() }, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function fecha()
{
    let fecha=new Date();  //Obtine la fecha del momento

    let d = fecha.getDate();
    let m = fecha.getMonth()+1;
    let a = fecha.getFullYear();
    
    document.getElementById("pf").innerHTML="Fecha de hoy : "+d+"/"+m+"/"+a;
    setTimeout("fecha()",1000);
}