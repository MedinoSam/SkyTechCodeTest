import { Request, Response  } from "express";
import { getMoviesParsed } from "../services/movieService";
import { movies, MovieParsed, Movie } from "../types/movie";
import { getProfit} from "../utils/movieUtils";


describe("movie utils gets functions", () => {
    it("deve retornar o lucro", () => {
        const budgetValue:string = "5000";
        const boxOfficeValue:string = "10000";

        const getNumberWithScale = jest.fn();
        getNumberWithScale.mockReturnValueOnce(5000)


        let result = getProfit(budgetValue, boxOfficeValue);
        expect(result).toEqual("$5 mil");
    })
})

