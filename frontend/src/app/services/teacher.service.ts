import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {Teacher} from "../models/teacher";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

 
  teacher : Teacher;

  readonly URL_API = 'http://localhost:3000/api/person';

  constructor(private http: HttpClient) {
    this.teacher = new Teacher();
  }

  postTeacher(teacher:Teacher){
    return this.http.post(this.URL_API + "/create",teacher);
  }

  


  

}
