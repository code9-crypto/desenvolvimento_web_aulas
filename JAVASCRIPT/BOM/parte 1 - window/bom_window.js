/* BOM PARTE 1 - WINDOW */

var janela

function abrirPopup(){
	//Método open() pode receber 4 paramêtros opcionais
	//window.open(URL, nome, specs, replace)
	janela = window.open('https://egov.santos.sp.gov.br/sau','Nova Janela','width=900px, height=500px')
}

function fecharPopup() {
	//com a referência do window.open() na variavel... é possível
	//recupera-la para usar o método close() para fechar a mesma
	janela.close()
}