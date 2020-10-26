import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  authKey = "authToken";
  authToken: string;

  constructor(
    private storage: Storage
  ) { }

  async getAuthToken(): Promise<string> {
    if (!this.authToken) {
      await this.storage.get(this.authKey).then(authToken => {
        this.authToken = authToken;
      });
    }
    return this.authToken;
  }

  setAuthToken(authToken: string): void {
    this.storage.set(this.authKey, authToken);
    this.authToken = authToken;
  }

  clearAuthToken(): void {
    this.storage.remove(this.authKey);
    this.authToken = undefined;
  }

  isLoggedIn(): boolean {
    return !!this.authToken;
  }
}
