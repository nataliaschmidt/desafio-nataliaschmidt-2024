import recintos from '../data/recintos.js';
import animais from '../data/animais.js';

export const recintosConfortaveis = (animalEspecie, quantidade) => {
    const animal = animais[animalEspecie];

    const recintosComBiomaCompativel = recintos.filter(recinto =>
        recinto.bioma.some(bioma => animal.bioma.includes(bioma))
    );

    const recintosComEspacoSuficiente = recintosComBiomaCompativel.map(recinto => {
        const ocupacaoAtual = recinto.animaisExistentes.reduce((totalOcupacao, animalExistente) => {
            return totalOcupacao + (animalExistente.quantidade * animalExistente.tamanho);
        }, 0);

        const espacoExtra = recinto.animaisExistentes.length > 0 && !recinto.animaisExistentes.some(animal => animal.especie.includes(animalEspecie)) ? 1 : 0;

        const espacoDisponivel = recinto.tamanhoTotal - ocupacaoAtual - espacoExtra;
        const espacoNecessario = quantidade * animal.tamanho;

        if (espacoDisponivel >= espacoNecessario) {
            return {
                ...recinto,
                espacoLivreRestante: espacoDisponivel - espacoNecessario
            };
        }
        return null;
    }).filter(recinto => recinto !== null);

    return recintosComEspacoSuficiente;
}
