import { Router } from "express";
import { getMovies } from "../services/movieService";

const movieRouter = Router();

movieRouter.get('/', getMovies)

export default movieRouter;