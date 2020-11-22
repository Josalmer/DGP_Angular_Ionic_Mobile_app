import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyGroupsService {
  groups: any;
  selectedGroup: any;
  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    if (environment.simulated) {
      this.groups = [
        { name: 'Actividades 1', identifier: 1, memberCount: 31, messages: 10 },
        { name: 'Apoyo 3', identifier: 2, memberCount: 20, messages: 5 },
        { name: 'Centro', identifier: 3, memberCount: 53, messages: 45 },
        { name: 'La Chana', identifier: 4, memberCount: 45, messages: 32 },
        { name: 'Baile', identifier: 5, memberCount: 13, messages: 45 },
        { name: 'Matemáticas', identifier: 6, memberCount: 45, messages: 33 }
      ];

      return of(this.groups);
    } else {
      this.groups = this.http.get('groups/get')
      return this.groups;
    }
  }

  saveGroup(group: any): void {
    this.selectedGroup = group;
  }

  getSelectedGroup(): Observable<any> {
    if (environment.simulated) {
      return of({ name: 'Actividades 1', identifier: 1, memberCount: 31, messages: 10 });
    }
    else {
      return of(this.selectedGroup);
    }
  }
}
