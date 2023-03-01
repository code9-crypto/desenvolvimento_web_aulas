/* DOM PARTE 4 - MANIPULANDO ESTILOS DE ELEMENTOS */

function modificaEstilo(corDeFundo, l, a){

	//Obs: caso o atribulo do style tenha um termo com hífen
	//para acessa-lo, devemos remover o hífen e deixar o atributo
	//em camel case. Ex.: ....style.backgroundImage = ....
	document.getElementById('quadrado').style.backgroundColor = corDeFundo
	document.getElementById('quadrado').style.width = l
	document.getElementById('quadrado').style.height = a
}