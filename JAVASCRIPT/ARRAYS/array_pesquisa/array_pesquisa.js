/* ARRAY - PESQUISANDO ELEMENTOS */

var procuraFruta = prompt('Qual fruta você quer?')

var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva']

//OBS.: caso o elemento procurado não exista, o método indexOF
//retornará o valor -1

//o paramêtro recebe uma string para fazer a pesquisa
var auxiliar = lista_frutas.indexOf(procuraFruta)

if( auxiliar === -1){
	console.log('Elemento não existe')
}else{
	console.log('Elemento existe e está na posição ' + auxiliar)
}

