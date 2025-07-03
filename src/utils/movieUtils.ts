import { Movie, MovieParsed, Premio, Rating, Sinopse } from "../types/movie";
import { numeralScale } from "../constants/movieConstants";

export const parsedMovie = (movieOriginal: Movie):MovieParsed => {
    const parsed: MovieParsed = {
        titulo: movieOriginal.titulo,
        ano: movieOriginal.ano,
        diretor: movieOriginal.diretor,
        genero: movieOriginal.genero,
        duracaoSegundos: convertMinutesToSeconds(movieOriginal.duracao),
        notaIMDb: getImdbRating(movieOriginal.ratings),
        lucro: getProfit(movieOriginal.orcamento, movieOriginal.bilheteria),
        maiorPremiacao: getGreatherPrize(movieOriginal.premios),
        sinopse: getSinopse(movieOriginal.sinopse)
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
    return formaterNumberExtense(boxOfficeValue - budgetValue);
}

const formaterNumberExtense = (value: number): string => {
    const result = new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
        maximumFractionDigits: 3
    }).format(value);

    return result
        .replace("K", " mil")
        .replace("M", " milhões")
        .replace("B", " bilhões");
}

const getGreatherPrize = (prizes: Premio[]) => {
    let biggestPrizeRelevance = -999999;
    let biggestPrizeName = "";
    prizes.forEach(function(prize) {
        if (prize.relevancia > biggestPrizeRelevance) {
            biggestPrizeRelevance = prize.relevancia;
            biggestPrizeName = prize.nome;
        }
    });
    return biggestPrizeName;
}

const getImdbRating = (ratings: Rating[]) => {
    let IMDbValue: number = -1;
    ratings.forEach(rating => {
        if (rating.fonte === "IMDb") IMDbValue = rating.valor;
    });

    return IMDbValue;
}

const getSinopse = (sinopses: Sinopse[]) => {
 
    const sinopseName: string =
        sinopses.find(s => s.idioma === "pt-br")?.texto ??
        sinopses.find(s => s.idioma === "en")?.texto ??
        sinopses[0].texto;
    return sinopseName;
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