import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})
export class EditCoursesComponent implements OnInit {
  coursesForm! : FormGroup
  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private router: Router) { }

  ngOnInit(): void {
    const codigo = this.activatedRoute.snapshot.params['codigo']
    this.coursesForm = this.formBuilder.group({
      descricao: [''], 
      ementa: [''],
      codigo: [codigo]     
    })

    this.coursesService.getByCodigo(codigo).subscribe((cursos)=> {
      this.coursesForm.get('descricao')?.setValue(cursos.descricao)
      this.coursesForm.get('ementa')?.setValue(cursos.ementa)
    })
  }
  salvar(){
    const courses = this.coursesForm.getRawValue()//pega todo valor do form 
    this.coursesService.edit(courses.codigo,courses.descricao,courses.ementa).subscribe(()=>this.router.navigate(['.', 'courses']))
  }
}