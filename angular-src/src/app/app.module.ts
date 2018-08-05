import { SharedModule } from './shared/shared.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { NotificationsModule } from "./notifications/notifications.module";

import { AppRoutingModule } from "./app-routing.module";

import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthModule } from "./auth/auth.module";
import { JwtModule } from "@auth0/angular-jwt";
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { ViewImagePipe } from './shared/pipes/view-image.pipe';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [
          "localhost:8080",
          "localhost",
          "127.0.0.1",
          "thenewfuturesv.com",
          "www.thenewfuturesv.com"
        ]
      }
    }),
    SharedModule,
    NotificationsModule,
    CoreModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    CapitalizePipe,
    ViewImagePipe
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
