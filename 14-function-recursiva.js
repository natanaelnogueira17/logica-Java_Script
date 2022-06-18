/* crie um algoritimo para calcular o fatorial de um numero n!
obs: o fatorial de um numero é calculado pela multiplicacao
 desse numero por todos os seus antecessores ate chegar ao numero 1

 exemplos 
 2! = 2*1
 3! = 3*2*1
 4! = 4*3*2*1
 */

 function fatorial (n){
   if(n <= 2) {return n}
    else{return fatorial(n - 1) * n}
 }

 const n = 3
 const resposta = fatorial(n)
 console.log(resposta)