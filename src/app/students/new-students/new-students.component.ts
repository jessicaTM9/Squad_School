import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.scss']
})
export class NewStudentsComponent implements OnInit {
  studentForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private studentsService: StudentsService, private router: Router) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      nome: [''],
      
    })
  }
  salvar(){
    const student = this.studentForm.getRawValue()//pega todo valor do form 
    this.studentsService.add(student.name).subscribe(()=>this.router.navigate(['.', 'students']))
  }
}
