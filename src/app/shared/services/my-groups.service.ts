import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyGroupsService {
  constructor(private http: HttpClient) { }

  getGroupsByUser(): Observable<any> {
    return this.http.get('XXX');
  }

  getGroupChat(id: string, groupId: string): Observable<any> {
    return;
  }

  getMockGroups(): Observable<any> {
    const groups = [
      { name: 'Grupo Actividades 1', participants: 31, messages: 10 },
      { name: 'Grupo Apoyo 3', participants: 20, messages: 5 },
      { name: 'Grupo Centro', participants: 53, messages: 45 },
      { name: 'Grupo La Chana', participants: 45, messages: 32 }
    ];

    return of(groups);
  }
}
