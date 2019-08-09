import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// on interceptor's: https://medium.com/@er.surajnegi/what-are-angular-http-interceptors-and-how-to-create-them-82d1d6159c4e
// import { TokenInterceptor } from '@am/core/auth/TokenInterceptor';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiAuthInitService } from './_service/api-auth-init.service';

/**
 * Call the loggedInUserInfo from the AM UI web layer, to get the auth token to call the AM APIs.
 * @param apiAuthInit ApiAuthInitService
 */
export function appInitServiceFactory(apiAuthInit: ApiAuthInitService): any {
  return () => apiAuthInit.fetchApplicationAuth();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiAuthInitService,
    {  provide: APP_INITIALIZER, useFactory: appInitServiceFactory, deps: [ApiAuthInitService], multi: true }
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
