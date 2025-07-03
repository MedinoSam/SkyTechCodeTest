import { Movie, MovieParsed } from "../types/movie";


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
    
}