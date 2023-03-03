/* FUNÇÕES CALLBACK */

// funções de callback são anônimas, por isso é melhor usar variáveis
// para melhor compreender o código posteriormente
// técnica de WRAPPER

function exibirArtigo(id, callbackSucesso, callbackErro){
	if( false ){
		callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas ')
	}else{
		callbackErro('Erro ao recuperar os dados')
	}
}

var callbackSucesso = function (titulo, descricao) {
	document.write("<h1>" + titulo + "</h1>")
	document.write("<hr>")
	document.write("<p>" + descricao + "</p>")
}

var callbackErro = function(erro){
	document.write("<p><strong>" + erro + "</strong></p>")
}

exibirArtigo(1, callbackSucesso, callbackErro)