<!DOCTYPE HTML>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="estilo.css">
		<title>Mensagens divertidas</title>
	</head>

	<body>
		
		<?php
			/*
			$jogo_da_velha['a'][1] = 'a-1';
			$jogo_da_velha['a'][2] = 'a-2';
			$jogo_da_velha['a'][3] = 'a-3';

			$jogo_da_velha['b'][1] = 'b-1';
			$jogo_da_velha['b'][2] = 'b-2';
			$jogo_da_velha['b'][3] = 'b-3';

			$jogo_da_velha['c'][1] = 'c-1';
			$jogo_da_velha['c'][2] = 'c-2';
			$jogo_da_velha['c'][3] = 'c-3';
			*/
			
			$jogo_da_velha = array('a' => array( 1 => 'a-1',
												 2 => 'a-2',
												 3 => 'a-3'),

								   'b' => array( 1 => 'b-1',
								   				 2 => 'b-2',
								   				 3 => 'b-3'),

								   'c' => array( 1 => 'c-1',
								   				 2 => 'c-2',
								   				 3 => 'c-3')
			);
			/*					   'a' => 2,
								   'a' => 3,
								   'b' => 1,
								   'b' => 2,
								   'b' => 3,
								   'c' => 1,
								   'c' => 2,
								   'c' => 3,
								    );
			*/
			var_dump($jogo_da_velha);
			echo '<br>';
			echo $jogo_da_velha['a'][1];
			echo '<br>';
			echo $jogo_da_velha['b'][2];
			echo '<br>';
			echo $jogo_da_velha['c'][3];
			echo '<br>';
		?>
	
	</body>
</html>