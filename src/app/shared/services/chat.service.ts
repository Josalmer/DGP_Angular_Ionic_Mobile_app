import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  //Revisar ésto porque no sabemos aún el endpoint
  getGroupMessages(groupId: string): Observable<any> {
    return this.http.get('group_chat/' + groupId);
  }

  getChat(params: {}): Observable<any> {
    if (environment.simulated) {
      const messages = [
        { text: 'Buenos dias', sender: 'Paco', sender_id:5, tutor: false, timestamp: '12:03' },
        { text: 'Hola', sender: 'Ana', sender_id:7, tutor: false, timestamp: '12:03' },
        { text: '¿Como estais eh?', sender: 'Ana', sender_id:7, tutor: false, timestamp: '12:04' },
        { text: 'Por aqui estamos bien Gracias por preguntar Nos vemos la semana que viene!!', sender: 'Juan', sender_id:2, tutor: true, timestamp: '12:05' },
        { text: 'Me alegro un monton, a ver si nos vemos en clase luego', sender: 'Ana', sender_id:7, tutor: false, timestamp: '12:07' }
      ];
      return of(messages);
    } else {
      return this.http.get('get-messages', params);
    }
  }

  sendMessage(params: {}): Observable<any> {
    return this.http.post('post-messages', params);
  }

}
