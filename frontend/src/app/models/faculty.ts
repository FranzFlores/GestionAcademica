
export class Faculty {
    constructor(_id = '', name = '', description = '') {
        this._id = _id;
        this.name = name;
        this.description = description;
    }

    _id: string;
    name: string;
    description: string;
}