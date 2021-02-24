import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  intervalObservableSubscription!: Subscription;
  fromObservableSubscription!: Subscription;

  users = [
    { age: 10, name: 'Ganesh' },
    { age: 20, name: 'Nikhil' },
    { age: 30, name: 'Amit' },
  ]

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

    /**
     * EX - 01 using interval
     */

    const intervalObservable = interval(1000);
    this.intervalObservableSubscription = intervalObservable.pipe(map(data => 'Video' + ' ' + data)).subscribe((res) => {
      this.designUtilityService.addToList(res, 'MapListContainerInterval');
      if (res == 'Video 5') {
        this.intervalObservableSubscription.unsubscribe();
      }
    })

    /**
     * EX - 02 using from
     */

    const fromObservable = from(this.users);
    this.fromObservableSubscription = fromObservable.pipe(map(data => data.name)).subscribe((res) => {
      this.designUtilityService.addToList(res, 'MapListContainerArray');
    })
  }


}
