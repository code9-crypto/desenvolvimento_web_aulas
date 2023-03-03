//Recuperando a data do computador e transformando no browser de forma mais compreensível
var data = new Date()

var diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira",
"Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]

var mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio",
"Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

var dataFormatada = diasSemana[data.getDay() - 1] + ", " + data.getDate() + " de " + mesAno[data.getMonth()] + " de " + data.getFullYear()

document.getElementById('data').innerHTML = dataFormatada

//---------------------------------------------------------------------------------------------------------

//Essa função muda imagem do cadeado liberando o campo para pesquisa do nome
function liberarCampo(){
	document.getElementById('cadeadoVermelho').hidden = true
	document.getElementById('cadeadoVerde').hidden = false
	document.getElementById('nomePesquisado').hidden = false
	document.getElementById('nomePesquisado').placeholder = 'Qual nome quer pesquisar?'
	document.getElementById('pesquisar').hidden = false
	document.getElementById('pesquisar').style.width ='45px'
	document.getElementById('pesquisar').style.height = '30px'
}

function esconderCampo(){
	document.getElementById('cadeadoVerde').hidden = true
	document.getElementById('cadeadoVermelho').hidden = false
	document.getElementById('nomePesquisado').hidden = true
	document.getElementById('nomePesquisado').value = ''
	document.getElementById('pesquisar').hidden = true
}

