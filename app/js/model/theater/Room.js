export class Room {

    constructor(room, sessions) {

        this.room = room;
        this.sessions = sessions;
    }

    get room() {

        return this._room;
    }

    get sessions() {

        return this._sessions;
    }

    set room(room) {

        this._room = room;
    }

    set sessions(sessions) {

        this._sessions = sessions;
    }

}