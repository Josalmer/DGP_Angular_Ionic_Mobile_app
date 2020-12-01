import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from 'src/app/shared/services/session.service';
import { NavController } from '@ionic/angular';
import { MyProfileService } from 'src/app/shared/services/my-profile.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    private navCtrl: NavController,
    private profileService: MyProfileService
  ) { }

  login(params: any): Observable<any> {
    return this.http.post('users/login', params).pipe(
      tap(res => this.saveToken(res))
    );
  }

  logout(): Observable<any> {
    return this.http.post('users/logout', {});
  }

  saveToken = (res: any) => {
    const authToken = res.token;
    this.sessionService.setAuthToken(authToken);
    this.profileService.loadUserProfile().subscribe(
      response => this.navCtrl.navigateRoot(['/'])
    );
  }

  getPictograms(): Observable<any> {
    return this.http.get('users/pictograms');
  }
}
