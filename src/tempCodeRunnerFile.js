else if (animalLowerCase === 'hipopotamo') {

        const recintosParaHipopotamos = recintos.filter(recinto => 
                recinto.animaisExistentes.length === 0 ||
                recinto.bioma.includes('savana') &&
                recinto.bioma.includes('rio')
        );
        return { recintosViaveis: recintosParaHipopotamos.map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.espacoLivreRestante} total: ${recinto.tamanhoTotal})`) };
       }     