//Atividade 01

function mostrarBoasVindas(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = " Seja bem-vindo " +nome+ "!!";
}

//Atividade 02

function parOuImpar(){
    var numero = document.getElementById("numero").value;
    numero = Number(numero)
    if (numero % 2 === 0){
        document.getElementById("resImp").innerHTML = "O número " + numero + " é par.";
    }else{
        document.getElementById("resImp").innerHTML = "O número " + numero + " é impar.";
    }
}

//Atividade 03

function string(){

    var texto = document.getElementById("entrada").value;
    var resultado = texto.toUpperCase();
    document.getElementById("resultado").innerText = "Texto em maiúsculas: " + resultado;
}

//Atividade 04

function porcentagem() {
   var numero1 = document.getElementById("numero1").value;
   var porcentagem = document.getElementById("porcentagem").value;
   var resultado = document.getElementById("resultado1");
   resultado.innerHTML = "Valor em porcentagem: " +(numero1*(porcentagem/100));
}

//Atividade 05
function mudarCor() {
    var div = document.getElementById("minhaDiv");
    div.className = "corNova";
}
