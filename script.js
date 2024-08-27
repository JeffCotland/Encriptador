const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"], ["a","ai"], ["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }

    }
    return stringEncriptada
}

function btnDesEncriptar(){
    const textoEncriptado = desEncriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desEncriptar(stringDesEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"], ["a","ai"], ["o","ober"],["u","ufat"]];
    stringDesEncriptada = stringDesEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesEncriptada.includes(matrizCodigo[i][1])){
            stringDesEncriptada = stringDesEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])


        }

    }
    return stringDesEncriptada
}

document.getElementById("clipBoard").addEventListener("click", async function() {
    try {
    
        const texto = document.getElementById("mensajeEncri").value;
        
        await navigator.clipboard.writeText(texto);
        
        alert("Texto copiado: " + texto);
    } catch (err) {
        console.error("Error al copiar el texto: ", err);
    }
});


