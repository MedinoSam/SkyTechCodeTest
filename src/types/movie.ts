
export interface Movie {
    titulo: string;
    diretor: string;
    ano: number;
    genero: string[];
    duracao: number;
    ratings: Rating[];
    elenco: string[];
    sinopse: Sinopse[];
    poster: string;
    trailer: string;
    locacoes: string[];
    orcamento: string;
    bilheteria: string;
    premios: Premio[];
}

export interface Rating {
    valor: number;
    fonte: string;
}

export interface Sinopse {
    texto: string;
    idioma: string;
}

export interface Premio {
    nome: string;
    relevancia: number;
    }

export interface Movies {
    filmes: Movie[];
}

export interface MovieParsed {
    titulo: string;
    ano: number;
    diretor: string;
    genero: string[];
    duracaoSegundos: number;
    notaIMDb: number|null;
    lucro: string | null;
    maiorPremiacao: string|null;
    sinopse: string;
}

export const movies: Movie[] = [];