let geradorDeTagsDeIdentificacao = (petName) => {
    let upperCaseIdentityTag = petName.trim().toUpperCase()
    console.log(petName.toLowerCase())
    if (petName.includes("a"))
        console.log(petName.replaceAll("a", "@"))
    console.log(petName.split('t'))
    console.log(petName.slice(0, 3))
    return upperCaseIdentityTag
}

function verificarSePodeSerAdotado(age, size) {
    let canBeAdopted = age == 1 && size === 'M' ? true : false
    for (let i = 0; i <= age; i++) {
        console.log('Buscando dados...')
        buscarDadoAsync()
            .then(data => {
                i == 1 ? console.log('Dado encontrado:', data.replaceAll('Pipoca', 'Bolo'))
                    : console.log('Dado encontrado:', data)
            })
            .catch(e => {
                console.log(e.message.toUpperCase())
            })
    }
    return canBeAdopted
}
function calcularConsumoDeRacao(petName, age, weight) {
    let storage = 10000
    const dailyfoodPortion = (weight * 30) * 10
    const daysUntilFoodRunOut = Math.floor(storage / dailyfoodPortion)
    console.log(`----------------------`)
    console.log(`Nome do dog: ${petName}`)
    console.log("Idade do dog: " + age)
    console.log(`Peso: ${weight}kg`)
    console.log(`Gramas por dia: ${dailyfoodPortion}g`)
    console.log(`O estoque vai durar: ${daysUntilFoodRunOut} dias`)
    console.log(`----------------------`)
    return dailyfoodPortion
}

function decidirTipoDeAtividadePorPorte(size) {
    let idealActivity = ''
    switch (size) {
        case 'pequeno':
            idealActivity = 'brincar dentro de casa'
            break
        case 'medio':
            idealActivity = 'caminhada no quarteirão'
            break
        case 'grande':
            idealActivity = 'correr no parque'
            break
        default:
            idealActivity = 'porte inválido'
            break
    }
    return idealActivity
}
async function buscarDadoAsync() {
    let chance = Math.random();
    let asyncData = 'Pipoca'
    if (chance < 0.1) {
        throw new Error("Falha ao buscar dados, tente novamente.");
    }
    let recipe = [
        {
            flavor: 'chocolate'
        },
        {
            bowl: 'mixing bowl'
        }]
    recipe.forEach(item => {
        console.table(item)
    })
    return asyncData
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}