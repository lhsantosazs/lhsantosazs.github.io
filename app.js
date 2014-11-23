//Todo o java script do jogo deve ser colocado aqui
$(document).ready(function(){
	$.get( "http://rarolabs.com.br:88/alunos.json", function(data) {
		console.log(data);
		// data.forEach(function(value, index) {
		// 	var curriculo = '<a href="'+ value.link_github +'"> <h4>' + value.nome + '</h4> <p>' + value.mini_curriculo + '</p></a>'
		// 	$('#curriculos_relacionados').append(curriculo);
		// });
	});
})