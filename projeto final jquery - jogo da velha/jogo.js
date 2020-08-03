var rodada = 1;
var matriz = Array(3);

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
			alert(id_campo_clicado);
		});

		function jogada(id){

			var icone = '';
			var ponto = 0;

		}

	});