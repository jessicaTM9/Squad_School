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
    return this.http.get<ICourse[]>("http://localhost:3000/cursos")    
  }

  add(descricao: string, ementa: string){
    return this.http.post("http://localhost:3000/cursos",{descricao,ementa})

  }
  edit(codigo: number, nome: string){
    console.log(nome);
    
    return this.http.put("http://localhost:3000/cursos/"+codigo,{nome})

  }

  getByCodigo(codigo: number): Observable<ICourse> { //esse list retorna o tipo observable, dentro dele retorna o array.
    return this.http.get<ICourse>("http://localhost:3000/cursos/"+codigo)
  }
  deleteByCodigo(codigo: number) { //esse list retorna o tipo observable, dentro dele retorna o array.
    return this.http.delete("http://localhost:3000/cursos/"+codigo)
  }

}
