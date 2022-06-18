const pessoa = {
  nome: "jose",
  sobrenome: "fortes",
  idade: 27
}
console.log(pessoa) // para chamar por todos atributos
const {nome, idade, sobrenome} = pessoa // para deixar chamar por apenas um atributo

/*const nome = pessoa.nome // 
const sobrenome = pessoa.sobrenome
const idade = pessoa.idade
console.log(nome)
console.log(sobrenome)
console.log(idade)*/

// funciona tbm com array
const array = [10, 20, 3, 4]
const[a, b] = array
console.log(a)
console.log(b)

//para acrescentar novos elementos no array
const newArray = [0,...array,5]
console.log(newArray)


