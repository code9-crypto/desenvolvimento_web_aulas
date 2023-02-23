var nome = prompt("Digite seu nome")
var altura = parseFloat(prompt("Digite sua altura em centímetros"))
var peso = parseFloat(prompt("Digite seu peso"))
altura /= 100
var M = peso / (altura * altura)
var classificacao = ''

if( M < 16 ){
	classificacao = "Baixo peso, muito grave"
}else if( M >= 16 && M < 16.99 ){
	classificacao = "Baixo peso, grave"
}else if( M >= 17 && M < 18.49 ){
	classificacao = "Baixo peso"
}else if( M >= 18,50 && M < 24.99 ){
	classificacao = "Peso normal"
}else if( M >= 25 && M < 29.99 ){
	classificacao = "Sobrepeso"
}else if( M >= 30 && M < 34.99 ){
	classificacao = "Obesidade grau I"
}else if( M >= 35 && M < 39.99 ){
	classificacao = "Obesidade grau II"
}else{
	classificacao = "Obesidade grau III"
}

document.write("<strong style='text-transform:uppercase'>"+ nome + "</strong> possui índice de massa corporal igual a <strong>" + M + "</strong>, sendo classificado como: <strong style='text-transform:uppercase'>" + classificacao)



