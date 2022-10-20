export abstract class Person {
    private _name: string;
    private _email: string;


    set email(value: string) {
        if (!value || value.length < 5) return;

        this._email = value;

    }

    get email() {
        return this._email;
    }

    get name() {
        return this._name;
    }

    constructor(name: string, email: string) {
        this._name = name;
        this._email = email;
    }

    sayHey() {
        console.log(`hello muy name is ${this._name}`);
    }
}


