/* PERCORRENDO E LISTANDO ITENS DE ARRAYS */
//var lista_frutas = ['Banana','Maçã','Morango','Uva']

//var lista_nomes = ['william caetano de souza','ester juliane caetano de souza'].sort()

/*var y = 0

while(y < lista_frutas.length){

	document.write(lista_frutas[y]+"<br>")

	y++
}*/

/*document.write("<select id='frutas'>")
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
}*/

var listaDados = []
listaDados['nomes'] = ['Fabio','Rafael','Felipe']
listaDados['enderecos'] = ['Cubatão','Santos','Peruibe']
listaDados['idades'] = ['32','45','59']
listaDados['sexo'] = ['Masculino','Masculino','Masculino']


var y = 0 

function carregado(){
	document.getElementById('nome').value = listaDados['nomes'][y]
	document.getElementById('endereco').value = listaDados['enderecos'][y]
	document.getElementById('idade').value = listaDados['idades'][y]
	document.getElementById('sexo').value = listaDados['sexo'][y]
}


function avancar(){
	y++
	document.getElementById('nome').value = listaDados['nomes'][y]
	document.getElementById('endereco').value = listaDados['enderecos'][y]
	document.getElementById('idade').value = listaDados['idades'][y]
	document.getElementById('sexo').value = listaDados['sexo'][y]
	if( listaDados['nomes'][y+1] === undefined ){
		document.getElementById('btnAvancar').disabled = true
	}else{
		document.getElementById('btnVoltar').disabled = false
	}
}


function voltar(){
	y--
	document.getElementById('nome').value = listaDados['nomes'][y]
	document.getElementById('endereco').value = listaDados['enderecos'][y]
	document.getElementById('idade').value = listaDados['idades'][y]
	document.getElementById('sexo').value = listaDados['sexo'][y]
	if( listaDados['nomes'][y-1] === undefined ){
		document.getElementById('btnVoltar').disabled = true
	}else{
		document.getElementById('btnAvancar').disabled = false
	}	
}
	

