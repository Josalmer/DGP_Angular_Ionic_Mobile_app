import { Component, OnInit } from '@angular/core';
import { ToastAlertService } from 'src/app/shared/services/toast-alert.service';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  selectedPictograms = [];
  pictograms: any;

  constructor(
    private loginService: LoginService,
    private alertService: ToastAlertService
  ) { }

  ngOnInit(): void {
    this.loginService.getPictograms().subscribe(
      response => this.pictograms = response.pictograms
    );
  }

  login(): void {
    let pictogramPassword = '';
    this.selectedPictograms.forEach(pictograms => {
      pictogramPassword += pictograms.key;
    });
    const params = {
      password: pictogramPassword
    };
    this.loginService.login(params).subscribe(
      response => { },
      error => {
        this.alertService.presentToast("No se pudo acceder al sistema", "danger");
        this.clear();
      }
    );
  }

  imgUrl(image: any): string {
    return environment.backend_url + '/' + image;
  }

  addAnimal(animal): void {
    if (this.selectedPictograms.length < 4) {
      this.selectedPictograms.push(animal);
      if (this.selectedPictograms.length === 4) {
        setTimeout(() => {
          this.login();
        }, 1000);
      }
    }
  }

  clear(): void {
    this.selectedPictograms = [];
  }
}
