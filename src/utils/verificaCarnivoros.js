import { recintosConfortaveis } from './recintosConfortaveis.js';
import animais from '../data/animais.js';

export const verificaCarnivoros = (animal, quantidade) => {
    const recintosDisponiveis = recintosConfortaveis(animal, quantidade);

    if (animais[animal].carnivoro) {
        return recintosDisponiveis.filter(recinto =>
            recinto.animaisExistentes.length === 0 ||
            recinto.animaisExistentes.every(animalExistente => animalExistente.especie === animal)
        );
    } else {
        return recintosDisponiveis.filter(recinto =>
            recinto.animaisExistentes.every(animalExistente => !animais[animalExistente.especie].carnivoro)
        );
    }
}
