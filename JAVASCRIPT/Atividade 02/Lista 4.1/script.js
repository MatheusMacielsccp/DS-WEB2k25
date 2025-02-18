//===============================================================Atividade 01==============================================================

var a = window.document.getElementById('area')
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function entrar(){
a.style.background = 'green'
}

function sair(){
a.style.background = 'blue'
}

//===============================================================Atividade 02==============================================================

function exibirTexto() {
    var texto = document.getElementById("campoTexto").value;
    document.getElementById("textoExibido").textContent = texto;
}

//===============================================================Atividade 03==============================================================

var contadorCliques = 0;

function contarCliques() {
    contadorCliques++;
    document.getElementById("contador").textContent = contadorCliques;
}

//===============================================================Atividade 04==============================================================
window.onload = function() {
    const div = document.createElement("div");
    div.innerHTML = "<h1>Bem-vindo à nossa página!</h1>";
    div.style.cssText = "background-color: lightseagreen; padding: 10px; text-align: center; font-size: 24px; position: fixed; top: 0; width: 100%; z-index: 1000;";
    document.body.appendChild(div);
};

