let geradorDeTagsDeIdentificacao = (petName) => {
    let upperCaseIdentityTag = petName.toUpperCase()
    return upperCaseIdentityTag
}

function verificarSePodeSerAdotado(age, size) {
  let canBeAdopted = age == 1 && size === 'M' ? true : false
  return canBeAdopted

}
function calcularConsumoDeRacao(petName, age, weight) {
  const dailyfoodPortion = (weight * 30) * 10
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
    let asyncData = 'Pipoca'
    return asyncData
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}