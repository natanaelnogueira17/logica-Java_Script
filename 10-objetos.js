let pessoas = {
  nome: "jose",
  idade: 20,
  casado: true,
  notas:[10,8,9,7],
  endereco: {
    rua: "parambu",
    numero: 510,
    bairro: "jardim guanabara",
    cidade:"fortaleza",
    estado:"Ceara"
  }
}

console.log(pessoas["nome"])
console.log(pessoas.nome)
console.log(pessoas["idade"])
console.log(pessoas.idade)
console.log(pessoas["casado"])
console.log(pessoas.casado)
console.log(pessoas["notas"][2])
console.log(pessoas.notas[2])
console.log(pessoas["endereco"]["rua"])
console.log(pessoas.endereco.rua)