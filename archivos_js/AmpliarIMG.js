function colo(e){
    e.style.filter="grayscale(95%)";
    e.style.transition="all 1s";
}
function origen(e){
    e.style.filter="grayscale(0%)";
    e.style.transition="all 1s";
}
function agrandar(e){
    e.style.transform="scale(1.15)";
    e.style.transition="all 1s";
}
function disminuir(e){
    e.style.transform="scale(1)";
    e.style.transition="all 1s";
}

for(var i=0; i<document.getElementsByClassName("img2-container").length;i++){
    document.getElementsByClassName("img2-container")[i].setAttribute("onmouseover","zoom(this)");
    document.getElementsByClassName("img2-container")[i].setAttribute("onmouseout","origen(this)");
    document.getElementsByClassName("img2-container")[i].setAttribute("onmouseover","agrandar(this)");
    document.getElementsByClassName("img2-container")[i].setAttribute("onmouseout","disminuir(this)");
}
for(var i=0; i<document.getElementsByClassName("img-container").length;i++){
    document.getElementsByClassName("img-container")[i].setAttribute("onmouseover","zoom(this)");
    document.getElementsByClassName("img-container")[i].setAttribute("onmouseout","origen(this)");
    document.getElementsByClassName("img-container")[i].setAttribute("onmouseover","agrandar(this)");
    document.getElementsByClassName("img-container")[i].setAttribute("onmouseout","disminuir(this)");
}
for(var i=0; i<document.getElementsByClassName("img3-container").length;i++){
    document.getElementsByClassName("img3-container")[i].setAttribute("onmouseover","zoom(this)");
    document.getElementsByClassName("img3-container")[i].setAttribute("onmouseout","origen(this)");
    document.getElementsByClassName("img3-container")[i].setAttribute("onmouseover","agrandar(this)");
    document.getElementsByClassName("img3-container")[i].setAttribute("onmouseout","disminuir(this)");
}

for(var i=0; i<document.getElementsByTagName("img").length;i++){
    document.getElementsByTagName("img")[i].setAttribute("onmouseover","zoom(this)");
    document.getElementsByTagName("img")[i].setAttribute("onmouseout","origen(this)");
    document.getElementsByTagName("img")[i].setAttribute("onmouseover","agrandar(this)");
    document.getElementsByTagName("img")[i].setAttribute("onmouseout","disminuir(this)");
}



document.body.setAttribute
("onload","zoom(e),origen(e),agrandar(e),disminuir(e)");