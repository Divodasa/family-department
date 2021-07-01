import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { StructureComponent } from './left-bar/structure/structure.component';
import { StatementComponent } from './left-bar/statement/statement.component';
import { CalendarComponent } from './left-bar/calendar/calendar.component';
import { ConsultantsComponent } from './left-bar/consultants/consultants.component';



@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent, LeftBarComponent, RightBarComponent, MainContentComponent, StructureComponent, StatementComponent, CalendarComponent, ConsultantsComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
