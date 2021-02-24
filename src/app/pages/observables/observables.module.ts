import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { ObservablesComponent } from './observables.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalAndTimerComponent } from './interval-and-timer/interval-and-timer.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';


@NgModule({
  declarations: [ObservablesComponent, FromEventComponent, IntervalAndTimerComponent, OfFromComponent, ToArrayComponent],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ],
  exports: [ObservablesComponent]
})
export class ObservablesModule { }
