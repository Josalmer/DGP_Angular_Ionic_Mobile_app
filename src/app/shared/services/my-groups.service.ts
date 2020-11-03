import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MyGroupsService {
	constructor(private http: HttpClient) {}

	getGroups(): Observable<any> {
		return this.http.get('groups');
	}

	getGroupById(id: string): Observable<any> {
		return this.http.get('groups/' + id);
	}

	getMockGroups(): Observable<any> {
		const groups = [
			{ name: 'Grupo Actividades 1', id: 1, participants: 31, messages: 10 },
			{ name: 'Grupo Apoyo 3', id: 2, participants: 20, messages: 5 },
			{ name: 'Grupo Centro', id: 3, participants: 53, messages: 45 },
			{ name: 'Grupo La Chana', id: 4, participants: 45, messages: 32 },
			{ name: 'Grupo Baile', id: 5, participants: 13, messages: 45 },
			{ name: 'Grupo Matemáticas', id: 6, participants: 45, messages: 33 }
		];

		return of(groups);
	}

	getMockGroupById(id: string): Observable<any> {
		return of({ name: 'Grupo Actividades 1', id: 1, participants: 31, messages: 10 });
	}
}
