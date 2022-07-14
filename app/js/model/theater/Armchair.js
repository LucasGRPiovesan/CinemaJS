export class Armchair {

    constructor(armchair, row, column) {

        this.armchair = armchair;
        this.row = row;
        this.column = column;
    }

    get armchair() {

        return this._armchair;
    }

    get row() {

        return this._row;
    }

    get column() {

        return this._column;
    }

    set armchair(armchair) {

        this._armchair = armchair;
    }

    set row(row) {

        this._row = row;
    }

    set column(column) {

        return this._column = column;
    }
}