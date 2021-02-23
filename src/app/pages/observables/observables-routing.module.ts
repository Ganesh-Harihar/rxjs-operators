import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalAndTimerComponent } from './interval-and-timer/interval-and-timer.component';
import { ObservablesComponent } from './observables.component';
import { OfFromComponent } from './of-from/of-from.component';

const routes: Routes = [
  { path: '', component: ObservablesComponent },
  { path: 'from-event', component: FromEventComponent },
  { path: 'interval-and-timer', component: IntervalAndTimerComponent },
  { path: 'of-from', component: OfFromComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }