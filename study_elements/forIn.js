// o for in é uma estrutura de repetição especifica para iterar sobre as propriedades e valores do elemeto
// e não necessita por exemplo de declarar um valor de incremento ou condição , basta apenas declarar o indice 
// e o array

const  pessoas = {
    nome : 'Lucas',
    idade : 20,
    profissao : 'Programador'
} // declarando um objeto pra iterar

for(usuario in pessoas){
    console.log(pessoas[usuario]);
} // iterando os valores dos objetos

for(pes in pessoas){
    console.log(pessoas)
    }