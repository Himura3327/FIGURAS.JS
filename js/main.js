function fcirculo() {
    var selector = document.getElementById("figura");
    selector.classList.toggle("circulo");
}
function frombo() {
    var selector = document.getElementById("figura");
    selector.className = "rombo";
}
function frectanguloH() {
    var selector = document.getElementById("figura");
    selector.className = "rectanguloH";
}

function frectangulov() {
    var selector = document.getElementById("figura");
    selector.className = "rectanguloV";
}

function fsubir() {
    var selector = document.getElementById("figura");
    selector.classList.toggle("subir");
}

function fbajar() {
    var selector = document.getElementById("figura");
    selector.classList.toggle("bajar");
}
function fimg() {
    var selector = document.getElementById("figura");
    selector.classList.toggle("img")
}


function operaciones() {
    var a = Number(document.getElementById("valor1").value);
    var b = Number(document.getElementById("valor2").value);

    var operacion = document.getElementById("operaciones").value;

    switch (operacion) {
        case "+":
            resultado = a + b;
            document.getElementById("respuesta").value = resultado;
            break;

        case "-":
            resultado = a - b;
            document.getElementById("respuesta").value = resultado;
            break;

        case "*":
            resultado = a * b;
            document.getElementById("respuesta").value = resultado;
            break;

        case "/":
            resultado = a / b;
            document.getElementById("respuesta").value = resultado;
            break;
    }
}
function chatActive() {
    var selector = document.getElementById("chat");
    selector.classList.toggle("active")
    var selector2 = document.getElementById("btnChat");
    selector2.classList.toggle("active");

}
