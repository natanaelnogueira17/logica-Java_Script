/* crie um algoritimo para calcular o fatorial de um numero n!
obs: o fatorial de um numero é calculado pela multiplicacao
 desse numero por todos os seus antecessores ate chegar ao numero 1

 exemplos 
 2! = 2*1
 3! = 3*2*1
 4! = 4*3*2*1
 */


 function fatorial (n){
   
   let resposta = 1
   while(n >= 2){
     resposta = resposta * n
     n--
   }
    return fatorial
 }
 const n = 5
 const R = fatorial(n)
 console.log(R)

// n = 5 
//resposta = 5*1
//n =4
// resposta 5*4
// n = 3
// resposta 5*4*3
// n =2 
// resposta 5*4*3*2