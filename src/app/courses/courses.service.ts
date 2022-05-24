import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from './courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

  }

  list(): Observable<ICourse[]> { //esse list retorna o tipo observable, dentro dele retorna o array.
    return this.http.get<ICourse[]>("http://localhost:3000/courses")    
  }

  add(descricao: string, ementa: string){
    return this.http.post("http://localhost:3000/courses",{descricao,ementa})

  }
  edit(codigo: number, descricao: string, ementa:string){
    
    return this.http.put("http://localhost:3000/courses/"+codigo,{descricao, ementa})

  }

  getByCodigo(codigo: number): Observable<ICourse> { //esse list retorna o tipo observable, dentro dele retorna o array.
    return this.http.get<ICourse>("http://localhost:3000/courses/"+codigo)
  }
  deleteByCodigo(codigo: number) { //esse list retorna o tipo observable, dentro dele retorna o array.
    return this.http.delete("http://localhost:3000/courses/"+codigo)
  }

}
