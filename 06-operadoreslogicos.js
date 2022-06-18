/* Elabore um algoritimo que dada a idade de um nadador
classifique-o em uma das seguintes categorias:
infantil A = 5 a 7 anos
infantil B = 8 a 11 anos
juvenil A = 12 a 13 anos
jjuvenil B 14 a 17 anos
adultos = maior de 18 anos
operadores logicos 
ou = ||  a condicao e verdadeira se uma das condicoes forem verdadeiras 
e = &&  a condicao e verdadeira caso todos sejam verdadeiras 
*/

const idade = 6
/*if(idade >= 5 && idade <= 7)  console.log("infantil A")
else if( idade >=8 && idade <= 11)  console.log("infantil B")
else if( idade >= 12 && idade<= 13)  console.log("juvenil A")
else if( idade >= 14 && idade<= 17)  console.log("Juvenil B")
else if( idade >= 18)  console.log("Maior de 18 anos")*/


// tentei utilizando o switch case nao deu certo, ate perguntei ao jose fortes
// a const ja foi declarada la em cima, aqui vou somente fazer o switch case

switch(idade){
  case idade >= 5 && idade <= 7:
    console.log("infantil A")
  break
  case 
    idade >=8 && idade <= 11:  console.log("infantil B")
  break
  case 
    idade >= 12 && idade<= 13: console.log("juvenil A")
  break
  case 
    idade >= 14 && idade<= 17: console.log("Juvenil B")
  break
  
 

}


