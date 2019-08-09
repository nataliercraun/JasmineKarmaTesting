import { Injectable } from '@angular/core';
import { AuthCommunicatorService } from '../_service/auth-communicator.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthInitService {

  constructor(private authCommunicator: AuthCommunicatorService) { }

  fetchApplicationAuth() {
    return this.authCommunicator.fetchApplicationAuth();
    /*return this.userApiService.getApplicationAuth()
      .toPromise()
      .then((authResponse: AuthData) => {
        this.loggedInUserInfo = authResponse.LoggedInUser;
        this.SupportData = authResponse.SupportData;
        this.Token = authResponse.Token;
      })
      .catch((err: any) => {
        this.loggedInUserInfo = null;
        return Promise.resolve();
      })
      .finally(() => Promise.resolve()); */
  }

}
