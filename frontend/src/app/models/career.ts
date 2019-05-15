import { Faculty } from './faculty';

export class Career {
    constructor(_id = '', name = '', description = '', diploma = '', numPeriod = '', timePeriod = '', faculty = new Faculty()) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.diploma = diploma;
        this.numPeriod = numPeriod;
        this.timePeriod = timePeriod;
        this.faculty = faculty;
    }

    _id: string;
    name: string;
    description: string;
    diploma: string;
    numPeriod: string;
    timePeriod: string;
    faculty: Faculty;
}