
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', loadChildren: ()=> import ("./home/home.module").then(m => m.HomeModule)},
  {path: 'courses', loadChildren: ()=> import ("./courses/courses.module").then(m => m.CoursesModule)},
  {path: 'students', loadChildren: ()=> import ("./students/student.module").then(m => m.StudentModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
