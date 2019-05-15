import { Curriculum} from './curriculum';

export class Subject {
    constructor(_id = '', name = '', numCredit = '', syllable = '', curriculum = new Curriculum()) {
        this._id = _id;
        this.name = name;
        this.numCredit = numCredit;
        this.syllable = syllable;
        this.curriculum = curriculum;
    }

    _id: string;
    name: string;
    numCredit: string;
    syllable: string;
    curriculum: Curriculum;
}