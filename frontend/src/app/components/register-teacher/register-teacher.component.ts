import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {TeacherService} from "../../services/teacher.service";
import {NgForm} from "@angular/forms";
import {Teacher} from "../../models/teacher";


declare var M:any;

@Component({
  selector: 'app-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css'],
  providers : [TeacherService]
})

export class RegisterTeacherComponent implements OnInit {

  constructor(
    private teacherService: TeacherService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  addTeacher(form: NgForm){
    console.log(form.value);
    this.teacherService.postTeacher(form.value)
      .subscribe(res => {
        this.router.navigate(['/login']);
        M.toast({html: 'Se ha guardado con exito'});
      });
  }


  




}
