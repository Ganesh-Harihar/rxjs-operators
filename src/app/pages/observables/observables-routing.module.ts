import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineAndWithLatestComponent } from './combine-and-with-latest/combine-and-with-latest.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatComponent } from './concat/concat.component';
import { DebounctimeComponent } from './debounctime/debounctime.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { FilterComponent } from './filter/filter.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalAndTimerComponent } from './interval-and-timer/interval-and-timer.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeComponent } from './merge/merge.component';
import { ObservablesComponent } from './observables.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { RetryComponent } from './retry/retry.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
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
  { path: 'tap', component: TapComponent },
  { path: 'take', component: TakeComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'debounce-time', component: DebounctimeComponent },
  { path: 'distinct-until-changed', component: DistinctUntilChangedComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'combine-and-with-latest', component: CombineAndWithLatestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
