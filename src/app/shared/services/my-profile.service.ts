import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Storage } from '@ionic/storage';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

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
    if (environment.simulated) {
      return of({"user": {"username": "Juan Perez", "age": 31, "genre": "male", "id": "soyyo"} }).pipe(
        tap(res => {
          this.setUser(res.user);
        })
      );
    } else {
      return this.http.get('users/profile').pipe(
        tap(res => this.setUser(res.user))
      );
    }
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

  getUserGenre(): string{
    return this.user.genre;
  }

  getProgress(): Observable<any> {
    if(environment.simulated){
      const categories = [
        { name: 'Psicomotricidad', done: 1, total: 2},
        { name: 'Escritura', done: 4, total: 4},
        { name: 'Números', done: 8, total: 13}
      ];
      return of({categorias: categories});
    } else{
      //return this.http.get('users/progress'));
      return;
    }
  }
}
