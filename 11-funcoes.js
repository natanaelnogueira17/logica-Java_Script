function soma(A, B){
  return A + B
}
function subtracao(A, B){
return A-B
}
function multiplicacao(A, B){
  return A * B
}
function divisao(A, B){
    return A / B
}
function calculadora(tipo){
const A = 10
const B = 10
  if (tipo === "soma") return soma(A, B)
  else if (tipo === "subtracao") return subtracao (A, B)
  else if(tipo === "multiplicacao") return multiplicacao (A, B)
  else if(tipo === "divisao") return divisao (A, B)
  
}
//const resultado = calculadora("multiplicacao") // no resultado chamou a funcao calculadora com parametro tipo mult
//console.log(resultado)

/*faca uma funcao que verifica se o numero e par ou nao.*/

function parOuImpa (num){

  const condicao = num % 2 === 0?true:false
  return condicao
}// issso tudo aqui é a funcao (parOuImpar)

const resultado = /*funcao*/parOuImpa(92)
console.log(resultado)


// mostrar os numeros pares de 0 a 100

for (let i = 0; i<=100;i++ ){
if(/*funcao*/parOuImpa(i)) console.log(i)
}


