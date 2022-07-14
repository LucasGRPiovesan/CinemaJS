export class Header_View {

    constructor(header) {

        this.template = header;
    }

    get template() {

        return this._template;
    }

    set template(component) {

        this._template = `
            <h1 class="base-header__title">Cinema<img src="./app/assets/img/js.png" alt=""></h1>
            <nav class="base-header__menu">
                ${ this.template_items(component) }
            </nav>
        `;
    }

    template_items(component) {

        let itens_template = '';
        let locale = "." + window.location.pathname;

        for (let i = 0; i < component.items.length; i++) {
            itens_template += `<a class="base-header__menu--item ${(component.href[i] == locale) ? 'active' : (window.location.pathname == "/" && component.items[i] == "Home")?"active":""}" href="${component.href[i]}">${component.items[i]}</a>`
        }

        return itens_template;
    }
}