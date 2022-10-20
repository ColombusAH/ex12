export class Person {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }
    set email(value) {
        if (!value || value.length < 5)
            return;
        this._email = value;
    }
    get email() {
        return this._email;
    }
    get name() {
        return this._name;
    }
    sayHey() {
        console.log(`hello muy name is ${this._name}`);
    }
}
