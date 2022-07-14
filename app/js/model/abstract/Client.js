import { Person } from "./Person.js";

export class Client extends Person {

    constructor(name, cpf, birth_date, gender) {

        super(name, cpf, birth_date, gender);
    }

    discount_ticket() {

        throw new Error ('The method discount_ticket cannot be called.');
    }

    discount_combo() {

        throw new Error ('The method discount_combo cannot be called.');
    }

    gifts() {

        throw new Error ('The method gifts cannot be called.');
    }

    session_points() {

        throw new Error ('The method session_points cannot be called.');
    }
}