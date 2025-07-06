import { MOVIE_PARSED_MOCK } from "../../constants/movieConstants";
import { getMoviesParsedService } from "../../services/movieService";
import * as movieUtils from "../../utils/movieUtils";


jest.mock('../../utils/movieUtils')

describe("Comportamentos do movieService", () => {

    test("deve chamar getParsedMovie corretamente", async () => {

        const mockedGetParsedMovie = movieUtils.getParsedMovie as jest.MockedFunction<typeof movieUtils.getParsedMovie>;
        mockedGetParsedMovie.mockReturnValue(MOVIE_PARSED_MOCK)

        const result = await getMoviesParsedService();
        expect(mockedGetParsedMovie).toHaveBeenCalledTimes(8);
    });
})