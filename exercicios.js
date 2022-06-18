/* exercicio 1 - verificar se o numero e divisivel por 13, 
ou seja, se dividir o numero por 13 o resto é zero.*/

/*let numero =  13
if(numero % 13==0){
  console.log("o numero é divisivel por 13")
} else {
  console.log("nao é divisivel por 13")
}



/*exercicio 2 - considerando que todos os meses sao 30 dias, 
dado uma quantidade de dias, dizer em qual mes e dia 
do mes esse dia vai cair.
obs: usar math.floor() para arredondar o numero do mes

exemplo:
math.floor(11.20) vai retornar "11"
*/
   const diasmes = 30
   const qtdias = 70
   const dia = qtdias%diasmes
   const mes = Math.floor(qtdias/diasmes)
   console.log(`o dia do mês é ${dia} e o mes é ${ mes}`)



 /*var largura = 25
 var comprimento= 80 
 
function calcularAreaTerrena(largura, comprimento){
  var area = largura*comprimento
  return area 
}

calcularAreaTerrena()*/
// soluçao 1
/*function verificarPalindromo(string){
  if(!string) return;

  string.split("").reverse().join("") === string;
}*/



// comparando o numero se é impar ou par 
/*const numero  = 11

if(numero % 2 === 0){  
  console.log("sim, é par")
} else{
  console.log("é impar")
}

//comparando um numero 
if(numero == 11){
  console.log("é ele ")
} else{
  console.log("é diferente")
}

// trabalhando com lista array

// nesse caso esta passando por cada numero do array e atribuindo eles a const x, por isso resultado = a lista 

const num = [10, 20, -2]

for(const x of num){
  console.log(x)
}

// nesse caso vamos verificar quantos numeros sao maior que 0
qtPositivo = 0
for(const x of num){
  if(x>=0){
    qtPositivo ++
  }
  console.log(qtPositivo)
} 
// ou podemos usar tbm uma arrow function
num.forEach(x => {
if(x>=0){
qtPositivo++
}
  
});
console.log(qtPositivo)*/

// exemplo do carrinho de compra no site usando for of

const carrinho = [10, 50, 60 ,80]
let total = 0
for(let produto of carrinho) {
total = total + produto
}
let desconto = total * 0.9    
console.log(`O total das compras foi $ ${total}   pagamento em dinheiro 10% de desconto total $${desconto}`)

