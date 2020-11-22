import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyTasksService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<any> {
    if (environment.simulated) {
      const arrayOfTasks = [];
      arrayOfTasks.push({ "id": "0", "title": "¡Átatelos!", "description_short": "Tarea para atarse los zapatos" });
      arrayOfTasks.push({ "id": "1", "title": "¡Foto, Foto!", "description_short": "Tarea para hacerse una foto de perfil" });
      arrayOfTasks.push({ "id": "2", "title": "¡Quiero escuchar tu voz!", "description_short": "Tarea para mandar un audio sobre cómo se encuentra el usuario" });
      arrayOfTasks.push({ "id": "3", "title": "¿Como te encuentras hoy?", "description_short": "Tarea para que el usuario comente su estado de ánimo" });
      return of(arrayOfTasks);
    } else {
      return this.http.get('tasks/get');
    }
  }

  getTaskById(id: string): Observable<any> {
    if (environment.simulated) {
      const task = {
        id : 0,
        title: "Átatelos",
        description_large: 'La tarea consiste en atarse los zapatos. ¡Debes atarte los zapatos y mandar una foto con el resultado final!!',
        messages: [
          { sender: 'Tutor 1', text: 'Hola, tienes alguna duda ?', sender_id: "soyyo", tutor: true },
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
    } else {
      return this.http.get('tasks/get/' + id);
    }
  }

}
