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
	document.getElementById('pesquisar').style.boxShadow = 'none'
	document.getElementById('pesquisar').style.border = 'none'
}

function esconderCampo(){
	document.getElementById('cadeadoVerde').hidden = true
	document.getElementById('cadeadoVermelho').hidden = false
	document.getElementById('nomePesquisado').hidden = true
	document.getElementById('nomePesquisado').value = ''
	document.getElementById('pesquisar').hidden = true
}

//---------------------------------------------------------------------------------------------------------

//ESTA FUNÇÃO IRÁ PESQUISA O NOME NO ARRAY RECEBIDO DO BANCO E IRÁ PREENCHER NA COMBOBOX

function pesquisarNomeDigitado(){

	//pegando o nome da pessoa no campo pesquisaNome
	var nomeEscolhido = document.getElementById('nomePesquisado').value

	var posicaoNome = lista_nomes.indexOf(nomeEscolhido)
	console.log(posicaoNome)

	if( posicaoNome === -1 ){
		alert('Por favor digite o nome completo para melhor precisão na pesquisa')
	} else {
		document.getElementById('nomes').value = lista_nomes[posicaoNome]
		var nomeSelecionado = lista_nomes[posicaoNome]
		console.log(nomeSelecionado)	
	}

	document.getElementById('nomePesquisado').value = ''
}

//----------------------------------------------------------------------------------------------------------

function limparCampos(){
	document.getElementById('data').value = ''
	document.getElementById('hora').value = ''
	document.getElementById('alojamento').value = ''
	document.getElementById('clinica').value = ''
	document.getElementById('has').value = ''
	document.getElementById('dm').value = ''
	document.getElementById('dac').value = ''
	document.getElementById('cirurgia').value = ''
	document.getElementById('alergia').value = ''
	document.getElementById('medicamentos').value = ''
	document.getElementById('pa').value = ''
	document.getElementById('pulso').value = ''
	document.getElementById('temp').value = ''
	document.getElementById('glicemia').value = ''
	document.getElementById('peso').value = ''
	document.getElementById('altura').value = ''
	document.getElementById('saturacao').value = ''
	document.getElementById('historico').value = ''
	document.getElementById('prescricao').value = ''
	document.getElementById('anotacao').value = ''
	document.getElementById('retorno').value = ''
	document.getElementById('hd').value = ''
	document.getElementById('cid').value = ''
}




