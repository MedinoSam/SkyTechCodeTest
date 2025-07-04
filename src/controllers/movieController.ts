import { Router } from "express";
import { getMoviesParsed } from "../services/movieService";

const movieRouter = Router();

movieRouter.get('/', getMoviesParsed)

export default movieRouter;