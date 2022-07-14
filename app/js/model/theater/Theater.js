export class Theater {

    constructor(theater, address, sectors) {

        this.theather = theater;
        this.address = address;
        this.sectors = sectors;
    }

    get theater() { 
        
        return this._theater;
    }

    get address() { 
        
        return this._address;
    }

    get sectors() { 

        return this._sectors;
    }

    set theater(theater) { 
        
        this._theater = theater;
    }

    set address(address) {  
        
        this._address = address;
    }

    set sectors(sectors) { 

        this._sectors = sectors;
    }
}