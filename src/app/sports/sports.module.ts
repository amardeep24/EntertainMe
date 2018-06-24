import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './sports/sports.component';
import { SportsHeadlinesComponent } from './sports-headlines/sports-headlines.component';
import { SportsService } from '../sports.service';

@NgModule({
  imports: [
    CommonModule,
    SportsRoutingModule
  ],
  declarations: [SportsComponent, SportsHeadlinesComponent]
})
export class SportsModule { }
