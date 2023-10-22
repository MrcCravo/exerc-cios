const alunos = ["Tuca", "Ronan", "Thiago", "Maria"];
const medias = [10, 9, 8, 7];

const atribuicao = [alunos, medias];

console.log(atribuicao);

console.log(
    `A segunda média na lista de medias é: ${atribuicao[1][1]}`
);

console.log(
    `A média do aluno ${atribuicao[0][2]} é: ${atribuicao[1][2]}!`
);