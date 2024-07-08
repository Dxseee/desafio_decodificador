/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/
let textCriptografado;
let textDescriptografado;

const  criptografar = () => {
    let texto = document.getElementById("campoTexto").value;
    if (texto != ""){
        let cripE = texto.replaceAll("e","enter");
        let cripI = cripE.replaceAll("i","imes");
        let cripA = cripI.replaceAll("a","ai");
        let cripO = cripA.replaceAll("o","ober");
        textCriptografado = cripO.replaceAll("u","ufat");
        
        removerElements(textCriptografado);

        console.log(textCriptografado);
        return textCriptografado;


    }

    
}

function descriptografar(){
    let descripE = textCriptografado.replaceAll("enter","e");
    let descripI = descripE.replaceAll("imes","i");
    let descripA = descripI.replaceAll("ai","a");
    let descripO = descripA.replaceAll("ober","o");
    textDescriptografado = descripO.replaceAll("ufat","u");

    console.log(textDescriptografado);
    return textDescriptografado;

}

function removerElements(parametro){
    let elementImagem = document.getElementById("imagem");

    let criarElementTexto = document.createElement("h1");
    criarElementTexto.classList.add('h1TextoCriptografado');
    criarElementTexto.innerHTML = parametro;
    elementImagem.replaceWith(criarElementTexto);

    let criarElementButton =  document.createElement("button");
    criarElementButton.classList.add("buttonCriado");
    criarElementButton.innerHTML = "Copiar";

    let elementTexto1= document.getElementById("texto1");
    elementTexto1.replaceWith(criarElementButton);

    let elementTexto2= document.getElementById("texto2").remove();
    
}