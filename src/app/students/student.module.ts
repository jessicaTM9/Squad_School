import { StudentRoutingModule } from './student-routing.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './students.component';
import { NewStudentsComponent } from './new-students/new-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';



@NgModule({
  declarations: [
    StudentsComponent,
    NewStudentsComponent,
    EditStudentsComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
