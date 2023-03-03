/* ARRAY - LISTAS */

//var lista_frutas = Array()

/*
var lista_frutas = []
lista_frutas[0] = 'Pêssego'
lista_frutas[1] = 'Banana'
lista_frutas[2] = 'Maçã'
lista_frutas[3] = 'Morango'
lista_frutas[4] = 'Uva'
*/

//Quando se omite os índices, igual a construção abaixo
//Os valores dos índices inicia-se em 0
//var lista_frutas = Array('Banana', 'Maçã', 'Morango', 'Uva')

/*var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva']

console.log(lista_frutas.length <= 4)
console.log(lista_frutas)

for ( var i = 0; i < lista_frutas.length; i++ ){
	console.log(lista_frutas[i])
}*/

function verificarDados(){
	var dados = [
		document.getElementById('nome').value,
		document.getElementById('sobrenome').value,
		document.getElementById('idade').value
	]

	for( var i = 0; i < dados.length; i++ ){
		if( dados[i] == ''){
			alert('O campo ' + i + ' está vazio')
		}
	}
}


