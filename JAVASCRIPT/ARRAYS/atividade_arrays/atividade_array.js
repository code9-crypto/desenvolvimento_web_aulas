/* ATIVIDADE ARRAYS */
var objetos = ['Cadeira','Impressora','Garfo']

function verificarDado(){
	var entradaUsuario = document.getElementById('objeto').value
	var verificaEntrada = objetos.indexOf(entradaUsuario)
	if( entradaUsuario == '' ){

		alert('Informe um valor válido')

	}else{

		if( verificaEntrada !== -1 ){

			alert('Objeto já foi adicionado')

		}else{

			objetos.push(entradaUsuario)
			console.log(objetos)
			document.getElementById('objeto').value = ''
			
		}
	}
}

function ordenarLista() {
	objetos.sort()
	console.log(objetos)
}