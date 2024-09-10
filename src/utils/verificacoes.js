import animais from '../data/animais.js';

export const verificaParametros = (animal, quantidade) => {
    if (!(animal in animais)) {
        return { erro: "Animal inválido" };
    } else if (quantidade <= 0 || !Number.isInteger(quantidade)) {
        return { erro: "Quantidade inválida" };
    } else {
        return null;
    }
};
