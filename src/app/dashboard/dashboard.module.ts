import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { GamePageComponent } from './game-page/game-page.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { GameCardComponent } from './game-card/game-card.component';
import { GameModalComponent } from './game-modal/game-modal.component';
import { GameAboutComponent } from './game-about/game-about.component';


@NgModule({
  declarations: [
    GamePageComponent,
    GameCardComponent,
    GameModalComponent,
    GameAboutComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzModalModule
  ]
})
export class DashboardModule { }
