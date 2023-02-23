/* Operadores lógicos: &&(e), ||(ou), Não(!) */



//Operador && -> quando todas condições forem verdadeiras,
//Retornará como resultado, VERDADEIRO
//Caso alguma condição seja falsa, retornará FALSA

/*if (2 == 2 && 3 >= 1 && 'a' == 'b'){
	document.write("Verdadeiro( COMPARADOR &&(E) )")
}else{
	document.write("Falso( COMPARADOR &&(E) )")
}


document.write("---------------------------------------------------------------")


//Operador || -> quando pelo menos uma condição for verdadeira,
//O resultado retornará, VERDADEIRO
//Caso todas as condições sejam falsas, retornará FALSO
if (2 == 2 || 3 >= 1 || 'a' == 'b'){
	document.write("Verdadeiro( COMPARADOR ||(OU) )")
}else{
	document.write("Falso( COMPARADOR ||(OU) )")
}


document.write("---------------------------------------------------------------")


//Operador ! -> quando o resultado da condição for verdadeiro,
//O resultado retornará FALSO( POIS ELE INVERTE O VALOR DO RESULTADO )
//Caso a condição retorne falso, (COM ESSE OPERADOR SERÁ VERDADEIRO)
if (!(2 == 2)){
	document.write("Verdadeiro( COMPARADOR !(NEGAÇÃO) )")
}else{
	document.write("Falso( COMPARADOR ! (NEGAÇÃO))")
}*/


var media = 7
var faltas_maximas = 15
var nota = prompt('Digite a nota do aluno')
var faltas = parseInt(prompt("Digite a quantidade de faltas:"))


/*if (nota >= media && faltas <= faltas_maximas) {
	document.write('Aprovado')
}else{
	document.write('Reprovado')
}*/

/* OBS: operador ternário */

var resultado = (nota >= media && faltas <= faltas_maximas) ? "Aprovado" : "Reprovado"
document.write(resultado)