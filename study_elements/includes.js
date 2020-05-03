// console.log([1,5,9].includes(4));

const pessoas = ['Lucas','Ana','Marcelo','Rosangela'];
// console.log(pessoas.includes('Vivian'));

const people = [
    {nome : 'Lucas', sexo : 'M' , idade :20 , profissao : 'Programador'},
    {nome : 'LuLu', sexo : 'M' , idade :20 , profissao : 'Desenvolvedor'},
    {nome : 'Mariana', sexo : 'F' , idade :22 , profissao : 'Designer'},
    {nome : 'Cezar', sexo : 'M' , idade :25 , profissao : 'Programador'}
]


const person =  people.filter( pes => (pes.nome.includes('Lu')));

console.log(person);

// testando com valores de api´s

