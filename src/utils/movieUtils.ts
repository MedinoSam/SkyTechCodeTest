import { Movie, MovieParsed } from "../types/movie";
import { numeralScale } from "../constants/movieConstants";

export const parsedMovie = (movieOriginal: Movie):MovieParsed => {
    const parsed: MovieParsed = {
        ano: movieOriginal.ano,
        diretor: movieOriginal.diretor,
        duracaoSegundos: convertMinutesToSeconds(movieOriginal.duracao),
        genero: movieOriginal.genero,
        lucro: getProfit(movieOriginal.orcamento, movieOriginal.bilheteria),
        maiorPremiacao: getGreatherPrize(movieOriginal.premios),
        notaIMDb: getImdbRating(movieOriginal.ratings),
        sinopse: getSinopse(movieOriginal.sinopse),
        titulo: movieOriginal.titulo
    }
    return parsed;
}

const  convertMinutesToSeconds = (minuts:number) => {
    return minuts * 60;
}

const getProfit = (orcamento:string, bilheteria:string) => {
    const budgetValue = getNumberWithScale(orcamento);
    const boxOfficeValue = getNumberWithScale(bilheteria);

    if (!budgetValue || !boxOfficeValue) {
        console.error("erro: valores de orcamento e bilheteria nao podem ser nulos");
        return null;
    }
    return String(boxOfficeValue - budgetValue);
}

const getNumberValue = (value:string) => {
    // encontra valores float
    const matches = value.match(/[-+]?\d*\.?\d+/g);
    if (!matches){
        console.error("valor nulo! nao foi possivel encontrar o valor");
        return null;
    }

    const numberValue = parseFloat(matches[0]);
    return numberValue;
}

const  getNumberWithScale = (value:string) => {

    const numberValue = getNumberValue(value);
    const scale = numeralScale[value.split(' ')[1]]

    if(!numberValue) {
        console.error("valor nulo! nao foi possivel encontrar o valor");
        return null;
    }
    return numberValue * scale;
}