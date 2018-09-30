import { SharedModule } from './../shared/shared/shared.module';
import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
