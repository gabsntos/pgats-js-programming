/**
 * Exercício Individual
Programação para Automação de Testes
Hands-on
Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.
Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção
Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade.
 */


let dog = {
    adotado: true,
    idade: 1,
    nome: "lorem"
}

dog.idade >= 2 ? dog.adotado = true : dog.adotado = false

console.log(`Dog's name: ${dog.nome}\nAge: ${dog.idade}\nCan be adopted? ${dog.adotado}`)