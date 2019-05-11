import { Person } from './person';

export class Account {
    constructor(_id = '', user = '', password = '', person = new Person()) {
        this._id = _id;
        this.user = user;
        this.password = password;
        this.Person = person;
    }

    _id: string;
    user: string;
    password: string;
    Person: Person;
}