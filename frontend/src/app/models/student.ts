import { Person } from './person';

export class Account {
    constructor(_id = '', school = '', graduation_grade= '', Person = new Person()) {
        this._id = _id;
        this.school = school;
        this.graduation_grade = graduation_grade;
        this.Person = Person;
    }
    
    _id: string;
    school: string;
    graduation_grade: string;
    Person: Person;
}