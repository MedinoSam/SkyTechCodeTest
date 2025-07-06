import { Request, Response} from "express";
import { getMoviesParsedService } from "../services/movieService";
import { hasGenero } from "../utils/helpersUtils";
import { genders } from "../constants/genderConstants";


export const getMoviesParsedController =  async (req: Request, res: Response) => {

        try {
            const movies = await getMoviesParsedService();
            if (req.query.genero) {
                if(!genders.includes(req.query.genero as string)) {
                     res.sendStatus(404);
                     return
                }
                const filteredMovie = movies.filter(movie => hasGenero(req.query.genero as string, movie.genero));
                res.status(200).send(filteredMovie);
                return;
            }
             res.status(200).send(movies);
        } catch (error) {
             res.sendStatus(500);
        }
}