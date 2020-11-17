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
      { text: 'Buenos dias', sender: 'Paco' },
      { text: 'Hola', sender: 'Ana' },
      { text: '¿Como estais?', sender: 'Ana' }
    ];
    return of(messages);
  }

  sendMessage(params: {}): Observable<any> {
    return this.http.post('post-messages', params);
  }

}
