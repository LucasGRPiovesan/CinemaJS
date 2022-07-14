export class Ticket {

    constructor(movie, client) {

        this.movie = movie;
        this.client = client;
    }

    get movie() {

        return this._movie;
    }

    get client() {

        return this._client;
    }

    set movie(movie) {

        this._movie = movie;
    }

    set client(client) {

        this._client = client;
    }
    
}