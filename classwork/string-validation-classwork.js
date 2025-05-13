let disorganizedName = '  lUc  As$¨&*  '
let formattedName

let removerCaracteresEspeciais = (name) => {
    return name.replace(/[^a-zA-Z0-9]/g, '')
}

let CapitalizarPalavra = (name) => {
    return `${name.charAt(0).toUpperCase()}${name.slice(1, name.length).toLowerCase()}`
}

let removeEspaços = function (name) {
    return name.trim()
}
console.log(disorganizedName)
console.log(removeEspaços(CapitalizarPalavra(removerCaracteresEspeciais(disorganizedName))))
