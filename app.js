//Todo o java script do jogo deve ser colocado aqui
$(document).ready(function(){
	$.get( "http://rarolabs.com.br:88/alunos.json", function(data) {
		console.log(data);
		data.forEach(function(value, index) {
			$('#curriculos_relacionado').append(value);
		});
	});
})