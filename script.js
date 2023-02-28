//PRÁTICA GUIADA 1
/*
const booleano1 = false
const booleano2 = true

if (booleano1) {
    alert(`Booleano 1 é TRUE.`)
} else {
    alert(`Booleano 1 é FALSE.`)
}

*/

//PRÁTICA GUIADA 1/B
/*
const booleano1 = false
const booleano2 = true
const booleano3 = true

if (booleano1 === booleano2) {
    alert(`Booleano 1 e booleano 2 são IGUAIS!`)
} else if (booleano2 === booleano3) {
    alert(`Booleano 2 e booleano 3 são IGUAIS!`)
} else if (booleano1 === booleano3) {
    alert(`Booleano 1 e booleano 3 são IGUAIS!`)
} else {
    alert(`Não existe valores iguais!`)
}
*/

// EXEMPLO 1
/*
const temOvo = true
const temFarinha = true
const temLeite = true
const temAcucar = true

if (!temOvo) {
  console.log(`OVO:`, temOvo)
  console.log(`Não tem ovo, deixa quieto`)
} else if (!temFarinha) {
  console.log(`FARINHA:`, temFarinha)
  console.log(`Tem ovo, mas não tem farinha. Deixa quieto.`)
} else if (!temLeite) {
  console.log(`LEITE:`, temLeite)
  console.log(`Mesmo com farinha e ovos, não tem leite. Não dá pra fazer o bolinho de chuva!`)
} else if (!temAcucar) {
    console.log(`AÇÚCAR:`, temAcucar)
    console.log(`Temos leite, ovos e farinha, mas sem açúcar o bolinho vai ficar horroroso.`)
  } else {
    console.log(`IHÁÁÁÁ, LETS QUE BÓRA FAZER BOLINHO DE CHUVA`)
  }
*/

//PRÁTICA GUIADA 2
/*
const idade = prompt(`Qual sua idade ?`)

if (idade < 16) {
    console.log(`Você NÃO pode votar !`)
} else if (idade < 18 || idade >= 70) {
    console.log(`Você PODE votar (facultativo)`)
} else if (idade >= 18) {
    console.log(`Você DEVE votar !`)
} else {
    console.log(`Dado inválido !`)
}
*/

//EXERCÍCIO DO DIA

const media = prompt(`Qual sua média ?`)

if (media >= 5){
    console.log(`APROVADO !`)
} else if (media >= 3) {
    console.log(`RECUPERAÇÃO !`)
} else if (media < 3){
    console.log(`REPROVADO !`)
} else {
    console.log(`DADO INVÁLIDO !`)
}