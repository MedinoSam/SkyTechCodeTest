import { Router } from "express";
import { getMoviesParsedController } from "../controllers/movieController";


const movieRouter = Router();

movieRouter.get('/api/filmes', getMoviesParsedController)

export default movieRouter;