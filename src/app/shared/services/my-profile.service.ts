import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getUserProfile(id: string): Observable<any> {
    return this.http.get('users/' + id);
  }

  getMockUserProfile(id: string): Observable<any> {
    return of({"user": {"username": "Jose", "age": 31} });
  }

}
