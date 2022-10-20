import { Person } from "./person.model.js";

export class Student extends Person {
    private grades: number[];

    constructor(name: string, email: string) {
        super(name, email);
        this.grades = [];
    }

    sayHey(): void {
        console.log(`hello muy name is ${this.name} andd i am a student`);
    }

}