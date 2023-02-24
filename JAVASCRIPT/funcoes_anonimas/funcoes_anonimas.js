/* FUNÇÕES ANÔNIMAS */

var nome = prompt("Digite seu nome")


var exibirSaudacao = function(nome){
	document.write("Olá " + nome + ", tudo bem?")
}

//Posso passar uma string direta, uma váriavel ou diretamente no parâmetro da função o comando prompt()
exibirSaudacao(nome)