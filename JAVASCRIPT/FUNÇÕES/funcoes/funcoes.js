/* FUNÇÕES */

/*
function calcularAreaTerreno ( largura, comprimento ){
	
	var area = largura * comprimento

	return area
}

var largura = parseFloat(prompt("Digite a largura do terreno em metros"))
var comprimento = parseFloat(prompt("Digite o comprimento do terreno em metros"))

var area = calcularAreaTerreno( largura, comprimento )


document.write("O terreno possui area de " + area + " metros quadrados ")
*/

/* Flexibilidade de parâmetros */
/*function soma(a, b){
	b = b === undefined ? 0 : b
	return a + b
}

console.log(soma(7))*/



//trabalhando com paramêtros variáveis
function soma(){
	var resultado = 0
	for(var x in arguments){
		resultado += arguments[x]
	}
	return resultado

}

console.log(soma(7, 5, 3.2, 56, 10))