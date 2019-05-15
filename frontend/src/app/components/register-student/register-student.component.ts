import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {StudentService} from "../../services/student.service";
import {NgForm} from "@angular/forms";
import {Student} from "../../models/student";

declare var M:any;

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addStudent(form: NgForm){
    console.log(form.value);
   // this.studentService.postStudent(form.value)
     // .subscribe(res=>{
       // this.router.navigate(['/login']);
       // M.toast({html: 'Se ha guardado con exito'});
      //});
  }

}
