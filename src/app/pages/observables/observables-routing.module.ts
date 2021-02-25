import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalAndTimerComponent } from './interval-and-timer/interval-and-timer.component';
import { MapComponent } from './map/map.component';
import { ObservablesComponent } from './observables.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { ToArrayComponent } from './to-array/to-array.component';

const routes: Routes = [
  { path: '', component: ObservablesComponent },
  { path: 'from-event', component: FromEventComponent },
  { path: 'interval-and-timer', component: IntervalAndTimerComponent },
  { path: 'of-from', component: OfFromComponent },
  { path: 'to-array', component: ToArrayComponent },
  { path: 'map', component: MapComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'filter', component: FilterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
