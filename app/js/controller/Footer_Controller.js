import { Footer_View } from "../view/Footer_View.js";

export class Footer_Controller {

    constructor() {

        throw new Error ('This class cannot be called');
    }

    static display_footer() {

        const footer = {
            year: new Date().getFullYear(),
            href: [
                "https://www.linkedin.com/in/lucas-guilherme-ramos-piovesan-21154217b/", 
                "https://github.com/LucasGRPiovesan/CinemaJS" 
            ]
        };

        const template = new Footer_View(footer).template

        return template;
    }
}