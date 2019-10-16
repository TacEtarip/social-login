import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { AppComponent } from './app.component';

let config = new AuthServiceConfig([{
  id: GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider('924428838820-manqd1qir8n00r4evkoe43jvgthih6cp.apps.googleusercontent.com')
}, {
  id: FacebookLoginProvider.PROVIDER_ID,
  provider: new FacebookLoginProvider('695930187569250')
}
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [
    { provide: AuthServiceConfig, useFactory: provideConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
