import { Student } from './models/student.model.js';
import { Teacher } from './models/teacher.model.js';
const s1 = new Student('student', 's@email.com');
const t1 = new Teacher('teacher', 't@email.com', 'Program');
const everybody = [s1, t1];
for (const person of everybody) {
    person.sayHey();
}
