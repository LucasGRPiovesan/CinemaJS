export class Movie_View {

    constructor(movie) {

        this.template = movie;
    }

    get template() {

        return this._template;
    }

    set template(component) {

        this._template = '';

        for (let i = 0; i < component.length; i++) {
            
            this._template += `
                <a class="principal__exhibition___movie" href="#">
                    <img class="principal__exhibition___movie--poster" src="${component[i].poster}" alt="">
                </a>
            `;
        }
    }

}