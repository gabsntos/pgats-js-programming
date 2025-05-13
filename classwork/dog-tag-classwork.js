/**
 * DECOMPOSIÇÃO
 * criar etiqueta
 * criar atributos da etiqueta
 * colocar o nome na etiqueta com letras maiusculas
 * colocar raça na etiqueta com primeira letra maiuscula
 * colocar peso
 * 
 * ALGORITMO
 */

const raça = 'bulldog'
let nome = 'Doguito', idade = 10, peso = 20, adotado = true

let etiqueta = [nome, idade, peso, raça, adotado]

console.log('### TAG ###')
console.log(
    `Nome: ${etiqueta[0].toUpperCase()}\n` + 
    `Idade: ${idade}\n` +
    `Peso: ${peso}Kg\n` +
    `Raça: ${etiqueta[3].charAt(0).toUpperCase()}${etiqueta[3].slice(1,7)}\n` +
    `Adotado? ${adotado}`
)