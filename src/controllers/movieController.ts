import { Request, Response, NextFunction} from "express";
import { getMetadata } from "../clients/metaDataApi";
import { error } from "console";
import { parsedMovie } from "../utils/movieUtils";
import { MovieParsed } from "../types/movie";

export const getMovies = (req: Request, res: Response, next: NextFunction) => {
        let formatedMovies:MovieParsed[] = [];
        getMetadata()
        .then(originalMovies => {
            originalMovies.filmes.forEach(originalMovie => {
                const formatedMovie = parsedMovie(originalMovie);
                formatedMovies.push(formatedMovie);
            });
            res.json(formatedMovies);
        })
        .catch(error => {
            res.send(error);
        }) 

}