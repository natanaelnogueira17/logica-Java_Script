function Pessoa (nome, sobrenome){
  let pessoa = {
    nome:
    sobrenome

  }
  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}

const pessoaA = Pessoa("José","Fortes")
const pessoaB = Pessoa("joao","teste")

console.log(pessoaA, pessoaB)
console.log(pessoaA.nomeCompleto, pessoaB.nomeCompleto)

