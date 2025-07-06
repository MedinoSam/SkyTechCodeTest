import { MOVIE_PARSED_MOCK, MOVIE_ORIGINAL_MOCKED } from "../constants/movieConstants";
import { getParsedMovie} from "../utils/movieUtils";

describe("teste da função getParsedMovie", () => {
    test("deve retornar o filme parseado", () => {

        const result = getParsedMovie(MOVIE_ORIGINAL_MOCKED)
        expect(result).toEqual(MOVIE_PARSED_MOCK); 
    });
});