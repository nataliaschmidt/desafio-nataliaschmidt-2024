import {verificaParametros} from './utils/verificacoes.js'
import { verificaCarnivoros } from './utils/verificaCarnivoros.js';

class RecintosZoo {

    analisaRecintos(animal, quantidade) {
    const animalLowerCase = animal.toLowerCase()
        const parametrosInvalidos = verificaParametros(animalLowerCase, quantidade)

        if(parametrosInvalidos){
            return parametrosInvalidos
        }

       const recintosDisponiveis =  verificaCarnivoros(animalLowerCase, quantidade)

       if(recintosDisponiveis.length === 0 ){
        return {erro: "Não há recinto viável"}
       }

       if(animalLowerCase === 'macaco' && quantidade === 1) {
        const recintosParaMacacos = recintosDisponiveis.filter(recinto => recinto.animaisExistentes.length !== 0
        )

        return { recintosViaveis: recintosParaMacacos.map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.espacoLivreRestante} total: ${recinto.tamanhoTotal})`) };
       } else if (animalLowerCase === 'hipopotamo') {

        const recintosParaHipopotamos = recintosDisponiveis.filter(recinto => 
                recinto.animaisExistentes.length === 0 ||
                recinto.bioma.includes('savana') &&
                recinto.bioma.includes('rio')
        );
        return { recintosViaveis: recintosParaHipopotamos.map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.espacoLivreRestante} total: ${recinto.tamanhoTotal})`) };
       } else {
           return { recintosViaveis: recintosDisponiveis.map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.espacoLivreRestante} total: ${recinto.tamanhoTotal})`) };
       }
    }

}

export { RecintosZoo as RecintosZoo };