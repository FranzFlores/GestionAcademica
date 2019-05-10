export class Person {

    constructor(_id = '', dni_person = '', name = '',gender = '',birthday = '', institutional_mail = '',personal_mail = '',address='',phone='') {
        this._id = _id;
        this.dni_person = dni_person;
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.institutional_mail = institutional_mail;
        this.personal_mail = personal_mail;
        this.address = address;
        this.phone = phone;
    }

    _id: string;
    dni_person: String;
    name: String;
    gender: String;
    birthday: String;
    institutional_mail:String;
    personal_mail: String;
    address:String;
    phone: String;
}