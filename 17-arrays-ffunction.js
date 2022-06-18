const array = [ 1,5,4,3,10,7,8,20,12]



// forEach: passa por todos elementos do array, para cada (forEach)
array.forEach((elemento, posicao)=>{
  /*console.log(elemento)
  console.log(posicao)*/
  //console.log(`${elemento} - posição ${posicao}`)
})

//find -retorna o elemento, ele vai ACHAR(find) o alemento
const valor = array.find(elemento=> elemento === 10) 
//console.log(valor)


// findIndex - retorna a posição do elemento, index(inicio, posição)
const index = array.findIndex(elemento=> elemento === 10) 
 //console.log(index)


// some: retorna true se pelo menos algum(some) numero satisfazer a condição
const some = array.some(elemento=>  elemento >=10)
// console.log(some)


//every: retorna true se todos(every) os elementos forem maior
// do que 10(pq foi digitado o 10)
const every = array.every(elemento=> elemento >=10) 
 //console.log(every)

const newArray = [1,2,3,4,5]
// splace : cortar o array, primeiro parametro é o inicio e o segundo a quantidade
//console.log(newArray.splice(1,2))

//map: modificar os valores dentro do array seguindo uma regra

/*console.log(newArray.map((elemento)=> {
return elemento*2
}))*/

// filter : filtrar os elementos dentro do array
/*console.log(newArray.filter((elemento)=>{
return elemento %2 === 0
}))*/

//reduce: reduz o array para algum outro elemento
console.log(newArray.reduce((acumulado, elemento)=>{
return acumulado + elemento

},0))




