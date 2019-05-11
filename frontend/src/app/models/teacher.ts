import { Person } from './person';

export class Account {
    constructor(_id = '', university_degree = '', fourth_level_degree= '',timetable='', person = new Person()) {
        this._id = _id;
        this.university_degree = university_degree;
        this.fourth_level_degree = fourth_level_degree;
        this.timetable = timetable;
        this.Person = person;
    }
    
    _id: string;
    university_degree: string;
    fourth_level_degree: string;
    timetable:String;
    Person: Person;
}