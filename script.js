/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

function criptografar(){
    let texto = document.getElementById("campoTexto").value;
    if (texto != ""){
        let cripE = texto.replaceAll("e","enter");
        let cripI = cripE.replaceAll("i","imes");
        let cripA = cripI.replaceAll("a","ai");
        let cripO = cripA.replaceAll("o","ober");
        let textCriptografado = cripO.replaceAll("u","ufat");
     
    
        let element = document.getElementById("imagem").remove();
    
        console.log(textCriptografado);
        return textCriptografado ;

    }

    
}
function descripitografar(){

}

function removerImagem(){

}

function adicionarBotaoCopiar(){

}


function copiarTexto(){

}
