import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient) { }

  getGroupMessages(groupId: string): Observable<any> {
    return this.http.get('group_chat/' + groupId);
  }

  getTaskMessages(taskId: string): Observable<any> {
    return this.http.get('task_chat/' + taskId);
  }

  getMockedMessages(id: string): Observable<any> {
    const messages = [
      { text: 'Buenos dias', sender: 'Paco' },
      { text: 'Hola', sender: 'Ana' },
      { text: '¿Como estais?', sender: 'Ana' }
    ];
    return of(messages);
  }
}
