import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyGroupsService {
  selectedGroup: any;
  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    if (environment.simulated) {
      const groups = [
        { name: 'Actividades 1', identifier: 1, memberCount: 31, messages: 10 },
        { name: 'Apoyo 3', identifier: 2, memberCount: 20, messages: 5 },
        { name: 'Centro', identifier: 3, memberCount: 53, messages: 45 },
        { name: 'La Chana', identifier: 4, memberCount: 45, messages: 32 },
        { name: 'Baile', identifier: 5, memberCount: 13, messages: 45 },
        { name: 'Matemáticas', identifier: 6, memberCount: 45, messages: 33 }
      ];

      return of({ grupos: groups });
    } else {
      return this.http.get('groups/get');
    }
  }

  saveGroup(group: any): void {
    this.selectedGroup = group;
  }

  getSelectedGroup(): any {
    if (this.selectedGroup != undefined)
      return this.selectedGroup;
    else
      return "";
  }
}
