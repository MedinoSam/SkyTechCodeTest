import { Request, Response} from "express";
import { getMoviesParsedService } from "../services/movieService";
import { query } from "express-validator";

export const getMoviesParsedController =  async (req: Request, res: Response) => {
        try {

            const movies = await getMoviesParsedService();
         /*    const {
                query: {filter, value}
            } = req;
            if (filter && value) return res.send(
                movies.filter((movie) => movie.genero[filter].includes(value))
            ) */
             res.status(200).send(movies);
        } catch (error) {
             res.sendStatus(500);
        }
}