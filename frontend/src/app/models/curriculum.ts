import { Career } from './career';

export class Curriculum {
    constructor(_id = '', year = '', image = '',  career = new Career()) {
        this._id = _id;
        this.year = year;
        this.image = image;
        this.career = career;
    }

    _id: string;
    year: string;
    image: string;
    career: Career;
}