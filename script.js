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
        
        mudarElements();
        innerText(textCriptografado)

        return textCriptografado;
    }

    
}

function descriptografar(){
    let descripE = textCriptografado.replaceAll("enter","e");
    let descripI = descripE.replaceAll("imes","i");
    let descripA = descripI.replaceAll("ai","a");
    let descripO = descripA.replaceAll("ober","o");
    textDescriptografado = descripO.replaceAll("ufat","u");

    innerText(textDescriptografado);

}

function mudarElements(){
    let elementDiv = document.getElementById("agrupamento");
    elementDiv.classList.remove("container2__agrupamento");
    elementDiv.classList.add("agrupamentoCriptografado");


    let elementImagem = document.getElementById("imagem");
    let criarElementTexto = document.createElement("textarea");
    criarElementTexto.classList.add('h1TextoCriptografado');
    criarElementTexto.setAttribute("rows","20");
    criarElementTexto.setAttribute("placeholder","Nenhuma mensagem");
    criarElementTexto.setAttribute("id","campoCriptografado")
    elementImagem.replaceWith(criarElementTexto);

    let elementDiv2 =  document.getElementById("agrupamentoCriptografado_botao");
    elementDiv2.classList.remove("container2__agrupamento__textos");
    elementDiv2.classList.add("criptografadoButton");


    let elementTexto1= document.getElementById("texto1");
    let criarElementButton =  document.createElement("button");
    criarElementButton.classList.add("buttonCriado");
    criarElementButton.innerHTML = "Copiar";
    criarElementButton.setAttribute("onclick","copyButton()")
    criarElementButton.setAttribute("id","copyButton")
    elementTexto1.replaceWith(criarElementButton);

    let removerText = document.getElementById("texto2").remove();
    

    
}

function innerText(parametro){
    let colocarTexto = document.getElementById("campoCriptografado");
    document.getElementById("campoTexto").value = "";
    colocarTexto.value = parametro;
}


function copyButton(){
    document.getElementById('copyButton').addEventListener('click', clipboardCopy);
    async function clipboardCopy() {
      await navigator.clipboard.writeText(textCriptografado);
    }
    document.getElementById("campoCriptografado").value = "";

}

/*Tentativa 1 -Nãoi funcionou


    let elementDiv = document.getElementById("agrupamento");
    let criarElementDiv = document.createElement("div");
    criarElementDiv.classList.add('agrupamentoCriptografado');
    elementDiv.replaceWith(criarElementDiv);

    let elementImagem = document.getElementById("imagem");
    let criarElementTexto = document.createElement("textarea");
    criarElementTexto.classList.add('h1TextoCriptografado');
    criarElementTexto.innerHTML = parametro;
    criarElementTexto.setAttribute("row","15");
    criarElementTexto.setAttribute("placeholder","Nenhuma mensagem");
    elementImagem.replaceWith(criarElementTexto);

    let elementDiv2 =  document.getElementById("agrupamentoCriptografado_botao");
    let criarElementDiv2 = document.createElement("div");
    criarElementDiv.classList.add('criptografadoButton');
    elementDiv2.replaceWith(criarElementDiv2);

    let elementTexto1= document.getElementById("texto1");
    let criarElementButton =  document.createElement("button");
    criarElementButton.classList.add("buttonCriado");
    criarElementButton.innerHTML = "Copiar";
    elementTexto1.replaceWith(criarElementButton);

    let removerText = document.getElementById("texto2").remove();




let elementImagem = document.getElementById("imagem");
let criarElementTexto = document.createElement("textarea");
criarElementTexto.classList.add('h1TextoCriptografado');
criarElementTexto.innerHTML = parametro;
criarElementTexto.setAttribute("row","15");
criarElementTexto.setAttribute("placeholder","Nenhuma mensagem");
containerAgrupamento.innerHTML = criarElementTexto;
//elementImagem.replaceWith(criarElementTexto);


let elementTexto1= document.getElementById("texto1");
let criarElementButton =  document.createElement("button");
criarElementButton.classList.add("buttonCriado");
criarElementButton.innerHTML = "Copiar";
//elementTexto1.replaceWith(criarElementButton);
containerAgrupamento.innerHTML = criarElementButton;
*/



