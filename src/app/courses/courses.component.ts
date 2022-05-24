import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICourse } from './courses';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses!: ICourse[];
 
  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courseService.list().subscribe((cursos)=>this.courses= cursos)
  }
  remover(codigo: number){
    console.log(codigo);
    
    this.courseService.deleteByCodigo(codigo).subscribe(
      ()=>{
  //pra uma aplicação grande pode ficar pesado fazer requisição pro back
       const novaListaStudantes= this.courses.filter(
          (cursos)=>cursos.codigo != codigo
        )
         this.courses = novaListaStudantes
      }
    )
  }


}
