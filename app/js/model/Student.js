import { Client } from "./abstract/Client.js";

export class Student extends Client {

    constructor(name, cpf, birth_date, sex) {

        super(name, cpf, birth_date, sex);
    }

    discount_ticket() {

        return 'discount_ticket for students';
    }

    discount_combo() {

        return 'discount_combo for students';
    }

    gifts() {

        return 'gifts for students';
    }

    session_points() {

        return 'session_points for students';
    }
}