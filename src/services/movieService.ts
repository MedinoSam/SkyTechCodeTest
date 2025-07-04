import { Request, Response, NextFunction} from "express";
import { getMetadata } from "../clients/metaDataApi";
import { parsedMovie } from "../utils/movieUtils";
import { MovieParsed } from "../types/movie";

export const getMoviesParsed = (res: Response) => {
        let formatedMovies:MovieParsed[] = [];

        getMetadata()
        .then(originalMovies => {
            originalMovies.filmes.forEach(originalMovie => {
                const formatedMovie = parsedMovie(originalMovie);
                formatedMovies.push(formatedMovie);
            });
            res.send(formatedMovies).status(200);
        })
        .catch(error => {
            res.sendStatus(400);
        })
}