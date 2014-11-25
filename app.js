//Todo o java script do jogo deve ser colocado aqui
$(document).ready(function(){
	//Pega os dados da api e insere no html
	$.get( "http://rarolabs.com.br:88/alunos.json", function(data) {
		data.forEach(function(value, index) {
			//Testa se o currículo não é o meu
			if (value.link_html !== 'http://lhsantosazs.github.io/'){
				//Monta o html do curriculo
				var curriculo = '<a class="list-group-item" href="'+ value.link_html + '">'+ 
								'<h3 class="list-group-item-heading">' + value.nome + '</h3>' +
								'<p class="list-group-item-text">' + value.mini_curriculo + '</p>'+
								'</a>';

				//Adiciona o curriculo à lista				
				$('#curriculos_relacionados .panel-body .list-group').append(curriculo);
			}
		});
	});

	//Ao clica no titulo da section o corpo é escondido/exibido
	$('.panel-heading').click(function(){
		$(this).next().toggle();
	});
})