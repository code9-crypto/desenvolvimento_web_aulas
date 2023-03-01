/* ATIVIDADE */

function modificarFundoAoFoco(){
	document.getElementById('texto').style.backgroundColor = 'yellow'
}

function modificarFundoAoSairFoco(){
	var entrada = document.getElementById('texto').value
	if( entrada.length <= 3){
		document.getElementById('texto').style.backgroundColor = 'red'
	}else{
		document.getElementById('texto').style.backgroundColor = 'green'
	}
}

