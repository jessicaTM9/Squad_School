import { Component, OnInit } from '@angular/core';
import { IStudent } from './students';
import { StudentsService } from './students.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students!: IStudent[];
  constructor( private studentsService : StudentsService) { }

  ngOnInit(): void {
    this.studentsService.list().subscribe((estudante)=>this.students= estudante)
  }
remover(codigo: number){
  console.log(codigo);
  
  this.studentsService.deleteByCodigo(codigo).subscribe(
    ()=>{
//pra uma aplicação grande pode ficar pesado fazer requisição pro back
     const novaListaStudantes= this.students.filter(
        (estudante)=>estudante.codigo != codigo
      )
       this.students = novaListaStudantes
    }
  )
}

}
