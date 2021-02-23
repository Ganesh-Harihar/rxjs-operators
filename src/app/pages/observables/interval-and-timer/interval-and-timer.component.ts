import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription, timer } from 'rxjs'
import { DesignUtilityService } from 'src/app/services/design-utility.service';
@Component({
  selector: 'app-interval-and-timer',
  templateUrl: './interval-and-timer.component.html',
  styleUrls: ['./interval-and-timer.component.scss']
})
export class IntervalAndTimerComponent implements OnInit {

  broadcastVideoSubscription!: Subscription
  counter: number = 0;

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

    /**
     *  interval
     */
    // const broadcastVideoes: Observable<any> = interval(2000);

    /**
     * timer
     */
    const broadcastVideoes: Observable<any> = timer(5000,2000);

    this.broadcastVideoSubscription = broadcastVideoes.subscribe((res) => {
      this.counter = ++res;
      this.designUtilityService.addToList(`Video ${this.counter}`,'userList1');
      this.designUtilityService.addToList(`Video ${this.counter}`,'userList2');
      this.designUtilityService.addToList(`Video ${this.counter}`,'userList3');
      if (this.counter > 4) {
        this.broadcastVideoSubscription.unsubscribe();
      }
    })

  }

}
