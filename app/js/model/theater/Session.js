export class Session {

    constructor(session, armchairs) {

        this.session = session;
        this.armchairs = armchairs;
    }

    get session() {

        return this._session;
    }

    get armchairs() {

        return this._armchairs;
    }

    set session(session) {

        this._session = session;
    }

    set armchairs(armchairs) {

        this._armchairs = armchairs;
    }
}