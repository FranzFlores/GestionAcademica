import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Student} from "../models/student";
@Injectable({
  providedIn: 'root'
}) 
export class StudentService {

  student : Student;
  readonly URL_API = 'http://localhost:3000/api/person';

  constructor(private http: HttpClient) {
    this.student = new Student();
  }

  postStudent(student:Student){
    return this.http.post(this.URL_API + "/create",student);
  }

}
