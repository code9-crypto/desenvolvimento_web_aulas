/* BOM PARTE 4 - TIMING */
/*var teste = function(){
	document.write('<h1 style="font-weight:bold;">BOM PARTE 4 - TIMING</h1>')
	document.write('teste com função setTimeout')
}

//função setTimeout - executa uma ação após um tempo determinado
//esse tempo é entendido como milissegundos
//OBS.: esta função executa APENAS UMA VEZ
setTimeout(teste, 5000)*/

//---------------------------------------------------------------------------

//O método setInterval executa a ação infinitamente
//depois de um certo período de tempo
//Ex.: de 10 em 10 segundos executar ação A....
document.write('<h1 style="font-weight:bold;">BOM PARTE 4 - TIMING</h1>')
document.write('teste com a função setInterval')
var i = 10
var y = ''
var intervalo = function(){
	document.write(i)
	i--
	if( i === 0 ){
		clearInterval(x)
		document.write('Função desbilitada')
	}
	document.write('')
}

var x = setInterval(intervalo, 1000)