/* ARRAY - ORDENANDO ELEMENTOS */

//var lista_frutas = ['Maçã','Uva','Banana','Morango']
var lista_numeros = [1,34,54,3,6,345,87,90,8,10]

//Método que faz a ordenação alfabética
//console.log(lista_frutas.sort())


//Para ordenação numérica é da seguinte forma
console.log(lista_numeros.sort(ordenarNumeros))


//Será precisa criar uma função que faça um cálculo para que a função
//sort entenda isso
function ordenarNumeros(a, b){
	return a - b
	// < 0 = a ordenado antes de b
	// > 0 = b ordenado antes de a
	// == a ordem é mantida
}