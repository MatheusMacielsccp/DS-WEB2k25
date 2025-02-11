<?php

class Musculacao {
    public $pesos;
    public $maquinas;
    public $instrutor;
    public $exercicios;
    public $rotina;

    public function empurrar(){
        return "Esse exercício é um push<br>";
    }

    public function agachar(){
        return "Esse exercício é de legs<br>";
    }

    public function puxar(){
        return "Esse exercício é um pull<br>";
    }

    public function exibirMusculacao(){
        return "Para se fazer musculação precisa ter: {$this->pesos}<br>" .
        "Para exercícios controlados usa-se: {$this->maquinas}<br>" .
        "Para fazer o exercício correto chame o: {$this->instrutor}<br>" .
        "Para desenvolver o músculo faz-se: {$this->exercicios}<br>" .
        "Para ter constância precisa-se criar: {$this->rotina}<br>";
    }
}

echo "<br>";
//========================================================================================================================================

class Caneta {
    public $cor;
    public $tampa;
    public $tinta;
    public $marca;
    public $plastico;

    public function pintar(){
        return "Esta caneta serve para pintar<br>";
    }

    public function escrever(){
        return "Isso serve para escrever<br>";
    }

    public function assinar(){
        return "Pode servir para assinaturas<br>";
    }

    public function exibirCaneta(){
        return "Para ter mais variedades muda-se a: {$this->cor}<br>" .
        "Para a tinta não secar se usa: {$this->tampa}<br>" .
        "Para funcionar precisa de: {$this->tinta}<br>" .
        "Para diferenciar das outras troca a: {$this->marca}<br>" .
        "Um material resistente para a caneta é o: {$this->plastico}<br>";
    }
}

echo "<br>";
//========================================================================================================================================

class Flor {
    public $cor;
    public $tamanho;
    public $cheiro;
    public $formato;
    public $petalas;

    public function enfeitar(){
        return "Bonita para enfeitar<br>";
    }

    public function embelezar(){
        return "Pode embelezar o ambiente<br>";
    }

    public function renovar(){
        return "Traz paz ao corpo<br>";
    }

    public function exibirFlor(){
        return "Para ter mais variedades muda-se a: {$this->cor}<br>" .
        "Para se diferenciar muda-se a: {$this->tamanho}<br>" .
        "Uma característica de cada uma é o: {$this->cheiro}<br>" .
        "Uma mudança pode ser o: {$this->formato}<br>" .
        "Cada flor tem suas quantidades de: {$this->petalas}<br>";
    }
}

echo "<br>";
//========================================================================================================================================

class Jogo {
    public $videogame;
    public $controle;
    public $disco;
    public $televisao;
    public $imagem;

    public function distrair(){
        return "Pode ser uma boa distração<br>";
    }

    public function alegrar(){
        return "É um bom divertimento<br>";
    }

    public function entreter(){
        return "Entretem muito fácil<br>";
    }

    public function exibirJogo(){
        return "O Jogo é de: {$this->videogame}<br>" .
        "Para jogar precisa de: {$this->controle}<br>" .
        "O jogo roda em um: {$this->disco}<br>" .
        "Para jogar precisa de uma: {$this->televisao}<br>" .
        "Para ver precisa da: {$this->imagem}<br>";
    }
}

echo "<br>";
//========================================================================================================================================

class Futebol {
    public $bola;
    public $trave;
    public $campo;
    public $jogadores;
    public $juiz;

    public function competir(){
        return "Boa maneira de ser competitivo<br>";
    }

    public function socializar(){
        return "Fácil de fazer amizades<br>";
    }

    public function exercitar(){
        return "É um bom esporte para o corpo físico<br>";
    }

    public function exibirFutebol(){
        return "O jogo joga com uma: {$this->bola}<br>" .
        "Para jogar precisa-se de: {$this->trave}<br>" .
        "O jogo joga-se num: {$this->campo}<br>" .
        "Para jogar precisa-se de: {$this->jogadores}<br>" .
        "Para não ter injustiças precisa-se de: {$this->juiz}<br>";
    }
}

echo "<br>";
//========================================================================================================================================

echo "<h2> Musculacao</h2>";
$superacao = new Musculacao();
$superacao-> pesos  = "pesos";
$superacao-> maquina = "maquinas";
$superacao-> instrutor = "instrutor";
$superacao-> exercicios = "exercicios";
$superacao-> rotina = "rotina";

echo $superacao->empurrar();
echo $superacao->puxar();
echo $superacao->agachar();
echo $superacao->exibirMusculacao();
echo "<br>";
echo "====================================================";
echo "<br>";

echo "<h2> Caneta</h2>";
$can = new Caneta();
$can-> cor  = "cor";
$can-> tampa = "tampa";
$can-> tinta = "tinta";
$can-> marca = "marca";
$can-> plastico = "plastico";

echo $can->pintar();
echo $can->escrever();
echo $can->assinar();
echo $can->exibirCaneta();
echo "<br>";
echo "====================================================";
echo "<br>";

echo "<h2> Flor</h2>";
$flo = new Flor();
$flo-> cor  = "cor";
$flo-> tamanho = "tamanho";
$flo-> cheiro = "cheiro";
$flo-> formato = "formato";
$flo-> petalas = "petalas";

echo $flo->enfeitar();
echo $flo->renovar();
echo $flo->embelezar();
echo $flo->exibirFlor();
echo "<br>";
echo "====================================================";
echo "<br>";

echo "<h2> Jogo</h2>";
$jg = new Jogo();
$jg-> videogame  = "videogame";
$jg-> controle = "controle";
$jg-> disco = "disco";
$jg-> televisao = "televisao";
$jg-> imagem = "imagem";

echo $jg->distrair();
echo $jg->alegrar();
echo $jg->entreter();
echo $jg->exibirJogo();
echo "<br>";
echo "====================================================";
echo "<br>";

echo "<h2> Futebol</h2>";
$jg = new Futebol();
$jg-> bola = "bola";
$jg-> campo = "campo";
$jg-> trave = "trave";
$jg-> jogadores = "jogadores";
$jg-> juiz = "juiz";

echo $jg->competir();
echo $jg->socializar();
echo $jg->exercitar();
echo $jg->exibirFutebol();
echo "<br>";
echo "====================================================";
echo "<br>";

//======================================================================================================================================== 

class ContaBancaria {
    public $saldo;
    public $numeroConta;
    public $titular;

    public function exibirConta(){
        return "Nome do Titular: {$this->titular}<br>" .
               "Número da Conta: {$this->numeroConta}<br>" ;
    }
    public function exibirSaldo(){
        return "Saldo: R$ {$this->saldo}<br>";
               
    }
    public function depositar($deposito){
        $this ->saldo += $deposito;
        return "Este é o novo saldo: R$" .$this->saldo;
        
    }
    public function sacar($saque){
        $this ->saldo -= $saque;
        return "Este é o novo saldo: R$" .$this->saldo;
               
       
    }
}
echo "<h1> Conta Bancaria</h1>";

$maciel = new ContaBancaria();
$maciel->saldo = 1560;
$maciel->numeroConta = "00001";
$maciel->titular = "Maciel";
echo $maciel->exibirConta();

echo $maciel->exibirSaldo();
echo "<br>";
echo $maciel->sacar(1500);
echo "<br>";
echo "//////////////////////////////////////////////////////////////";
echo "<br>";

$pacheco = new ContaBancaria();
$pacheco->saldo = 50;
$pacheco->numeroConta = "00002";
$pacheco->titular = "Pachecoez";
echo $pacheco->exibirConta();

echo $pacheco->exibirSaldo();
echo "<br>";
echo $pacheco->sacar(49.66);
echo "<br>";
echo "//////////////////////////////////////////////////////////////";
echo "<br>";

echo "<br>";

$arthur = new ContaBancaria();
$arthur->saldo = 1370;
$arthur->numeroConta = "00003";
$arthur->titular = "Horinomio";
echo $arthur->exibirConta();

echo $arthur->exibirSaldo();
echo "<br>";
echo $arthur->sacar(100);
echo "<br>";
echo "////////////////////////////////////////////////////////////";
echo "<br>";
?>