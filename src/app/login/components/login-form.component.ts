import { Component, OnInit } from '@angular/core';
import { ToastAlertService } from 'src/app/shared/services/toast-alert.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  selectedAnimals = [];
  animals: any;

  constructor(
    private loginService: LoginService,
    private alertService: ToastAlertService
  ) { }

  ngOnInit(): void {
    this.loginService.getPictograms().subscribe(
      response => this.animals = response.pictograms
    );
  }

  login(): void {
    let animalPassword = '';
    this.selectedAnimals.forEach(animal => {
      animalPassword += animal.key;
    });
    const params = {
      password: animalPassword
    };
    this.loginService.login(params).subscribe(
      response => { },
      error => {
        this.alertService.presentToast("No se pudo acceder al sistema", "danger");
        this.clear();
      }
    );
  }

  imgUrl(animal: any): string {
    return "../../../../assets/img/" + animal.name + ".png";
  }

  addAnimal(animal): void {
    if (this.selectedAnimals.length < 6) {
      this.selectedAnimals.push(animal);
      if (this.selectedAnimals.length === 6) {
        setTimeout(() => {
          this.login();
        }, 1000);
      }
    }
  }

  clear(): void {
    this.selectedAnimals = [];
  }
}
