import { CoursesService } from './../courses.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-courses',
  templateUrl: './new-courses.component.html',
  styleUrls: ['./new-courses.component.scss']
})
export class NewCoursesComponent implements OnInit {
  courseForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      descricao: [''],
      ementa: [' '],
    })
  }
  salvar(){
    const course = this.courseForm.getRawValue()//pega todo valor do form 
    this.coursesService.add(course.descricao, course.ementa).subscribe(()=>this.router.navigate(['.', 'courses']))
  }

}
