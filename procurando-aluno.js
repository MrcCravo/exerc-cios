const alunos = ["Tuca", "Ronan", "Thiago", "Maria"];
const medias = [10, 9, 8, 7];

const atribuicao = [alunos, medias];

//aluno = prompt("Digite aqui o nome do novo aluno deste curso");

function exibeNomeENota(aluno) {
    if (atribuicao[0].includes(aluno)) {
        console.log(`O aluno ${aluno} já está cadastrado em nossa base`);

        const indice = atribuicao[0].indexOf(aluno);
        console.log(`A posição de índice do aluno ${aluno} é ${indice}.`);

        const mediaDoAluno = (`A média cadastrada para o aluno ${aluno} é a de ${atribuicao[1][indice]}`);
        console.log(mediaDoAluno);

    } else {
        console.log(`O nome ${aluno} não foi encontrado em nossa base de alunos`);
    }
}

exibeNomeENota("Ronan");