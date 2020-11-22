import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getGroupMessages(groupId: string): Observable<any> {
    return this.http.get('group_chat/' + groupId);
  }

  getChat(params: {}): Observable<any> {
    if (environment.simulated) {
      const messages = [
        { body: 'Buenos dias', emisor: 'Paco', emisor_id:5, tutor: false, created: '12:03' },
        { body: 'Hola', emisor: 'Ana', emisor_id:"soyyo", tutor: false, created: '12:03' },
        { body: '¿Como estais eh?', emisor: 'Ana', emisor_id:"soyyo", tutor: false, created: '12:04' },
        { body: 'Por aqui estamos bien Gracias por preguntar Nos vemos la semana que viene!!', emisor: 'Juan', emisor_id:2, tutor: true, created: '12:05' },
        { body: 'Me alegro un monton, a ver si nos vemos en clase luego', emisor: 'Ana', emisor_id:"soyyo", tutor: false, created: '12:07' }
      ];
      return of({mensajes: messages});
    } else {
      return this.http.get('get-messages', params);
    }
  }

  sendMessage(params: {}): Observable<any> {
    return this.http.post('post-messages', params);
  }

}
