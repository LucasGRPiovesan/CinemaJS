import { Client } from "./abstract/Client.js";

export class Premium extends Client {

    constructor(name, cpf, birth_date, sex) {

        super(name, cpf, birth_date, sex);
    }

    discount_ticket() {

        return 'discount_ticket for premium';       
    }

    discount_combo() {

        return 'discount_combo for premium';
    }

    gifts() {

        return 'gifts for premium';
    }

    session_points() {

        return 'session_points for premium';
    }
}