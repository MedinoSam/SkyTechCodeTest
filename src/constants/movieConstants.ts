import { Movie, MovieParsed } from "../types/movie"

export const NUMERAL_SCALE: { [key: string]: number} = {
    "milhão": 1e6,
    "milhões": 1e6,
    "bilhão": 1e9,
    "bilhões": 1e9
}

export const MOVIE_ORIGINAL_MOCKED: Movie =  {
      "titulo": "O Poderoso Chefão",
      "diretor": "Francis Ford Coppola",
      "ano": 1972,
      "genero": [
        "Crime",
        "Drama"
      ],
      "duracao": 175,
      "ratings": [
        {
          "valor": 9.2,
          "fonte": "IMDb"
        },
        {
          "valor": 4.5,
          "fonte": "Rotten Tomatoes"
        }
      ],
      "elenco": [
        "Marlon Brando",
        "Al Pacino",
        "James Caan"
      ],
      "sinopse": [
        {
          "texto": "Um chefão da máfia tenta transferir o controle de seu império clandestino para seu filho relutante.",
          "idioma": "pt-br"
        },
        {
          "texto": "A mafia boss tries to transfer control of his clandestine empire to his reluctant son.",
          "idioma": "en"
        },
        {
          "texto": "Un chef de la mafia tente de transférer le contrôle de son empire clandestin à son fils réticent.",
          "idioma": "fr"
        }
      ],
      "poster": "link para o poster do filme",
      "trailer": "link para o trailer do filme",
      "locacoes": [
        "Nova York",
        "Sicília",
        "Las Vegas"
      ],
      "orcamento": "$6 milhões",
      "bilheteria": "$245 milhões",
      "premios": [
        {
          "nome": "Oscar de Melhor Filme",
          "relevancia": 10
        },
        {
          "nome": "Oscar de Melhor Ator",
          "relevancia": 8
        }
      ]
    }

export const  MOVIE_PARSED_MOCK: MovieParsed = {
    "titulo": "O Poderoso Chefão",
    "ano": 1972,
    "diretor": "Francis Ford Coppola",
    "genero": [
      "Crime",
      "Drama"
    ],
    "duracaoSegundos": 10500,
    "notaIMDb": 9.2,
    "lucro": "239 milhões",
    "maiorPremiacao": "Oscar de Melhor Filme",
    "sinopse": "Um chefão da máfia tenta transferir o controle de seu império clandestino para seu filho relutante."
  }
