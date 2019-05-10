import { Person } from './person';

export class Account {
    constructor(_id = '', university_degree = '', fourth_level_degree= '',timetable='', Person = new Person()) {
        this._id = _id;
        this.university_degree = university_degree;
        this.fourth_level_degree = fourth_level_degree;
        this.timetable = timetable;
        this.Person = Person;
    }
    
    _id: string;
    university_degree: string;
    fourth_level_degree: string;
    timetable:String;
    Person: Person;
}