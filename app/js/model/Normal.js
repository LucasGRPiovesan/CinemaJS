import { Client } from "./abstract/Client.js";

export class Normal extends Client {

    constructor(name, cpf, birth_date, sex) {

        super(name, cpf, birth_date, sex);
    }

    discount_ticket() {

        return 'discount_ticket for normal';
    }

    discount_combo() {

        return 'discount_combo for normal';
    }

    gifts() {

        return 'gifts for normal';
    }

    session_points() {

        return 'session_points for normal';
    }
}