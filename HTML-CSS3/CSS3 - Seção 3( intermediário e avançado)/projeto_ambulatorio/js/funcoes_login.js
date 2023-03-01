//VERIFICANDO SE O LOGIN E A SENHA ESTÁ CORRETA PARA DEPOIS IR PARA PRÓXIMA PÁGINA


//esta função só verifica se o login está correto
//caso não esteja, o botão permanecerá desabilitado até que o login correto seja inserido
function verificarLogin(){
	var login = document.getElementById('usuario').value	
	if( login != 'teste' ){
		document.getElementById('enviar').disabled = true
		document.getElementById('enviar').className = 'enviar'
	} else {
		document.getElementById('enviar').disabled = false
		document.getElementById('enviar').className = 'liberaBotao'
	}	
}

//esta função irá verificar os campos login e senha se estão corretos
//caso estejam, será redirecionado para próxima página
//caso não, uma mensagem de erro será mostrada
function verificarCredenciais(){
	var login = document.getElementById('usuario').value
	var senha = document.getElementById('senha').value

	if ( login == 'teste' && senha == 'teste' ){
		window.location = "index.html"
	}else{
		alert('Credenciais incorretas')
	}
}
