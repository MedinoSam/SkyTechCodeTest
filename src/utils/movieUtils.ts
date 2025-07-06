import { Movie, MovieParsed, Premio, Rating, Sinopse } from "../types/movie";
import { convertMinutesToSeconds, formaterNumberExtense, getNumberWithScale } from "./helpersUtils";


export const getParsedMovie = (movieOriginal: Movie):MovieParsed => {
    const parsedMovie: MovieParsed = {
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
    return parsedMovie;
}

export const getProfit = (orcamento:string, bilheteria:string) => {
    const budgetValue = getNumberWithScale(orcamento);
    const boxOfficeValue = getNumberWithScale(bilheteria);

    if (!budgetValue || !boxOfficeValue) {
        return null;
    }
    return formaterNumberExtense(boxOfficeValue - budgetValue);
}


export const getGreatherPrize = (prizes: Premio[]): string|null  => {
    if (prizes.length !== 0){
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
    return null;
}

export const getImdbRating = (ratings: Rating[]): number|null => {
    const findedRating = ratings.find(rating => rating.fonte === "IMDb");
    if (!findedRating) return null;

    return findedRating.valor;
}

export const getSinopse = (sinopses: Sinopse[]) => {
 
    const sinopseName: string =
        sinopses.find(s => s.idioma === "pt-br")?.texto ??
        sinopses.find(s => s.idioma === "en")?.texto ??
        sinopses[0].texto;
    return sinopseName;
}
