import { Person } from './person';

export class Account {
    constructor(_id = '', user = '', password = '', Person = new Person()) {
        this._id = _id;
        this.user = user;
        this.password = password;
        this.Person = Person;
    }

    _id: string;
    user: string;
    password: string;
    Person: Person;
}