import { Header_View } from "../view/Header_View.js";

export class Header_Controller {

    constructor() {

        throw new Error ('This class cannot be called');
    }

    static display_header() {

        const header = {
            items: ['Home', 'Ingresso', 'Em Exibição', 'Em Breve', 'Login&nbsp;|&nbsp;Cadastro', 'Página do filme (Em Andamento)'],
            href: ["./index.html", "./tickets.html", "./exhibition.html", "./coming-soon.html", "./login.html", "./movie-page.html"]
        };

        const template = new Header_View(header).template

        return template;
    }
}