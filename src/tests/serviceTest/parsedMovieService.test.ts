import { MOVIE_ORIGINAL_MOCKED_LIST, MOVIE_PARSED_MOCK_LIST } from "../../constants/movieListConstants";
import { getMoviesParsedService } from "../../services/movieService";
import * as movieUtils from "../../utils/movieUtils";
import axios from 'axios'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios> 

jest.mock('../../utils/movieUtils')

describe("Comportamentos do movieService", () => {

    test("deve retornar os filmes parseados", async () => {
        mockedAxios.get.mockResolvedValue({
                    data: MOVIE_ORIGINAL_MOCKED_LIST,
                    status: 200,
                    statusText: 'OK',
                    headers: {},
                    config: {
                        url: ''
                    },
                })

        const mockedGetParsedMovie = movieUtils.getParsedMovie as jest.MockedFunction<typeof movieUtils.getParsedMovie>;
        MOVIE_PARSED_MOCK_LIST.forEach(movie => mockedGetParsedMovie.mockReturnValueOnce(movie));

        const result = await getMoviesParsedService();
        expect(mockedGetParsedMovie).toHaveBeenCalledTimes(8);
        expect(result).toEqual(MOVIE_PARSED_MOCK_LIST);
    }) 
})