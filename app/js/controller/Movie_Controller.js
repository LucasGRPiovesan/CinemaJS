import { Movie } from "../model/Movie.js";
import { Movie_View } from "../view/Movie_View.js";

export class Movie_Controller {

    constructor() {

        throw new Error ('This class cannot be called');
    }

    static display_movie() {

        let movies = [];

        this.data().forEach(movie => {

            movies.push(new Movie(
                movie.title,
                movie.genre,
                movie.classif,
                movie.durac,
                movie.synopsis,
                movie.note,
                movie.poster,
                movie.highlights
            ));
        });

        const template = new Movie_View(movies).template;

        return template;
    }

    static data() {

        let data = [
            {
                title: 'Avatar: O Caminho da Água',
                genre: 'Ação/Aventura',
                classif: '+14',
                durac: '04:00:00',
                synopsis: '...',
                note: '10.0',
                poster: 'app/assets/img/avatar-2.jpeg',
                highlights: false
            },
            {
                title: 'Vingadores Ultimato',
                genre: 'Guerra/Ação',
                classif: '+14',
                durac: '03:00:00',
                synopsis: '...',
                note: '10.0',
                poster: 'app/assets/img/avengers-endgame.jpeg',
                highlights: true
            },
            {
                title: 'Doutor Estranho: No Multiverso da Loucura',
                genre: 'Ação/Aventura',
                classif: '+14',
                durac: '02:20:00',
                synopsis: '...',
                note: '4.0',
                poster: 'app/assets/img/doutor-estranho.jpeg',
                highlights: true
            },
            {
                title: 'Homem-Aranha: Sem Volta para Casa',
                genre: 'Ação/Aventura',
                classif: '+14',
                durac: '02:45:00',
                synopsis: '...',
                note: '8.5',
                poster: 'app/assets/img/homem-aranha-sem-volta-para-casa.jpeg',
                highlights: true
            },
            {
                title: 'Homem-Aranha: Através do Aranhaverso',
                genre: 'Animação/Aventura',
                classif: '+12',
                durac: '02:00:00',
                synopsis: '...',
                note: '9.5',
                poster: 'app/assets/img/homem-aranha-atraves.jpeg',
                highlights: true
            },
            {
                title: 'Jujutsu Kaisen 0',
                genre: 'Terror/Ação',
                classif: '+16',
                durac: '01:45:00',
                synopsis: '...',
                note: '10.0',
                poster: 'app/assets/img/jujutsu-kaisen-0.jpeg',
                highlights: true
            },
            {
                title: 'Jurassic Park: Domínio',
                genre: 'Ação/Aventura',
                classif: '+12',
                durac: '02:30:00',
                synopsis: '...',
                note: '5.0',
                poster: 'app/assets/img/jurassic-world-dominio.jpeg',
                highlights: false
            },
            {
                title: 'The Batman',
                genre: 'Suspense/Ação',
                classif: '+16',
                durac: '03:00:00',
                synopsis: '...',
                note: '10.0',
                poster: 'app/assets/img/the-batman.jpeg',
                highlights: true
            },
            {
                title: 'Sonic 2',
                genre: 'Aventura',
                classif: '+10',
                durac: '01:35:00',
                synopsis: '...',
                note: '5.0',
                poster: 'app/assets/img/sonic-2.jpeg',
                highlights: false
            }
        ];

        return data;
    }
}