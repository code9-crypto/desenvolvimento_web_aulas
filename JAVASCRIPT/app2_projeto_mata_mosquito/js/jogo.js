var altura
var largura
var vidas = 1

//esta função irá ajustar automaticamente a largura e altura do tela
//baseado no ajuste do usuário, e esse evento irá acontecer assim
//que o usuário ajustar a tela
function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
}

var criaMosquitoTempo = 1500
//o método search recupera o valor após a interrogação, inclusive o sinal de interrogação
var nivel = window.location.search
nivel = nivel.replace('?','')
if ( nivel === 'normal' ) {
	criaMosquitoTempo = 1500
} else if ( nivel === 'dificil' ){
	criaMosquitoTempo = 1000
} else if ( nivel === 'chucknorris' ){
	criaMosquitoTempo = 750
}


function posicaoRandomica(){
	//remover a mosca anterior, caso exista
	if( document.getElementById('mosca') ){
		document.getElementById('mosca').remove()

		//console.log('elemento selecionado foi v' + vidas)
		if( vidas > 3 ){

			window.location.href = "fim_de_jogo.html"

		}else{

			document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
			vidas++	

		}
		
	}

	//gerando posições aleatórios, baseado na tela do usuário
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	

	//CRIANDO ELEMENTO HTML
	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio() + " " + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosca)
	
}

//Alternando tamanho da figura
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe){
		case 0:
			return 'mosca1'

		case 1:
			return 'mosca2'

		case 2:
			return 'mosca3'
	}
	
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe){
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}

function iniciarJogo(){

	var nivel = document.getElementById('nivel').value

	if( nivel === '' ){
		alert('Selecione um nível para iniciar o jogo')
		return false
	}

	window.location.href = "app.html?" + nivel

}

ajustaTamanhoPalcoJogo()