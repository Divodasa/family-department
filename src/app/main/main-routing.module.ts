import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { MainContentComponent } from './main-content/main-content.component';
import { StructureComponent } from './left-bar/structure/structure.component';
import { StatementComponent } from './left-bar/statement/statement.component';
import { CalendarComponent } from './left-bar/calendar/calendar.component';
import { ConsultantsComponent } from './left-bar/consultants/consultants.component';
const routes: Routes = [
  {
    path: 'main', component: MainComponent, children: [
      { path: 'content', component: MainContentComponent },
      { path: 'structure', component: StructureComponent },
      { path: 'statement', component: StatementComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'consultants', component: ConsultantsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
