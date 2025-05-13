// nota ao professor: Acabei invertendo e trocando os números por strings. Só percebi quando havia terminado, ao reler o enunciado :/

//from google function
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
// minha lógica aqui
let stringsAndNumbers = ['abc', 2, 'def', 4, 'ghi', 6]

let justStrings = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        typeof array[i] === 'number' ? (array[i] = generateRandomString(3), newArray.push(array[i]))
                                     : newArray.push(array[i])
    }
    return newArray
}
console.log(`Previous array: ${(stringsAndNumbers)}`)
console.log(`Array now: ${justStrings(stringsAndNumbers)}`)

/**
 * if (typeof array[i] === 'number') {
        array[i] = generateRandomString(3)
        newArray.push(array[i])
    } else {
        newArray.push(array[i])
    }
 */