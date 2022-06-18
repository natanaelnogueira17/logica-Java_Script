/* a prefeitura possui uma lista com idade de cada morador e 
quer saber a quantidade de moradores que sao eleitores obrigatorios,
 facultativos ou nao eleitores de acordo com as informacoes abaixo:
 obrigatorio: entre 18-69anos
 facultativo: entre 16 e 17 anos ou acima de 70 anos
 nao eleitor: abaixo de 16 anos */

const lista = [ 18, 19, 70, 10, 85 ,69, 52, 54, 06, 99, 29, 32,45,20]
let obrigatorio = 0
let facultativo = 0
let naoEleitor = 0

for(let idade of lista){
  if(idade >= 18 && idade<=69) obrigatorio++
  else if(idade < 16) naoEleitor++
  else facultativo++

}

console.log("obrigatorio", obrigatorio, "nao eleitor:" ,naoEleitor, "facultativo: ", facultativo )

