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
      arrayOfTasks.push({ "id_tarea": "0", "title": "¡Átatelos!", "shortDescription": "Tarea para atarse los zapatos", "category": "psicomotricidad", "status":{"finished":true, "finishedComment":"Muy bien terminada la tarea. Sí señor!"} });
      arrayOfTasks.push({ "id_tarea": "1", "title": "¡Foto, Foto!", "shortDescription": "Tarea para hacerse una foto de perfil", "category": "psicomotricidad", "status":{"finished":false, "finishedComment":""} });
      arrayOfTasks.push({ "id_tarea": "2", "title": "¡Quiero escuchar tu voz!", "shortDescription": "Tarea para mandar un audio sobre cómo se encuentra el usuario", "category": "escritura", "status":{"finished":true, "finishedComment":"Estupendo!! Que maravilla de tarea"} });
      arrayOfTasks.push({ "id_tarea": "3", "title": "¿Como te encuentras hoy?", "shortDescription": "Tarea para que el usuario comente su estado de ánimo", "category": "números", "status":{"finished":false, "finishedComment":""} });
      return of({tasks: arrayOfTasks});
    } else {
      return this.http.get('tasks/get');
    }
  }

  getTaskById(id: string): Observable<any> {
    if (environment.simulated) {
      const task = {
        id_tarea : 0,
        title: "Átatelos",
        shortDescription: "Tarea para atarse los zapatos",
        status:{
          finished: true,
          finishedComment:"Muy bien terminada la tarea. Sí señor!"
        },
        fullDescription: "La tarea consiste en atarse los zapatos. ¡Debes atarte los zapatos y mandar una foto con el resultado final!!",
        image: "/assets/img/charla-grupo.png",
        mediaDescription: null,
        category: "psicomotricidad",
        rating: {
          text: "",
          difficulty: 3,
          utility: 4
        }
      };
      return of({task: task});
    } else {
      return this.http.get('tasks/get/' + id);
    }
  }

  rateTask(rate: any) : Observable<any>{
    if(environment.simulated){
      console.log("Has votado\n",rate);
    }
    else{
      return this.http.post('tasks/rate/', rate);
    }
  }

}
