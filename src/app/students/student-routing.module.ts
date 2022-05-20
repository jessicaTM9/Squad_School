import { EditStudentsComponent } from './edit-students/edit-students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewStudentsComponent } from './new-students/new-students.component';
import { StudentsComponent } from './students.component';
const routes: Routes = [ 
    {path: ':codigo', component: EditStudentsComponent},
    {path: 'add', component: NewStudentsComponent},
    {path: '', component: StudentsComponent, pathMatch: 'full'},
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentRoutingModule{}