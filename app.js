//Todo o java script do jogo deve ser colocado aqui
$(document).ready(function(){
	function TicTacToe(){
		this.dificuldade = '';
		this.jogo_facil = function(){
			this.limpa_jogo();
			this.dificuldade = 'facil';
		}
		this.jogo_normal = function(){
			this.limpa_jogo();
			this.dificuldade = 'normal';
		}
		this.jogo_dificil = function(){
			this.limpa_jogo();
			this.dificuldade = 'dificil';
		}
		this.limpa_jogo = function(){
			$('td').html('&nbsp;');
		}
		
		this.jogar = function(celula){
			if (this.dificuldade !== ''){
				//O Humano joga
				$('#'+celula).html('X');
				var resultado = this.verifica_ganhador();
				console.log(resultado);
				//O pc só joga se não houver ganhador			
				switch (resultado){
					case -1: {
						//Pc joga
						this.pc_jogar(this.dificuldade);
						//Verifica se o pc ganhou
						this.verifica_ganhador();
						break;
					}
					case 0: {
						alert('Você perdeu');
						this.limpa_jogo();
						break;
					}
					case 1: {
						alert('Você ganhou');
						this.limpa_jogo();
						break;	
					}
				}				
			}
			else{
				alert('Selecione uma dificuldade antes de começar a jogar');
			}
		}
		this.pc_jogar = function(dificuldade){	
			if(dificuldade === 'facil'){
				this.pc_facil();
			}else if(dificuldade === 'normal'){
				this.pc_normal();
			}else if(dificuldade === 'dificil'){
				this.pc_dificil();
			}
		}
		this.pc_facil = function(){	
			for (var i=0; i<9; i++){
				var celula = this.sorteado = Math.floor((Math.random() * 9) + 1);
				if (this.testa_celula(celula)){
					$('#'+celula).html('O');
					break;
				}
			}	
		}
		this.pc_normal = function(){	
			for (var i=0; i<9; i++){
				var celula = this.sorteado = Math.floor((Math.random() * 9) + 1);
				if (this.testa_celula(celula)){
					$('#'+celula).html('O');
					break;
				}
			}	
		}
		this.pc_dificil = function(){	
			for (var i=0; i<9; i++){
				var celula = this.sorteado = Math.floor((Math.random() * 9) + 1);
				if (this.testa_celula(celula)){
					$('#'+celula).html('O');
					break;
				}
			}	
		}
		this.testa_celula = function(celula){
			if (($('#'+celula).html() == 'X') || ($('#'+celula).html() == 'O'))
				return false;
			else
				return true;
		}
		this.finaliza_jogo = function(ganhador){
			this.dificuldade = '';
			if ($('#'+ganhador).html() === 'X')
				return 1;
			else
				return 0;
		}
		this.verifica_ganhador = function(){	
			//Horizontais
			if (($('#1').html() !== '&nbsp;') && ($('#1').html() === $('#2').html()) && ($('#2').html() === $('#3').html())){
				return this.finaliza_jogo('1');
			}else if (($('#4').html() !== '&nbsp;') && ($('#4').html() === $('#5').html()) && ($('#5').html() === $('#6').html())){
				return this.finaliza_jogo('4');
			}else if (($('#7').html() !== '&nbsp;') && ($('#7').html() === $('#8').html()) && ($('#8').html() === $('#9').html())){
				return this.finaliza_jogo('7');
			//Verticais
			} else if (($('#1').html() !== '&nbsp;') && ($('#1').html() === $('#4').html()) && ($('#4').html() === $('#7').html())){
				return this.finaliza_jogo('1');
			}else if (($('#2').html() !== '&nbsp;') && ($('#2').html() === $('#5').html()) && ($('#5').html() === $('#8').html())){
				return this.finaliza_jogo('2');
			}else if (($('#3').html() !== '&nbsp;') && ($('#3').html() === $('#6').html()) && ($('#6').html() === $('#9').html())){
				return this.finaliza_jogo('3');
			//Diagonais
			}else if (($('#1').html() !== '&nbsp;') && ($('#1').html() === $('#5').html()) && ($('#5').html() === $('#9').html())){
				return this.finaliza_jogo('1');
			}else if (($('#3').html() !== '&nbsp;') && ($('#3').html() === $('#5').html()) && ($('#5').html() === $('#7').html())){
				return this.finaliza_jogo('3');
			} 
			
			//Não há ganhador ainda
			return -1;
		}
	}
	
	var t = new TicTacToe();
	$('#facil').click(function(){
		t.jogo_facil();
	});
	$('#normal').click(function(){
		t.jogo_normal();
	});
	$('#dificil').click(function(){
		t.jogo_dificil();
	});
	$('td').click(function(){
		var celula = $(this).attr('id');
		t.jogar(celula);
	});
})