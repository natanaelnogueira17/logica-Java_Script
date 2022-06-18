function upload (){
  return new promise((resolve, reject) => {
    setTimeout(()=> {
      console.log("02 - UPLOAD CONCLUIDO")
      resolve()
    }, 2000)
  })
}

async function uploadDefoto() {
console.log("01- INICIANDO UPLOAD")
await upload()
console.log("03 -EXECUÇÃO FINALIZADA")
}

uploadDefoto()

//exemplo de callback
function nomeDaFunctioon(callback){
  callback()
}

newArray.map((elemento)=>{
return elemento * 2
})

// callback pra foto de perfil 

function upload(){
setTimeout
}
