//Recuperando a data do computador e transformando no browser de forma mais compreensível
var data = new Date()

var diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira",
"Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]

var mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio",
"Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

var dataFormatada = diasSemana[data.getDay() - 1] + ", " + data.getDate() + " de " + mesAno[data.getMonth()] + " de " + data.getFullYear()

document.getElementById('data').innerHTML = dataFormatada