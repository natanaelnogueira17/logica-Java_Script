/* dado um numero, construir uma logica para imprimir o nome do mes do numero
exemplo :
1 console.log("janeiro")
2 console.log("feverteiro")
...
12 console.log("dezembro")
!== 12 - console.log("mes inexistente")
numero % 2 === 0? console.log("é par"):console.log("é impar") */

const numeroDoMes = 5
switch (numeroDoMes) {
  case 1:
    console.log("janeiro")
  break
  case 2:
    console.log("fevereiro")
  break
  case 3:
    console.log("marco")
  break
  case 4:
    console.log("abril")
  break
  case 5:
    console.log("maio")
  break 
  /*.
  .
  .*/
  
  
  
  default:
   console.log("é diferente")
   break
}
/* eu fiz sem o swicht assim
numeroDoMes === 1? console.log("janeiro"):
numeroDoMes === 2? console.log("fevereiro"):
numeroDoMes === 3? console.log("marco"):
numeroDoMes === 4? console.log("abril"):
numeroDoMes === 5? console.log("maio"):
numeroDoMes === 6? console.log("junho"):
numeroDoMes === 7? console.log("julho"):
numeroDoMes === 8? console.log("agosto"):
numeroDoMes === 9? console.log("setembro"):
numeroDoMes === 10? console.log("outubro"):
numeroDoMes === 11? console.log("novembro"):
numeroDoMes === 12? console.log("dezembro"): console.log("é diferente")*/


