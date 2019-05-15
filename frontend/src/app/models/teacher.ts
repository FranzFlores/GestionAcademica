export class Teacher {
    constructor(dni_person = '', name = '',gender = '',birthday = '', institutional_mail = '',personal_mail = '',address='',phone='',_id = '', university_degree = '', fourth_level_degree= '',timetable='',role="") {
        this._id = _id;
        this.dni_person = dni_person;
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.institutional_mail = institutional_mail;
        this.personal_mail = personal_mail;
        this.address = address;
        this.phone = phone;
        this.university_degree = university_degree;
        this.fourth_level_degree = fourth_level_degree;
        this.timetable = timetable;
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
    university_degree: string;
    fourth_level_degree: string;
    timetable:String;
    role: string;
}