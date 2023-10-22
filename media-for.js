const media = [10, 6.5, 8, 7.5];

let somaDasMedias = 0;

for (let indice = 0; indice < media.length; indice++) {
    somaDasMedias += media[indice];
}

console.log(somaDasMedias);

const mediaGeral = somaDasMedias / media.length;

console.log(`A média das notas é ${mediaGeral}`);