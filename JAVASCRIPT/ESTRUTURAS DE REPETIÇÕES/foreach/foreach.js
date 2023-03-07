/* ESTRUTURA DE REPETIÇÃO - FOREACH */
var listaFunc = ['Felipe','Rafael','Felinto','Alexandre','Vitor']

//podemos fazer a técnica de wrapper na função de callback do foreach
//Desta forma fica melhor para reaproveitar o código ou dar manutenção
var percorre = function(valor, indice, array){
	document.write('Índice é ' + indice + ' valor é ' + valor + '<br>')
}


listaFunc.forEach(percorre)

//OBS.: o foreach só trabalha com índices numéricos, caso haja outros
//tipos de índices, serão desconsiderados