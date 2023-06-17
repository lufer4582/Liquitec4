// validar entrada de datos

document.querySelector('input[name="identificacion"]').addEventListener("keypress", function (event) {
    var longitud = document.querySelector('input[name="identificacion"]').value.length;
    if (longitud >= 8) {
        window.event.preventDefault();
        return;
    }

    var ascii = event.keyCode || event.wich;
    if (ascii < 48 || ascii > 57) {
        window.event.preventDefault();
        return;
    }
});


document.querySelector('input[name="nombres"]').addEventListener("keypress", function (event) {
    var ascii = event.keyCode || event.wich;
    if ((ascii >= 48 && ascii <= 57) || (ascii == 46)) {
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="apellidos"]').addEventListener("keypress", function (event) {
    var ascii = event.keyCode || event.wich;
    if ((ascii >= 48 && ascii <= 57) || (ascii == 46)) {
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="celular"]').addEventListener("keypress", function (event) {
    var longitud = document.querySelector('input[name="celular"]').value.length;
    if (longitud >= 9) {
        window.event.preventDefault();
        return;
    }
    var ascii = event.keyCode || event.wich;
    if (ascii < 48 || ascii > 57) {
        window.event.preventDefault();
        return;
    }
});

//Validacion entrada de numeros
function nuevo(formulario){
    let test=/^\d{8}$/;
    if(!test.test(formulario.identificacion.value)){
        window.event.preventDefault();
        alert("Ingresa DNI");
        return;
    }

    test=/^\d{9}$/;
    if(!test.test(formulario.celular.value)){
        window.event.preventDefault();
        alert("Ingresa un numero de Celular");
        return;
    }

    //Ingresar solo texto
    test=/^\s*$/;
    if(test.test(formulario.apellidos.value)){
        window.event.preventDefault();
        alert("Ingresa Apellidos y Nombres");
        return;
    }

    test=/^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
    if(!test.test(formulario.correo.value)){
        window.event.preventDefault();
        alert("Formato de e-mail Incorrecto");
        return;
    }

    alert("Datos Ingresados Correctamente...")
}
formulario.addEventListener('submit', (e) => {
e.preventDefault();
});



    