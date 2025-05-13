 console.log("Node refers to the runtime environment that executes JavaScript code, " 
    + "while npm (Node Package Manager) is the tool used to install and manage packages (libraries) for Node.js projects")
 
console.error("ERROR")

console.warn("WARNING")

console.table([{
    nome: 'Gabriel',
    turma: 'Turma 2',
    disciplina: 'Prog js'
}])

// declarações e variaveis
/**
 * const - data that never changes
 * var and let - data that can change
 * 
 * In JavaScript, var is function-scoped, meaning a variable declared with var is accessible throughout the entire function it's defined in, 
 * while let is block-scoped, meaning it's only accessible within the block (like an if statement or a for loop) where it's defined. 
 */

const nome = 'blewk'
const raca = "undefined"
const sexo = "male"
const cor = "yellow"
const dataDeNascimento = "01/01/1998"
const porte = "P"

console.log("nome: " + nome)
console.log("raça: " + raca)

let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = "M"

// O JS é uma linguagem dinamicamente tipada
// Uma const precisa ter um valor atribuido obrigatóriamente no momemnto da sua declaração, diferente de var e let.

/**
 * hoisting --> içamento ou elevação
 * In JavaScript, hoisting refers to the built-in behavior of the language through which 
 * declarations of functions, variables, and classes are moved to the top of their scope – 
 * all before code execution. In turn, this allows us to use functions, variables, and classes 
 * before they are declared.
 */

/**
 * strings
 * 
 * sigle quote ''
 * double quote ""
 * template strings ``
 * 
 */

const turma = "2"
console.log("Aula 03 da turma "+ turma + " no sábado dia 05 de abril") // concatenação
console.log(`Aula 03 da turma ${turma} no sábado dia 05 de abril`) //interpolação
console.log(turma.length) // diz a quantidade de caracteres em uma string

const nomes = "Arnaldo Gabriel Laura Eliene"
const nomesSplit = nomes.split(" ") //separa uma string com base na regra passada no parametro do split
console.log(nomesSplit)

console.log(nomes.toLowerCase()) // tudo minusculo
console.log(nomes.toUpperCase()) // tudo maiusculo

console.log(nomes.includes("joão")) // método boleano que indica se a string contem o parametro passado

console.log(nomes.replaceAll("r", "b")) // troca todo a por b dentro da string

const texto = "             Lorem ipsum dolor sit amet, consectetur adipiscing elit           "
console.log(texto)
console.log(texto.trim()) // apara as sobras (espaços iniciais ou finais) de uma string

console.log(texto.trim().slice(0, 7)) //tira uma fatia da string com base no primeiro e ultimo index passado


