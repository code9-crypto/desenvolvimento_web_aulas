/* DATE */
//var data = new Date()

//A partir do objeto criado, conseguimos pegar o dia do mês com este método
//document.write(data.getDate())

//Este método retorna o número do mês
//document.write(data.getMonth() + 1)

//Este método retorna o ano completo(em 4 dígitos)
//document.write(data.getFullYear())

//document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())

//Convertendo para dias da semana, mês e ano
/*var diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira",
"Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]

var mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio",
"Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

document.write(diasSemana[data.getDay() - 1] + ", " + data.getDate() + " de " + mesAno[data.getMonth()] + " de " + data.getFullYear())*/
/*
//adicionar / remover dias
document.write("TRABALHANDO COM DIAS <br><br>")
document.write(data.toString())
data.setDate(data.getDate() + 365)
document.write("<hr>")
document.write(data.toString())

//adicionar / remover meses
document.write("<br><br><br><br>TRABALHANDO COM MESES <br><br>")
document.write(data.toString())
data.setMonth(data.getMonth() - 1)
document.write("<hr>")
document.write(data.toString())

//adicionar / remover anos
document.write("<br><br><br><br>TRABALHANDO COM ANOS <br><br>")
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1)
document.write("<hr>")
document.write(data.toString())
*/

//Calculando os dias entre duas datas
//15/01/2017
var data1 = new Date(2017, 0, 15)

//23/02/2017
var data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write("<hr>")
document.write(data2.toString())

document.write("<br><br><hr>")
//converter datas para algo que possamos calcular
document.write(data1.getTime())
document.write("<hr>")
document.write(data2.getTime())

//encontrar a qtd de milissegundos entre data1 e data2
document.write("<br><hr>")
var milissegundo_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(milissegundo_entre_datas)
document.write("<br>")

//encontrar quantos milissegundos tem em 1 dia
var milissegundos_por_dia = (1*24*60*60*1000)
document.write('1 dia tem: ' + milissegundos_por_dia + " milissegundos")
document.write("<br><br><hr>")

document.write('A diferença entre a data 1 e data 2 é: ' + Math.ceil(milissegundo_entre_datas / milissegundos_por_dia) + " dias")
