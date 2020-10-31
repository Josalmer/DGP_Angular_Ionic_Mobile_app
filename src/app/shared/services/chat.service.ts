import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	constructor(private http: HttpClient) {}

	getGroupsByUser(): Observable<any> {
		return this.http.get('XXX');
	}

	getMockedGroup(): Observable<any> {
		const group = { name: 'Grupo 1' };
		return of(group);
	}

	getMockedMessages(): Observable<any> {
		const messages = [
			{ text: 'Buenos dias', sender: 'Paco' },
			{ text: 'Hola', sender: 'Ana' },
			{ text: '¿Como estais?', sender: 'Ana' }
		];
		return of(messages);
	}
}
