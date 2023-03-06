/* PERCORRENDO E LISTANDO ITENS DE ARRAYS */
//var lista_frutas = ['Banana','Maçã','Morango','Uva']

var lista_nomes = ['william caetano de souza','ester juliane caetano de souza'].sort()

/*var y = 0

while(y < lista_frutas.length){

	document.write(lista_frutas[y]+"<br>")

	y++
}*/

document.write("<select id='frutas'>")
for ( var i = 0; i < lista_nomes.length; i++ ){
	document.write("<option value='" + lista_nomes[i] + "'>" + lista_nomes[i].toUpperCase() + "</option>")
}
document.write("</select>")

document.write('<input type="text" id="fruta"><br>')
document.write('<button type="button" onclick="escolha()">Pesquisar</button>')



function escolha(){
	//pegando o nome da pessoa
	var frutaEscolhida = document.getElementById('fruta').value
	
	var posicaoFruta = lista_nomes.indexOf(frutaEscolhida)
	console.log(posicaoFruta)
	
	document.getElementById('frutas').value = lista_nomes[posicaoFruta]
	var nomeSelecionado = lista_nomes[posicaoFruta]
	console.log(nomeSelecionado)


	document.getElementById('fruta').value = ''
}

