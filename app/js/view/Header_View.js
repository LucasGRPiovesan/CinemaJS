import { FUNCTIONS } from "../functions.js";

export class Header_View {

    constructor(header) {

        this.template = header;
    }

    get template() {

        return this._template;
    }

    set template(component) {

        this._template = `
            <div class="base-header__mobile">
                <span class="base-header__mobile--icon"></sapn>
            </div>
            <h1 class="base-header__title">Cinema<img src="./app/assets/img/js.png" alt=""></h1>
            ${this.template_profile()}
            <nav class="base-header__menu">
                ${ this.template_items(component) }
            </nav>
        `;
    }

    template_items(component) {

        let itens_template = '';

        for (let i = 0; i < component.items.length; i++) {
            itens_template += `<a class="base-header__menu--item ${(FUNCTIONS.verify_active(window.location.pathname) == component.href[i])?'active':""}" href="${component.href[i]}">${component.items[i]}</a>`
        }

        return itens_template;
    }

    template_profile() {

        return `
            <a class="base-header__profile-image ${(window.location.pathname == "/user-page.html" || window.location.pathname == "/CinemaJS/user-page.html")?'active_user-page':''}" href="./user-page.html"></a>
            <span class="base-header__profile-name">Olá, Lucas.</span>
        `;
    }
}