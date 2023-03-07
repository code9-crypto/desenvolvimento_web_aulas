/* ESTRUTURA DE REPETIÇÃO - FORIN */
var listaConvidados = ['Ester','Sara','Mãe','Sogra','lucas','nelsinho']


//A variável x está recebendo o índice a cada itereção dentro do array
//Para que seja exibido o valor será da nome_do_array[variavel]
for(var x in listaConvidados){
	document.write('O índice ' + x + ' está contido o valor ' + listaConvidados[x]+'<br>')
}

//A iteração para assim que não tiver mais valor para recuperar