import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Storage } from '@ionic/storage';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  authKey = "userProfile";
  user: any;

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) { }

  loadUserProfile(): Observable<any> {
    return this.http.get('users/profile').pipe(
      tap(res => this.setUser(res.user))
    );
  }

  setUser(user: any): void {
    this.storage.set(this.authKey, user);
    this.user = user;
  }

  clearUser(): void {
    this.storage.remove(this.authKey);
    this.user = undefined;
  }

  getCurrentUser(): any {
    return this.user;
  }

  loadMockUserProfile(): Observable<any> {
    return of({"user": {"username": "Jose", "age": 31, "genre": "male", "id": "soyyo"} }).pipe(
      tap(res => {
        this.setUser(res.user);
      })
    );
  }

  getUserGenre(): string{
    return this.user.genre;
  }

}
