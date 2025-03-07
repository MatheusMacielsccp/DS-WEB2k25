//Atividade 01=============================================================================================================================

function idade(){
    var idade = document.getElementById("numero").value;
    var mensagem = document.getElementById("verificacao");
        if (idade >= 18){
        mensagem.innerHTML = "Você é maior de idade ";
        }else{
        mensagem.innerHTML = "Você é menor de idade ";
        }

}

//Atividade 02=============================================================================================================================

function positivoNegativoNulo(){
    var numero = document.getElementById("numero1").value;
    var mensagem = document.getElementById("verificacao1");
        if (numero > 0 ){
            mensagem.innerHTML = "O numero é positivo "
        }else if (numero < 0 ){
            mensagem.innerHTML = "O numero é negativo "
        }else{
            mensagem.innerHTML = "O numero é nulo "
        }
}

//Atividade 03=============================================================================================================================

function admin(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var mensagem = document.getElementById("verificacao2");
        if ((usuario == "admin") && (senha == "12345")){
            mensagem.innerHTML = "<h2>Bem-Vindo!!!</h2>";
        }else {
            mensagem.innerHTML = "<h2>ERROR 404</h2>";
        }
}

//Atividade 04=============================================================================================================================

function calcular(operacao) {
    var num1 = Number.parseFloat(document.getElementById('num1').value);
    var num2 = Number.parseFloat(document.getElementById('num2').value);
    var operacao = document.getElementById('operacao').value;
    var resultado = document.getElementById("resultado");

        if (operacao == "+") {
            resultado.innerHTML = "O resultado é:" + (num1 + num2);
        } else if (operacao == "-") {
            resultado.innerHTML = "O resultado é:" + (num1 - num2);
        } else if (operacao == "*") {
            resultado.innerHTML = "O resultado é:" + (num1 * num2);
        } else if (operacao == "/") {
            resultado.innerHTML = "O resultado é:" + (num1 / num2);
        }
    
}

//Atividade 05=============================================================================================================================

function parOuImpar(){
    var number = document.getElementById("number").value;
    number = Number(number)
    if (number % 2 === 0){
        document.getElementById("resImp").innerHTML = "O número " + number + " é par.";
    }else{
        document.getElementById("resImp").innerHTML = "O número " + number + " é impar.";
    }
}

//Atividade 06=============================================================================================================================

function maior(){
    var valor1 = Number.parseFloat(document.getElementById("valor1").value);
    var valor2 = Number.parseFloat(document.getElementById("valor2").value);
    var valor3 = Number.parseFloat(document.getElementById("valor3").value);
    var ver = document.getElementById("ver");
        if(valor1 > valor2 && valor1 >valor3){
            ver.innerHTML = "O numero:" +valor1 +"é maior";
        }else if(valor2 > valor1 && valor2 > valor3){
            ver.innerHTML = "O numero:" +valor2 +"é maior";
        }else if(valor3 > valor2 && valor3 > valor1){
            ver.innerHTML = "O numero:" +valor3 +"é maior";
        }
}

//Atividade 06=============================================================================================================================

function tipo() {
   
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);


    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0 ||
        lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        document.getElementById("triangulo").innerHTML = "Valores inválidos ou não formam um triângulo.";
        return;
  }
 
      if (lado1 === lado2 && lado1 === lado3) {
        document.getElementById("triangulo").innerHTML = "O triangulo é equilatero ";

      } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        document.getElementById("triangulo").innerHTML = "O trianguo é isoceles ";

      } else {
        document.getElementById("triangulo").innerHTML = "O triangulo é escaleno " ;
      }
    }
