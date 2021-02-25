import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit, AfterViewInit {

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    /**
     * Example 1: Take 5 value from source
     */
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(take(5)).subscribe(res =>
      this.designUtilityService.addToList(res, 'example1')
    )
  }

  ngAfterViewInit() {
    /**
     * Example 2: Taking first click location
     */

    fromEvent(document, 'click').pipe(
      take(1),
      tap((v: any) => {
        document.getElementById('locationDisplay')!.innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`
      })
    ).subscribe();
  }

}
