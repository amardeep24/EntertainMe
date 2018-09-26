import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieService } from "./movie.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { SportsService } from './sports.service';
import { LoggerService } from './logger.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot(),
  ],
  providers: [MovieService, SportsService, LoggerService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
