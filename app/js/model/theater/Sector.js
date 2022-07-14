export class Sector {

    constructor(sector, rooms) {

        this.sector = sector;
        this.rooms = rooms;
    }

    get sector() { 
    
        return this._sector; 
    }

    get rooms() {

        return this._rooms;
    }

    set sector(sector) { 
    
        this._sector = sector; 
    }

    set rooms(rooms) {

        this._rooms = rooms;
    }
}