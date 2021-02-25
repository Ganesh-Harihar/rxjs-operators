import { Component, OnInit } from '@angular/core';
import { interval, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    /**
     * Example 1: Retry 2 times on error
     */
    interval(1000).pipe(
      mergeMap(val => {
        if (val > 5) {
          return throwError('Error')
        }
        return of(val);
      }),
      retry(2)
    ).subscribe(
      next =>
        this.designUtilityService.addToList(next, 'example1')
      ,
      error =>
        this.designUtilityService.addToList(`${error}: Retried 2 times then quit!`, 'example1')
    )
  }

}
