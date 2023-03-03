/* FUNÇÕES PARA MANIPULAR STRINGS */

var nome = '            -        William Caetano de Souza           -              '

//propriedade length - retorna a quantidade de caracteres
//document.write('William caetano de souza'.length)

//charAt() - retorna a letra de acordo com o índice
//document.write('William caetano de souza'.charAt(8))

//indexOf() - retorna o índice da primeira ocorrência baseado na letra passada por parâmetro
//OBS.: esta função faz diferenciação entre caracteres minúsculas e maiúsculas
//document.write(nome.indexOf('a'))

//replace() - substitui um valor por outro valor passado por parâmetro
//document.write(nome.replace('Caetano', 'Rocha'))

//substr() - consegue recortar a string baseado numa posição inicial e final
//document.write(nome.substr(0, 7))

//toLowerCase() - converte para minúsculo
//document.write(nome.toLowerCase())

//toUpperCase() - converte para maiúsculos
//document.write(nome.toUpperCase())

//trim() - remove os espaços nas extremidades da string
//document.write(nome)

var nomeCompleto = prompt("Digite seu nome completo")
var primeiraOcorrencia = nomeCompleto.indexOf(" ")
var primeiroNome = nomeCompleto.substr(0, primeiraOcorrencia)
document.write(primeiroNome)
