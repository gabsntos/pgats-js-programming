/**
 * 
 * forma que tratamos erros
 * 
 * try catch - é tipo um condicional, mas aqui estamos checando se tiver ou não, ao inves de se caso verdadeiro ou falso
 * 
 * tentar {
 *  // conexção com banco
 * } pege (erro/excecão) {
 *  // salvar em algum lugar...
 *  // exibir
 * }
 * 
 * throw - lançar (erros) propositalmente
 */

try {
    console.log('tentado alimentar o pet...')
    throw new Error()
} catch (error) {
    console.log(error)
} finally {
    console.log('Terminando tentativas')
}