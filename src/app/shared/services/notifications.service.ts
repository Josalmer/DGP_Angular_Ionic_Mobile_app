import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';
import { Platform } from '@ionic/angular';

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private http: HttpClient,
    private platform: Platform,
  ) { }

  isMobile(): boolean {
    return (this.platform.is('cordova') && this.platform.is('android'));
  }

  updateDeviceToken(params = {}): Observable<any> {
    return this.http.post('device-token', params);
  }

  async registerDevice() {
    if (!this.isMobile()) { return; }
    PushNotifications.requestPermission().then(result => {
      if (result.granted) {
        PushNotifications.register();
      } else {
        alert('Device resgister fail');
      }
    });
  }

  initPushNotifications(): void {
    if (!this.isMobile()) { return; }
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        this.updateDeviceToken({ token: token.value }).subscribe();
      }
    );

    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Device resgister fail:' + JSON.stringify(error));
      }
    );

    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        // alert(notification.data.message);
      }
    );
  }

}
