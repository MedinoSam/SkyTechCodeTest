import { NUMERAL_SCALE } from "../constants/movieConstants";


export const  convertMinutesToSeconds = (minuts:number) => {
    return minuts * 60;
}

export const  getNumberWithScale = (value:string) => {

    const numberValue = getNumberValue(value);
    const scale = NUMERAL_SCALE[value.split(' ')[1]]

    if(!numberValue) {
        return null;
    }
    return numberValue * scale;
}

export const getNumberValue = (value:string) => {
    // encontra valores float
    const matches = value.match(/[-+]?\d*\.?\d+/g);
    if (!matches){
        return null;
    }

    const numberValue = parseFloat(matches[0]);
    return numberValue;
}

export const formaterNumberExtense = (value: number): string => {
    const result = new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
        maximumFractionDigits: 3
    }).format(value);

    return result
        .replace("K", " mil")
        .replace("M", " milhões")
        .replace("B", " bilhões");
}
