import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { HttpClientModule } from '@angular/common/http';
import { NewCoursesComponent } from './new-courses/new-courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';



@NgModule({
  declarations: [
    CoursesComponent,
    NewCoursesComponent,
    EditCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class CoursesModule { }
