export class Movie {

    constructor(title, genre, classification, duraction, synopsis, note, poster, highlights/*,cinema*/) {

        this.title = title;
        this.genre = genre;
        this.classification = classification;
        this.duraction = duraction;
        this.synopsis = synopsis;
        this.note = note;
        this.poster = poster;
        this.highlights = highlights;
        //this.cinema = cinema;
    }

    get title() {

        return this._title;
    }

    get genre() {

        return this._genre;
    }

    get classification() {

        return this._classification;
    }

    get duraction() {

        return this._duraction;
    }

    get synopsis() {

        return this._synopsis;
    }

    get note() {

        return this._note;
    }

    get poster() {

        return this._poster;
    }

    get highlights() {

        return this._highlights;
    }

    /*get cinema() {

        return this._cinema;
    }*/

    set title(title) {

        this._title = title;
    }

    set genre(genre) {

        this._genre = genre;
    }

    set classification(classification) {

        this._classification = classification;
    }

    set duraction(duraction) {

        this._duraction = duraction;
    }

    set synopsis(synopsis) {

        this._synopsis = synopsis;
    }

    set note(note) {

        this._note = note;
    }

    set poster(poster) {

        this._poster = poster;
    }

    set highlights(highlights) {

        this._highlights = highlights;
    }

    /*set cinema(cinema) {

        this._cinema = cinema;
    }*/
}