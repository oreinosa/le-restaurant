import { AdminModule } from "./admin/admin.module";
import { AdminGuard } from "./auth/admin.guard";
import { AuthGuard } from "./auth/auth.guard";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { NotificationsModule } from "./notifications/notifications.module";

import { AppRoutingModule } from "./app-routing.module";

import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthModule } from "./auth/auth.module";
import { AuthService } from "./auth/auth.service";
import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  imports: [
    BrowserModule,
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
    BrowserAnimationsModule,
    SharedModule,
    NotificationsModule,
    CoreModule,
    AuthModule,
    AdminModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard, AdminGuard]
})
export class AppModule {}
