import { getMetadata } from "../clients/metaDataApi";
import { getParsedMovie } from "../utils/movieUtils";
import { MovieParsed } from "../types/movie";

export const getMoviesParsedService = async (): Promise<MovieParsed[]> => {

    const formatedMovies: MovieParsed[] = [];
    const originalMovies = await getMetadata();

    originalMovies.filmes.forEach(originalMovie => {
        const formatedMovie = getParsedMovie(originalMovie);
        formatedMovies.push(formatedMovie);
    });

    return formatedMovies;
}