import { Premio, Rating, Sinopse } from "../../types/movie";
import { getNumberWithScale, formaterNumberExtense} from "../../utils/helpersUtils";
import { getGreatherPrize, getImdbRating, getSinopse, getProfit} from "../../utils/movieUtils";


jest.mock("../../utils/helpersUtils", () => ({
    getNumberWithScale: jest.fn(),
    formaterNumberExtense: jest.fn(),
    convertMinutesToSeconds: jest.fn(),
}));

describe("movie utils gets functions", () => {

    test("deve retornar o lucro formatado", () => {

        (getNumberWithScale as jest.Mock)
            .mockImplementationOnce(() => 150)
            .mockImplementationOnce(() => 450);

        (formaterNumberExtense as jest.Mock)
            .mockReturnValue("300 milhões");

        const result = getProfit("$150 milhões", "$450 milhões");
        expect(result).toEqual('300 milhões');
        expect(getNumberWithScale as jest.Mock).toHaveBeenCalledTimes(2);
        expect(formaterNumberExtense).toHaveBeenCalledWith(300)
    });

    test("deve retornar nulo se orcamento ou bilheteria forem nulos", () => {
        (getNumberWithScale as jest.Mock).mockReturnValueOnce(null);

        const result = getProfit("$150 milhões", "$450 milhões");
        expect(result).toEqual(null);
    });

    test("deve retornar o melhor premio", () => {
        const prizesList: Premio[] = [
            {nome: "oscar", relevancia: 10},
            {nome: "globo de ouro", relevancia: 9},
            {nome: "grammy", relevancia: 10}
        ];

        const result = getGreatherPrize(prizesList);
        expect(result).toEqual("oscar");
    });

    test("deve retornar nulo se nao houver premio", () => {
        const result = getGreatherPrize([]);
        expect(result).toEqual(null);
    });

    test("deve retornar o rating imdb", () => {
        const ratingList: Rating[] = [
            {valor: 1, fonte: "rotten tomatoes"},
            {valor: 4, fonte: "IMDb"},
            {valor: 9, fonte: "SamissonRatings"},
        ];

        const result = getImdbRating(ratingList);
        expect(result).toEqual(4);
    });

    test("deve retornar nulo se nao houver avalicao no imdb", () => {
        const ratingList: Rating[] = [
            {valor: 1, fonte: "rotten tomatoes"},
            {valor: 9, fonte: "SamissonRatings"}
        ];

        const result = getImdbRating(ratingList);
        expect(result).toEqual(null);
    });

    test("deve retornar a sinopse em pt-BR", () => {
        const sinopseList: Sinopse[] = [
            {texto: "brasilbalbalbal", idioma: "pt-br"},
            {texto: "englishblabalbal", idioma: "en"},
            {texto: "italianblablabla", idioma: "ita"}
        ];
        const result = getSinopse(sinopseList);
        expect(result).toEqual("brasilbalbalbal");
    });

    test("deve retornar a sinopse em ingles se nao houver sinopse br", () => {
        const sinopseList: Sinopse[] = [
            {texto: "francoisbalaabl", idioma: "fr"},
            {texto: "englishblabalbal", idioma: "en"},
            {texto: "italianblablabla", idioma: "ita"}
        ];
        const result = getSinopse(sinopseList);
        expect(result).toEqual("englishblabalbal");  
    });

    test("deve retornar a primeira sinopse se nao houver sinopse em pt-br ou en", () => {
        const sinopseList: Sinopse[] = [
            {texto: "francoisbalaabl", idioma: "fr"},
            {texto: "espanolblalbalb", idioma: "es"},
            {texto: "italianblablabla", idioma: "ita"}
        ];
        const result = getSinopse(sinopseList);
        expect(result).toEqual("francoisbalaabl"); 
    })
});



