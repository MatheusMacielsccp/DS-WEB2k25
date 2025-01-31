    //Quatão 01=====================================================================================================================
    console.log("Bom dia Mundo!!!")

    alert("Bom dia Mundo!!!")

    //Questão 02=====================================================================================================================
    var numero1 = (prompt("Digite seu nome"))
    var numero2 = (prompt("Digite seu sobrenome"))
    
    console.log(typeof(numero1))
    alert(numero1 + numero2)

    //Questão 03=====================================================================================================================
    //adição
    var numero1 = Number.parseInt(prompt("Digite o primeiro numero"))
    var numero2 = Number.parseInt(prompt("Digite o segundo numero"))

    console.log(typeof(numero1))
    alert(numero1 + numero2)

    //subtração
    var numero1 = Number.parseInt(prompt("Digite o primeiro numero"))
    var numero2 = Number.parseInt(prompt("Digite o segundo numero"))

    console.log(typeof(numero1))
    alert(numero1 - numero2)

    //divisão
    var numero1 = Number.parseInt(prompt("Digite o primeiro numero"))
    var numero2 = Number.parseInt(prompt("Digite o segundo numero"))

    console.log(typeof(numero1))
    alert(numero1 / numero2)

    //multiplicação
    var numero1 = Number.parseInt(prompt("Digite o primeiro numero"))
    var numero2 = Number.parseInt(prompt("Digite o segundo numero"))

    console.log(typeof(numero1))
    alert(numero1 * numero2)

    //Questão 04=====================================================================================================================
    
    var numero1 = Number.parseInt(prompt("Digite o numero a ser elevado ao cubo"))
    //Verificar tipo da variavel
    console.log(typeof(numero1))
    alert(numero1 * numero1 * numero1)
  
    //Questão 05=====================================================================================================================
    var numero1 = Number.parseInt(prompt("Digite a temperatura em Fahrenheit"))
    console.log(typeof(numero1))
    alert((numero1 - 32) * 0.5556)

    //Questão 06=====================================================================================================================
    var capital = Number.parseInt(prompt("Digite o capital inicial:"))

    var taxa = Number.parseInt(prompt("Digite o  juros em porcentagem:"))

    var tempo = Number.parseInt(prompt("Digite o tempo em meses:"))

    alert((m = capital * (1+taxa/100)**tempo).toFixed(2));
