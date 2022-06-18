/*
const variavel = 10 
let array = [true, true, true, false, false, "sejaDev", "SejaDev", variavel, null]

array [8] = 1000
console.log(array) //editando valor direto 

array.push(1000, "string")
console.log(array)  // adicionando elementos no array com push

array.pop() // remove o ultimo elemento do array 
console.log(array)
*/

//*********************************************************************************** */

/*
let newArray = [10, 20 ,30]
console.log(newArray.length) // contando os elementos dos arrays
*/
//************************************************************ */

//usando o while para passar por todos os elementos.

let newArray = [1,2,3,4,5,6]
let i = 0 

/*
while (i < newArray.length){
  console.log(`a contagem do array é ${newArray.length}`)
  console.log(i)
  console.log(newArray[i])
  i++
}
*/

/*
for (let i = 0; i < newArray.length; i=i+1){
console.log(i)
console.log(newArray[i])
}
*/

//formas mais simples de fazer o curso do array

//for..in
for(let pos in newArray){
console.log(pos)
console.log(newArray[pos])
}

// for .. of
/*for (let arr of newArray){
 
}

// dado um array com x numero encontrar a media desses numeros
// media = (soma dos elementos) / tamanho

*/



let array1 = [10,20,30,40,50]
let sum = 0
for(let num of array1){
sum = sum + num
}
console.log(sum)
let contagem = [array1.length]

const media = sum / contagem

console.log(media)


