import { NewCoursesComponent } from './new-courses/new-courses.component';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [ 
    // {path: ':codigo', component: EditCoursesComponent},
    {path: '', component: CoursesComponent, pathMatch: 'full'},
    {path: 'add', component: NewCoursesComponent },

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoursesRoutingModule{}