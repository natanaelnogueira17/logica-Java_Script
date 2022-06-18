/*1- joao, um pescador, gostaria de controlar o rendimento diario de seu
 trabalho.
toda vez que ele traz um peso de peixes maior que o estabelecido
, ou seja, 50 kg, deve pagar uma multa de 4,00 para cada kg excedente.
joao precisa que vc faça um algoritimo que escreva que leia o peso dos
 peixes de joao e verificar
se há ou não excedente. se houver, gravar na variavel excesso e multa
 o valor da multa que 
joao ira pagar.*/

const pesoTotal = 40
const pesoEstabeleciado = 50
const multa = 4
const pesoExcedente = (pesoTotal-pesoEstabeleciado)


pesoTotal > pesoEstabeleciado?
 console.log(`O valor da multa a ser pago é de $ ${pesoExcedente*multa}`)
 :console.log(`Seu peso é de ${pesoTotal}KG e ele está dentro do estabelecido ${pesoEstabeleciado}KG `)

// ficou show esse algorítimo!!! 

