//Recebendo os valores do usuário
var num1 = parseFloat(prompt("Digite um número qualquer: "))
var operacao = prompt("Por favor, digite qual operação quer realizar(soma/subtracao)?")
var num2 = parseFloat(prompt("Digite outro número qualquer: "))

//Enviando os valores para a função devida
function fazerCalculo(num1, num2, operacao){
	switch(operacao){
		case "soma":
			return num1 + num2
			break
		case "subtracao":
			var resposta

			if(num1 > num2){
				resposta = num1 - num2
			}else{
				resposta = num2 - num1
			}
			
			return resposta
			break
		default:
			return "Esta operação não existe"
	}
		
}

document.write("O valor informado é: " + fazerCalculo(num1, num2, operacao))