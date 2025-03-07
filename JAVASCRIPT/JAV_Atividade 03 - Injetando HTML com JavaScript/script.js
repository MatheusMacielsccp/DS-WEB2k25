
function criarCartao() {
    var cartao = document.createElement("div");
    cartao.textContent = document.getElementById("nome").value + " - " + document.getElementById("descricao").value;

    var botao = document.createElement("button");
    botao.textContent ="X";
    botao.style.marginTop = "10px";
    botao.style.width = "5px";
    botao.style.padding = "10px";
    botao.style.backgroundColor = "red"
    botao.style.borderRadius= "50px"
    botao.style.Color = "white"


    var cartoes = document.getElementById("cartoes");
    cartoes.appendChild(cartao); 
    cartao.style.backgroundColor = "rgb(211, 211, 211)";
    cartao.style.border = "2px solid #ccc";
    cartao.style.borderRadius = "20px";
    cartao.style.margin = "20px auto";
    cartao.style.padding = "20px";
    cartao.style.color = "#333";
    cartao.style.width = "200px";
    cartao.style.textAlign = "center";
    cartao.style.border = "3px solid black";

   
    
    botao.addEventListener("click", function() {
        cartao.remove();
    });

    cartao.appendChild(botao);
}
