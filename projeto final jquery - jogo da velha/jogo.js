var rodada = 1;
var matriz = Array(3);

matriz['a'] = Array(3);
matriz['b'] = Array(3);
matriz['c'] = Array(3);


matriz['a'][1] = 0;
matriz['a'][2] = 0;
matriz['a'][3] = 0;

matriz['b'][1] = 0;
matriz['b'][2] = 0;
matriz['b'][3] = 0;

matriz['c'][1] = 0;
matriz['c'][2] = 0;
matriz['c'][3] = 0;

$(document).ready(function(){

		$('#btn_iniciar').click(function(){

			//tratando erros de nomes vazios ou nomes iguais

			if($('#player1').val() == '' || $('#player2').val() == ''){
				alert('Entre com os nomes de ambos jogadores!');
				return false;
			}

			if($('#player1').val() === $('#player2').val()){
				alert('Nomes iguas, por favor, digite nomes diferentes.')
				return false;
			}

			//Adicionando os nomes capturados aos icones de jogadores

			$('#nome_player1').html($('#player1').val());
			$('#nome_player2').html($('#player2').val());

			//controlar ordem de visualização das divs principais
			$('#pagina_inicial').hide();
			$('#palco_jogo').show();

		});

		$('.jogada').click(function(){
			var id_campo_clicado = this.id;
			jogada(id_campo_clicado);
			$('#' + id_campo_clicado).off();
		});

		function jogada(id){

			var icone = '';
			var ponto = 0;

			if((rodada %2) == 1){
				icone = 'url("imagens/marcacao_1.png")';
				ponto = -1;
			}else{
				icone = 'url("imagens/marcacao_2.png")';
				ponto = 1;
			}

			rodada++;

			$('#'+ id).css('background-image',icone);

			var linha_coluna = id.split('-');

			matriz[linha_coluna[0]][linha_coluna[1]] = ponto;
			verifica_campo();



		}



		function verifica_campo(){

			//verificação horizontal
			
			var pontos = 0;

			for (var i = 1; i <= 3; i++){
				pontos += matriz['a'][i]
			}
			
			verifica_campeao(pontos);
			pontos = 0;

			for (var i = 1; i <= 3; i++){
				pontos += matriz['b'][i]
			}
			verifica_campeao(pontos);
			pontos = 0;

			for (var i = 1; i <= 3; i++){
				pontos += matriz['c'][i]
			}
			verifica_campeao(pontos);
			

			//verificação vertical

			for(var j = 1; j <= 3; j++){
				pontos = 0;
				pontos += matriz['a'][j];
				pontos += matriz['b'][j];
				pontos += matriz['c'][j];

				verifica_campeao(pontos);

			}
		

			//verificação diagonal

			pontos = 0;
			pontos = matriz['a'][1] + matriz['b'][2] + matriz['c'][3];
			verifica_campeao(pontos);

			pontos = 0;
			pontos = matriz['a'][3] + matriz['b'][2] + matriz['c'][1];
			verifica_campeao(pontos);
			
		}



		//verifica quem venceu

		function verifica_campeao(pontos){
			if (pontos == -3){
				var jogador1 = $('#player1').val();
				alert(jogador1 + ' venceu!');
				$('.jogada').off();

			}else if(pontos == 3){
				var jogador2 = $('#player2').val();
				alert(jogador2 + ' venceu!');
				$('.jogada').off();
				
					}	
			

		}
			
	});