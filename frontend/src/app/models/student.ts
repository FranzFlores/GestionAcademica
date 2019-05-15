export class Student {
    constructor(_id = '', dni_person = '', name = '',gender = '',birthday = '', institutional_mail = '',personal_mail = '',address='',phone='', school = '', graduation_grade= '',role='') {
        this._id = _id;
        this.dni_person = dni_person;
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.institutional_mail = institutional_mail;
        this.personal_mail = personal_mail;
        this.address = address;
        this.phone = phone;
        this.school = school;
        this.graduation_grade = graduation_grade;
        this.role = role;
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
    school: string;
    graduation_grade: string;
    role: string;
}