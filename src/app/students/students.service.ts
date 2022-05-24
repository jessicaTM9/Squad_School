import { StudentsComponent } from './students.component';
import { IStudent } from './students';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {

  }

  list(): Observable<IStudent[]> { //esse list retorna o tipo observable, dentro dele retorna o array.
    return this.http.get<IStudent[]>("http://localhost:3000/students")    
  }

  add( nome: string){
    return this.http.post("http://localhost:3000/students",{nome})

  }
  
  edit(codigo: number, nome: string){
    console.log(nome);
    
    return this.http.put("http://localhost:3000/students/"+codigo,{nome})

  }

  getByCodigo(codigo: number): Observable<IStudent> { //esse list retorna o tipo observable, dentro dele retorna o array.
    return this.http.get<IStudent>("http://localhost:3000/students/"+codigo)
  }
  deleteByCodigo(codigo: number) { //esse list retorna o tipo observable, dentro dele retorna o array.
    return this.http.delete<IStudent>("http://localhost:3000/students/"+codigo)
  }
}
