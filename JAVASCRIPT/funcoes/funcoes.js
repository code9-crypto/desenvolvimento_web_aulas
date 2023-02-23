/* FUNÇÕES */

function calcularAreaTerreno ( largura, comprimento ){
	
	var area = largura * comprimento

	return area
}

var largura = parseFloat(prompt("Digite a largura do terreno em metros"))
var comprimento = parseFloat(prompt("Digite o comprimento do terreno em metros"))

var area = calcularAreaTerreno( largura, comprimento )


document.write("O terreno possui area de " + area + " metros quadrados ")