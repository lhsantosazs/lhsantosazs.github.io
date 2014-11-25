//Todo o java script do jogo deve ser colocado aqui
$(document).ready(function(){
	//Pega os dados da api e insere no html
	$.get( "http://rarolabs.com.br:88/alunos.json", function(data) {
		console.log(data);
		data.forEach(function(value, index) {
			var curriculo = '<a class="list-group-item" href="'+ value.link_html + '">'+ 
							'<h3 class="list-group-item-heading">' + value.nome + '</h3>' +
							'<p class="list-group-item-text">' + value.mini_curriculo + '</p>'+
							'</a>'

			$('#curriculos_relacionados .panel-body .list-group').append(curriculo);
		});
	});

	//Ao clica no titulo da section o corpo é escondido/exibido
	$('.panel-heading').click(function(){
		$(this).next().toggle();
	});
})