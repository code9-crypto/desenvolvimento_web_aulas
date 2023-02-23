var idade = parseInt(prompt("Digite sua idade:"))

if( idade >= 0 && idade < 15 ){
	document.write("Você é uma criança")
} else if ( idade >= 15 && idade < 30 ){
	document.write("Você é um(a) jovem")
} else if( idade >= 30 && idade < 60 ){
	document.write("Você é um Adulto(a)")
} else if( idade >= 60 ){
	document.write("Você é um Idoso(a)")
}