const text = document.querySelector(".text");
const saidaDeTexto = document.querySelector(".saidaDeTexto");
const btncriptografar = document.querySelector(".btn1");
const btndescriptografar = document.querySelector(".btn2");
const screen1 = document.querySelector(".start");
const screen2 = document.querySelector(".result");



btncriptografar.addEventListener('click', criptografar);
btncriptografar.addEventListener('click', hide);
btncriptografar.addEventListener('click', limparCampo);

btndescriptografar.addEventListener('click', descriptografar)
btndescriptografar.addEventListener('click', hide);
btndescriptografar.addEventListener('click', limparCampo);

function hide(){
    screen1.id = "hidden";
    screen2.id = '';
}

function limparCampo(){
    text.value = "";
}

function criptografar() {



    const inputString = text.value;
    const resultado = inputString
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    saidaDeTexto.innerHTML = resultado;

    inputString.text.value = "";
}



function descriptografar(){
    const inputString = text.value;
    const resultado = inputString
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    saidaDeTexto.innerHTML = resultado;
}


function copiarTexto() {
    var texto = document.querySelector('.saidaDeTexto').innerHTML;
    var inputTemp = document.createElement("input");
    inputTemp.setAttribute("value", texto);
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);
}