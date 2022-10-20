import { Person } from "./person.model.js";

export class Teacher extends Person {
    subject: string;
    constructor(name: string, email: string, subject: string) {
        super(name, email);
        this.subject = subject;
    }


    sayHey(): void {
        console.log(`hello muy name is ${this.name} and i am a prof`);
    }
}