import { convertMinutesToSeconds, formaterNumberExtense, getNumberValue, getNumberWithScale } from "../utils/helpersUtils";

describe("Conversors", () => {


    test("deve converter minutos para segundos", () => {
        const minutes: number = 1;

        let result = convertMinutesToSeconds(minutes);
        expect(result).toEqual(minutes * 60);
    });

    test("deve pegar o numero de uma string", () => {

        const valueList: string[] = [
            "$41 milhões", 
            "$2.45 bilhão", 
            "$1.1256 milhão", 
            "$45.6987987 bilhões"
        ];

        const expectedValueList: number[] = [
            41,
            2.45,
            1.1256,
            45.6987987
        ];

        valueList.forEach((value, index) => {
            let result = getNumberValue(value);
            expect(result).toEqual(expectedValueList[index]);
            /* expect(result).toEqual(parseFloat(valueList[index].split(' ')[0].replace('$', ''))); */
        })
    })

    test("deve retornar o numero com sua escala", () => {
        const valueList: string[] = [
            "$41 milhões", 
            "$2.45 bilhão", 
            "$1.1256 milhão", 
            "$45.6987987 bilhões"
        ];

        const expectedValueList: number[] = [
            41000000,
            2450000000,
            1125600,
            45698798700
        ];

        valueList.forEach((value, index) => {
            let result = getNumberWithScale(value);
            expect(result).toEqual(expectedValueList[index]);
        })
    })

    test("deve retornar o numero por extenso", () => {
        const valueList: number[] = [
            41000000,
            2450000000,
            1125000,
            1500
        ];

        const expectedValueList: string[] = [
            "41 milhões", 
            "2.45 bilhões", 
            "1.125 milhões", 
            "1.5 mil"
        ];

        valueList.forEach((value, index) => {
            let result = formaterNumberExtense(value);
            expect(result).toEqual(expectedValueList[index]);
        })
    })
})