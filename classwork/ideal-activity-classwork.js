/**
 * Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, médio ou grande); e o tempo disponível para a atividade representado em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte: 
pequeno -> brincar dentro de casa
médio -> caminhada no quarteirão
grande -> correr no parque
qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
menor que 15 -> "atividade rápida: [atividade]"
de 15 a 30 -> "tempo ideal: [atividade]"
acima de 30 -> "hora da diversão: [atividade]
 */
let availableTime = 10

let dog = [
    weight = 30,
    dogName = 'bolinha',
    size = ""
]

let porte = dog[0] <= 10 ? dog[2] = "P" : dog[0] >= 30 ? dog[2] = "G" : dog[2] = "M"

switch (porte) {
    case "P":
        activity = "Brincar dentro de casa"
        break
    case "M":
        activity = "Caminhada no quarteirão"
        break
    case "G":
        activity = "Correr no parque"
        break
    default: 
        activity = "Porte inválido"
        break
}

// Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
// menor que 15 -> "atividade rápida: [atividade]"
// de 15 a 30 -> "tempo ideal: [atividade]"
// acima de 30 -> "hora da diversão: [atividade]

let message

if (availableTime < 15) {
    message = "Atividade rápida"
} else if (availableTime >= 15 && availableTime <= 30) {
    message = "Tempo ideal"
} else if (availableTime > 30) {
    message = "Tempo ideal"
} else {
    message = "Tempo inválido"
}

console.log(`${message}: [${activity}]`)
