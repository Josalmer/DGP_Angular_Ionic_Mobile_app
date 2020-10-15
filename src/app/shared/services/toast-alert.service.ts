import { Injectable } from "@angular/core";
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastAlertService {

  constructor(
    private toastCtrl: ToastController
    ) { }

  public async presentToast(messageIn: string, colorIn: string) {
    const toast = await this.toastCtrl.create({
      message: messageIn,
      color: colorIn,
      duration: 4000,
      position: 'top'
    });

    toast.present();
  }

}
