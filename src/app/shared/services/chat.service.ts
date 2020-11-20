import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient) { }

  //Revisar ésto porque no sabemos aún el endpoint
  getGroupMessages(groupId: string): Observable<any> {
    return this.http.get('group_chat/' + groupId);
  }

  getMockedMessages(id: string): Observable<any> {
    const messages = [
			{ text: 'Buenos dias', sender: 'Paco', timestamp: '12:03' },
			{ text: 'Hola', sender: 'Ana', timestamp: '12:03' },
      { text: '¿Como estais eh?', sender: 'Ana', timestamp: '12:04' },
      { text: 'Por aqui estamos bien Gracias por preguntar Nos vemos la semana que viene!!', sender: 'Juan', timestamp: '12:05' },
      { text: 'Me alegro un monton, a ver si nos vemos en clase luego', sender: 'Ana', timestamp: '12:07' }
		];
    return of(messages);
  }

  sendMessage(params: {}): Observable<any> {
    return this.http.post('post-messages', params);
  }

}
