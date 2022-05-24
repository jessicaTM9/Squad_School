import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.scss']
})
export class EditStudentsComponent implements OnInit {
studentForm! : FormGroup
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private studentsService: StudentsService,
    private router: Router
  ){ }
 
  ngOnInit(): void {
     const codigo = this.activatedRoute.snapshot.params['codigo']
    this.studentForm = this.formBuilder.group({
      nome: [''], 
      codigo: [codigo]     
    })

    this.studentsService.getByCodigo(codigo).subscribe((estudante)=> {
      this.studentForm.get('nome')?.setValue(estudante.nome)
    })
  
  }

  salvar(){
    const student = this.studentForm.getRawValue()//pega todo valor do form 
    this.studentsService.edit(student.codigo,student.nome).subscribe(()=>this.router.navigate(['.', 'students']))
  }

}
