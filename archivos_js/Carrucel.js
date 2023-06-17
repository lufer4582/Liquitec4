let backgraund = [];
backgraund[0]='../banner/img.jpg'
backgraund[1]='../banner/img1.jpg';
backgraund[2]='../banner/img2.jpg';
backgraund[3]='../banner/img3.jpg';
backgraund[4]='../banner/img4.jpg';
backgraund[5]='../banner/img5.jpg';
backgraund[6]='../banner/img6.jpg';

function opacidad(){
    document.querySelector("#banner").style.transition="all 1s";
    setTimeout("carrucel()",2000);
}

function carrucel(){
    let setbackgraund = Math.floor(Math.random()*backgraund.length);
    document.querySelector("#banner").style.opacity="1";
    document.querySelector("#banner").style.backgroundImage = `url(${backgraund[setbackgraund]})`; 
    setTimeout("opacidad()",2000);
}


document.body.setAttribute
("onload","opacidad(),carrucel()");

//NICE!!