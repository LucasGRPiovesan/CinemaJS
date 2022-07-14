export class Footer_View {

    constructor(footer) {

        this.template = footer;
    }

    get template() {

        return this._template;
    }

    set template(component) {

        this._template = `
            <h3 class="base-footer__logo">CinemaJS&copy;&nbsp;|&nbsp;${component.year}</h3>
            <hr class="base-footer__line">
            <div class="base-footer__links">
                <a href=${component.href[0]} target="_blank"></a>
                <a href=${component.href[1]} target="_blank"></a>
            </div>
        `;
    }
}