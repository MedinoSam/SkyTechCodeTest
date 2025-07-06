import axios from 'axios'
import { MOVIE_ORIGINAL_MOCKED_LIST } from '../../constants/movieListConstants'
import { getMetadata } from '../../clients/metaDataApi'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>


describe("testando o metadataAPi", () => {

    test("Deve retornar os filmes originais, sem formatação", async () =>  {
        mockedAxios.get.mockResolvedValue({
            data: MOVIE_ORIGINAL_MOCKED_LIST,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {
                url: ''
            },
        })
        
        const result = await getMetadata();
        expect(result.data).toEqual(MOVIE_ORIGINAL_MOCKED_LIST);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(result.status).toEqual(200);
    })
})