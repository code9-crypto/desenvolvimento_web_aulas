/* FUNÇÕES NATIVAS PARA MATEMÁTICA */

var x = 10.480

//Math.ceil() -> faz o arredondamento para cima
//x = Math.ceil(x)

//Math.floor() -> faz o arredondamento para baixo(considerando apenas o valor inteiro)
//x = Math.floor(x)

//Math.round() -> faz o arredondamento, baseado no número decimal
//Caso o número na casa decimal seja <= 4, então será arredondado para baixo
//Caso o número na casa decimal seja >= 5, então será arredondado para cima
//x = Math.round(x)

//Math.random() -> gera um número aleatório entre 0 e 10
x = Math.random()
x = Math.floor(x)

document.write(x)