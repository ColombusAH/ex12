import { Person } from "./person.model.js";
export class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
    sayHey() {
        console.log(`hello muy name is ${this.name} and i am a prof`);
    }
}
