import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from 'src/app/shared/services/session.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    private navCtrl: NavController
  ) { }

  login(password: string): Observable<any> {
    return this.http.get('login/' + password).pipe(
      tap(res => this.saveToken(res))
    );
  }

  saveToken = (res: any) => {
    const authToken = 'Bearer ' + res.token;
    this.sessionService.setAuthToken(authToken);
    this.navCtrl.navigateRoot(['/']);
  }
}
