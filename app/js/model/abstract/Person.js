export class Person {

    constructor(name, cpf, birth_date, gender) {

        this.name = name;
        this.cpf = cpf;
        this.birth_date = birth_date;
        this.gender = gender;
    }

    get name() {

        return this._name;
    }

    get cpf() {

        return this._cpf;
    }

    get birth_date() {

        return this._birth_date;
    }

    get gender() {

        return this._gender;
    }

    set name(name) {

        this._name = name;
    }

    set cpf(cpf) {

        this._cpf = cpf;
    }

    set birth_date(date) {

        this._birth_date = date;
    }

    set gender(gender) {

        this._gender = gender;
    }
}