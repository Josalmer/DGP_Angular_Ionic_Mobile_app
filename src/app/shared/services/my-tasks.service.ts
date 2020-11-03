import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTasksService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<any> {
    return this.http.get('tasks');
  }

  getTaskById(id: string): Observable<any> {
    return this.http.get('tasks/' + id);
  }

  getMockTasks(): Observable<any> {
    const arrayOfTasks = [];
    arrayOfTasks.push({ "id": "0", "title": "¡Átatelos!", "description": "Tarea para atarse los zapatos" });
    arrayOfTasks.push({ "id": "1", "title": "¡Foto, Foto!", "description": "Tarea para hacerse una foto de perfil" });
    arrayOfTasks.push({ "id": "2", "title": "¡Quiero escuchar tu voz!", "description": "Tarea para mandar un audio sobre cómo se encuentra el usuario" });
    arrayOfTasks.push({ "id": "3", "title": "¿Como te encuentras hoy?", "description": "Tarea para que el usuario comente su estado de ánimo" });

    return of(arrayOfTasks);
  }

  getMockTaskById(id: string): Observable<any> {
    const task = {
      title: "Tarea para atarse los zapatos",
      description: 'La tarea consiste en atarse los zapatos. ¡Debes atarte los zapatos y mandar una foto con el resultado final!!',
      messages: [
        { sender: 'Tutor 1', text: 'Hola, tienes alguna duda ?' },
        { sender: 'Alumno 1', text: 'No gracias' },
        { sender: 'Tutor 1', text: 'Seguro?' },
        { sender: 'Alumno 1', text: 'Si' },
        { sender: 'Tutor 1', text: 'De verdad?' },
        { sender: 'Alumno 1', text: 'Siuuuuuu' },
        { sender: 'Tutor 1', text: '¿Pur que?' },
        { sender: 'Alumno 1', text: 'SIUUUUUUUUUUUUUUU' }
      ]
    };
    return of(task);
  }

}
