/* ESCOPO DE VARIÁVEIS */

//3 escopos: global, função e o bloco

// variaveis declaradas no escopo global, podem ser acessadas
// pelo escopo de bloc e por funções
var global = 'Variável global'
document.write("VARIAVEL GLOBAL --> " + global + "<br>")

if(true){
	// variaveis declaradas no if também pode ser acessadas no escopo global
	var bloco = 'Variável de bloco'
	document.write("VARIAVEL DO BLOCO (IF) E GLOBAL --> " + bloco + " " + global + "<br>")
}

document.write(bloco+"<br>")

function x(){
	// variaveis declaradas dentro da função, NÃO SÃO ACESSADAS PELO ESCOPO GLOBAL
	var funcao = 'Variável de função'
	document.write('VARIAVEL DA FUNÇÃO, IF E GLOBAL --> ' + funcao + " " + bloco + " " + global)
}

// AS ÚNICAS VARIAVEIS QUE ESCOPO GLOBAL NÃO ACESSA SÃO AS DAS FUNÇÕES

x()



