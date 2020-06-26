var timerId = null;

function iniciaJogo() {
	
	var url = window.location.search; // .location :localiza e copia a string de endereço da janela
									  // .search :localiza o query '?' e copia tudo a partir dele
	var nivelJogo = url.replace("?", "") // .replace é uma função que substitui o primeiro parametro passado pelo segundo
	var tempoJogo = 0;

	//nivel facil = 120s
	if (nivelJogo == 1) {
		tempoJogo = 120 + 1;
	}

	//nivel médio = 60s
	if (nivelJogo == 2) {
		tempoJogo = 60 + 1;
	}

	//nivel dificil = 30
	if (nivelJogo == 3) {
		tempoJogo = 30 + 1;
	}

	//inserindo "segundos" no span
	document.getElementById('cronometro').innerHTML = tempoJogo;

	//criando balões
	var qtdBaloes = 60;

	criaBaloes(qtdBaloes); //chama função criada a seguir

	//imprimindo a quantidade de balões inteiros

	document.getElementById('baloes_inteiros').innerHTML = qtdBaloes;
	document.getElementById('baloes_estourados').innerHTML = 0;

	contagem_tempo(tempoJogo); //chama a segunda função criada a seguir
}


function contagem_tempo(segundos){

	segundos = segundos - 1;
	if (segundos == -1) {
		clearTimeout(timerId); // para a execução da fução de contagem regressiva
		game_over();
		return false;
	}
	document.getElementById('cronometro').innerHTML = segundos;
	timerId = setTimeout("contagem_tempo("+segundos+")", 1000);

}

function game_over(){
	remove_eventos_baloes();
	alert('Fim de jogo.');
	parar_jogo();
}

function criaBaloes(qtdBaloes){

	for (var i = 1; i <= qtdBaloes; i++) {

		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';
		balao.id = "b" + i;
		balao.onclick = function(){
			estourar(this);
		}

		document.getElementById('cenario').appendChild(balao);
		
	}

}

function remove_eventos_baloes() {
    var i = 1; //contado para recuperar balões por id
        
    //percorre o lementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
    while(document.getElementById('b'+i)) {
        //retira o evento onclick do elemnto
        document.getElementById('b'+i).onclick = '';
        i++; //faz a iteração da variávei i
    }
}

function estourar(e){

	var id_balao = e.id;

	document.getElementById(id_balao).setAttribute("onclick", "");
	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';

	pontuacao(-1)
}

function pontuacao(acao){
	var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
	var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

	baloes_inteiros = parseInt(baloes_inteiros);
	baloes_estourados = parseInt(baloes_estourados);

	baloes_inteiros += acao;
	baloes_estourados -= acao;

	document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
	document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

	situacao_jogo(baloes_inteiros);
}

function situacao_jogo(baloes_inteiros){


	if (baloes_inteiros == 0) {

		alert('Win!')
		parar_jogo();

	}



}

function parar_jogo(){
	clearTimeout(timerId);
}