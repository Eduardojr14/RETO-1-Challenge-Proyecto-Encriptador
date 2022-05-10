
let mensaje = document.querySelector("#ingrese_texto");
let salida = document.querySelector("#salida_encriptada");

let btnEncriptar = document.querySelector(".bot-encriptar");
let btnDesencriptar = document.querySelector(".bot-desencriptar");
let btnCopiarTexto = document.querySelector(".bot-copiar");

btnEncriptar.addEventListener("click", function(encp){
    encp.preventDefault();
    let texto = encriptarTexto();
    salida.value = texto;
});

btnDesencriptar.addEventListener("click", function() {
    let texto = desencriptarTexto();
    salida.value = texto;
});

btnCopiarTexto.addEventListener("click", function(encp){
    copiarTexto();
});

function encriptarTexto() {
    let textoEncriptar = limpiarTexto(mensaje.value);
    let textoEncriptado = mensaje.value;

    textoEncriptado = textoEncriptar.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat")

    return textoEncriptado;
}

function desencriptarTexto() {
    let textoEncriptar = limpiarTexto(mensaje.value);
    let textoDesencriptado = mensaje.value;

    textoDesencriptado = textoEncriptar.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u")

    return textoDesencriptado;
}

function copiarTexto() {
    salida.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

    alert("texto copiado!");
}

function limpiarTexto(texto){
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();

}
