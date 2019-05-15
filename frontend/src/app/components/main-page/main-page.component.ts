import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  teacherRegister(){
    this.router.navigate(['/register-teacher']);
  }

  studentRegister(){
    this.router.navigate(['/register-student']);
  }

  login(){
    this.router.navigate(['/login']);
  }

}
