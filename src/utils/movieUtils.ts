import { Movie, MovieParsed, Premio, Rating, Sinopse } from "../types/movie";
import { convertMinutesToSeconds, formaterNumberExtense, getNumberWithScale } from "./helpersUtils";


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


export const getProfit = (orcamento:string, bilheteria:string) => {
    const budgetValue = getNumberWithScale(orcamento);
    const boxOfficeValue = getNumberWithScale(bilheteria);

    if (!budgetValue || !boxOfficeValue) {
        console.error("erro: valores de orcamento e bilheteria nao podem ser nulos");
        return null;
    }
    return formaterNumberExtense(boxOfficeValue - budgetValue);
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
