import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTaskListService {

  constructor(
    private http: HttpClient
  ) { }

  getUserTasks(): Observable<any> {
    return this.http.get('tasks');
  }

  getMockTaskList(): Observable<any> {
    const arrayOfTasks = [];
    arrayOfTasks.push({"id": "0", "title":"¡Átatelos!", "description": "Tarea para atarse los zapatos"});
    arrayOfTasks.push({"id": "1", "title":"¡Foto, Foto!", "description": "Tarea para hacerse una foto de perfil"});
    arrayOfTasks.push({"id": "2", "title":"¡Quiero escuchar tu voz!", "description": "Tarea para mandar un audio sobre cómo se encuentra el usuario"});
    arrayOfTasks.push({"id": "3", "title":"¿Como te encuentras hoy?", "description": "Tarea para que el usuario comente su estado de ánimo"});

    return of(arrayOfTasks);
  }

}