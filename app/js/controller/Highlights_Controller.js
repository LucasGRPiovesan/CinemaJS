import { Movie } from "../model/Movie.js";
import { Highlights_View } from "../view/Highlights_View.js";

export class Highlight_Controller {

    constructor() {

        throw new Error ('This class cannot be called');
    }

    static display_highlights() {

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
        
        const template = new Highlights_View(movies).template;

        return template;
    }

    static data() {

        let data = [
            {
                title: 'Vingadores Ultimato',
                genre: 'Guerra/Ação',
                classif: '+14',
                durac: '03:00:00',
                synopsis: '...',
                note: '10.0',
                poster: 'app/assets/img/banners/Avengers-Endgame-Banner-2.jpeg',
                highlights: true
            },
            {
                title: 'The Batman',
                genre: 'Suspense/Ação',
                classif: '+16',
                durac: '03:00:00',
                synopsis: '...',
                note: '10.0',
                poster: 'app/assets/img/banners/the-batman.jpeg',
                highlights: true
            },
            {
                title: 'Doutor Estranho: No Multiverso da Loucura',
                genre: 'Ação/Aventura',
                classif: '+14',
                durac: '02:20:00',
                synopsis: '...',
                note: '4.0',
                poster: 'app/assets/img/banners/doutor-estranho.jpeg',
                highlights: true
            },
            {
                title: 'Jujutsu Kaisen 0',
                genre: 'Terror/Ação',
                classif: '+16',
                durac: '01:45:00',
                synopsis: '...',
                note: '10.0',
                poster: 'app/assets/img/banners/Jujutsu-Kaisen-0.jpeg',
                highlights: true
            },
            {
                title: 'Homem-Aranha: Sem Volta para Casa',
                genre: 'Ação/Aventura',
                classif: '+14',
                durac: '02:45:00',
                synopsis: '...',
                note: '8.5',
                poster: 'app/assets/img/banners/homem-aranha-sem-volta-para-casa.jpeg',
                highlights: true
            },
            {
                title: 'Homem-Aranha: Através do Aranhaverso',
                genre: 'Animação/Aventura',
                classif: '+12',
                durac: '02:00:00',
                synopsis: '...',
                note: '9.5',
                poster: 'app/assets/img/banners/ha_atraves.jpeg',
                highlights: true
            }
        ];

        return data;
    }
}