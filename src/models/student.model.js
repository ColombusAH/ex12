import { Person } from "./person.model.js";
export class Student extends Person {
    constructor(name, email) {
        super(name, email);
        this.grades = [];
    }
    sayHey() {
        console.log(`hello muy name is ${this.name} andd i am a student`);
    }
}
